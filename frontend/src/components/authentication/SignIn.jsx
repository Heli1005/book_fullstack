import { Form, Formik } from "formik";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../commonComponents/CustomInput";
import { LoginSchema } from "./SigninSchema";
import { useAuth } from "./useAuthentication";
import Axios from "axios";
import Signin from "../commonComponents/fieldsJson/SigninFields";

const SignIn = () => {

  const navigate = useNavigate()
  const { handleLogin } = useAuth()
  let fieldObj = Signin

  let initialValues = {
    email: '',
    password: '',
  }

  const handleLoginBtn = async (obj) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const url = apiUrl+'/api/user/login'
    let reqBody = { ...obj }
    try {
      const response = await Axios.post(url, reqBody)
      await navigate('/')
      await handleLogin(response.data)

    } catch (error) {
      console.log("error", error);
    }
  }

  return <>
    <div className="d-flex  justify-center w-full   mt-5 ">
      <div className=" w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-3 bg-white rounded-md text-center shadow-md">
        <div className="fs-3 my-2 text-teal-700 font-medium">
          <span>Sign In</span>
        </div>
        <div className="px-10">
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              handleLoginBtn(values)
            }}
          >
            <Form>
              <CustomInput field={fieldObj.email} />
              <CustomInput field={fieldObj.password} />
              <div className="d-flex justify-center gap-1 w-full">
                <Button type="submit" className="bg-teal-700 w-3/4 py-2"  >
                  Login
                </Button>
              </div>
              <div className="d-flex justify-center mt-5 text-teal-700">
                <Link to={'/signup'}>Sign up now to start creating your personalized booklist!</Link>
              </div>  
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  </>
};

export default SignIn;
