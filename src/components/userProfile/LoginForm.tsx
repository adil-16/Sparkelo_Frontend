import { Link } from "react-router-dom";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { IoIosArrowBack, IoIosEye, IoIosEyeOff } from "react-icons/io";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Required'),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
        <ToastContainer />
      <div className="flex-1 flex justify-center items-center p-4 lg:p-12">
        <div className="absolute top-0 left-0 p-4 ">
          <Link to="/" className="text-sm text-gray-600 flex items-center">
            <IoIosArrowBack className="mr-2" />
            Back
          </Link>
        </div>
        <div className="w-full max-w-sm">
          <h1 className="text-xl lg:text-2xl font-bold text-red-500">Sign In</h1>
          <p className="text-gray-400 mt-2">Enter your email and password to sign in!</p>
          <div className="my-4 border-b border-gray-200 text-center">
              <div className="leading-none px-2 inline-block text-sm text-gray-400 bg-white transform translate-y-1/2">
                or
              </div>
            </div>
            <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                toast.success("Sign in successful!");
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email<span className="text-red-500">*</span></label>
                  <Field name="email" type="email"    placeholder="adil@gmail.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500" />
                  {touched.email && errors.email && <div className="text-red-500 text-xs italic">{errors.email}</div>}
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password<span className="text-red-500">*</span></label>
                  <div className="relative">
                    <Field name="password" type={showPassword ? "text" : "password"} placeholder="Min 8 characters" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 pr-10" />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                      <button type="button" onClick={toggleShowPassword} className="text-gray-700">
                        {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
                      </button>
                    </div>
                  </div>
                  <ErrorMessage name="password" component="div" className="text-red-500 text-xs italic" />
                </div>
                <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="h-4 w-4 bg-red-500 text-red-500 focus:ring-red-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Keep me logged in
                  </label>
                </div>
                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="font-medium text-red-500 hover:text-red-700"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Sign In
                </button>
              </Form>
            )}
          </Formik>
          <div className="text-sm mt-6 text-black">Not registered yet?{" "}
            <Link to="/register" className="font-medium text-red-500 hover:text-red-700">Create an Account</Link>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center bg-red-600 text-white p-4 lg:p-12 space-y-6">
        <h2 className="text-2xl lg:text-3xl font-bold">Spark</h2>
        <p>Learn more about Air Drive on <a href="https://spark.pl" className="underline">Spark.pl</a></p>
      </div>
    </div>
  );
};

export default LoginForm;
