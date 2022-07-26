import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import { api } from '../../api/api';
import Card from '../Card/Card';
import { utils } from '../../utils/utils';
import { InsightsData } from "../../api/models/InsightsData";
import styles from './Insights.module.scss'; 

function Insights() {
  const [insights, setInsights] = React.useState<InsightsData>();

  useEffect(() => {
    const getInsights = async () => {
      try {
        var insightsData = await api.getInsights();
        setInsights(insightsData);
      } catch ({error}) {
        toast.error("Error getting insights: " + error);
      }
    }
    getInsights();
  },[]);


  return (
    <div className={styles.insightList} data-testid="insightList">
      <div className={styles.insightsHeader} data-testid='insights'>
        Insights
      </div>
      <div className={styles.list}>
        {
          utils.languageData.map((insight, index) => {
            return (
              <Card key={index} insight={insight} trackLanguage={utils.getLanguage(insight.Header, insights)}/>
            )
          }
          )
        }
      </div>
    </div>
  )
}

export default Insights