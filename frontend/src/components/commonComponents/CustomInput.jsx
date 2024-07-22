import { Field } from "formik";
import React from "react";

const CustomInput =  React.forwardRef(({ field },ref) => <Field component={FormField} field={field} innerRef={ref} />)

export default CustomInput;

const FormField = ({ field, form, innerRef }) => {



    const { handleChange, touched, errors, handleBlur, values } = form

    let isError = (errors && errors[field.id] && touched[field.id])
    let errorBorder = isError ? `red.500` : `teal.500`
    

    return <div className="mb-4">
        <div className="d-flex justify-between gap-1">
            <div>
                <span className="text-slate-600">
                    {field.name}
                </span>
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
            ref={innerRef}
            type={field.type || 'text'}
            className={`border w-full py-2 rounded-md px-2 shadow-md `}
            disabled={field.disabled || false}
            name={field.id}
            onChange={handleChange}
            value={values[field.id]}
            onBlur={handleBlur}
            placeholder={`Enter ${field.name}`}
        />
    </div>
}
