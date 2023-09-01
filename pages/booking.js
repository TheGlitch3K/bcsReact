import React from 'react'
import { BookingForm } from '@page-components/BookingForm';

export default function BookingScreen() {

    return (
        <div><div className="common_container">
            <div className="booking_Main_content">
                <div className="boking_content_container">
                    <div className="boking_content_shadow">
                        <div className="booking_banner" data-aos="zoom-in-down" >
                            <h2 >Advanced <span> Safety Technology</span> <br />
                                Your Information Is Never Stored</h2>

                        </div>
                        <div className="booking_form" data-aos="zoom-in-down">
                            <div className="form_left">
                                <div className="form_left_img">
                                    <div className="form_left_img_shadow">
                                        <h2>Booking</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="form_right" data-aos="zoom-in-down">
                                <BookingForm />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Main_footer_content">
                    <div className="footer_content " >
                        <div className="row ">
                            <div className="col-lg-3 col-md-3 col-sm-12 footer_left">
                                <img src="/images/v.png" alt="footer logo" />
                                <p>Black Car Services will accommodate your travel needs.</p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-sm-12 footer">
                                <h4>Company</h4>
                                <ul>
                                    <li><a href="Home.html">Home</a> </li>
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
                    <p> Copyright &nbsp;  <i className="fa-solid fa-copyright"></i>&nbsp;  2022 RM enprise</p>
                </div>
            </div>
        </div>
        </div>
    )
}
