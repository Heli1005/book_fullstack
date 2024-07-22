import React, { useEffect, useRef } from "react";
import { Form, Formik } from "formik";
import { bookSchema } from "./BookSchema";
import CustomInput from "../commonComponents/CustomInput";
import { Button } from "react-bootstrap";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";
import BookFields from "../commonComponents/fieldsJson/BookFields";
import { useAuth } from "../authentication/useAuthentication";
import { toast } from 'react-toastify';

const BookForm = ({ handleClose }) => { // book form

  const dispatch = useDispatch()
  const { user } = useAuth()
  const fieldObj = BookFields
  const titleInputRef = useRef(null);

  useEffect(() => {

    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, []);

  let initialValues = {
    title: '',
    desc: '',
    author: ''
  }

  const handleAddBook = async (values) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const url = apiUrl+ '/api/books/add'

    try {
      const response = await Axios.post(
        url,
        { ...values },
        {
          headers: {
            Authorization: `Bearer ${user.token}`, // Include the Bearer token that manage for only authenticated user can add book
          },
        }
      )

      await dispatch(addBook(response.data.data))
     await toast.success('Book added successfully!');
    } catch (error) {
      await toast.error('Error adding book.');
    }
    await handleClose()
  }

  return <>
    <Formik
      initialValues={initialValues}
      validationSchema={bookSchema}
      onSubmit={(values) => {
        handleAddBook(values)
      }}
    >
      <Form>
        <CustomInput field={fieldObj.title} ref={titleInputRef} />
        <CustomInput field={fieldObj.desc} />
        <CustomInput field={fieldObj.author} />
        <div className="d-flex justify-center gap-1 w-full">
          <Button type="submit" className="bg-teal-700 w-1/4 py-2"  >
            Add
          </Button>
          <Button variant="secondary w-1/4"  >
            Cancel
          </Button>
        </div>
      </Form>
    </Formik>
  </>;
};

export default BookForm;
