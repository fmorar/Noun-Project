import Button from './buttons';

const ContactForm = () => {
  return (
    <div>
      <p>Tell us everything</p>
      <form name="contactForm" method="POST" data-netlify="true">
        <label className="label-text">NAME</label>
        <input type="text" name="name" required />
        <label className="label-text">EMAIL</label>
        <input type="email" name="email" required />
        <label className="label-text">ABOUT PROJECT</label>
        <textarea type="text" name="about" rows="5" cols="40" required />
        <label className="label-text"><input type="checkbox" id="cbox1" value="first_checkbox" />I agree to Terms and Conditions</label>
        <div className="d-flex justify-content-center">
          <button type="submit" className='btn btn-principal'>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
