

const Table = ({ headers, rows }) => {
    const formatDate = (date) =>{
        const formattedDate = new Date(date).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          return formattedDate;
    }
    return (
        <div className="bg-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] h-[70%]  overflow-y-auto">
            <table className="w-full">
                <thead className="w-full sticky top-0 bg-white">
                    <tr className="w-full h-14">
                        {headers.map((head, index) => index == 0 ?  <th className="text-left text-[#9E9E9E] text-[14px] font-semibold pl-5">{head}</th> : <th className="text-left text-[#9E9E9E] text-[14px] font-semibold">{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) =>
                        index % 2 == 0 ?
                            <tr className="h-14 bg-[#F4F6F8] w-full">
                                <td className=" text-[13px] pl-5">{row.firstname}</td>
                                <td className="text-left text-[13px]">{row.lastname}</td>
                                <td className="text-left text-[13px]">{row.email}</td>
                                <td className="text-left text-[13px]">{row.phone}</td>
                                <td className="text-left text-[13px]">{formatDate(row.registeredOn)}</td>
                            </tr> :
                            <tr className="h-14 bg-[#FFF] w-full">
                                <td className="text-left text-[13px] pl-5">{row.firstname}</td>
                                <td className="text-left text-[13px]">{row.lastname}</td>
                                <td className="text-left text-[13px]">{row.email}</td>
                                <td className="text-left text-[13px]">{row.phone}</td>
                                <td className="text-left text-[13px]">{formatDate(row.registeredOn)}</td>
                            </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Table;