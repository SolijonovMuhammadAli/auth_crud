import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import FInput from "components/form/FInput";

import { initialValues } from "../data";
import { validationSchema } from "../validations";
import { loginUser } from "../hooks/useLogin";
import { selectAuth, selectError } from "../hooks/useSlice";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isError = useSelector(selectError);
  const isAuth = useSelector(selectAuth);

  const onSubmit = (e) => {
    dispatch(loginUser(e));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
  });

  useEffect(() => {
    if (isAuth) {
      navigate("/admin");
    }
  }, [isAuth]);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Login</h1>
          {isError && (
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white bg-red-500 rounded-md my-2 p-2 md:text-2xl ">
              Error!
            </h1>
          )}
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
