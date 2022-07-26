class Api {
  insightsUrl = "https://api.jsonbin.io/v3/b/6107fbe9f14b8b153e05e714?meta=false";
  electrolRoleUrl = "https://api.jsonbin.io/v3/b/6128c389c5159b35ae04d4ed/1?meta=false";

  async getInsights(){
    const insights = await fetch(`${this.insightsUrl}`);
    return insights.json();
  }

 async getElectrolRole(){
  const insights = await fetch(`${this.electrolRoleUrl}`);
  return insights.json();
 }
}

export const api = new Api();