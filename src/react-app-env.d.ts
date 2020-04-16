/// <reference types="react-scripts" />

export interface Requirement {
  id: string;
  entityId: string;
  projectShortName: ProjectShortName;
  summary: string;
  reporterFullName: string;
  created: string;
  numberInProject: string;
  description: string;
  updaterFullName: string;
  reporterName: string;
  commentsCount: string;
  updaterName: string;
  markdown: string;
  wikified: string;
  votes: string;
  updated: string;
  resolved?: string;
  links: null;
  Type: Type;
  State: State;
  Priority: Priority;
  "Target Release"?: string;
  "Security Related": CustomerReq;
  "WRR Product Line": WRRProductLine;
  "WRR Release": string;
  "WRR State": WRRState;
  "WRR Priority"?: string;
  "WRR Team": WRRTeam;
  "WRR DEV Est. Confidence": WRRDEVEstConfidence;
  "Customer Req.": CustomerReq;
  "WRR Reason": WRRReason;
  "UX Design Status": UXDesignStatus;
  "WRR Reason Approved": CustomerReq;
  "TPM Feedback"?: string;
  "PM Feedback"?: string;
  Assignee?: string[] | string;
  TPM?: TPM;
  DM?: Dm;
  "WRR PM": WrrPm;
  "Rough Estimate"?: string;
  "Ready To Present"?: string;
  "TPM Priority"?: string;
  "WRR Estimate"?: string;
  "TPM Feedback Date"?: string;
  "PM Feedback Date"?: string;
  "Spent time (Duration)"?: string;
  "Current Rough Estimate"?: string;
  "Spent time"?: string;
  Estimation?: string;
  tags: string[] | null;
  attachments: null;
  Customer?: string;
  Team?: string;
  "PM Release"?: string;
  "TPM Feedback Comment"?: string;
  "UX Design"?: string;
  "Polarion Id"?: string;
  "External requester"?: string;
  "PM Release new"?: string;
}

export enum CustomerReq {
  No = "No",
  Unknown = "Unknown",
  Yes = "Yes",
}

export enum Dm {
  TVondracek = "t.vondracek",
  VSobotka = "v.sobotka",
}

export enum Priority {
  Critical100 = "Critical [100]",
  High700 = "High [70.0]",
  Medium500 = "Medium [50.0]",
  Medium60 = "Medium [60]",
}

export enum State {
  ApprovedForImplementation = "Approved For Implementation",
  Available = "Available",
  Implementing = "Implementing",
  NewRequirement = "New Requirement",
}

export enum TPM {
  MSvadlenka = "m.svadlenka",
}

export enum Type {
  Requirement = "Requirement",
}

export enum UXDesignStatus {
  Backlog = "Backlog",
}

export enum WRRDEVEstConfidence {
  Confident = "Confident",
  HighRisk = "High Risk",
  Risk = "Risk",
}

export enum WrrPm {
  AGreenfield = "a.greenfield",
  CHunsaker = "c.hunsaker",
  DCollins = "d.collins",
}

export enum WRRProductLine {
  CloudOmnichannel = "Cloud Omnichannel",
  Designer = "Designer",
  ProductionAaS = "Production aaS",
  Protection = "Protection",
  Scaler = "Scaler",
}

export enum WRRReason {
  Architecture = "Architecture",
  Development = "Development",
  PMM = "PMM",
  SecurityCompliance = "Security & Compliance",
  UXGraphics = "UX & Graphics",
}

export enum WRRState {
  DevIn = "DEV-IN",
  PMMIn = "PMM-IN",
  Required = "Required",
}

export enum WRRTeam {
  IntegrationJ = "IntegrationJ",
  IntegrationK = "IntegrationK",
  JAntars = "jAntars",
  OutsourcePlzeň = "Outsource-Plzeň",
}

export enum ProjectShortName {
  ISC = "ISC",
}
