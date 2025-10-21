// --- FAQ SECTION ---
import React, { useState } from 'react'

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      id: 1,
      question: 'How do I get started with Husky Trails?',
      answer: 'Getting started is easy! Simply fill out our contact form or call us directly. We\'ll schedule a free meet & greet where Andrew will meet you and your dog, discuss your needs, and answer any questions. This helps us create the perfect service plan for your pup.'
    },
    {
      id: 2,
      question: 'What areas do you serve?',
      answer: 'We primarily serve Capitol Hill, Queen Anne, Ballard, Fremont, Green Lake, and Wallingford. We also provide extended services to University District, Ravenna, and Madison Park with advance booking. Contact us to check if we can serve your specific location.'
    },
    {
      id: 3,
      question: 'Are you insured and certified?',
      answer: 'Yes! Andrew is fully insured with comprehensive liability coverage and is certified in Pet First Aid & CPR by the American Red Cross. He has also completed professional dog behavior training to ensure the best care for your furry friend.'
    },
    {
      id: 4,
      question: 'What if my dog has special needs or behavioral issues?',
      answer: 'We work with dogs of all ages, sizes, and temperaments. During our meet & greet, we\'ll discuss any special needs, medications, or behavioral considerations. Andrew has experience with rescue dogs, senior dogs, puppies, and dogs with various behavioral challenges.'
    },
    {
      id: 5,
      question: 'How do you handle emergencies?',
      answer: 'Andrew is trained in Pet First Aid & CPR and carries a first aid kit on all walks. In case of an emergency, he will immediately contact you and your veterinarian. We also have a network of trusted local veterinarians for urgent situations.'
    },
    {
      id: 6,
      question: 'What happens in bad weather?',
      answer: 'We walk in most weather conditions! Seattle weather doesn\'t stop us from providing your dog with exercise and mental stimulation. We adjust our routes and duration based on weather conditions and your dog\'s comfort level. In extreme weather, we\'ll contact you to discuss alternatives.'
    },
    {
      id: 7,
      question: 'Do you provide updates during walks?',
      answer: 'Absolutely! We send photo updates during walks and provide detailed reports after each service. You\'ll know exactly how your dog\'s adventure went, including what they did, how they behaved, and any observations Andrew made.'
    },
    {
      id: 8,
      question: 'Can I schedule recurring walks?',
      answer: 'Yes! We offer flexible scheduling including daily, weekly, bi-weekly, or custom schedules. We also have service packages that provide savings for regular clients. Contact us to discuss the best schedule for your dog\'s needs.'
    },
    {
      id: 9,
      question: 'What if I need to cancel or reschedule?',
      answer: 'We understand that plans can change! We require 24-hour notice for cancellations or rescheduling. For same-day changes, we\'ll do our best to accommodate, though there may be a small fee. We\'re flexible and want to work with your schedule.'
    },
    {
      id: 10,
      question: 'How do you ensure my dog\'s safety?',
      answer: 'Safety is our top priority. We use secure leashes and harnesses, follow all local leash laws, and avoid busy streets and dangerous areas. We also carry identification for your dog and have emergency contact information readily available. Andrew is trained to read dog body language and prevent potentially dangerous situations.'
    }
  ]

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section className="faq" id="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Everything you need to know about our dog walking services
        </p>

        <div className="faq-grid">
          {faqs.map(faq => (
            <div key={faq.id} className="faq-item">
              <button
                className={`faq-question ${openFAQ === faq.id ? 'open' : ''}`}
                onClick={() => toggleFAQ(faq.id)}
              >
                <span className="question-text">{faq.question}</span>
                <span className="question-icon">
                  {openFAQ === faq.id ? '−' : '+'}
                </span>
              </button>
              <div className={`faq-answer ${openFAQ === faq.id ? 'open' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <h3>Still have questions?</h3>
          <p>We're here to help! Contact us directly and we'll be happy to answer any questions about our services.</p>
          <div className="faq-contact-options">
            <a href="#contact" className="btn btn-primary">Contact Us</a>
            <a href="tel:+1234567890" className="btn btn-secondary">Call Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
