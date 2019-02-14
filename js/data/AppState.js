import { observable, action, computed } from "mobx";
import axios from "axios";
class AppState {
  @observable
  baseUrl = "https://eld-backend.azurewebsites.net/api/eld/";

  @observable
  connectionAvailable = true;

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

  @observable
  _chassisLogs = [];

  @action
  updateBaseUrl = url => {
    this.baseUrl = url;
    axios.defaults.baseURL = url;
  };

  @action
  addNewDiagnosticLog = log => {
    this._diagnosticLogs.push(log);
  };

  @action
  setNoConnection = () => {
    this.connectionAvailable = false;
  };

  @action
  setConnection = () => {
    this.connectionAvailable = true;
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

  @action
  addNewChassisLog = log => {
    this._chassisLogs.push(log);
  };

  sortingPredicate = (a, b) => {
    return a.calledAt > b.calledAt
      ? -1
      : a.calledAt < b.calledAt
      ? 1
      : 0;
  };

  @computed get diagnosticLogs() {
    return this._diagnosticLogs.slice().sort(this.sortingPredicate);
  }

  @computed get esnLogs() {
    return this._esnLogs.slice().sort(this.sortingPredicate);
  }

  @computed get gpsLogs() {
    return this._gpsLogs.slice().sort(this.sortingPredicate);
  }

  @computed get tachometerLogs() {
    return this._tachometerLogs.slice().sort(this.sortingPredicate);
  }

  @computed get odometerLogs() {
    return this._odometerLogs.slice().sort(this.sortingPredicate);
  }

  @computed get vinLogs() {
    return this._vinLogs.slice().sort(this.sortingPredicate);
  }

  @computed get chassisLogs() {
    return this._chassisLogs.slice().sort(this.sortingPredicate);
  }
}

export default new AppState();
