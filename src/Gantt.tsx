import React from "react";
import Chart from "react-google-charts";

interface IState {
  rows: IRows;
  columns: IColumns;
}

interface IProps {}

class Gantt extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      rows: [],
      columns: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState({
      rows: rows,
      columns: columns
    });
  }

  render() {
    return (
      <div className="App">
        <Chart
          chartType="Gantt"
          data={[columns, ...rows]}
          width="100%"
          height="50%"
          legendToggle
        />
      </div>
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
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" }
];

interface IRows extends Array<Array<string | number | Date | null>> {}

const rows: IRows = [
  [
    "Research",
    "Find sources",
    new Date(2015, 0, 1),
    new Date(2015, 0, 5),
    null,
    100,
    null
  ],
  [
    "Write",
    "Write paper",
    null,
    new Date(2015, 0, 9),
    daysToMilliseconds(3),
    25,
    "Research,Outline"
  ],
  [
    "Cite",
    "Create bibliography",
    null,
    new Date(2015, 0, 7),
    daysToMilliseconds(1),
    20,
    "Research"
  ],
  [
    "Complete",
    "Hand in paper",
    null,
    new Date(2015, 0, 10),
    daysToMilliseconds(1),
    0,
    "Cite,Write"
  ],
  [
    "Outline",
    "Outline paper",
    null,
    new Date(2015, 0, 6),
    daysToMilliseconds(1),
    100,
    "Research"
  ]
];

function daysToMilliseconds(days: number) {
  return days * 24 * 60 * 60 * 1000;
}

export default Gantt;
