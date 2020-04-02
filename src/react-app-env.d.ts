/// <reference types="react-scripts" />

declare namespace NodeJS {
  export interface ProcessEnv {
    REACT_APP_YOUTRACK_BASE_URL: string;
    REACT_APP_YOUTRACK_TOKEN: string;
  }
}
