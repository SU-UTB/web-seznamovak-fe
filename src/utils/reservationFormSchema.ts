import * as yup from 'yup'

const MAX_FILE_SIZE = 8388608 // 8MB

function isFileList(value: unknown): value is FileList {
  return value instanceof FileList
}

export const reservationFormSchema = yup
  .object({
    name: yup.string().required('Nutno zadat jméno'),
    surname: yup.string().required('Nutno zadat přijmení'),
    email: yup
      .string()
      .email('Nutno zadat správný E-mail')
      .required('Nutno zadat E-mail'),
    faculty_id: yup.string().required('Nutno vybrat fakultu'),
    year: yup.string().required('Nutno vybrat ročník'),
    image: yup
      .mixed()
      .nullable()
      .required('Nutno přiložit fotku')
      .test(
        'fileSize',
        'Přiložený soubor je příliš velký (limit 8MB)',
        (value) => {
          if (isFileList(value) && value.length > 0) {
            return value[0].size <= MAX_FILE_SIZE
          }
          return false
        }
      )
      .test('fileType', 'Nepodporovaný formát souboru', (value) => {
        if (isFileList(value) && value.length > 0) {
          return ['image/jpeg', 'image/png', 'image/jpg'].includes(
            value[0].type
          )
        }
        return false
      }),
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
    newsletter_consent: yup.boolean(),
  })
  .required()
