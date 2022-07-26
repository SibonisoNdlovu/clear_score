import { InsightsData } from "../api/models/InsightsData";
import { Account } from "../api/models/Account";
import { Personal } from "../api/models/Personal";
import { InsightType } from "../enums/InsightType";
import { HeaderType } from "../enums/HeaderType";
import { Impact } from "../enums/Impact";

class Utils {
    public getElectrolRollInsight(personal?: Personal) : InsightType {
      let type = InsightType.ON_TRACK;
      if (personal && personal.electoralRoll && personal.electoralRoll.length > 0) {
        personal.electoralRoll.forEach(element => {
          if (element.current) {
            type = InsightType.ON_TRACK;
          } else {
            type = InsightType.OFF_TRACK;
          }
        });
      }
        return type;
    }

    public getCreditUtilizationInsight(accounts?:Account[]) : InsightType {
      let type = InsightType.ON_TRACK;
      accounts?.forEach(element => {
        if (element.accountCategory === "credit_cards") {
          if (this.calcPercentage(accounts[0].overview.balance.amount, accounts[0].overview.limit?.amount) > 50) {
            type = InsightType.OFF_TRACK;
          }
        }
      });

      return type
    }

    public getPublicInformationInsight (personal?: Personal) : InsightType {
      if (personal && personal.publicInfo && personal.publicInfo.courtAndInsolvencies.length > 0) {
        return InsightType.OFF_TRACK;
      } else return InsightType.ON_TRACK;
    }

    public calcPercentage(balance: number, limit?: number) : number {
      if (limit) {
      return (balance / limit) * 100;
      } else return 0;
    }

    public getLanguage(type:HeaderType, value?:InsightsData) {
      switch (type) {
        case  HeaderType.Public_Information:
          return this.getPublicInformationInsight(value?.personal);
        case HeaderType.Credit_utilization:
          return this.getCreditUtilizationInsight(value?.accounts);
        case HeaderType.Electoral_roll:
          return this.getElectrolRollInsight(value?.personal);  
        default:
      }
    }

    languageData = [  {
      Header: HeaderType.Public_Information,
      "Body":   "Bankruptcies and individual voluntary arrangements can damage your score",
      Impact: Impact.HIGH_IMPACT
    },
    {
      Header: HeaderType.Credit_utilization,
      "Body": "Using more than 50% of your available credit can damage your score",
      Impact: Impact.MEDIUM_IMPACT
    },  
    {
      Header: HeaderType.Electoral_roll,
      "Body": "Being on the electoral roll can improve your score",
      Impact: Impact.MEDIUM_IMPACT
    }]
}

export const utils = new Utils();