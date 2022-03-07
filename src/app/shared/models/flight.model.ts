export class Flight {

  idFlight?: number;
  companyName?: string | '';
  flightType?: string | '';
  travelType?: string | '';
  departureDate?: Date | null;
  departureTime?: Date | null;
  arrivalDate?: Date | null;
  arrivalTime?: Date | null;
  backDate?: Date | null;
  backTime?: Date | null;
  departureLocation?: string | '';
  arrivalLocation?: string | '';
  flightDuration?: Date | null;
  connectionDuration?: Date | null;
  aircraftType?: string | '';


  constructor() {
    this.companyName = '';
    this.flightType = '';
    this.travelType = '';
    this.departureDate = null;
    this.departureTime = null;
    this.arrivalDate = null;
    this.arrivalTime = null;
    this.backDate = null;
    this.backTime = null;
    this.departureLocation = '';
    this.arrivalLocation = '';
    this.flightDuration = null;
    this.connectionDuration = null;
    this.aircraftType = '';
  }
}
