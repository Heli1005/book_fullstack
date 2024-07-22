import { Form, Formik } from "formik";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { SignUpSchema } from "./SignUpSchema";
import CustomInput from "../commonComponents/CustomInput";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  let fieldObj = {
    name: {
      id: 'name',
      name: 'Name',
      isrequired: true
    },
    email: {
      id: 'email',
      name: 'Email',
      isrequired: true
    },
    password: {
      id: 'password',
      name: 'Password',
      isrequired: true
    },
    confirmPassword: {
      id: 'confirmPassword',
      name: 'Confirm Password',
      isrequired: true
    },
  }
  let initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const navigate = useNavigate()


  const handleRegister = async (obj) => {
    console.log("obj", obj);
    const url = '/api/user'
    let reqBody = { ...obj }
    delete reqBody.confirmPassword
    try {
      const data = await Axios.post(url, reqBody)
      console.log("data", data);
      await navigate('/signin')

    } catch (error) {
      console.log("error", error);

    }
  }

  return <div className="d-flex  justify-center w-full   mt-5 ">
    <div className=" w-75 p-3 bg-white text-center shadow-md">
      <div className="fs-3 my-2 text-teal-700 font-medium">
        <span>Sign Up</span>
      </div>
      <div className="px-10">
        <Formik
          initialValues={initialValues}
          validationSchema={SignUpSchema}
          onSubmit={(values) => {
            handleRegister(values)
          }}
        >
          <Form>
            <CustomInput field={fieldObj.name} />
            <CustomInput field={fieldObj.email} />
            <CustomInput field={fieldObj.password} />
            <CustomInput field={fieldObj.confirmPassword} />
            <div className="d-flex justify-center gap-1 w-full">
              <Button type="submit" className="bg-teal-700 w-3/4 py-2"  >
                Register
              </Button>
            </div>
            <div className="d-flex justify-end mt-3 text-teal-700">
              <Link to={'/signin'}>Already have an account ?</Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  </div>;
};

export default SignUp;
