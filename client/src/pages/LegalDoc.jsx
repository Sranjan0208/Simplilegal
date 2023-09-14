import React from "react";
import Nav from "../components/Dashboard/Navbar";

function LegalDoc(props) {
  return (
    <>
    <Nav/>
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        {/* <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src={props.logo}
            alt={props.company}
          />
        </div> */}
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {props.company}
          </div>
          <p className="mt-2 text-gray-500 font-serif ">{props.address}</p>
          <p className="mt-2 text-gray-500 font-serif">{props.date}</p>
          {/* //replace this with current date */}
          <p className="mt-2 text-gray-500 font-serif">To: {props.recipient}</p>
          <p className="mt-2 text-gray-500 font-serif">Subject: {props.subject}</p>
          <br></br>
          <p className="mt-4 text-gray-700 font-serif">{props.body}</p>
          <p className="mt-4 text-gray-700 font-serif">
          Pursuant to the instructions from and on behalf of my client {props.clientName}, resident of {props.address} and owner of the land bearing survey no. _____________ situated at _____________ (hereinafter referred to as the land), I do hereby serve you with the following legal notice:
          </p>
          <p className="mt-4 text-gray-700 font-serif">
1. That my client is the absolute and lawful owner of the land, which he inherited from his father who had purchased it from the original owner by a registered sale deed dated _____________ and duly registered with the sub-registrar of _____________.

2. That my client has been in peaceful and uninterrupted possession of the land since then and has been cultivating it for his livelihood.

3. That you have illegally and forcibly encroached upon a portion of the land measuring _____________ sq. ft. and constructed a shop thereon without any permission or consent from my client or any competent authority.

4. That you have thereby committed an act of trespass, nuisance, and infringement of my client's property rights and caused him immense loss and damage.

5. That my client had repeatedly requested you to vacate the land and remove the shop, but you have refused to do so and threatened him with dire consequences.

6. That my client has also lodged a complaint against you with the local police station, but no action has been taken so far.

I hereby call upon you to:

a) Immediately stop any further construction or activity on the land;

b) Demolish the shop and restore the land to its original condition;

c) Vacate the land and hand over its peaceful possession to my client;

d) Pay my client a sum of Rs. _____________ as compensation for the loss and damage suffered by him;

e) Apologize to my client in writing for your illegal and wrongful acts;

within 15 days from the date of receipt of this notice, failing which my client will be constrained to initiate appropriate legal action against you for recovery of possession, injunction, damages, and criminal prosecution, at your risk, cost, and consequences.

Please note that this notice is without prejudice to any other rights and remedies available to my client under law.

A copy of this notice is retained in my office for record and further action.

          </p>
          <br></br>
          <p className="mt-4 text-gray-700 font-serif">Sincerely,</p>
          <p className="mt-4 text-gray-700 font-serif">{props.sender}</p>
          <p className="mt-4 text-gray-700 font-serif">Simplilegal Consultancy.</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default LegalDoc;