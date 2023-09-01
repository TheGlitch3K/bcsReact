import { ContactUsForm } from '@page-components/ContactUsForm'
import React from 'react'

export default function ContactUs() {
  return (
    <div className="common_container">
    <div className="Contact_Main_content">
        <div className="contact_background">
            <div className="contact_background_shadow">
                <div className="Contact_banner">
                    <div className="contact_banner_container container" >
                        <div className="row">
                            <div className="Contact_banner_left col-lg-6 col-md-6 col-sm-12" data-aos="zoom-in-down">
                                <h2>Get In <span>Touch</span> </h2>
                                <p>Black Car Service provides elite private car transportation services for individual and group travel across the greater metropolis and beyond. Our Experienced Professional drivers will do the driving—so don’t have to.</p>
                            </div>
                            <div className="Contact_banner_right col-lg-6 col-md-6 col-sm-12" data-aos="zoom-in-down">
                                <img src="/images/contact_car.png" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="booking_form" data-aos="zoom-in-up">
                        <div className="Contact_form_left" >
                            <div className=" Contact_form_left_img">
                                <div className="Contact_form_left_img_shadow">
                                    <h2> Contact Information</h2>
                                    <p>We offer attractive prices that will make you smile, twice! Please contact us today or book online.</p>
                                    <div className="contatc_info">
                                        <i className="fa-solid fa-phone mb-3 me-1"></i>
                                        <p> 314-555-555 <br /> 314-555-555</p>
                                    </div>
                                    <div className="contatc_info">
                                        <i className="fa-solid fa-envelope mb-3 me-1"></i>
                                        <p> Suport@gmail.com</p>
                                    </div>
                                    <div className="contatc_info">
                                        <i className="fa-solid fa-phone mb-3 me-1"></i>
                                        <p> Saint luis, Mo</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="form_right">
                            <ContactUsForm />
                        </div>
                    </div>
                </div>
            </div>

        </div>


        <div className="Main_footer_content" data-aos="zoom-in-down">
            <div className="footer_content " >
                <div className="row ">
                    <div className="col-lg-3 col-md-3 col-sm-12 footer_left">
                        <img src="/images/v.png" alt="footer logo" />
                        <p>Black Car Services will accommodate your travel needs.</p>

                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 footer">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="Home">Home</a> </li>
                            <li><a href="about.html">About</a> </li>
                            <li><a href="booking.html">Booking</a> </li>

                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 footer">
                        <h4>Information</h4>
                        <ul>
                            <li><a href=""> Lorem</a></li>
                            <li><a href="">service</a> </li>
                            <li><a href="">Contact Us</a></li>

                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-12 footer">
                        <h4>Events</h4>
                        <ul>
                            <li><a href="">Wedding</a> </li>
                            <li><a href="">Contact</a> </li>
                            <li><a href=""> Special Event</a></li>

                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-12 footer_social_container">
                        <h4>Follow us</h4>
                        <ul className="footer_social">
                            <li><a href=""><i className="fa-brands fa-whatsapp-square"></i></a></li>
                            <li><a href=""> <i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href=""><i className="fa-brands fa-instagram-square"></i></a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        <div className="copyright">
            <p> Copyright &nbsp;  <i className="fa-solid fa-copyright"></i>&nbsp;  2022 RM Enterprise</p>
        </div>

    </div>
</div>
  )
}
