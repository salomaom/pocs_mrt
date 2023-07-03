import { Injectable } from '@angular/core';

import * as SignalR from '@microsoft/signalr';

type TNewAnomaly = (name: string) => void;

@Injectable({
  providedIn: 'root',
})
export class SignalrService {
  connection = new SignalR.HubConnectionBuilder()
    .withUrl('https://localhost:7205/toll')
    .build();

  currentEventname: string = 'none';

  constructor() {
    this.connect();
  }

  async connect() {
    try {
      await this.connection
        .start()
        .then(() => console.log('Connection established'))
        .catch((err) => console.error('Error establishing connection:', err));

      this.filter('CONECTOU ', this.currentEventname, (a) => console.log(a));
    } catch (error) {
      console.log(error);
    }
  }

  filter(filter: string, eventName: string, cb: TNewAnomaly) {
    try {
      console.log('FILTERING');
      this.connection.off(this.currentEventname);
      this.currentEventname = eventName;
      this.connection.on(eventName, (anomaly) => {
        cb(anomaly);
      });
      this.connection
        .invoke('FilterAnomalies', filter, eventName)
        .catch(function (err) {
          return console.error(err.toString());
        });
    } catch (error) {
      console.log('FILTER RERRO> ', error);
    }
  }
}
