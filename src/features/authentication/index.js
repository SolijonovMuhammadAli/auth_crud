import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required("Ma'lumot to'ldirilmagan"),
});
