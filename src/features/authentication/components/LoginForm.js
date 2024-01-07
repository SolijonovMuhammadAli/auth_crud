import React from "react";
import { useFormik } from "formik";
import { Button } from "@mui/material";
import FInput from "components/form/FInput";

import { initialValues } from "../data";
import { validationSchema } from "../validations";

function LoginForm() {
  const onSubmit = (e) => {
    console.log(e);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
  });

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Login
          </h1>
          <form onSubmit={formik.handleSubmit}>
            <FInput formik={formik} name="name" placeholder="Oybek" />
            <Button className="bg-blue-600 text-white font-bold text-sm mt-2" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
