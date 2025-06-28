import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        preferredContact: "",
        typeOfProject: "",
        message: "",
        referralSource: ""
    });

    const [errorMessage, setErrorMessage] = useState(""); 
    const [successMessage, setSuccessMessage] = useState("");
    const [openFAQ, setOpenFAQ] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrorMessage("");
        setSuccessMessage("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.firstName || !formData.email || !formData.message) {
            setErrorMessage("Please fill out all required fields.");
            return;
        }

        try {
            const response = await fetch("https://ten-interior.onrender.com/api/contact/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage("Your message has been sent successfully!");
                setFormData({
                    firstName: "", lastName: "", email: "", phone: "",
                    preferredContact: "", typeOfProject: "", message: "", referralSource: ""
                });
            } else {
                setErrorMessage("Failed to send the message. Please try again.");
            }
        } catch (error) {
            setErrorMessage("An error occurred. Please try again later.");
        }
    };

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqList = [
        {
            question: "HOW MUCH WILL MY PROJECT COST?",
            answer: "Costs vary depending on the scope and type of project. We offer customized pricing based on your needs."
        },
        {
            question: "HOW LONG WILL THE PROCESS TAKE?",
            answer: "Timelines vary depending on project size and complexity. A typical project takes 6–12 weeks."
        },
        {
            question: "WHAT AREAS DOES TEN Interiors DESIGN SERVE?",
            answer: "We serve both local clients and offer virtual interior design services to clients nationwide."
        },
        {
            question: "DO YOU OFFER VIRTUAL DESIGN?",
            answer: "Yes, we offer comprehensive virtual design services including consultations, layout planning, and style guidance."
        }
    ];

    return (
        <div className="contact-page">
            <header className="contact-header">
                <div className="logo">TEN INTERIORS</div>
                <div className="subheading">DESIGN</div>
            </header>

            <div className="contact-content">
                <div className="contact-info-column">
                    <h3 className="contact-section-title">CONTACT US</h3>
                    <h2 className="contact-heading">Looking to commission our interior design service?</h2>
                    <p className="contact-description">
                        Fill in the form to book your free 15-minute discovery call.
                        We'll discuss your goals and how our team can help create
                        the perfect space for you. Or if you prefer, you can
                        email us directly at 
                      <p className="contact-description"><a href="mailto:info@TENInteriors.com">info@teninteriors.com</a></p>  
                    </p>
                    
                    <div className="office-hours">
                        <h3>OFFICE HOURS</h3>
                        <p>Monday-Friday 9:00am - 5:00pm</p>
                    </div>
                </div>

                <div className="contact-form-container">
                    <h2 className="form-heading">INQUIRE</h2>
                    
                    <form className="inquiry-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="firstName">FIRST NAME*</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="lastName">LAST NAME*</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">EMAIL ADDRESS*</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="phone">PHONE NUMBER*</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="preferredContact">PREFERRED CONTACT: PHONE, EMAIL/PHONE, EMAIL ONLY*</label>
                                <input
                                    type="text"
                                    id="preferredContact"
                                    name="preferredContact"
                                    value={formData.preferredContact}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="typeOfProject">INTERESTED IN DESIGN SERVICES OR PROJECT?*</label>
                                <input
                                    type="text"
                                    id="typeOfProject"
                                    name="typeOfProject"
                                    value={formData.typeOfProject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="message">TELL US MORE*</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="In just a few lines, tell us something about your project (location, timeline, scope, etc). Feel free to include links to inspiration images if you have them. Our team will review your inquiry and get back to you within 2 business days."
                                    required
                                ></textarea>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="referralSource">REFERRAL/HOW DID YOU HEAR ABOUT US?*</label>
                                <input
                                    type="text"
                                    id="referralSource"
                                    name="referralSource"
                                    value={formData.referralSource}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <button type="submit" className="submit-btn">SUBMIT FORM</button>
                        </div>

                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        {successMessage && <p className="success-message">{successMessage}</p>}
                    </form>
                </div>
            </div>

            <div className="faq-section">
                <h2 className="faq-heading">COMMON <br />QUESTIONS</h2>
                
                <div className="faq-questions">
                    {faqList.map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                <span>{faq.question}</span>
                                <span className="faq-toggle-icon">
                                    {openFAQ === index ? '−' : '+'}
                                </span>
                            </div>
                            {openFAQ === index && (
                                <div className="faq-answer open">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
