import React from "react";
import { Form, Formik } from "formik";
import { bookSchema } from "./BookSchema";
import CustomInput from "../commonComponents/CustomInput";
import { Button } from "react-bootstrap";


const BookForm = () => {

  let fieldObj = {
    title: {
      id: 'title',
      name: 'Title',
      isrequired: true
    },
    desc: {
      id: 'desc',
      name: 'Description',
      isrequired: false
    },
    author: {
      id: 'author',
      name: 'Author',
      isrequired: true
    }
  }

  let initialValues = {
    title: '',
    desc: '',
    author: ''
  }

  const handleAddBook = (values) => {

  }

  return <>
    <Formik
      initialValues={initialValues}
      validationSchema={bookSchema}
      onSubmit={(values) => {
        console.log("values", values);
        handleAddBook(values)
      }}
    >
      <Form>
        <CustomInput field={fieldObj.title} />
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
