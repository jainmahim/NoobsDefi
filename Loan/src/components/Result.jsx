import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";

export default function Register() {
  const [amt, setAmt] = useState("");
  const [loanid, setLoanid] = useState("");
  const [address, setAddress] = useState("");
  const [visible, setVisible] = useState("none");


  
  async function handleSubmit() {
    setVisible("block");
   await axios
      .post("http://localhost:8888/repay", {
        amt: amt,
        loanid: loanid,
        address: address,
      })
      .then((response) => {
        console.log('hii, i am here');
        if (response.data === "Error") {
          alert("Sorry!! Form has been closed");
          setVisible("none");
        } else {
          console.log(response.data);
          alert("Form Submitted Successfully!!");
          setVisible("none");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div
        className="absolute inset-x-0 top-[calc(100%-10rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-1 text-3xl text-center">Fill the Repay Form</h1>
          <h1 className="text-3xl text-center mb-5 font-semibold ">
          </h1>
          <input
            type="text"
            onChange={(e) => setAmt(e.target.value)}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="amount"
            placeholder="Amount"
          />
          <input
            type="text"
            onChange={(e) => setAddress (e.target.value)}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="address"
            placeholder="Wallet Address"
          />
          <input
            type="text"
            onChange={(e) => setLoanid(e.target.value)}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="loanId"
            placeholder="Loan ID"
          />
        
          
          <button
            onClick={handleSubmit}
            className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-dark focus:outline-none my-1"
          >
            Repay Money
          </button>
          <LinearProgress style={{ display: visible }} color="success" />
          <div className="text-center text-sm text-grey-dark mt-4">
            By filling this form , you agree to the
            <Link
              className="no-underline border-b border-grey-dark text-grey-dark"
              to="#"
            >
              &nbsp; Terms of Service
            </Link>{" "}
            &nbsp;and
            <Link
              className="no-underline border-b border-grey-dark text-grey-dark"
              to="#"
            >
              &nbsp;Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
