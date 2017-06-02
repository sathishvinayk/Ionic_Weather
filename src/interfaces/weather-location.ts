//Since loc propery uses currentLoc interface, we importing it.
import { CurrentLoc} from "./current-loc";
export interface WeatherLocation {
  title: string;
  component: any;
  icon:string;
  loc?: CurrentLoc;
}
