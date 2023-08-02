import React from 'react'
import './faqs.css'
import Accordion from "./accordion/accordion";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { accordionData } from './accordion/accordion_data';

function FAQs() {
  return (
    <div className="FAQPage">
      <Header></Header>
      <div className='title'>Frequently Asked Questions</div>
      <div className='accordion'>
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content}></Accordion>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default FAQs;
