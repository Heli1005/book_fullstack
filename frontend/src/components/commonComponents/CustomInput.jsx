import { Field } from "formik";
import React from "react";

const CustomInput = ({ field }) => <Field component={FormField} field={field} />

export default CustomInput;

const FormField = ({ field, form }) => {

    const { handleChange, touched, errors, handleBlur, values } = form

    let isError = (errors && errors[field.id] && touched[field.id])
    let errorBorder = isError ? `red.500` : `teal.500`

    return <div className="mb-4">
        <div className="d-flex justify-between gap-1">
            <div>
                {field.name}
                <span className="text-red-700">
                    {field.isrequired ? ' *' : ''}
                </span>
            </div>
            {
                isError
                    ?
                    <div className="text-red-700">{errors[field.id]}</div>
                    :
                    <></>
            }
        </div>


        <input
            id={field.id}
            type={field.type || 'text'}
            className="border w-full"
            // bg={'white'}
            disabled={field.disabled || false}
            // h={'46px'}
            // shadow={'3px 3px 7px gray'}
            name={field.id}
            onChange={handleChange}
            value={values[field.id]}
            onBlur={handleBlur}
            // my={2}
            // borderColor={errorBorder}
            // focusBorderColor={errorBorder}
            placeholder={`Enter ${field.name}`}
        />
    </div>
}
