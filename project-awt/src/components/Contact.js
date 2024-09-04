import React from 'react';
 const Contact = () => {
  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Contact Us</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name"
            placeholder="Enter your full name" /> </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="email"
            placeholder="Enter your email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea className="form-control" id="message" rows={6}
            placeholder="Write your message"></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-danger btn-lg">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}; 
export default Contact;