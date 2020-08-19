export class PassengerDetails{

  private _adult: number;
  private _child: number;
  private _con: number;
  private _date: Date;


  constructor(adult?: number, child?: number, con?: number, date?: any) {
    this._adult = adult;
    this._child = child;
    this._con = con;
    this._date = date;
  }

  get adult(): number {
    return this._adult;
  }

  set adult(value: number) {
    this._adult = value;
  }

  get child(): number {
    return this._child;
  }

  set child(value: number) {
    this._child = value;
  }

  get con(): number {
    return this._con;
  }

  set con(value: number) {
    this._con = value;
  }

  get date(): any {
    return this._date;
  }

  set date(value: any) {
    this._date = value;
  }

}
