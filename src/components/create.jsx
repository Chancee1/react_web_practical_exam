import { useFormik } from "formik"
import { axiosInstance } from "../utils/axiosInstance"
import auth from "../utils/token"

export const SectionOne = () => {
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            nationalId: '',
            phone: '',
            email: '',
            department: '',
            position: '',
            manufacturer: '',
            model: '',
            serialNumber: ''
        },
        onSubmit: async(values) => {
            const token = auth.getToken();
                let response = await axiosInstance.post('/employee',{
                    firstname: values.firstname,
                    lastname: values.lastname,
                    nationalId: values.nationalId,
                    phone: values.phone,
                    email: values.email,
                    department: values.department,
                    position: values.position,
                    manufacturer: values.manufacturer,
                    model: values.model,
                    serialNumber: values.serialNumber
                } ,{ headers: { 'Authorization': token } })
                alert("Successfully registered Employee")
        }
    })
    return (
        <div className="bg-white border border-[#DFE0EB] h-[380px] rounded-[7px] py-5 px-8 overflow-y-auto">
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstname">Employee Information</label>
                <div className="h-8 w-[80%] my-3">
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstname}
                        placeholder="Employee Firstname"
                        className="border border-[#DFE0EB] rounded-[10px] h-full w-full outline-none py-2 px-3 text-[13px] placeholder:text-[#9FA2B4]"
                    />
                </div>
               <div></div>
                <div className="h-8 w-[80%] my-3">
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastname}
                        placeholder="Employee Lastname"
                        className="border border-[#DFE0EB] rounded-[10px] h-full w-full outline-none py-2 px-3 text-[13px] placeholder:text-[#9FA2B4]"
                    />
                </div>
                <div className="h-8 w-[80%] my-3">
                    <input
                        type="text"
                        name="nationalId"
                        id="nationalId"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.nationalId}
                        placeholder="National Id"
                        className="border border-[#DFE0EB] rounded-[10px] h-full w-full outline-none py-2 px-3 text-[13px] placeholder:text-[#9FA2B4]"
                    />
                </div>
                <div className="h-8 w-[80%] my-3">
                    <input
                        type="text"
                        name="phone"
                        id="phone"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}
                        placeholder="Mobile Number"
                        className="border border-[#DFE0EB] rounded-[10px] h-full w-full outline-none py-2 px-3 text-[13px] placeholder:text-[#9FA2B4]"
                    />
                </div>
                <div className="h-8 w-[80%] my-3">
                    <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder="Employee email"
                        className="border border-[#DFE0EB] rounded-[10px] h-full w-full outline-none py-2 px-3 text-[13px] placeholder:text-[#9FA2B4]"
                    />
                </div>
                <div className="h-8 w-[80%] my-3">
                    <input
                        type="text"
                        name="department"
                        id="department"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.department}
                        placeholder="Employee department"
                        className="border border-[#DFE0EB] rounded-[10px] h-full w-full outline-none py-2 px-3 text-[13px] placeholder:text-[#9FA2B4]"
                    />
                </div>
                <div className="h-8 w-[80%] my-3">
                    <input
                        type="text"
                        name="position"
                        id="position"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.position}
                        placeholder="Employee position"
                        className="border border-[#DFE0EB] rounded-[10px] h-full w-full outline-none py-2 px-3 text-[13px] placeholder:text-[#9FA2B4]"
                    />
                </div>
                <div className="h-8 w-[80%] my-3">
                    <input
                        type="text"
                        name="manufacturer"
                        id="manufacturer"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.manufacturer}
                        placeholder="Laptop manufacturer"
                        className="border border-[#DFE0EB] rounded-[10px] h-full w-full outline-none py-2 px-3 text-[13px] placeholder:text-[#9FA2B4]"
                    />
                </div>
                <div className="h-8 w-[80%] my-3">
                    <input
                        type="text"
                        name="model"
                        id="model"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.model}
                        placeholder="Model"
                        className="border border-[#DFE0EB] rounded-[10px] h-full w-full outline-none py-2 px-3 text-[13px] placeholder:text-[#9FA2B4]"
                    />
                </div>
                <div className="h-8 w-[80%] my-3">
                    <input
                        type="text"
                        name="serialNumber"
                        id="serialNumber"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.serialNumber}
                        placeholder="Laptop Serial Number"
                        className="border border-[#DFE0EB] rounded-[10px] h-full w-full outline-none py-2 px-3 text-[13px] placeholder:text-[#9FA2B4]"
                    />
                </div>
                <div className="w-[80%] h-8 flex justify-end">
                    <button type="submit" className=" bg-[#007AFE] w-[30%] rounded-[10px] text-white text-[13px]">Create</button>
                </div>
            </form>
        </div>
    )
}

export const SectionTwo = () => {
    return (
        <div>
            No Design available
        </div>
    )
}