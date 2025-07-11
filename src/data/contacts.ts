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
    name: 'Barča',
    fbLink: 'https://www.facebook.com/profile.php?id=100069335040798',
    fbImg: sarka_gif,
    fbOverlay: overlay_fb,
    igLink: 'https://www.instagram.com/barbora.vedralova/',
    igImg: sarka_gif,
    igOverlay: overlay_ig,
    email: 'vedralova@sutb.cz',
    phone: '+420 775 928 319',
  },
  {
    name: 'Dejv',
    fbLink: 'https://www.facebook.com/david.kubis.33',
    fbImg: peta_gif,
    fbOverlay: overlay_fb,
    igLink: 'https://www.instagram.com/0.k_u_b_i_s.0/',
    igImg: peta_gif,
    igOverlay: overlay_ig,
    email: 'kubis@sutb.cz',
    phone: '+421 903 852 099',
  },
]
