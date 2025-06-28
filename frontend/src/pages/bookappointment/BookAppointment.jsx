import React, { useState } from "react";
import "./BookAppointment.css";
import Image1 from "../assets/Image/Image1.webp"; 

const BookAppointment = () => {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [designer, setDesigner] = useState("Select Designer");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [details, setDetails] = useState("");

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <>
      
      <div className="hero-section">
        <img src={Image1} alt="Hero Banner" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-text">Book Your Appointment</h1>
        </div>
      </div>

   
      <div className="appointment-container">
        <h2>Book Interior Design Consultation</h2>

       
        <div className="progress-bar">
          <span className={step === 1 ? "active-step" : ""}>Service</span>
          <span className={step === 2 ? "active-step" : ""}>Time</span>
          <span className={step === 3 ? "active-step" : ""}>Details</span>
          <span className={step === 4 ? "active-step" : ""}>Done</span>
        </div>

        {step === 1 && (
          <>
            <div className="form-group">
              <label htmlFor="service">Service</label>
              <select id="service" value={service} onChange={(e) => setService(e.target.value)}>
                <option value="">Select Service</option>
                <option value="Living Room Design">Living Room Design</option>
                <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                <option value="Bedroom Makeover">Bedroom Makeover</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="designer">Designer</label>
              <select id="designer" value={designer} onChange={(e) => setDesigner(e.target.value)}>
                <option value="Select Designer">Select Designer</option>
                <option value="Emma Johnson">Emma Johnson</option>
                <option value="Michael Smith">Michael Smith</option>
                <option value="Sophia Davis">Sophia Davis</option>
              </select>
            </div>
          </>
        )}

        {step === 2 && (
          <div className="form-group">
            <label htmlFor="time">Select Appointment Time</label>
            <input
              type="datetime-local"
              id="time"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
            />
          </div>
        )}

        {step === 3 && (
            
          <div className="form-group">
            <label htmlFor="details">Additional Details</label>
            <textarea
              id="details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="Enter any specific requests or preferences"
            />
          </div>
        )}

   
        {step === 4 && (
          <div className="confirmation-message">
            <h3>Appointment Confirmed!</h3>
            <p>Service: {service}</p>
            <p>Designer: {designer}</p>
            <p>Time: {appointmentTime}</p>
            <p>Details: {details}</p>
            <p>Thank you for booking with us!</p>
          </div>
        )}

        <p className="privacy-policy">
          By submitting this form you are agreeing to our <a href="#">Privacy Policy</a>.
        </p>

        <div className="button-group">
          {step > 1 && <button className="cancel-button" onClick={prevStep}>Back</button>}
          {step < 4 ? (
            <button className="next-button" onClick={nextStep}>Next</button>
          ) : (
            <button className="finish-button">Finish</button>
          )}
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
