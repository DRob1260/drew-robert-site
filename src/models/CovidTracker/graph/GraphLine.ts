import { GraphDataPoint } from "./GraphDataPoint";

export interface GraphLine {
  id: string | number;
  data: Array<GraphDataPoint>;
}
