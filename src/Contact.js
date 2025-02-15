


function Contact(){
    return(
<>
<div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="contact-button">Submit</button>
      </form>
    </div>
</>
)
}


export default Contact