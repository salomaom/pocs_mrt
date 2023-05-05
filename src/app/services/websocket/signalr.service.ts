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

  constructor() {}

  async connect(cb: TNewAnomaly) {
    this.connection.on('filteredAnomalies', (anomaly) => {
      cb(anomaly);
    });

    this.connection.onreconnected((connectionId: string | undefined) => {
      console.log('onreconnected >>> ', connectionId);
    });

    await this.connection.start();
    console.log('CONECTOU');

    this.connection.invoke('filterAnomalies', null);
  }

  filter(filter: string) {
    console.log('INSIDE FILTER', filter);
    this.connection.invoke('filterAnomalies', filter);
  }
}
