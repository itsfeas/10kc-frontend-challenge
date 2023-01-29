import { Component, Input } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'notification-component',
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  private readonly NOTIF_DELAY = 300; //300 ms

  private _notifPulse: Observable<number>;
  private _notifSubscription: Subscription;

  public notifCount: number;
  public isReceivingNotif: boolean;

  constructor() {
    this.notifCount = 0;
    this.isReceivingNotif = false;
    this._notifPulse = interval(this.NOTIF_DELAY);
  }

  startReceivingNotif() {
    this._notifSubscription = this._notifPulse.subscribe((_) =>
      this.incrNotifications()
    );
    this.isReceivingNotif = true;
  }

  stopReceivingNotifs() {
    this._notifSubscription.unsubscribe();
    this._notifSubscription = null; //clear previous subscription
    this.isReceivingNotif = false;
  }

  clearNotifications() {
    this.notifCount = 0;
  }

  incrNotifications() {
    this.notifCount++;
  }
}
