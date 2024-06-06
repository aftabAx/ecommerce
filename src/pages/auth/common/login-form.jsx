import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Textinput from "@/components/ui/Textinput";
import Button from "@/components/ui/Button";

const LoginForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const onSubmit = async (values) => {
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", values);

      if (response.status === 200) {
        if (response.data.token) {
          const token = response.data.token;
          localStorage.setItem('token', token);
          // setActiveMenuItem('dashboard'); // Set active menu item
          navigate("/Dashboard");
        } else {
          toast.error("Login failed: " + response.data.error);
        }
      } else {
        throw new Error("Failed to login");
      }
    } catch (error) {
      toast.error("Login failed: " + error.message);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="space-y-4 justify-items-center ">
          <div className="flex flex-col space-y-1">
            <Field
              id="username"
              name="username"
              placeholder="Username"
              type="text"
              className="h-[48px] border rounded-full px-3"
            />
            <ErrorMessage name="username" component="div" className="text-red-500" />
          </div>

          <div className="flex flex-col space-y-1">
            <Field
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              className="h-[48px] border rounded-full px-3"
            />
            <ErrorMessage name="password" component="div" className="text-red-500" />
          </div>


          <div className="center-center">
          <center>
          <Button
            type="submit"
            text="Log in"
            className="btn text-white center-center rounded-md px-20 text-center bg-lime-500"
          /></center>
          </div>

          <div className="flex items-center centre justify-center text-white text-center">
            <label className="items-center centre justify-center text-white text-center">
               Username : emilys <br></br>
               Password : emilyspass
            </label>
          </div>
        </Form>
      </Formik>
      <ToastContainer />
    </>
  );
};

export default LoginForm;
