import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { NotificationComponent } from './notification.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [AppComponent, NotificationComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
