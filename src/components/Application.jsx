import React from "react";
import { Routes, Route } from "react-router-dom";
import Details from "./Application/Details";
import Payment from "./Application/Payment";

function Application() {
  return (
    <section className="application">
      <Routes>
        <Route index element={<Details />} />
        <Route path="payment" element={<Payment />} />
      </Routes>
    </section>
  );
}

export default Application;
