import { observable, action, computed } from "mobx";

class AppState {
  @observable
  baseUrl = "https://eld-backend.azurewebsites.net/api/eld/";

  @observable
  _diagnosticLogs = [];

  @observable
  _esnLogs = [];

  @observable
  _gpsLogs = [];

  @observable
  _tachometerLogs = [];

  @observable
  _odometerLogs = [];

  @observable
  _vinLogs = [];

  @action
  addNewDiagnosticLog = log => {
    this._diagnosticLogs.push(log);
  };

  @action
  addNewEsnLog = log => {
    this._esnLogs.push(log);
  };

  @action
  addNewGpsLog = log => {
    this._gpsLogs.push(log);
  };

  @action
  addNewTachometerLog = log => {
    this._tachometerLogs.push(log);
  };

  @action
  addNewOdometerLog = log => {
    this._odometerLogs.push(log);
  };

  @action
  addNewVinLog = log => {
    this._vinLogs.push(log);
  };

  sortingPredicate = (a, b) => {
    return a.calledAt > b.calledAt
      ? -1
      : a.calledAt < b.calledAt
      ? 1
      : 0;
  };

  @computed get diagnosticLogs() {
    return this._diagnosticLogs.sort(this.sortingPredicate);
  }

  @computed get esnLogs() {
    return this._esnLogs.sort(this.sortingPredicate);
  }

  @computed get gpsLogs() {
    return this._gpsLogs.sort(this.sortingPredicate);
  }

  @computed get tachometerLogs() {
    return this._tachometerLogs.sort(this.sortingPredicate);
  }

  @computed get odometerLogs() {
    return this._odometerLogs.sort(this.sortingPredicate);
  }

  @computed get vinLogs() {
    return this._vinLogs.sort(this.sortingPredicate);
  }
}

export default new AppState();
