import React, { useEffect } from 'react'
import './faqs.css'
import Accordion from "./accordion/accordion";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

function FAQs() {
  return (
    <div className="FAQPage">
      <Header></Header>
      {/* <Accordion></Accordion> */}
      <Footer></Footer>
    </div>
  );
}

export default FAQs;
