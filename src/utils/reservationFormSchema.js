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
          return value && value.size <= MAX_FILE_SIZE
        }
      ),
    gdpr_consent: yup
      .boolean()
      .oneOf([true], 'Nutno odsouhlasit zpracování GDPR'),
  })
  .required()
