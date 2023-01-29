import { Component } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'notification-component',
  templateUrl: './notification.component.html',
})
export class NotificationComponent {
  public notifCount: number;
  public notifSendingEnabled: boolean;

  private notifPulse: Observable<number>;
  private notifSubscription: Subscription;

  private readonly NOTIF_DELAY = 300; //300 ms

  constructor() {
    this.notifCount = 0;
    this.notifSendingEnabled = false;
    this.notifPulse = interval(this.NOTIF_DELAY);
  }

  toggleNotificationSending() {
    this.notifSendingEnabled
      ? this.unsubscribeToNotifications(this.notifSubscription)
      : (this.notifSubscription = this.subscribeToNotifications(
          this.notifPulse
        ));
    this.notifSendingEnabled = !this.notifSendingEnabled;
  }

  subscribeToNotifications(notifPulse: Observable<number>) {
    return notifPulse.subscribe((_) => this.incrNotifications());
  }

  unsubscribeToNotifications(notifSubscription: Subscription) {
    notifSubscription.unsubscribe();
  }

  clearNotifications() {
    this.notifCount = 0;
  }

  incrNotifications() {
    this.notifCount++;
  }
}
