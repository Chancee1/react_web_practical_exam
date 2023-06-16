import { useFormik } from "formik"



export const SectionOne = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            type: '',
            phone: ''
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })
    return (
        <div className="bg-white border border-[#DFE0EB] rounded-[7px] py-5 px-8">
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="">Product Information</label>
                <div className="h-8 w-[80%] my-3">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        placeholder="Product Name"
                        className="border border-[#DFE0EB] rounded-[10px] h-full w-full outline-none py-2 px-3 text-[13px] placeholder:text-[#9FA2B4]"
                    />
                </div>

                <div className="h-8 w-[80%] my-3">
                    <input
                        type="text"
                        name="type"
                        id="type"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.type}
                        placeholder="Product Type"
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
                        placeholder="Mobile"
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
            SectionTwo
        </div>
    )
}