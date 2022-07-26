import { ElectoralRoll } from "./ElectoralRoll";
import { PublicInfo } from "./PublicInfo";


export interface Personal {
  electoralRoll: ElectoralRoll[];
  publicInfo: PublicInfo;
}
