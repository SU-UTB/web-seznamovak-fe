import fbSU from '../assets/img/contact/fbSU.webp'
import igSU from '../assets/img/contact/igSU.webp'
import fbSUWebp from '../assets/img/contact/fbSU.webp'
import igSUWebp from '../assets/img/contact/igSU.webp'

import sarka_gif from '../assets/img/contact/sarka_loop.gif'
import peta_gif from '../assets/img/contact/peta_loop.gif'

import overlay_fb from '../assets/img/contact/overlay_facebook.png'
import overlay_ig from '../assets/img/contact/overlay_instagram.png'

export const suSocials = {
  name: 'STUDENTSKÁ UNIE',
  desc: 'Jsme tu pro Tebe, pokud se budeš chtít na cokoliv zeptat, ozvi se nám na profil.',
  fbLink: 'https://www.facebook.com/studentskaunieutb',
  fbImg: fbSU,
  fbImgWebp: fbSUWebp,

  igLink: 'https://www.instagram.com/studentskaunieutb/',
  igImg: igSU,
  igImgWebp: igSUWebp,
}

export const managersSocials = [
  {
    name: 'Ája',
    fbLink: 'https://www.facebook.com/andrejka.petrikova.3',
    fbImg: sarka_gif,
    fbOverlay: overlay_fb,
    igLink: 'https://www.instagram.com/peetrikova',
    igImg: sarka_gif,
    igOverlay: overlay_ig,
    email: 'petrikova@sutb.cz',
    phone: '+420 725 554 623',
  },
  {
    name: 'Luky',
    fbLink: 'https://www.facebook.com/lukas.pikula',
    fbImg: peta_gif,
    fbOverlay: overlay_fb,
    igLink: 'https://www.instagram.com/lukas.pikula',
    igImg: peta_gif,
    igOverlay: overlay_ig,
    email: 'pikula@sutb.cz',
    phone: '+420 732 329 291',
  },
]
