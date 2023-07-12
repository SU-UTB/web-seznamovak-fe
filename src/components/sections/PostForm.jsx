import React, { useState } from "react";
import Axios from "axios";
import imageLogo from '../../assets/img/banner/su_logo.webp'
import '../../form.css'

function PostForm() {

    const url ="http://sdtest.wz.cz/api/reservations"

    const [checked, setChecked] = useState(false);

    const [nwsChecked, setNwsChecked] = useState(false);

    const fakulty = [
        {value: 1, label: "Fakulta technologická"},
        {value: 2, label: "Fakulta managementu a ekonomiky"},
        {value: 3, label: "Fakulta multimediálních komunikací"},
        {value: 4, label: "Fakulta aplikované informatiky"},
        {value: 5, label: "Fakulta humanitních studií"},
        {value: 6, label: "Fakulta logistiky a krizového řízení"},
    ]

    const rocniky = [
        {value: 1, label: "První"},
        {value: 2, label: "Druhý"},
        {value: 3, label: "Třetí"},
        {value: 4, label: "Čtvrtý"},
        {value: 5, label: "Pátý"}
    ] 

    const handleChange = () => {
        setChecked(!checked);
    };

    const secondHandleChange = () => {
        setNwsChecked(!nwsChecked);
    };

    const [data, setData] = useState({
        name: "",
        surname: "",
        email: "",
        faculty_id: "",
        year: "",
        image: null,
        nickname: "",
        disability: "",
        roomate: "",
        billing_information:{
            city: "",
            street: "",
            postal_code: "",
            country: "",
            phone: "",
        }
    })

    // const [error, setError] = useState (false)

    function submit(e){

        e.preventDefault();

        const dataToPost = {
            name: data.name,
            surname: data.surname,
            email: data.email,
            faculty_id: data.faculty_id,
            year: data.year,
            gdpr_consent: checked,
            newsletter_consent: nwsChecked,
            image: data.image[0],
            nickname: data.nickname,
            disability: data.disability,
            roomate: data.roomate,
            billing_information:{
                city: data.city,
                street: data.street,
                postal_code: data.postal_code,
                country: data.country,
                phone: data.phone
            }};

        console.log(dataToPost);

        Axios.post(url, dataToPost,
            { headers: {
                'accept': 'application/json',
                'Content-Type': 'multipart/form-data'
              }
            })

        .then(res=>{
            console.log(res.data)
        })

    }

    function handle(e) {
        const newdata = { ...data };
        
        if (e.target.type === "file") {
          newdata[e.target.id] = e.target.files;
          const file = e.target.files[0];
          const fileName = file.name;
          console.log(fileName);
        } else {
          newdata[e.target.id] = e.target.value;
        }
      
        setData(newdata);
      
        console.log(newdata);
    }
      
    return (
        <div className="formContainer">
            <div className="formHead">
                <img className="imgLogo" src={imageLogo} alt="" />
                <div className="headContainer">
                    <header className="textHead">1. TURNUS</header>
                    <header className="dateHead">21.8. - 24.8. 2023</header>
                </div>
            </div>
            <div className="formInput">
                <form onSubmit={(e)=> submit(e)}>

                    <div className="column">
                        <div className="inputBox">
                            <label>Jméno</label>
                            <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="" type="text"></input>
                            <label className="inputErrorMissing">Nutno zadat jméno</label>
                        </div>
                        <div className="inputBox">
                            <label>Přijmení</label>
                            <input onChange={(e)=>handle(e)} id="surname" value={data.surname} placeholder="" type="text"></input>
                            <label className="inputErrorMissing">Nutno zadat přijmení</label>
                        </div>
                    </div>

                    <div className="column">
                        <div className="inputBox">
                            <label>E-mail</label>
                            <input onChange={(e)=>handle(e)} id="email" value={data.email} placeholder="" type="email"></input>
                        </div>
                        <div className="inputBox">
                            <label>Fakulta</label>
                            <select id="faculty_id" value={data.faculty_id} onChange={(e)=>handle(e)}>
                                <option value={0}></option>
                                {fakulty.map((option)=> (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="column">
                        <div className="inputBox">
                            <label>Do kterého ročníku nastupuješ?</label>
                            <select id="year" value={data.year} onChange={(e)=>handle(e)}>
                                <option value={0}></option>
                                {rocniky.map((option)=> (
                                    <option key={option.value} value={option.value}>{option.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="inputBox">
                            <label>Jak si přeješ abychom Tě oslovovali?</label>
                            <input onChange={(e)=>handle(e)} id="nickname" value={data.nickname} placeholder="" type="text"></input>
                        </div>
                    </div>

                    <div className="inputBox">
                        <label>Máš nějaké potravinové (či jiné) omezení? (Alergie, vegan, vegetarián, ...) Cokoliv co bychom potřebovali vědět?</label>
                        <input onChange={(e)=>handle(e)} id="disability" value={data.disability} placeholder="" type="text"></input>
                    </div>

                    <div className="problem">
                        <div className="inputBox">
                            <label>Chceš být na pokoji s kamarádem/kamarádkou? Napiš nám jeho/její jméno!</label>
                            <input onChange={(e)=>handle(e)} id="roomate" value={data.roomate} placeholder="" type="text"></input>
                        </div>
                        <div className="inputBox">
                            <label >Nahrani fotografie</label>
                            <label className="imageLabel" for="image">
                                click here to upload
                            </label>
                            {/* <div className="imageLabelContainer">
                                <label className="imageLabel" for="image">
                                    click here to upload
                                </label>
                            </div> */}
                            <input onChange={(e)=>handle(e)} name="image" accept="image/jpeg, image/png, image/jpg" id="image" placeholder="" type="file"></input>
                        </div>
                    </div>

                    <header className="textPopis">
                        Fakturační údaje
                    </header>

                    <div className="column">
                        <div className="inputBox">
                            <label>Obec</label>
                            <input onChange={(e)=>handle(e)} id="city" value={data.city} placeholder="" type="text"></input>
                        </div>
                        <div className="inputBox">
                            <label>Adresa (Ulice, číslo popisné)</label>
                            <input onChange={(e)=>handle(e)} id="street" value={data.street} placeholder="" type="text"></input>
                        </div>
                    </div>

                    <div className="column">
                        <div className="inputBox">
                            <label>PSČ</label>
                            <input onChange={(e)=>handle(e)} id="postal_code" value={data.postal_code} placeholder="" type="text"></input>
                        </div>
                        <div className="inputBox">
                            <label>Telefonní kontakt</label>
                            <input onChange={(e)=>handle(e)} id="phone" value={data.phone} placeholder="" type="text"></input>
                        </div>
                    </div>

                    <div className="inputBox">
                        <label>Země</label>
                        <input onChange={(e)=>handle(e)} id="country" value={data.country} placeholder="" type="text"></input>
                    </div>
                    
                    <header className="textPopis">
                        Souhlas se zpracováním osobních údajů
                    </header>

                    <div className="column">
                        <div className="inputCheckBoxUpper">
                            <div className="inputCheckBox">
                                <div className="checkBox">
                                    <input onChange={handleChange} id="gdpr_consent" checked={checked} placeholder="" type="checkbox"></input>
                                    <label>Souhlas se zpracovávním výše uvedených osobních údajů, za účelem účasti na Seznamováku UTB.</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="inputCheckBoxLesser">
                            <div className="inputCheckBox">
                                <div className="checkBox">
                                    <input onChange={secondHandleChange} id="newsletter_consent" checked={nwsChecked} placeholder="" type="checkbox"></input>
                                    <label>Souhlas se zasíláním informačních emailů, týkajících se akcí pořádaných studentskou unií.</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="submitContainer">
                        <button className="submitButton">ODESLAT</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default PostForm;