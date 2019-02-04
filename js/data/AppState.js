import { observable, action } from "mobx";

class AppState {
  @observable
  baseUrl = "https://eld-backend.azurewebsites.net/api/eld/";

  @observable
  diagnosticLogs = [];

  @observable
  esnLogs = [];

  @observable
  gpsLogs = [];

  @observable
  tachometerLogs = [];

  @observable
  odometerLogs = [];

  @observable
  vinLogs = [];

  @action
  addNewDiagnosticLog = log => {
    this.diagnosticLogs.push(log);
  };

  @action
  addNewEsnLog = log => {
    this.esnLogs.push(log);
  };

  @action
  addNewGpsLog = log => {
    this.gpsLogs.push(log);
  };

  @action
  addNewTachometerLog = log => {
    this.tachometerLogs.push(log);
  };

  @action
  addNewOdometerLog = log => {
    this.odometerLogs.push(log);
  };

  @action
  addNewVinLog = log => {
    this.vinLogs.push(log);
  };
}

export default new AppState();
