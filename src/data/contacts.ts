import fbSU from '../assets/img/contact/fbSU.webp'
import igSU from '../assets/img/contact/igSU.webp'
import fbSUWebp from '../assets/img/contact/fbSU.webp'
import igSUWebp from '../assets/img/contact/igSU.webp'

import norm_sarka_fb from '../assets/img/contact/norm_sarka_fb.webp'
import norm_sarka_ig from '../assets/img/contact/norm_sarka_ig.webp'

import surv_sarka_fb from '../assets/img/contact/surv_sarka_fb.webp'
import surv_sarka_ig from '../assets/img/contact/surv_sarka_ig.webp'

import norm_peta_fb from '../assets/img/contact/norm_peta_fb.webp'
import norm_peta_ig from '../assets/img/contact/norm_peta_ig.webp'

import surv_peta_fb from '../assets/img/contact/surv_peta_fb.webp'
import surv_peta_ig from '../assets/img/contact/surv_peta_ig.webp'

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
    name: 'sárka',
    fbLink: 'https://www.facebook.com/sara.forejtova.9/',
    fbImg: norm_sarka_fb,
    backFbImg: surv_sarka_fb,
    igLink: 'https://www.instagram.com/sara_forejt/',
    igImg: norm_sarka_ig,
    backIgImg: surv_sarka_ig,
  },
  {
    name: 'péťa',
    fbLink: 'https://www.facebook.com/profile.php?id=100090846374725',
    fbImg: norm_peta_fb,
    backFbImg: surv_peta_fb,
    igLink: 'https://www.instagram.com/petasedlo/',
    igImg: norm_peta_ig,
    backIgImg: surv_peta_ig,
  },
]
