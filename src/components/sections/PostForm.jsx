import { useEffect, useState } from 'react'
import api from '../../api/api'
import { Oval } from 'react-loader-spinner'
import Confirm from '../form/Confirm'

function PostForm() {
  const [checked, setChecked] = useState(false)
  const [nwsChecked, setNwsChecked] = useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const [isSuccessful, setIsSuccessful] = useState(false)

  const fakulty = [
    { value: 1, label: 'Fakulta technologická' },
    { value: 2, label: 'Fakulta managementu a ekonomiky' },
    { value: 3, label: 'Fakulta multimediálních komunikací' },
    { value: 4, label: 'Fakulta aplikované informatiky' },
    { value: 5, label: 'Fakulta humanitních studií' },
    { value: 6, label: 'Fakulta logistiky a krizového řízení' },
  ]

  const rocniky = [
    { value: 1, label: 'První' },
    { value: 2, label: 'Druhý' },
    { value: 3, label: 'Třetí' },
    { value: 4, label: 'Čtvrtý' },
    { value: 5, label: 'Pátý' },
  ]

  const handleChange = () => {
    setChecked(!checked)
  }

  const secondHandleChange = () => {
    setNwsChecked(!nwsChecked)
  }

  useEffect(() => {
    console.log(checked)
  }, [checked])

  const [data, setData] = useState({
    batch: '',
    name: '',
    surname: '',
    email: '',
    faculty_id: '',
    year: '',
    image: null,
    nickname: '',
    disability: '',
    roomate: '',
    billing_information: {
      city: '',
      street: '',
      postal_code: '',
      country: '',
      phone: '',
    },
  })

  const [error, setError] = useState({
    name: '',
    surname: '',
    email: '',
    faculty_id: '',
    year: '',
    image: null,
    nickname: '',
    disability: '',
    roomate: '',
    billing_information: {
      city: '',
      street: '',
      postal_code: '',
      country: '',
      phone: '',
    },
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const validate = () => {
    const errors = {}

    if (!data.name) {
      errors.name = 'Name is required'
    }
    if (!data.surname) {
      errors.surname = 'Surname is required'
    }
    if (!data.email) {
      errors.email = 'Email is required'
    }
    if (!data.faculty_id) {
      errors.faculty_id = 'Faculty is required'
    }
    if (!data.year) {
      errors.year = 'Year is required'
    }
    if (!data.image) {
      errors.image = 'Vyberte fotku'
    } else {
      if (data.image[0].size > 2040000) {
        errors.image = 'Maximlní velikost souboru je 2MB'
      }
    }
    if (!data.city) {
      errors.city = 'City is required'
    }
    if (!data.street) {
      errors.street = 'Street is required'
    }
    if (!data.postal_code) {
      errors.postal_code = 'Postal code is required'
    }
    if (!data.phone) {
      errors.phone = 'Phone number is required'
    }
    if (!data.country) {
      errors.country = 'Country is required'
    }
    if (checked === false) {
      errors.gdpr_consent = 'GDPR is required'
    }

    setError(errors)

    // Return true if no errors, false otherwise
    return Object.keys(errors).length === 0
  }

  function submit(e) {
    e.preventDefault()

    setIsLoading(true)

    if (!validate(data)) {
      return
    }

    const dataToPost = {
      batch: 1,
      name: data.name,
      surname: data.surname,
      email: data.email,
      faculty_id: data.faculty_id,
      year: data.year,
      gdpr_consent: checked,
      newsletter_consent: nwsChecked,
      image: data.image[0],
      nickname: data.nickname ? data.nickname : '',
      disability: data.disability ? data.disability : '',
      roomate: data.roomate ? data.roomate : '',
      billing_information: {
        city: data.city,
        street: data.street,
        postal_code: data.postal_code,
        country: data.country,
        phone: data.phone,
      },
    }

    api
      .post('reservations', dataToPost, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        console.log(res.data)
        setIsSuccessful(true)
      })
      .catch((e) => {
        console.error(e)
      })
    setIsLoading(false)
  }

  function handle(e) {
    const newdata = { ...data }

    if (e.target.type === 'file') {
      newdata[e.target.id] = e.target.files
      const file = e.target.files[0].size
      console.log(file)
    } else {
      newdata[e.target.id] = e.target.value
    }

    setData(newdata)

    console.log(newdata)
  }

  useEffect(() => {
    console.log(isLoading)
  }, [isLoading])

  return (
    <div>
        <Confirm turnus={1}/>
    </div>
    // <div className="formInput">
    //   <form onSubmit={(e) => submit(e)}>
    //     <div className="column">
    //       <div className="inputBox">
    //         <label>Jméno *</label>
    //         <input
    //           onChange={(e) => handle(e)}
    //           id="name"
    //           value={data.name}
    //           placeholder=""
    //           type="text"
    //         ></input>
    //         {error.name && (
    //           <label className="inputErrorMissing">Nutno zadat jméno</label>
    //         )}
    //       </div>
    //       <div className="inputBox">
    //         <label>Přijmení *</label>
    //         <input
    //           onChange={(e) => handle(e)}
    //           id="surname"
    //           value={data.surname}
    //           placeholder=""
    //           type="text"
    //         ></input>
    //         {error.surname && (
    //           <label className="inputErrorMissing">Nutno zadat přijmení</label>
    //         )}
    //       </div>
    //     </div>

    //     <div className="column">
    //       <div className="inputBox">
    //         <label>E-mail *</label>
    //         <input
    //           onChange={(e) => handle(e)}
    //           id="email"
    //           value={data.email}
    //           placeholder=""
    //           type="email"
    //         ></input>
    //         {error.email && (
    //           <label className="inputErrorMissing">Nutno zadat E-mail</label>
    //         )}
    //       </div>
    //       <div className="inputBox">
    //         <label>Fakulta *</label>
    //         <select
    //           id="faculty_id"
    //           value={data.faculty_id}
    //           onChange={(e) => handle(e)}
    //         >
    //           <option value={0}></option>
    //           {fakulty.map((option) => (
    //             <option key={option.value} value={option.value}>
    //               {option.label}
    //             </option>
    //           ))}
    //         </select>
    //         {error.faculty_id && (
    //           <label className="inputErrorMissing">Nutno vybrat fakultu</label>
    //         )}
    //       </div>
    //     </div>

    //     <div className="column">
    //       <div className="inputBox">
    //         <label>Do kterého ročníku nastupuješ? *</label>
    //         <select id="year" value={data.year} onChange={(e) => handle(e)}>
    //           <option value={0}></option>
    //           {rocniky.map((option) => (
    //             <option key={option.value} value={option.value}>
    //               {option.label}
    //             </option>
    //           ))}
    //         </select>
    //         {error.year && (
    //           <label className="inputErrorMissing">Nutno vybrat ročník</label>
    //         )}
    //       </div>
    //       <div className="inputBox">
    //         <label>Jak si přeješ abychom Tě oslovovali?</label>
    //         <input
    //           onChange={(e) => handle(e)}
    //           id="nickname"
    //           value={data.nickname}
    //           placeholder=""
    //           type="text"
    //         ></input>
    //       </div>
    //     </div>

    //     <div className="inputBox">
    //       <label>
    //         Máš nějaké potravinové (či jiné) omezení? (Alergie, vegan,
    //         vegetarián, ...) Cokoliv co bychom potřebovali vědět?
    //       </label>
    //       <input
    //         onChange={(e) => handle(e)}
    //         id="disability"
    //         value={data.disability}
    //         placeholder=""
    //         type="text"
    //       ></input>
    //     </div>

    //     <div className="problem">
    //       <div className="inputBox">
    //         <label>Nahrani fotografie *</label>
    //         <label className="imageLabel" for="image">
    //           Stiskněte pro nahrání fotky
    //         </label>
    //         <input
    //           onChange={(e) => handle(e)}
    //           name="image"
    //           accept="image/jpeg, image/png, image/jpg"
    //           id="image"
    //           placeholder=""
    //           type="file"
    //         ></input>
    //         {data.image !== null && (
    //           <label className="text-sm">{data.image[0].name}</label>
    //         )}
    //         {error.image && (
    //           <label className="inputErrorMissing">{error.image}</label>
    //         )}
    //       </div>
    //       <div className="inputBox">
    //         <label>
    //           Chceš být na pokoji s kamarádem/kamarádkou? Napiš nám jeho/její
    //           jméno!
    //         </label>
    //         <input
    //           onChange={(e) => handle(e)}
    //           id="roomate"
    //           value={data.roomate}
    //           placeholder=""
    //           type="text"
    //         ></input>
    //       </div>
    //     </div>
    //     <div></div>

    //     <header className="textPopis">Fakturační údaje</header>

    //     <div className="column">
    //       <div className="inputBox">
    //         <label>Obec *</label>
    //         <input
    //           onChange={(e) => handle(e)}
    //           id="city"
    //           value={data.city}
    //           placeholder=""
    //           type="text"
    //         ></input>
    //         {error.city && (
    //           <label className="inputErrorMissing">Nutno zadat město</label>
    //         )}
    //       </div>
    //       <div className="inputBox">
    //         <label>Adresa (Ulice, číslo popisné)</label>
    //         <input
    //           onChange={(e) => handle(e)}
    //           id="street"
    //           value={data.street}
    //           placeholder=""
    //           type="text"
    //         ></input>
    //         {error.street && (
    //           <label className="inputErrorMissing">Nutno zadat ulici</label>
    //         )}
    //       </div>
    //     </div>

    //     <div className="column">
    //       <div className="inputBox">
    //         <label>PSČ</label>
    //         <input
    //           onChange={(e) => handle(e)}
    //           id="postal_code"
    //           value={data.postal_code}
    //           placeholder=""
    //           type="text"
    //         ></input>
    //         {error.postal_code && (
    //           <label className="inputErrorMissing">Nutno vypsat PSČ</label>
    //         )}
    //       </div>
    //       <div className="inputBox">
    //         <label>Telefonní kontakt</label>
    //         <input
    //           onChange={(e) => handle(e)}
    //           id="phone"
    //           value={data.phone}
    //           placeholder=""
    //           type="text"
    //         ></input>
    //         {error.phone && (
    //           <label className="inputErrorMissing">
    //             Nutno zadat telefonní číslo
    //           </label>
    //         )}
    //       </div>
    //     </div>

    //     <div className="inputBox">
    //       <label>Země</label>
    //       <input
    //         onChange={(e) => handle(e)}
    //         id="country"
    //         value={data.country}
    //         placeholder=""
    //         type="text"
    //       ></input>
    //       {error.country && (
    //         <label className="inputErrorMissing">Nutno zadat odkud jsi</label>
    //       )}
    //     </div>

    //     <header className="textPopis">
    //       Souhlas se zpracováním osobních údajů
    //     </header>

    //     <div className="column">
    //       <div className="inputCheckBoxUpper">
    //         <div className="inputCheckBox">
    //           <div className="checkBox">
    //             <input
    //               onChange={handleChange}
    //               id="gdpr_consent"
    //               checked={checked}
    //               placeholder=""
    //               type="checkbox"
    //             ></input>
    //             <div>
    //               <label className="text-sm">
    //                 Souhlas se zpracovávním výše uvedených osobních údajů, za
    //                 účelem účasti na Seznamováku UTB.
    //               </label>
    //               {error.gdpr_consent && (
    //                 <label className="inputErrorMissing text-sm">
    //                   Nutno odsouhlasit zpracování GDPR
    //                 </label>
    //               )}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="column">
    //       <div className="inputCheckBoxLesser">
    //         <div className="inputCheckBox">
    //           <div className="checkBox">
    //             <input
    //               onChange={secondHandleChange}
    //               id="newsletter_consent"
    //               checked={nwsChecked}
    //               placeholder=""
    //               type="checkbox"
    //             ></input>
    //             <label className="text-sm">
    //               Souhlas se zasíláním informačních emailů, týkajících se akcí
    //               pořádaných studentskou unií.
    //             </label>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     {isLoading}
    //     {isLoading ? (
    //       <div className="submitContainer">
    //         <Oval color="white" secondaryColor="lightblue" width="50px" />
    //       </div>
    //     ) : (
    //       <div className="submitContainer">
    //         <button className="submitButton">ODESLAT</button>
    //       </div>
    //     )}
    //   </form>
    // </div>
  )
}

export default PostForm
