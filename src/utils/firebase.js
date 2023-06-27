// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export class Firebase {
  constructor() {
    if (Firebase._instance) {
      return Firebase._instance
    }
    Firebase._instance = this

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    let firebaseConfig = {
      apiKey: 'AIzaSyDbhSWDmkv69jmPxQd1ymyrtFFUztx8Hlo',
      authDomain: 'su-seznamovak.firebaseapp.com',
      projectId: 'su-seznamovak',
      storageBucket: 'su-seznamovak.appspot.com',
      messagingSenderId: '318204694742',
      appId: '1:318204694742:web:5a1fa8bf5db729282d7977',
      measurementId: 'G-L1YSPZJ99X',
    }

    // Initialize Firebase
    let app = initializeApp(firebaseConfig)
    this.analytics = getAnalytics(app)
  }

  static instance = new Firebase()
  aLog = (event, payload) =>
    logEvent(this.analytics, event, {
      value: payload,
    })
}

export class AnalyticsEvents {
  static webLoaded = 'web_loaded'
  static navClicked = 'nav_clicked'
  static partnerClicked = 'partner_clicked'
  static contactFbClicked = 'contact_fb_clicked'
  static contactIgClicked = 'contact_ig_clicked'
}
