import React, { useState } from "react";
import * as Yup from 'yup'
import { useFormik } from 'formik';
import { axiosInstance } from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState()
    const validationSchema = Yup.object({
        firstname: Yup.string().required().label("First Name"),
        lastname: Yup.string().required().label("Last Name"),
        email: Yup.string().email("Invalid email address").required().label("Email"),
        password: Yup.string().min(6, "Password must be atleast 6 characters").required().label("Password")
    })

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        },
        onSubmit: (values, {setSubmitting}) => {
            console.log(values)
            axiosInstance.post("/auth/register", {
                firstname: values.firstname,
                lastname: values.lastname,
                email: values.email,
                password: values.password,
                type: "user"
        }).then(response =>{
            console.log(response)
            navigate('/login');
        }).catch(error =>{
            setError(error.response.data)
        }).finally(() =>{
            setSubmitting(false)
        })
        },
        validationSchema: validationSchema
    })
    return (
        <div className="bg-[#007AFE] w-full h-[40em] flex justify-center items-center overflow-y-auto">
            <div className="w-[35%] h-auto bg-white mx-auto p-4 rounded-lg">
            <div className="w-full flex items-center flex-col my-4">
                <img src="/src/assets/logo.png" alt="Logo" height={80} width={50}/>
                <p className="font-semibold text-[14px]">Sign Up on Doubble</p>
            </div>
            <form onSubmit={formik.handleSubmit} className="w-[90%] mx-auto">
                <div className="flex flex-col my-3">
                    <label htmlFor="firstname" className="text-[12px] text-[#ACB0C4] font-semibold mb-2">First Name</label>
                    <input
                        id="firstname"
                        name="firstname"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.firstname}
                        onBlur={formik.handleBlur}
                        className="border-[#F0F1F7] rounded-[5px] border-2 w-[100%] h-10 px-3 text-[13px] outline-none"
                    />
                    {formik.touched.firstname && formik.errors.firstname ? <div className="text-xs text-red-400">{formik.errors.firstname}</div> : null}
                </div>
                <div className="flex flex-col my-3">
                    <label htmlFor="lastName" className="text-[12px] text-[#ACB0C4] font-semibold mb-2">Last Name</label>
                    <input
                        id="lastname"
                        name="lastname"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.lastname}
                        onBlur={formik.handleBlur}
                        className="border-[#F0F1F7] rounded-[5px] border-2 w-[100%] h-10 px-3 text-[13px] outline-none"
                    />
                    {formik.touched.lastname && formik.errors.lastname ? <div className="text-xs text-red-400">{formik.errors.lastname}</div> : null}
                </div>
                <div className="flex flex-col my-3">
                    <label htmlFor="email" className="text-[12px] text-[#ACB0C4] font-semibold mb-2">Email Address</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        className="border-[#F0F1F7] rounded-[5px] border-2 w-[100%] h-10 px-3 text-[13px] outline-none"
                    />
                    {formik.touched.email && formik.errors.email ? <div className="text-xs text-red-400">{formik.errors.email}</div> : null}
                </div>
                <div className="flex flex-col my-3">
                    <label htmlFor="password" className="text-[12px] text-[#ACB0C4] font-semibold mb-2">Password</label>
                    <input 
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        className="border-[#F0F1F7] rounded-[5px] border-2 w-[100%] h-10 px-3 text-[13px] outline-none"
                        />
                    {formik.touched.password && formik.errors.password ? <div className="text-xs text-red-400">{formik.errors.password}</div> : null}
                </div>
                {error ? <div className="text-xs text-red-400 mx-auto my-4">{error}</div> : null}
                <div>
                    <button type="submit" className="bg-[#007AFE] rounded-[5px] text-white w-[100%] h-10 text-[14px]" disabled={formik.isSubmitting}>Sign Up</button>
                    <div className="flex flex-row items-center justify-center h-10">
                        <p className="text-[#ACB0C4] text-[13px] font-semibold">Already have an account?</p>
                        <a href="/login" className="text-[#007AFE] text-[13px] font-semibold mx-2">Log in</a>
                    </div>
                </div>
            </form>
            </div>
        </div>
    )
}

export default RegisterPage;