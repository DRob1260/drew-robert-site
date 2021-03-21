export type MmeForumOrder = {
  orderEntryNumber: number;
  mmeForumUsername: string;
  orderNumber: string;
  orderDate: Date;
  estimatedBuildDate: Date;
  actualBuildDate: Date;
  estimatedDeliveryDate: Date;
  actualDeliveryDate: Date;
  vin: string;
  vinReceived: boolean;
  daysBetweenOrderAndBuild: number;
  daysBetweenOrderAndDelivery: number;
  daysBetweenBuildAndDelivery: number;
  location: string;
  locationNonUS: string;
  exteriorColor: string;
  modelYear: string;
  model: string;
  driveTrain: string;
  battery: string;
}