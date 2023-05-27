import React from 'react'
// import phone from '../images/phone-2.svg'
// import msg from "../images/msg.svg"
// import map from '../images/map.svg'
import '../CSS/Contact.css'

const Contact = () => {

    const showAlert = ()=>{
        alert('Thankyou for contacting me. I will revert back to you soon');
    }
    return (
        <div>
            <section id="Contact"className="contact">
                <div className="conatiner">
                    <h1 className="section-heading">Contact <span>Me</span></h1>
                    <p>For project and any query</p>
                    <div className="card-wrapper">
                        <div className="card">
                        <i class="fas fa-mobile-alt"></i>
                            <h1>Call on</h1>
                            <h6>9518622790</h6>
                        </div>
                        <div className="card">
                        <i class="fas fa-envelope"></i>
                            <h1>Email</h1>
                            <h6>satvik.goyal1509@gmail.com</h6>
                        </div>
                        <div className="card">
                            <i class="fas fa-address-card"></i>
                            <h1>Address</h1>
                            <h6>Jind haryana</h6>
                        </div>
                    </div>

                    <form action="https://formsubmit.co/svsgoyal2001@gmail.com" method="POST" className="contact-form">
                        <div className="input-wrap">
                            <input type="text" name="Name" placeholder="Your Name"/>
                            <input type="email" name="email" placeholder="Your Email"/>
                        </div>
                        <div className="input-wrap-2">
                            <input type="text" name="subject" placeholder="Your Subject...."/>
                            <input type="hidden" name="_subject" value="New mail from my protfolio!"/>
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message"/>
                        </div>
                        <div className="btn-wrapper">
                            {/* <input type="hidden" name="_autoresponse" value="Thankyou for contacting me. I will try to respond as soon as possible"/> */}
                            <input type="hidden" name="_captcha" value="false"/>
                            <button type="submit" className="btn btn-green" onclick={showAlert}>Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact
