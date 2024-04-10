export default class API {
  constructor() {
    this.createElementTouit = "https://link.org/list";
    this.sendTouit = "https:/link.org/likes/send";
    this.topTouit = "https://link.org/likes/top";
    this.trendWords = "https://link.org/trending";
  }

  async getTouit() {
    const response = await fetch(this.createElementTouit);
    const data = await response.json();
    return data;
  }


}
