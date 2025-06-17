import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

const AnnexureOne = () => {
  const containerRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => (
          <button className="fixed top-5 right-10 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600">
            {/* <Printer className="h-4 w-4" /> */}
            Print
          </button>
        )}
        content={() => containerRef.current}
        documentTitle={`Annexure`}
        pageStyle={`
          @page {
              size: auto;
              margin: 0mm;
          }
          @media print {
              body {
              //  border: 1px solid #000;
                  margin: 2mm;
                   padding: 2mm;
                
                   min-height:100vh
              }
               .page-break {
            page-break-before: always;
        }
          
          }
      `}
      />
      <div ref={containerRef} className="min-h-screen font-normal ">
        {/* ...................................................ANNEXURE -1................................................ */}

        <div>
          <div className="max-w-4xl mt-5 mx-auto px-4">
            <h1 className="text-end text-[11px]  font-bold ">Annexure-I </h1>
            <h1 className="text-center text-[11px]  font-bold ">
              Details of Agency Creation for PFMS
            </h1>
          </div>

          <div className="max-w-4xl mx-auto text-[10px]">
            <div className="overflow-x-auto  p-4">
              <table className="table-auto w-full border border-black text-[10.5px]">
                <thead>
                  <tr className=" border-b border-black">
                    <th className="p-2 border-r border-black">Sr. No.</th>
                    <th className="p-2 border-r border-black">Particulars</th>
                    <th className="p-2">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      (i)
                    </td>
                    <td className="p-2 border-r border-black align-center">
                      Name of unit/enterprise
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>{" "}
                  <tr className="border-b border-black">
                    <td
                      className="p-2 border-r border-black text-center align-center"
                      rowSpan={4}
                    >
                      (ii)
                    </td>
                    <td className="p-2 border-r border-black">
                      Name of Director(s)/Proprietor/Partner(s)
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black">Designation</td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black">
                      Aadhaar linked Mobile No.
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black">E-mail ID</td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      (iii)
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Date of Birth (dd/mm/yyyy)
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      (iv)
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Gender (Male/Female/Transgender)
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      (v)
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Aadhaar Card Details (Director(s)/Proprietor/Partner){" "}
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      (vi)
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      UAM/Udyam Registration Certificate (URC) No. &
                      Registration Date of Unit.{" "}
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      (vii)
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      GST Number (if any), enclose a copy of certificate issued
                      by an Appropriate Authority{" "}
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      (viii)
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      PAN Number
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td
                      className="px-2 py-1 border-r border-black text-center align-center"
                      rowSpan={8}
                    >
                      (ix)
                    </td>
                    <td className="p-2 border-r font-bold border-black">
                      Complete Address of unit/enterprise{" "}
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent  font-bold outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r  border-black">
                      <span className="mr-2">a)</span> Block No. Building{" "}
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r  border-black">
                      <span className="mr-2">b)</span> Village, Name of premises
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r  border-black">
                      <span className="mr-2">c)</span> Road/Street/Post Office
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r  border-black">
                      <span className="mr-2">d)</span> Area location
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r  border-black">
                      <span className="mr-2">e)</span> District
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r  border-black">
                      <span className="mr-2">f)</span> State
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r  border-black">
                      <span className="mr-2">g)</span> Pin code No.
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td
                      className="p-2 border-r border-black text-center align-center"
                      rowSpan={7}
                    >
                      (x)
                    </td>
                    <td className="p-2 border-r font-bold border-black">
                      Bank Details:
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent  font-bold outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r  border-black">
                      <span className="mr-2">1)</span> Bank Name{" "}
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r  border-black">
                      <span className="mr-2">2)</span> Bank Account No.
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r  border-black">
                      <span className="mr-2">3)</span> Name of Bank Branch.
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r  border-black">
                      <span className="mr-2">4)</span> Bank IFSC Code
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r  border-black">
                      <span className="mr-2">5)</span> Bank MICR Code
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r font-bold border-black">
                      <span className="mr-2">6)</span> 6. Name of Account holder
                      as per A/C
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full font-bold bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1  text-center align-top">Place </td>

                    <td colSpan={2}>
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center align-top">Date : </td>

                    <td colSpan={2}>
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="pr-2 font-bold  text-end align-top"
                      colSpan={3}
                    >
                      Name & Signature of Authorized person<br></br>
                      with the stamp of Unit.
                    </td>
                  </tr>
                  <tr>
                    <td className="pt-20 text-end align-top" colSpan={3}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="page-break"></div>
        </div>
        {/* ...................................................SECOND ANNEXURE................................................ */}
        <div>
          <div className="max-w-2xl mt-20 mb-16 mx-auto">
            <h1 className="text-end text-[11px]  font-bold ">Annexure-II </h1>

            <h1 className="text-center text-[12px]  font-bold ">PRE-RECEIPT</h1>
            <h1 className="text-center text-[12px]  font-bold ">
              (TO BE SUBMITTED ON THE LETTER HEAD OF THE UNIT)
            </h1>
          </div>
          <div className="max-w-2xl mx-auto text-[12px] space-y-4 p-4">
            <div className="flex items-center flex-wrap gap-2">
              <div className="flex flex-wrap gap-1">
                <span>Received</span>
                <span>a</span>
                <span>sum</span>
                <span>of</span>
                <span>Rs</span>
              </div>
              <input
                type="text"
                className="flex-1 border-b border-dashed border-gray-400 bg-transparent outline-none text-black placeholder-gray-400"
              />
              <span>Rupees</span>
            </div>

            <div className="flex items-center flex-wrap gap-2">
              <input
                type="text"
                className="flex-1 border-b border-dashed border-gray-400 bg-transparent outline-none text-black placeholder-gray-400"
              />
              <span>Only</span>
              <div className="flex flex-wrap gap-1">
                <span>from</span>
                <span>Office</span>
                <span>of</span>
                <span>Development</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <span>Commissioner</span>
              <span>(MSME),</span>
              <span>Ministry</span>
              <span>of</span>
              <span>MSME,</span>
              <span>Govt</span>
              <span>of</span>
              <span>India,</span>
              <span>on</span>
              <span>account</span>
              <span>of</span>
              <span>Financial</span>
              <span>Assistance</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <span>under</span>
              <span>the</span>
              <span>5</span>
              <span>(1)</span>
              <span>(A)</span>
              <span>component</span>
              <span>of</span>
              <span>"Procurement</span>
              <span>and</span>
              <span>Marketing</span>
              <span>Support</span>
              <span>Scheme</span>
              <span>of</span>
              <span>Office</span>
            </div>

            {/* Row 5 */}
            <div className="flex flex-wrap gap-4">
              <span>of</span>
              <span>Development</span>
              <span>Commissioner</span>
              <span>(MSME)”</span>
              <span>for</span>
              <span>the</span>
              <span>participation</span>
              <span>in</span>
              <span>Trade</span>
              <span>Fair/Exhibition</span>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              <span>Name</span>
              <input
                type="text"
                className="flex-1  border-b border-dashed border-gray-400 bg-transparent outline-none text-black placeholder-gray-400"
              />
              <span>at</span>
              <input
                type="text"
                className="flex-1 border-b   border-dashed border-gray-400 bg-transparent outline-none text-black placeholder-gray-400"
              />
            </div>
            <div className="flex items-center flex-wrap gap-2">
              <div className="flex flex-wrap gap-4">
                <span>duration</span>
                <span>from</span>
              </div>
              <input
                type="text"
                className="flex-1  border-b border-dashed border-gray-400 bg-transparent outline-none text-black placeholder-gray-400"
              />
              <span>to</span>
              <input
                type="text"
                className="flex-1 border-b   border-dashed border-gray-400 bg-transparent outline-none text-black placeholder-gray-400"
              />
              <div className="flex flex-wrap gap-4">
                <span>organized</span>
                <span>by</span>
              </div>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              <input
                type="text"
                className="flex-1 border-b   border-dashed border-gray-400 bg-transparent outline-none text-black placeholder-gray-400"
              />
            </div>
            <div className="w-full flex flex-col items-end  gap-4 pt-[60px]">
              <div className="text-red-600 font-bold">
                Revenue stamp of Rs. 1
              </div>
              <div>Signature of authorized signatory</div>
              <div>(Name & designation)</div>
              <div>(Stamp of the unit)</div>
            </div>
          </div>

          <div className="page-break"></div>
        </div>
        {/* ...................................................THIRD ANNEXURE................................................ */}
        <div>
          <div className="max-w-4xl mt-20 mx-auto px-4">
            <h1 className="text-end text-[11px]  font-bold mb-2 ">
              Annexure-III{" "}
            </h1>

            <h1 className="text-center text-[12px] mb-5">
              ELECTRONIC CLEARING SERVICE (CREDIT CLEARING) MODEL MANDATE FORM
            </h1>
            <h1 className="text-center text-[12px]">
              OPTION Form TO RECEIVE PAYMENTS THROUGH CREDIT CLEARING MECHANISM
            </h1>
          </div>
          <div className="max-w-4xl mx-auto text-[12px] space-y-4 p-4">
            <div className="overflow-x-auto  p-4">
              <table className="table-auto w-full border border-black text-[10.5px]">
                <thead>
                  <tr className=" border-b border-black">
                    <th className="p-2 border-r border-black" colSpan={3}>
                      1. Customer Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black">
                    <td className="px-2 border-r border-black text-center align-top">
                      (i)
                    </td>
                    <td className="px-2 py-1 border-r border-black align-center">
                      Customer’s Name
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>{" "}
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r border-black text-center align-top">
                      (ii)
                    </td>
                    <td className="px-2 py-1 border-r border-black align-top">
                      Complete address{" "}
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r border-black text-center align-top">
                      (iii)
                    </td>
                    <td className="px-2 py-1 border-r border-black align-top">
                      Mob/Tel/Fax no
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r border-black text-center align-top">
                      (iv)
                    </td>
                    <td className="px-2 py-1 border-r border-black align-top">
                      Email id{" "}
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto  px-4 pb-4">
              <table className="table-auto w-full border border-black text-[10.5px]">
                <thead>
                  <tr className=" border-b border-black">
                    <th className="p-2 border-r border-black" colSpan={3}>
                      2. Particulars of the Bank Account
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black">
                    <td className="px-2 border-r border-black text-center align-top">
                      (i)
                    </td>
                    <td className="px-2 py-1 border-r border-black align-center">
                      Bank’s Name
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>{" "}
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r border-black text-center align-top">
                      (ii)
                    </td>
                    <td className="px-2 py-1 border-r border-black align-top">
                      Branch’s Name
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r border-black text-center align-top">
                      (iii)
                    </td>
                    <td className="px-2 py-1 border-r border-black align-top">
                      Branch’s Address
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r border-black text-center align-top">
                      (iv)
                    </td>
                    <td className="px-2 py-1 border-r border-black align-top">
                      Branch’s Telephone No.
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r border-black text-center align-top">
                      (v)
                    </td>
                    <td className="px-2 py-1 border-r border-black align-top">
                      Branch’s email id
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r border-black text-center align-top">
                      (vi)
                    </td>
                    <td className="px-2 py-1 border-r border-black align-top">
                      9-Digit code number of the Bank & Branch appearing on the
                      MICR cheque issued by the bank
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r border-black text-center align-top">
                      (vii)
                    </td>
                    <td className="px-2 py-1 border-r border-black align-top">
                      Account Type (S.B. / Current) With Code 10/11/13
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r border-black text-center align-top">
                      (ix)
                    </td>
                    <td className="px-2 py-1 border-r border-black align-top">
                      Aadhaar Card number: (Linked/Seeded With Account)
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r border-black text-center align-top">
                      (x)
                    </td>
                    <td className="px-2 py-1 border-r border-black align-top">
                      IFSC code
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-1 border-r border-black text-center align-top">
                      (xi)
                    </td>
                    <td className="px-2 py-1 border-r border-black align-top">
                      NEFT code
                    </td>
                    <td className="px-2 py-1">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-[9px]">
                (In lieu of the bank certificate to be obtained as under, please
                attach a blank cancelled cheque or photocopy of a cheque or
                front page of your current account passbook issued by your bank
                for verification of the above particulars)
              </p>
              <div>
                <h1 className="font-bold mt-4">3. Date of Effect:</h1>

                <p className="mt-4">
                  I hereby, declare that the particulars given above are correct
                  and complete. If the transaction is delayed or not effected at
                  all for reasons of incomplete or incorrect information, I
                  would not hold the user institution responsible. I have read
                  the option invitation letter and agree to discharge the
                  responsibility expected of me as participant under the scheme.
                </p>
              </div>
              <div className="flex justify-between items-start mt-10 text-[12px]">
                <div className="flex flex-row">
                  <span className="font-bold mb-1 mr-2">Date:</span>
                  <input
                    className="border-b border-dashed border-gray-400 w-40 bg-transparent outline-none text-black placeholder-gray-400"
                    placeholder="DD/MM/YYYY"
                  />
                </div>

                <div className="flex flex-col text-right">
                  <span className="font-bold">
                    Signature of the Authorised Signatory
                  </span>
                  <span className="text-center font-bold">
                    with MSEs’ Stamp
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span>Certified</span>
                <span>that</span>
                <span>the</span>
                <span>particulars</span>
                <span>furnished</span>
                <span>above</span>
                <span>are</span>
                <span>correct</span>
                <span>as</span>
                <span>per</span>
                <span>our</span>
                <span>records</span>
                <span>and</span>
                <span>the</span>
                <span>above</span>
                <span>account</span>
                <span>is</span>
                <span>linked/seeded</span>
                <span>with</span>
              </div>
              <div className="mt-1 flex flex-wrap gap-2">
                <span>Aadhaar No</span>
                <input
                  type="text"
                  className="flex-1 max-w-xs border-b border-dashed border-gray-400 bg-transparent outline-none text-black placeholder-gray-400"
                />
              </div>
              <div className="flex justify-between items-end mt-10 text-[12px]">
                <div className="flex flex-row ">
                  <span className="font-bold mb-1 mr-2">Date:</span>
                  <input
                    className="border-b border-dashed border-gray-400 w-40 bg-transparent outline-none text-black placeholder-gray-400"
                    placeholder="DD/MM/YYYY"
                  />
                </div>

                <div className="flex flex-col text-center">
                  <span className="font-bold">Bank’s Stamp</span>
                  <span className="text-center font-bold">
                    Signature of the Authorised / Official
                  </span>
                  <span className="text-center font-bold">
                    with phone number.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="page-break"></div>
        </div>
        {/* ...................................................FOURTH ANNEXURE................................................ */}
        <div>
          <div className="max-w-2xl mt-20 mb-6 mx-auto">
            <h1 className="text-end text-[11px]  font-bold mb-2 ">
              Annexure-IV{" "}
            </h1>

            <h1 className="text-end text-[11px]  font-bold mb-2 ">
              (To be submitted on Letter Head of the Unit)
            </h1>

            <h1 className="text-center text-[12px]  font-bold ">UNDERTAKING</h1>
            <h1 className="text-center text-[12px]  font-bold ">
              (For reimbursement under the Procurement & Marketing Support (PMS)
              Scheme of MSME)
            </h1>
          </div>
          <div className="max-w-2xl mx-auto text-[12px] space-y-4 p-4">
            <div className="flex items-center flex-wrap gap-2">
              <div className="flex flex-wrap gap-1">
                <span>I, </span>
              </div>
              <input
                type="text"
                className="flex-1 border-b  border-black bg-transparent outline-none text-black placeholder-gray-400"
              />
              <span>S/D/o Sh</span>
              <input
                type="text"
                className="flex-1 border-b  border-black bg-transparent outline-none text-black placeholder-gray-400"
              />
              <span>Proprietor/Partner/Director of</span>
            </div>

            <div className="flex items-center flex-wrap gap-2">
              <span> M/s </span>

              <input
                type="text"
                className="flex-1 border-b border-black bg-transparent outline-none text-black placeholder-gray-400"
              />
              <span>bearing Udyam Registration Certificate (URC) No. </span>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              <input
                type="text"
                className="flex-1 border-b max-w-xs border-black bg-transparent outline-none text-black placeholder-gray-400"
              />
              <div className="flex flex-wrap gap-2">
                <span>located</span>
                <span>at</span>
                <span>the</span>
                <span>registered</span>
                <span>office</span>
                <span>address</span>
                <span>of</span>
                <span>the</span>
              </div>
            </div>

            <div className="flex items-center flex-wrap gap-2">
              <span>unit/enterprises</span>

              <input
                type="text"
                className="flex-1 border-b border-black bg-transparent outline-none text-black placeholder-gray-400"
              />
              <span>. Factory address of the </span>
            </div>
            <div className="flex flex-wrap gap-11">
              <span> unit/enterprises,</span>
              <span>engaged</span>
              <span>in</span>
              <span>the</span>
              <span>Manufacturing/Service</span>
              <span>activity</span>
              <span>of</span>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              <input
                type="text"
                className="flex-1 border-b border-black bg-transparent outline-none text-black placeholder-gray-400"
              />
              <span>
                do hereby confirm that the information given by me is correct{" "}
              </span>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              <span>and accurate. M/s. </span>

              <input
                type="text"
                className="flex-1 border-b border-black bg-transparent outline-none text-black placeholder-gray-400"
              />
              <span>is eligible for reimbursement as </span>
            </div>
            <div className="flex flex-wrap gap-1">
              <span>per</span>
              <span>the</span>
              <span>procurement</span>
              <span>&</span>
              <span>Marketing</span>
              <span>Support</span>
              <span>(PMS)</span>
              <span>Scheme</span>
              <span>guidelines.</span>
              <span>If</span>
              <span>any</span>
              <span>information</span>
              <span>given</span>
              <span>above</span>
              <span>is</span>
              <span>found</span>
            </div>

            {/* Row 5 */}
            <div className="flex flex-wrap gap-[0.23rem]">
              <span>incorrect/ineligible,</span>
              <span>I</span>
              <span>shall</span>
              <span>be</span>
              <span>liable</span>
              <span>to</span>
              <span>return</span>
              <span>the</span>
              <span>entire</span>
              <span>amount</span>
              <span>of</span>
              <span>reimbursement</span>
              <span>along</span>
              <span>with</span>
              <span>the</span>
              <span>prevailing</span>
              <span>rate</span>
            </div>

            <div className="flex flex-wrap gap-1">
              <span>of</span>
              <span>interest</span>
              <span>to</span>
              <span>the</span>
              <span>Government</span>
              <span>of India.</span>
            </div>

            <div className="flex flex-wrap  gap-x-10 pt-10">
              <span>2.</span>
              <span>That</span>
              <span>the</span>
              <span>aforesaid</span>
              <span>unit/enterprise</span>
              <span>had</span>
              <span>participated</span>
              <span>in</span>
              <span>the</span>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              <input
                type="text"
                className="flex-1 border-b border-black bg-transparent outline-none text-black placeholder-gray-400"
              />
              <span>Trade fair/Exhibition at Stall No . </span>
              <input
                type="text"
                className="flex-1 border-b border-black bg-transparent outline-none text-black placeholder-gray-400"
              />
              <span> held at </span>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              <input
                type="text"
                className="flex-1 border-b  border-black bg-transparent outline-none text-black placeholder-gray-400"
              />
              <span>from </span>
              <input
                type="text"
                className="flex-1 border-b max-w-[8rem] border-black bg-transparent outline-none text-black placeholder-gray-400"
              />
              <span>to </span>
              <input
                type="text"
                className="flex-1 border-b max-w-[8rem] border-black bg-transparent outline-none text-black placeholder-gray-400"
              />
              <span>under</span>
            </div>
            <div>
              <span>
                Procurement & Marketing Support (PMS) Scheme during the
                Financial Year: 2024-25.
              </span>
            </div>
            <div className="flex justify-center">
              <span>
                I do hereby solemnly affirm that the above information is
                correct and to the best of my knowledge
              </span>
            </div>
            <div className="w-full flex justify-end pt-[60px]">
              <div className="flex flex-col items-end gap-2 ">
                <div className="font-semibold">
                  Signature of authorized signatory
                </div>
                <div>Proprietor / Partner / Director</div>
                <div>(Along with the office seal of the Unit)</div>
                <div className="w-full text-left">Date:</div>
                <div className="w-full text-left">Place:</div>
              </div>
            </div>
          </div>

          <div className="page-break"></div>
        </div>
        {/* ...................................................FIVE ANNEXURE................................................ */}
        <div>
          <div className="max-w-4xl mt-10 mx-auto space-y-3">
            <h1 className="text-center text-[11px]  font-bold mb-2 ">
              Annexure-V{" "}
            </h1>
            <h1 className="text-center text-[12px]  font-bold ">
              PARTICIPANTS FEEDBACK REPORT
            </h1>
            <h1 className="text-center text-[12px]  font-bold ">
              (To be filled in by all individual participants separately)
            </h1>
            <h1 className="text-center text-[12px]  font-bold ">
              (All columns should be filled)
            </h1>
          </div>

          <div className="max-w-4xl mx-auto text-[10px]">
            <div className="overflow-x-auto  p-4">
              <table className="table-auto w-full border border-black text-[10.5px]">
                <tbody>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top w-[10%]">
                      1
                    </td>
                    <td className="p-2 border-r border-black align-top w-[45%]">
                      Name of the Participating MSE Unit
                    </td>
                    <td className="p-2 w-[45%]">
                      <input className="w-full bg-transparent outline-none text-black placeholder-gray-400" />
                    </td>
                  </tr>

                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      2
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Address of the Plant/Unit{" "}
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      3
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Name of Proprietor/Partner/ Director{" "}
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      4
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Mobile number of Proprietor/Partner/ Director{" "}
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      5
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Email ID of Proprietor/Partner/ Director
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      6
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Website of the participating MSE unit (if Any)
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      7
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Name, Venue and duration of the Event/Exhibition
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      8
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Comments of the participant regarding benefits of
                      participation in the event (About 200 words along with
                      photographs of event)
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      9
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Number of visitors visited your stall in the event
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      10
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Number and value (in INR) of export inquiries generated in
                      the event.
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      11
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Details of business finalized/orders booked in the event.
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      12
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Other achievements such as joint ventures, technology
                      transfer agreement, etc(give details)
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      13
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Would you like to participate again in the event? If Yes,
                      reason for the same.
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td
                      className="p-2 border-r border-b border-black text-center align-center"
                      rowSpan={2}
                    >
                      14
                    </td>
                    <td className="px-2 py-1 border-r border-black" colSpan={2}>
                      Details of technologies noticed in the event which would
                      be useful for MSMEs in India (copies of the brochures and
                      other relevant literature may be attached as separate
                      sheet):
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className="p-0">
                      <table className="w-full table-fixed">
                        <thead>
                          <tr className=" border-b border-black">
                            <th className="border-r border-black p-1">
                              Country
                            </th>
                            <th className="border-r border-black p-1">
                              Field/Sector
                            </th>
                            <th className="border-r border-black p-1">
                              Description of Technology
                            </th>
                            <th className="p-1">
                              Contact details of the company
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-black">
                            <td className="border-r border-black p-1">
                              <input className="w-full bg-transparent outline-none text-black placeholder-gray-400" />
                            </td>
                            <td className="border-r border-black p-1">
                              <input className="w-full bg-transparent outline-none text-black placeholder-gray-400" />
                            </td>
                            <td className="border-r border-black p-1">
                              <input className="w-full bg-transparent outline-none text-black placeholder-gray-400" />
                            </td>
                            <td className="p-1">
                              <input className="w-full bg-transparent outline-none text-black placeholder-gray-400" />
                            </td>
                          </tr>
                          <tr className="border-b border-black">
                            <td className="border-r border-black p-1">
                              <input className="w-full bg-transparent outline-none text-black placeholder-gray-400" />
                            </td>
                            <td className="border-r border-black p-1">
                              <input className="w-full bg-transparent outline-none text-black placeholder-gray-400" />
                            </td>
                            <td className="border-r border-black p-1">
                              <input className="w-full bg-transparent outline-none text-black placeholder-gray-400" />
                            </td>
                            <td className="p-1">
                              <input className="w-full bg-transparent outline-none text-black placeholder-gray-400" />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="px-2 py-4 border-r border-black text-center align-center">
                      15
                    </td>
                    <td className="p-2 border-r border-black align-center">
                      Remarks/Suggestions, if any
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-5">
                <h2>
                  {" "}
                  <span className="font-bold">Enclosed:</span> 2 (Two) self
                  attested photographs of allotted booth/stall at the event
                  venue.
                </h2>
                <div className="flex justify-between mt-4 ">
                  <div className="flex items-start gap-2">
                    <div className="w-[10%] text-start font-medium">Date:</div>
                    <div className="w-[90%]">
                      <input className="w-full bg-transparent outline-none text-black placeholder-gray-400" />
                    </div>
                  </div>

                  <div className="text-end font-bold leading-snug">
                    Signature/Name/Designation of Participant
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-break"></div>
        </div>
        {/* ...................................................ANNEXURE-C ................................................ */}
        <div>
          <div className="max-w-3xl mt-10 mx-auto space-y-3">
            <h1 className="text-center text-[12px]  font-bold ">ANNEXURE-C</h1>
            <h1 className="text-center text-[11px]  font-bold ">
              Check-list for reimbursement of claims under Component 5(A) : PMS
              Scheme{" "}
            </h1>
          </div>
          <div className="max-w-3xl mx-auto text-[12px] space-y-4 p-4">
            <div className="flex items-center flex-wrap gap-2">
              <div className="flex flex-wrap gap-2">
                <span>Name</span>
                <span>of</span>
                <span>the</span>
                <span>Fair / </span>
                <span>Exhibition :</span>
              </div>
              <input
                type="text"
                className="flex-1 border-b border-dashed border-gray-400 bg-transparent outline-none text-black placeholder-gray-400"
              />
              <span>held at </span>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              <input
                type="text"
                className="flex-1 border-b border-dashed max-w-xs border-gray-400 bg-transparent outline-none text-black placeholder-gray-400"
              />
              <span>during </span>
              <input
                type="text"
                className="flex-1 border-b max-w-xs border-dashed border-gray-400 bg-transparent outline-none text-black placeholder-gray-400"
              />
            </div>
            <div className="flex flex-wrap gap-4">
              <span>The</span>
              <span>following</span>
              <span>documents</span>
              <span>/</span>
              <span>information</span>
              <span>is</span>
              <span>being</span>
              <span>submitted</span>
              <span>for</span>
              <span>reimbursement</span>
              <span>under</span>
              <span>PMS</span>
              <span>Scheme</span>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              <span>from M /S </span>

              <input
                type="text"
                className="flex-1 border-b max-w-[200px] border-dashed border-gray-400 bg-transparent outline-none text-black placeholder-gray-400"
              />
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-[10px]">
            <div className="overflow-x-auto  p-6">
              <div className="flex justify-end">
                <h2 className="font-bold ">
                  (Two additional copies are attached: Yes/No)
                </h2>
              </div>
              <table className="table-auto w-full border border-black text-[10.5px]">
                <thead>
                  <tr className=" border-b border-black">
                    <th className="border-r border-black p-1 w-[5%]">S. No.</th>
                    <th className="border-r border-black p-1  w-[60%]">
                      PARTICULARS
                    </th>
                    <th className="border-r border-black p-1 w-[10%]">
                      Yes/No
                    </th>
                    <th className="p-1  w-[10%]">Page No.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      i.
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Covering Letter on Letter Head of Unit/Enterprise (duly
                      signed and stamped)
                    </td>
                    <td className="p-2 border-r border-black">
                      <input className="w-full bg-transparent outline-none text-black placeholder-gray-400" />
                    </td>
                    <td className="p-2 ">
                      <input className="w-full bg-transparent outline-none text-black placeholder-gray-400" />
                    </td>
                  </tr>

                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      ii.{" "}
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Claim Form duly filled by the Unit / Enterprise.
                    </td>
                    <td className="p-2 border-r border-black">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      iii.{" "}
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Print out of Online Application Form No. : UAM/DTF/ …………..
                      (duly signed and stamped)
                    </td>
                    <td className="p-2 border-r border-black">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      iv.
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Filled details of Agency Creation for PFMS (duly signed
                      and stamped)
                    </td>
                    <td className="p-2 border-r border-black">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      v
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Original (Blank) Pre-Receipt (Duly Signed & Stamped) (In
                      Triplicate)
                    </td>
                    <td className="p-2 border-r border-black">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      vi.
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Original Bank Mandate From (Duly verified by the bank)
                      with Cancelled Cheque of the concerned Bank (Original).{" "}
                    </td>
                    <td className="p-2 border-r border-black">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      vii.
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Original Contingency Bill (Travel, Transport & Publicity
                      Material){" "}
                    </td>
                    <td className="p-2 border-r border-black">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      viii.
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Original Invoice(S) / Bill(S) For Stall Booking With
                      Original Receipt Voucher(S).{" "}
                    </td>
                    <td className="p-2 border-r border-black">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      ix.
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Participants Feed back report With Photos (02) (duly
                      signed and stamped)
                    </td>
                    <td className="p-2 border-r border-black">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>

                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      x.
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Self certified copy of Udyam Registration Certificate
                      (URC)
                    </td>
                    <td className="p-2 border-r border-black">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      xi.
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Self certified copy of Aadhaar Card (s) (Directors’
                      /Proprietor / Partners)
                    </td>
                    <td className="p-2 border-r border-black">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      xii.
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Self certified copy of PAN Card
                    </td>
                    <td className="p-2 border-r border-black">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-8 space-y-4 text-[12px]">
                <div className="w-full flex justify-end pt-[60px]">
                  <div className="flex flex-col items-end gap-2 ">
                    <div className="font-semibold">
                      Signature of authorized signatory
                      <div>(along with the stamp of the Unit)</div>
                    </div>
                    <div className="w-full text-left flex">
                      Name:{" "}
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </div>
                    <div className="w-full text-left flex">
                      Designation:{" "}
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </div>
                    <div className="w-full text-left flex">
                      Place:{" "}
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </div>
                    <div className="w-full text-left flex">
                      Date:{" "}
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page-break"></div>
        </div>
        {/* ...................................................ANNEXURE-D ................................................ */}
        <div>
          <div className="max-w-3xl mt-10 mx-auto space-y-3">
            <h1 className="text-end text-[11px]  font-bold mb-2 ">
              Annexure-D{" "}
            </h1>
            <h1 className="text-center text-[12px]  font-bold ">CLAIM FORM</h1>
            <h1 className="text-center text-[12px]  font-bold ">
              (To be filled by beneficiary MSE for claiming reimbursement)
            </h1>
            <h1 className="text-center text-[12px]  font-bold ">
              PART -I Entrepreneurs Details
            </h1>
          </div>

          <div className="max-w-4xl mx-auto text-[10px]">
            <div className="overflow-x-auto  p-6">
              <table className="table-auto w-full border border-black text-[10.5px]">
                <tbody>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top w-[10%]">
                      1
                    </td>
                    <td className="p-2 border-r border-black align-top w-[40%]">
                      Name of Implementing Agency
                    </td>
                    <td className="p-2 w-[50%]">
                      <input className="w-full bg-transparent outline-none text-black placeholder-gray-400" />
                    </td>
                  </tr>

                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      2
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Name of the Applicant Unit
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      3
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Complete address, phone, fax, e-mail including name of the
                      proprietor/partner
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      4
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      UAM/Udyam Registration Certificate (URC) No. (Pl. Enclose
                      copy){" "}
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      5
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Category of the entrepreneur (General/Women/SC/ST/NER/PH),
                      (Pl. enclose the copy of relevant documents, as
                      applicable)
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      6
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Type of the unit (Micro or Small) (whichever applicable)
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      7
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Category of the unit (Manufacturing/Services):{" "}
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      8
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Products manufactured/ Service rendered by applicant unit.
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td
                      className="p-2 border-r font-bold border-black text-center align-top"
                      colSpan={3}
                    >
                      PART - II Event Details
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      9
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      Name of the Event participated, venue, duration of trade
                      fair/exhibition{" "}
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-2 border-r border-black text-center align-top">
                      10
                    </td>
                    <td className="p-2 border-r border-black align-top">
                      <div className="mb-2">Feedback : [about 200 words] </div>{" "}
                      Include details about new business tie-ups achieved
                      through the event, B2B Knowledge on new technology,
                      opportunity for market expansion etc.
                    </td>
                    <td className="p-2">
                      <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="page-break"></div>
              <div className="mt-10">
                <table className="table-auto w-full border border-black text-[10.5px]">
                  <thead>
                    <tr className=" border-b border-black ">
                      <th className="border-r border-black p-1 " colSpan={4}>
                        PART - III Payment Details
                      </th>
                    </tr>
                    <tr className=" border-b border-black text-start">
                      <th
                        className="border-r font-normal border-black p-2 text-start"
                        colSpan={4}
                      >
                        DETAILS OF CLAIM (in Rs.)
                      </th>
                    </tr>
                    <tr className=" border-b border-black">
                      <th className="border-r border-black p-1 w-[10%]">
                        Name of Scheme
                      </th>
                      <th className="border-r border-black p-1 w-[40%]">
                        Particulars{" "}
                      </th>
                      <th className="border-r border-black p-1 w-[25%]">
                        Actual Expenditure
                        <div>(in Rs.)</div>
                      </th>
                      <th className="p-1 w-[25%]">
                        Amount admissible as per scheme guidelines
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-black">
                      <td className="border-r border-black p-2" rowSpan={2}>
                        <span>Domestic Trade Fair / Exhibition</span>{" "}
                      </td>
                      <td className="border-r border-black p-2">
                        <span>
                          Contingency expenditure (Attach bill copy for
                          travel/publicity/fright charges) in original
                        </span>{" "}
                      </td>
                      <td className="border-r border-black p-2">
                        <input className="w-full bg-transparent outline-none text-black placeholder-gray-400" />
                      </td>
                      <td className="p-1">
                        <input className="w-full bg-transparent outline-none text-black placeholder-gray-400" />
                      </td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="border-r border-black p-2">
                        <span>
                          Space rent (stall rent) (minimum booth/stall size
                          provided by Event organizer) (Attach invoice & Bill)
                          in original
                        </span>{" "}
                      </td>
                      <td className="border-r border-black p-1">
                        <input className="w-full bg-transparent outline-none text-black placeholder-gray-400" />
                      </td>

                      <td className="p-2">
                        <input className="w-full bg-transparent outline-none text-black placeholder-gray-400" />
                      </td>
                    </tr>
                    <tr className="border-b border-black">
                      <td className="border-r border-black p-3" colSpan={2}>
                        <span>Total (in Rs.)</span>{" "}
                      </td>
                      <td className="border-r border-black p-2">
                        <input className="w-full bg-transparent outline-none text-black placeholder-gray-400" />
                      </td>

                      <td className="p-2">
                        <input className="w-full bg-transparent outline-none text-black placeholder-gray-400" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-8 space-y-4 text-[12px]">
                  <h2 className="font-bold ">DECLARATION:</h2>
                  <h2>I hereby declare that:</h2>
                  <div className="flex flex-col gap-2  mt-4">
                    <div className="flex">
                      <div className="w-[10%]">a)</div>
                      <div className="w-[90%]">
                        Above information is correct and is based on the actual
                        expenditure incurred. In case any of the statement /
                        information furnished in application / documents later
                        found to be wrong or incorrect or misleading, I do
                        hereby bind myself and my unit to pay to the Government
                        on demand the full amount received as reimbursement in
                        respect within seven days of the demand.
                      </div>
                    </div>

                    <div className="flex">
                      <div className="w-[10%] ">b)</div>
                      <div className="w-[90%]">
                        The unit has not claimed /applied for financial
                        assistance from any other Ministry / Department of the
                        Government of India or any other Government Institute
                        /Agency for the above mentioned Trade fair.
                      </div>
                    </div>
                  </div>

                  <div className="w-full flex justify-end pt-[60px]">
                    <div className="flex flex-col items-end gap-2 ">
                      <div className="font-semibold">
                        Signature of authorized signatory
                        <div>(along with the stamp of the Unit)</div>
                      </div>
                      <div className="w-full text-left flex">
                        Name:{" "}
                        <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                      </div>
                      <div className="w-full text-left flex">
                        Designation:{" "}
                        <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                      </div>
                      <div className="w-full text-left flex">
                        Place:{" "}
                        <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                      </div>
                      <div className="w-full text-left flex">
                        Date:{" "}
                        <input className="w-full bg-transparent outline-none  text-black placeholder-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnexureOne;
