export class LocationClass {
  key: string;
  name: string;
  source: {
    name: string;
    apiUrl: string;
    infoUrl: string;
  };

  constructor() {
    this.key = "";
    this.name = "";
    this.source = {
      name: "",
      apiUrl: "",
      infoUrl: "",
    };
  }
}
