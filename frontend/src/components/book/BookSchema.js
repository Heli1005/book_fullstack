import * as Yup from "yup";

export const bookSchema=Yup.object({
    title:Yup.string().required('Required'),
    desc:Yup.string(),
    author:Yup.string().required('Required')
})