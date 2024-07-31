import { z } from 'zod'

const MAX_FILE_SIZE = 8388608 // 8MB

function isFileList(value: unknown): value is FileList {
  return value instanceof FileList
}

export const reservationFormSchema = z.object({
  batch: z.number().min(1, 'Nutné číslo turnusu'),
  name: z.string().min(1, 'Nutno zadat jméno'),
  disability: z.string().optional(),
  roommate: z.string().optional(),
  surname: z.string().min(1, 'Nutno zadat přijmení'),
  email: z
    .string()
    .email('Nutno zadat správný E-mail')
    .min(1, 'Nutno zadat E-mail'),
  faculty_id: z.string().min(1, 'Nutno vybrat fakultu'),
  year: z.string().min(1, 'Nutno vybrat ročník'),
  image: z
    .any()
    .refine(isFileList, 'Nutno přiložit fotku')
    .refine(
      (value) =>
        isFileList(value) && value.length > 0 && value[0].size <= MAX_FILE_SIZE,
      {
        message: 'Přiložený soubor je příliš velký (limit 8MB)',
      }
    )
    .refine(
      (value) =>
        isFileList(value) &&
        value.length > 0 &&
        ['image/jpeg', 'image/png', 'image/jpg'].includes(value[0].type),
      {
        message: 'Nepodporovaný formát souboru',
      }
    ),
  billing_information: z.object({
    city: z.string().min(1, 'Nutno zadat obec'),
    street: z.string().min(1, 'Nutno zadat adresu'),
    postal_code: z.string().min(1, 'Nutno zadat PSČ'),
    phone: z.string().min(1, 'Nutno zadat kontakt'),
    country: z.string().min(1, 'Nutno zadat zemi'),
  }),
  gdpr_consent: z
    .boolean()
    .refine((val) => val, 'Nutno odsouhlasit zpracování GDPR'),
  newsletter_consent: z.boolean(),
})
