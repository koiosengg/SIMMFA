import React from "react";
import { Routes, Route } from "react-router-dom";
import Details from "./Application/Details";
import Payment from "./Application/Payment";
import Confirmation from "./Application/Confirmation";
import Failed from "./Application/Failed";

function Application() {
  return (
    <section className="application">
      <Routes>
        <Route index element={<Details />} />
        <Route path="payment" element={<Payment />} />
        <Route path="confirmation" element={<Confirmation />} />
        <Route path="failed" element={<Failed />} />
      </Routes>
    </section>
  );
}

export default Application;
