import React from "react";

const TableRow = ({ imageSrc, title, price, status }) => {
  return (
    <tr>
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
        {/* <img
          src={imageSrc}
          className="h-12 w-12 bg-white rounded-full border"
          alt="..."
        /> */}
        <span className="ml-3 font-bold text-blueGray-600">{title}</span>
      </th>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {price}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
        {/* <i className="fas fa-circle text-emerald-500 mr-2"></i>  */}
        {status}
      </td>
    </tr>
  );
};

export default TableRow;