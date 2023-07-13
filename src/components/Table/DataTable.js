// import React, { useEffect, useRef } from "react";
// import $ from "jquery";
// import dt from "datatables.net";
// $.DataTable = dt;

// const DataTable = ({ data, columns }) => {
//   const tableRef = useRef(null);

// //      useEffect(() => {
// //     $(tableRef.current).DataTable();
// //     return () => {
// //       $(tableRef.current).DataTable().destroy();
// //     };
// //   }, []); 


  
//   useEffect(() => {
//     $(tableRef.current).DataTable({
//       data: data,
//       columns: columns,
//     });
//     return () => {
//       $(tableRef.current).DataTable().destroy();
//     };
//   }, [data, columns]); 

// //   useEffect(() => {
// //     if (tableRef.current) {
// //       $(tableRef.current).DataTable();
// //     }
// //   }, []);

//   return (
//  /*    <table className="display" ref={tableRef}>
//       <thead>
//         <tr>
//           {columns.map((column) => (
//             <th key={column.data}>{column.title}</th>
//           ))}
//         </tr>
//       </thead>
//     </table> */
//     <div className="container lg:mt-10 mt-5 lg:overflow-hidden w-full overflow-x-scroll">
//          <table className=" table-auto hover:table-fixed" ref={tableRef}>
//       <thead> 
//       <tr className="bg-gray-200">
//           {columns.map((column) => (
//             <th className="py-2 px-4 font-semibold text-gray-600" key={column.data}>{column.title}</th>
//           ))}
//         </tr>
//       </thead>
//     </table>
//     {/* <table ref={tableRef} className="table">
//       <thead>
//         <tr className="bg-gray-200">
//         <th className="py-2 px-4 font-semibold text-gray-600">S/N</th>
//           <th className="py-2 px-4 font-semibold text-gray-600">Transaction ID</th>
//           <th className="py-2 px-4 font-semibold text-gray-600">Source Acct</th>
//           <th className="py-2 px-4 font-semibold text-gray-600">Destination Acct</th>
//           <th className="py-2 px-4 font-semibold text-gray-600">Amount</th>
//           <th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td className="py-2 px-4 border-b">1</td>
//           <td className="py-2 px-4 border-b">d3-7ea471789ebe</td>
//           <td className="py-2 px-4 border-b">mikexenon23@yahoo.com</td>
//           <td className="py-2 px-4 border-b">bartholomew65@gmail.com</td>
//           <td className="py-2 px-4 border-b">+N 20,000</td>
//           <td className="py-2 px-4 border-b">
//             <button className="relative cursor-pointer text-xs">
//               <TbDotsVertical/>
//             </button>
//           </td>
//         </tr>
//         {/* Add more table rows */}
//       {/* </tbody> */}
//     {/* </table> */}  
//   </div>
//   );
// };

// export default DataTable;
