import { Form, Formik } from "formik";
import React from "react";
import { Button, Container } from "react-bootstrap";
import { SignUpSchema } from "./SignUpSchema";
import CustomInput from "../commonComponents/CustomInput";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SignUpFields from "../commonComponents/fieldsJson/SignUpFields";
import { toast } from "react-toastify";

const SignUp = () => {

  const navigate = useNavigate()
  const fieldObj = SignUpFields

  let initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const handleRegister = async (obj, actions) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const url = apiUrl +'/api/user'
    let reqBody = { ...obj }
    delete reqBody.confirmPassword
    try {
      const data = await Axios.post(url, reqBody)
      await navigate('/signin')
      await toast.success('Sign-up successful! You can now log in with your credentials.');

    } catch (error) {
      toast.error(error.response.data.error); 
      actions.resetForm();
    }
  }

  return <div className="d-flex  justify-center w-full   mt-5 ">
    <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-3 bg-white text-center rounded-md shadow-md">
      <div className="fs-3 my-2 text-teal-700 font-medium">
        <span>Sign Up</span>
      </div>
      <div className="px-10">
        <Formik
          initialValues={initialValues}
          validationSchema={SignUpSchema}
          onSubmit={(values, actions) => {
            handleRegister(values, actions)// handle registration
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
