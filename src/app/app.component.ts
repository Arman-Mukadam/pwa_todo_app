import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SwUpdate } from '@angular/service-worker';
import { PushNotificationService } from 'src/services/push-notification.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [
    IonApp,
    IonRouterOutlet,
  ],
})
export class AppComponent {

  public installPrompt: any = null;
  constructor(
    private swUpdate: SwUpdate,
    private pushNotificationService: PushNotificationService
  ) {
    this.swUpdate.versionUpdates.subscribe((event) => {
      if (event.type === "VERSION_READY") {
        window.location.reload();
      }
    });
    this.pushNotificationService.requestPermission();
    this.pushNotificationService.receiveMessage();
  }

  // to ask user whether they want to install the update
  getInstallPrompt() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.installPrompt = e

    })
  }

  // this will trigger a prompt to ask the user if they want to install the app on the homescreen
  askUserToInstallApp() {
    this.installPrompt.prompt()
  }







}
