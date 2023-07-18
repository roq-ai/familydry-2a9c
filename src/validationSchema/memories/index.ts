import * as yup from 'yup';

export const memoryValidationSchema = yup.object().shape({
  date: yup.date().required(),
  description: yup.string().required(),
  keywords: yup.string().required(),
  family_id: yup.string().nullable().required(),
});
