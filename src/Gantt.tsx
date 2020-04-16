import React from "react";
import Chart from "react-google-charts";
import { Requirement } from "./react-app-env";

interface IState {
  rows: IRows;
  columns: IColumns;
  height: number;
}

interface IProps {}

class Gantt extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      rows: [],
      columns: columns,
      height: 0,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/currentRelease")
      .then((response) => response.json())
      .then((reqs: Array<Requirement>) => {
        const newRows = reqs.map(
          (req: Requirement): IRow => {
            const spent = req["Spent time (Duration)"]
              ? Number(req["Spent time (Duration)"])
              : 0;
            const est = req["Current Rough Estimate"]
              ? Number(req["Current Rough Estimate"])
              : 100;
            return [
              req.id,
              req.summary,
              spent / est > 1 ? "Overbudget" : req.State,
              null,
              null,
              daysToMilliseconds(est),
              (100 * spent) / est,
              null,
            ];
          }
        );

        this.setState({
          rows: newRows,
          height: newRows.length * 42,
        });
      });
  }

  render() {
    return (
      <Chart
        chartType="Gantt"
        data={[this.state.columns, ...this.state.rows]}
        width="100%"
        options={{
          height: this.state.height,
        }}
        legendToggle
      />
    );
  }
}

interface IColumn {
  type: string;
  label: string;
}
interface IColumns extends Array<IColumn> {}

const columns: IColumns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "string", label: "Resource" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" },
];

interface IRow extends Array<string | number | Date | null> {}
interface IRows extends Array<IRow> {}

const rows: IRows = [
  [
    "Research",
    "Find sources",
    new Date(2015, 0, 1),
    new Date(2015, 0, 5),
    null,
    100,
    null,
  ],
  [
    "Write",
    "Write paper",
    null,
    new Date(2015, 0, 9),
    daysToMilliseconds(3),
    25,
    "Research,Outline",
  ],
  [
    "Cite",
    "Create bibliography",
    null,
    new Date(2015, 0, 7),
    daysToMilliseconds(1),
    20,
    "Research",
  ],
  [
    "Complete",
    "Hand in paper",
    null,
    new Date(2015, 0, 10),
    daysToMilliseconds(1),
    0,
    "Cite,Write",
  ],
  [
    "Outline",
    "Outline paper",
    null,
    new Date(2015, 0, 6),
    daysToMilliseconds(1),
    100,
    "Research",
  ],
];

function daysToMilliseconds(days: number) {
  return days * 24 * 60 * 60 * 1000;
}

export default Gantt;
