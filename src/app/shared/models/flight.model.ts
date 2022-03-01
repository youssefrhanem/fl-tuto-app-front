export class Flight {

  idFlight?: number;
  companyName?: string | null;
  flightType?: string | null;
  travelType?: string | null;
  departureDate?: Date | null;
  departureTime?: Date | null;
  arrivalDate?: Date | null;
  arrivalTime?: Date | null;
  backDate?: Date | null;
  backTime?: Date | null;
  departureLocation?: string | null;
  arrivalLocation?: string | null;
  flightDuration?: Date | null;
  connectionDuration?: Date | null;
  aircraftType?: string | null;


  constructor() {
    this.companyName = null;
    this.flightType = null;
    this.travelType = null;
    this.departureDate = null;
    this.departureTime = null;
    this.arrivalDate = null;
    this.arrivalTime = null;
    this.backDate = null;
    this.backTime = null;
    this.departureLocation = null;
    this.arrivalLocation = null;
    this.flightDuration = null;
    this.connectionDuration = null;
    this.aircraftType = null;
  }
}
