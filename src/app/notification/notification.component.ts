import { Component } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'notification-component',
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  private readonly RCV_DELAY = 300; //in milliseconds

  private _notifPulse: Observable<number>;
  private _notifObserver: Subscription;

  public rcvCnt: number;
  public isReceiving: boolean;

  constructor() {
    this.rcvCnt = 0;
    this.isReceiving = false;
    this._notifPulse = this._generatePulse(this.RCV_DELAY);
  }

  startReceiving() {
    this._notifObserver = this._generateObserver(this._notifPulse);
    this.isReceiving = true;
  }

  stopReceiving() {
    this._stopObserving(this._notifObserver);
    this.isReceiving = false;
  }

  clearReceived() {
    this.rcvCnt = 0;
  }

  private _stopObserving(notifSubscription: Subscription) {
    notifSubscription.unsubscribe();
  }

  private _generateObserver(notifPulse: Observable<number>) {
    return notifPulse.subscribe((_) => this._incrNotifications());
  }

  private _generatePulse(delay: number) {
    return interval(delay);
  }

  private _incrNotifications() {
    this.rcvCnt++;
  }
}
