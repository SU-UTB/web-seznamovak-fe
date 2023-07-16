import * as yup from 'yup'

const MAX_FILE_SIZE = 4194304

export const reservationFormSchema = yup
  .object({
    name: yup.string().required('Nutno zadat jméno'),
    surname: yup.string().required('Nutno zadat přijmení'),
    email: yup.string().required('Nutno zadat E-mail v správném tvaru'),
    faculty_id: yup.string().required('Nutno vybrat fakultu'),
    year: yup.string().required('Nutno vybrat ročník'),
    nickname: yup.string().required('Nutno zadat přezdívku'),
    disability: yup.string().required('Nutno zadat omezení'),
    image: yup
      .mixed()
      .required('Nutno přiložit fotku')
      .test(
        'is-valid-size',
        'Přiložený soubor je příliš velký (limit 2MB)',
        (value) => {
          return value[0] && value[0].size <= MAX_FILE_SIZE
        }
      ),
    roommate: yup.string().required('Nutno zadat spolubydlu'),
    billing_information: yup.object({
      city: yup.string().required('Nutno zadat obec'),
      street: yup.string().required('Nutno zadat adresu'),
      postal_code: yup.string().required('Nutno zadat PSČ'),
      phone: yup.string().required('Nutno zadat kontakt'),
      country: yup.string().required('Nutno zadat zemi'),
    }),
    gdpr_consent: yup
      .boolean()
      .oneOf([true], 'Nutno odsouhlasit zpracování GDPR'),
  })
  .required()
