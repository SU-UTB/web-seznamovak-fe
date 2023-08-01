import { useEffect, useState } from 'react'
import api from '../../api/api'
import { Oval } from 'react-loader-spinner'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Confirm from '../form/Confirm'
import { reservationFormSchema } from '../../utils/reservationFormSchema'

const PostForm = ({ batch }) => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false)

  const {
    register,
    watch,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      batch: batch,
      name: '',
      surname: '',
      email: '',
      faculty_id: 0,
      year: 0,
      nickname: '',
      disability: '',
      image: null,
      roommate: '',
      billing_information: {
        city: '',
        street: '',
        postal_code: '',
        phone: '',
        country: 'Česko',
      },
    },
    resolver: yupResolver(reservationFormSchema),
  })

  const img = watch('image')

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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSave = async (formValues) => {
    const filteredData = Object.fromEntries(
      Object.entries({ ...formValues, image: img[0] }).filter(
        ([_, value]) => value !== null && value.length !== 0
      )
    )

    await api
      .post('reservations', filteredData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        console.log(res)
        setIsSubmitSuccessful(true)
      })
      .catch((e) => {
        console.error(e)
        setIsSubmitSuccessful(false)
      })
  }

  return (
    <div>
      {isSubmitSuccessful ? (
        <div>
          <Confirm turnus={location.pathname.slice(-1)} />
        </div>
      ) : (
        <div className="formInput">
          <form onSubmit={handleSubmit(handleSave)}>
            <div className="column">
              <div className="inputBox">
                <label>Jméno *</label>
                <input {...register('name')} />
                {errors.name && (
                  <label className="inputErrorMissing">
                    {errors.name.message}
                  </label>
                )}
              </div>
              <div className="inputBox">
                <label>Přijmení *</label>
                <input {...register('surname')} />
                {errors.surname && (
                  <label className="inputErrorMissing">
                    {errors.surname.message}
                  </label>
                )}
              </div>
            </div>

            <div className="column">
              <div className="inputBox">
                <label>E-mail *</label>
                <input {...register('email')} type="email" />
                {errors.email && (
                  <label className="inputErrorMissing">
                    {errors.email.message}
                  </label>
                )}
              </div>
              <div className="inputBox">
                <label>Fakulta *</label>
                <select {...register('faculty_id')}>
                  <option value={0}></option>
                  {fakulty.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.faculty_id && (
                  <label className="inputErrorMissing">
                    {errors.faculty_id.message}
                  </label>
                )}
              </div>
            </div>

            <div className="column">
              <div className="inputBox">
                <label>Do kterého ročníku nastupuješ? *</label>
                <select {...register('year')}>
                  <option value={0}></option>
                  {rocniky.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.year && (
                  <label className="inputErrorMissing">
                    {errors.year.message}
                  </label>
                )}
              </div>
              <div className="inputBox">
                <label>Jak si přeješ abychom Tě oslovovali?</label>
                <input {...register('nickname')} />
              </div>
            </div>

            <div className="inputBox">
              <label>
                Máš nějaké potravinové (či jiné) omezení? (Alergie, vegan,
                vegetarián, ...) Cokoliv co bychom potřebovali vědět?
              </label>
              <input {...register('disability')} />
            </div>

            <div className="problem">
              <div className="inputBox">
                <label>Nahrání fotografie *</label>
                <label className="imageLabel" htmlFor="image">
                  {!img && img?.length !== 0
                    ? 'Stiskněte pro nahrání fotky'
                    : img[0]?.name?.slice(-20)}
                </label>
                <input
                  accept="image/jpeg, image/png, image/jpg"
                  type="file"
                  id="image"
                  {...register('image')}
                />
                {errors.image && (
                  <label className="inputErrorMissing">
                    {errors.image?.message}
                  </label>
                )}
              </div>
              <div className="inputBox">
                <label>
                  Chceš být na pokoji s kamarádem/kamarádkou? Napiš nám
                  jeho/její jméno!
                </label>
                <input {...register('roommate')} />
              </div>
            </div>

            <header className="textPopis">Fakturační údaje</header>

            <div className="column">
              <div className="inputBox">
                <label>Obec *</label>
                <input {...register('billing_information.city')} />
                {errors.billing_information?.city && (
                  <label className="inputErrorMissing">
                    {errors.billing_information.city.message}
                  </label>
                )}
              </div>
              <div className="inputBox">
                <label>Adresa (Ulice, číslo popisné) *</label>
                <input {...register('billing_information.street')} />
                {errors.billing_information?.street && (
                  <label className="inputErrorMissing">
                    {errors.billing_information.street.message}
                  </label>
                )}
              </div>
            </div>

            <div className="column">
              <div className="inputBox">
                <label>PSČ *</label>
                <input {...register('billing_information.postal_code')} />
                {errors.billing_information?.postal_code && (
                  <label className="inputErrorMissing">
                    {errors.billing_information.postal_code.message}
                  </label>
                )}
              </div>
              <div className="inputBox">
                <label>Telefonní kontakt *</label>
                <input {...register('billing_information.phone')} />
                {errors.billing_information?.phone && (
                  <label className="inputErrorMissing">
                    {errors.billing_information.phone.message}
                  </label>
                )}
              </div>
            </div>

            <div className="inputBox">
              <label>Země *</label>
              <input {...register('billing_information.country')} />
              {errors.billing_information?.country && (
                <label className="inputErrorMissing">
                  {errors.billing_information.country.message}
                </label>
              )}
            </div>

            <header className="textPopis">
              Souhlas se zpracováním osobních údajů
            </header>

            <div className="column">
              <div className="inputCheckBoxUpper">
                <div className="inputCheckBox">
                  <div className="checkBox">
                    <input
                      className="cursor-pointer"
                      type="checkbox"
                      name="gdpr"
                      {...register('gdpr_consent')}
                    />
                    <div>
                      <label className="text-sm">
                        Souhlas se zpracovávním výše uvedených osobních údajů,
                        za účelem účasti na Seznamováku UTB. *
                      </label>
                      {errors.gdpr_consent && (
                        <label className="inputErrorMissing text-sm">
                          {errors.gdpr_consent.message}
                        </label>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="inputCheckBoxLesser">
                <div className="inputCheckBox">
                  <div className="checkBox">
                    <input
                      className="cursor-pointer"
                      type="checkbox"
                      name="newsletter"
                      {...register('newsletter_consent')}
                    />
                    <label className="text-sm">
                      Souhlas se zasíláním informačních emailů, týkajících se
                      akcí pořádaných studentskou unií.
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {isSubmitting ? (
              <div className="submitContainer">
                <Oval color="white" secondaryColor="lightblue" width="50px" />
              </div>
            ) : (
              <div className="submitContainer">
                <button className="submitButton">ODESLAT</button>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  )
}

export default PostForm
