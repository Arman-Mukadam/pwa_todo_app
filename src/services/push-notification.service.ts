import { Injectable } from '@angular/core';

// push notif
import { AngularFireMessaging } from "@angular/fire/compat/messaging";
import 'firebase/messaging'

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  pushNotificationToken: any = null;

  constructor(
    private messaging: AngularFireMessaging
  ) {

  }

  requestPermission() {
    this.messaging.requestToken.subscribe((token: any) => {
      this.pushNotificationToken = token;
    }, (error) => {
      console.log(error);
    }
    )
  }

  receiveMessage() {
    this.messaging.messages.subscribe((payload: any) => {
      console.log(payload);
      window.location = payload.fcmOptions.link;
    })
  }




}
