import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent, Analytics } from 'firebase/analytics'

export class Firebase {
  private static _instance: Firebase | null = null
  public analytics: Analytics

  private constructor() {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: 'AIzaSyDbhSWDmkv69jmPxQd1ymyrtFFUztx8Hlo',
      authDomain: 'su-seznamovak.firebaseapp.com',
      projectId: 'su-seznamovak',
      storageBucket: 'su-seznamovak.appspot.com',
      messagingSenderId: '318204694742',
      appId: '1:318204694742:web:5a1fa8bf5db729282d7977',
      measurementId: 'G-L1YSPZJ99X',
    }

    // Initialize Firebase
    const app = initializeApp(firebaseConfig)
    this.analytics = getAnalytics(app)
  }

  public static get instance(): Firebase {
    if (this._instance === null) {
      this._instance = new Firebase()
    }
    return this._instance
  }

  public aLog(event: string, payload: any): void {
    logEvent(this.analytics, event, {
      value: payload,
    })
  }
}

export class AnalyticsEvents {
  static webLoaded = 'web_loaded'
  static navClicked = 'nav_clicked'
  static partnerClicked = 'partner_clicked'
  static contactFbClicked = 'contact_fb_clicked'
  static contactIgClicked = 'contact_ig_clicked'
}
