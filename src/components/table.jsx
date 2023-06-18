import { useState } from "react";
import ReactPaginate from 'react-paginate';

const Table = ({ headers, rows, itemsPerPage }) => {
    const [currentPage, setCurrentPage] = useState(0);

    // Calculate total number of pages
    const pageCount = Math.ceil(rows.length / itemsPerPage);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentData = rows.slice(startIndex, endIndex);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };
    const formatDate = (date) => {
        const formattedDate = new Date(date).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        return formattedDate;
    }
    return (
        <div className="bg-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] h-[70%] overflow-x-auto overflow-y-auto">
            <table className="w-full">
                <thead className="w-full sticky top-0 bg-white">
                    <tr className="w-full h-14">
                        {headers.map((head, index) => index == 0 ? <th className="text-left text-[#9E9E9E] whitespace-nowrap text-[11px] md:text-[14px] font-semibold pl-5">{head}</th> : <th className="text-left text-[#9E9E9E] text-[11px] md:text-[14px] whitespace-nowrap font-semibold">{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((row, index) =>
                        index % 2 == 0 ?
                            <tr className="h-14 bg-[#F4F6F8] w-full">
                                <td className=" text-[11px] md:text-[13px] pl-5 ">{row.firstname}</td>
                                <td className="text-left text-[11px] md:text-[13px]">{row.lastname}</td>
                                <td className="text-left text-[11px] md:text-[13px]">{row.email}</td>
                                <td className={`text-left text-[11px] md:text-[13px] ${row.type == "user" ? "text-blue-400" : "text-green-400"}`}>{row.type}</td>
                                <td className="text-left text-[11px] md:text-[13px]">{formatDate(row.registeredOn)}</td>
                            </tr> :
                            <tr className="h-14 bg-[#FFF] w-full">
                                <td className="text-left text-[11px] md:text-[13px] pl-5">{row.firstname}</td>
                                <td className="text-left text-[11px] md:text-[13px]">{row.lastname}</td>
                                <td className="text-left text-[11px] md:text-[13px]">{row.email}</td>
                                <td className={`text-left text-[11px] md:text-[13px] ${row.type == "user" ? "text-blue-400" : "text-green-400"}`}>{row.type}</td>
                                <td className="text-left text-[11px] md:text-[13px]">{formatDate(row.registeredOn)}</td>
                            </tr>
                    )}
                </tbody>
            </table>
            <ReactPaginate
                pageCount={pageCount}
                onPageChange={handlePageChange}
                breakLabel="..."
                containerClassName="flex w-[30%] justify-evenly p-5 text-[13px] absolute right-0"
                activeLinkClassName="text-blue-500"
                previousClassName="px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300"
                nextClassName="px-3 py-1 rounded-full bg-gray-200 hover:bg-gray-300"
                disabledClassName="opacity-50"
            />
        </div>
    )
}

export default Table;