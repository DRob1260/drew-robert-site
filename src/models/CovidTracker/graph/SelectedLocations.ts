import { LocationClass } from "../api/LocationClass";

export interface SelectedLocations {
  country: LocationClass | undefined;
  territory: LocationClass | undefined;
  region: LocationClass | undefined;
}
