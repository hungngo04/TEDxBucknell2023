import React, { useEffect } from 'react'
import './faqs.css'

// Questions and answers need to be modified.
function FAQs() {
  return (
    <div className="faq-accordion">
        <div className="accordion-item">
          <div className="accordion-header">What is TEDx?
            <span className="accordion-icon"></span>
          </div>
          <div className="accordion-content">
            <p>TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized (subject to certain rules and regulations).</p>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header"><span> is TED? </span>
            <span className="accordion-icon"></span>
          </div>
          <div className="accordion-content">
            <p>TED is a nonprofit organization devoted to spreading ideas, usually in the form of short, powerful talks (18 minutes or less). TED began in 1984 as a conference where Technology, Entertainment and Design converged, and today covers almost all topics — from science to business to global issues — in more than 100 languages.</p>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header"> <p>How can I apply to speak at TEDxBucknell?</p>
            <span className="accordion-icon"></span>
          </div>
          <div className="accordion-content">
            <p>We would love to hear from you! Please visit our “Apply to Speak” page to submit an application.</p>
          </div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header">How can I attend TEDxBucknell?
            <span className="accordion-icon"></span>
          </div>
          <div className="accordion-content">
            <p>You can purchase tickets to attend TEDxBucknell through our website. Please check our “Attend” page for more information.</p>
          </div>
        </div>
    </div>
  )
}

export default FAQs