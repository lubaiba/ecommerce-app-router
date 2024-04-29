import React from 'react'

export default function ContactUs() {
  return (
    <div className="container mt-5 pb-5" >
    <div className="row">
      <div className="col-md-6">
        <h2>Contact Us</h2>
        <p>Have a question or need assistance? Fill out the form below to get in touch with us.</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea className="form-control" id="message" rows={5} placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className="col-md-6">
        <h2>Our Location</h2>
        <p>123 Main Street</p>
        <p>City, State ZIP</p>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@example.com</p>
      </div>
    </div>
  </div>
  )
}
