import { Form, Formik } from "formik";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomInput from "../commonComponents/CustomInput";
import { LoginSchema } from "./SigninSchema";
import { useAuth } from "./useAuthentication";
import Axios from "axios";


const SignIn = () => {
  let fieldObj = {
    email: {
      id: 'email',
      name: 'Email',
      isrequired: true
    },
    password: {
      id: 'password',
      name: 'Password',
      isrequired: true
    }
  }
  let initialValues = {
    email: '',
    password: '',
  }

  const navigate = useNavigate()
  const { handleLogin } = useAuth()


  const handleLoginBtn = async (obj) => {
    console.log("obj", obj);
    const url = '/api/user/login'
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
      <div className=" w-75 p-3 bg-white text-center shadow-md">
        <div className="fs-3 my-2 text-teal-700 font-medium">
          <span>Sign In</span>
        </div>
        <div className="px-10">
          <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              console.log("values", values);

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
              {/* <div className="d-flex justify-end mt-3 text-teal-700">
                <Link to={'/signin'}>Already have an account ?</Link>
              </div> */}
            </Form>
          </Formik>
        </div>
      </div>
    </div>;
  </>;
};

export default SignIn;
