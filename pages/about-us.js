import { BookingModal } from '@page-components/BookingModal'
import React,{ useState } from 'react'

export default function AboutUs() {
    const [open,setOpen] = useState(false)
    const onClose=()=>{
        setOpen(false)
    }
    const onOpen = () => {
        setOpen(true)
    }
  return (
    <div><div className="common_container">
    <div className="about_main_content">
        <div className="about_top">
            <div className="about_top_conainer">

                <div className="about_banner_container container">
                    <div className="row">
                        <div className="about_banner_left col-lg-6 col-md-6 col-sm-12 "  data-aos="zoom-in-up">
                            <p>About</p>
                            <h2> Luxury <span> Lifestyle</span> </h2>
                            <h3>Security </h3>
                            <h6>Black Car Service provides elite private car transportation services for individual and group travel across the greater metropolis and beyond. Our Experienced Professional drivers will do the driving—so don’t have to.</h6>
                            <a href="#">Explore Now<i className="fa-solid fa-arrow-right-long ms-1"></i> </a>

                        </div>
                        <div className="about_banner_right col-lg-6 col-md-6 col-sm-12" data-aos="zoom-in-up">
                            <img src="/images/about_banner_car.png" alt="about_banner_ca" />
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <div className="Favorite_Car ">
            <div className="container">
                <div className="row Favorite_Car_container">
                    <div className="col-lg-6 col-sm-12 col-md-6 Favorite_Car_left " data-aos="zoom-in-up">
                        <h4> Get Your <span>Favorite Car </span>   Here. Make Your Four Easy.</h4>
                        <div onClick={onOpen}>Book now <i className="fa-solid fa-arrow-right ms-1"></i></div>
                    </div>
                    <div className="col-lg-6 col-sm-12 col-md-6 Favorite_Car_right" data-aos="zoom-in-up" >
                        <img src="/images/small_busness_man.png" alt="favorite_car" />


                    </div>
                </div>
            </div>

        </div>
        <div className="reservation_full_container">
            <div className="reservation">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 reservation_card_container">
                            <div className="reservation_card" data-aos="zoom-in-up">
                                <img src="/images/car9@2x.png" alt="car" />
                                <h5>24/7 Services</h5>
                            </div>


                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 reservation_card_container">
                            <div className="reservation_card" data-aos="zoom-in-up">
                                <i className="fa-solid fa-calendar-days fa-2x mb-2"></i>
                                <h5>Reservation <br /> Anytime</h5>
                                <p>We offer attractive prices that will make you smile, twice! Please contact us today or book online.</p>
                                <div onClick={onOpen}>Book now <i className="fa-solid fa-arrow-right ms-1"></i></div>

                            </div>

                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 reservation_card_container">
                            <div className="reservation_card" data-aos="zoom-in-up">
                                <i className="fa-solid fa-location-dot fa-3x location"></i>
                                <h5>location</h5>

                            </div>


                        </div>
                    </div>
                </div>

            </div>

        </div>

        <div className="luxury ">
            <div className="luxury_content " data-aos="zoom-in-up">
                <h2>The Luxury </h2>
                <h3>You Deserve</h3>
            </div>
            <div className="View_btn" data-aos="zoom-in-up">
                <a href="#">View All <i className="fa-solid fa-arrow-right-long"></i></a>
            </div>

        </div>

        <div className="luxury_car container">

            <div className=" luxury_car_left" data-aos="zoom-in-up">
                <ul>
                    <li>
                        Top Notch Driver
                    </li>
                    <li>
                        Amenities
                    </li>
                    <li>
                        Safety
                    </li>
                    <li>
                        Cleanliness
                    </li>
                    <li>
                        Respectfull
                    </li>
                    <li>
                        Lorem
                    </li>
                    <li>
                        Lorem
                    </li>
                </ul>
            </div>
            <div className=" luxury_car_right" data-aos="zoom-in-up">
                <div className="luxury_card_car">
                    <img src="/images/luxury_card_car.png" alt="card_car" />
                    <h5>Black Car Service</h5>
                    <a href="#"> <i className="fa-solid fa-arrow-right-long"></i></a>
                    <p>Black Car Service provides elite private car transportation services for individual and group travel across the greater metropolis and beyond. Our Experienced Professional drivers will do the driving—so don’t have to.</p>
                </div>

            </div>
        </div>
        <div className="news " data-aos="zoom-in-up">
            <div className="news_content " >
                <h2>News And  <span>Events </span> </h2>

            </div>
            <div className="View_btn" data-aos="zoom-in-up">
                <a href="#">View All <i className="fa-solid fa-arrow-right-long"></i></a>
            </div>

        </div>
        <div className="news_container row" data-aos="zoom-in-up">
            <div className="news_content_card col-12 col-md-4">
                <div className="news_card_top">
                    <img src="/images/news_card_1.png" alt="news card img" />
                </div>
                <div className="news_card_down">
                    <h5> 1 april 2022</h5>
                    <h4>Black Car</h4>
                    <p>We offer attractive prices that will make you smile, twice! Please contact us today or book online.</p>
                    <a href="#">Read More <i className="fa-solid fa-arrow-right-long ms-1"></i></a>
                </div>


            </div>
            <div className="news_content_card col-12 col-md-4">
                <div className="news_card_top">
                    <img src="/images/news_card_1.png" alt="news card img" />
                </div>
                <div className="news_card_down">
                    <h5> 1 april 2022</h5>
                    <h4>Black Car</h4>
                    <p>We offer attractive prices that will make you smile, twice! Please contact us today or book online.</p>
                    <a href="#">Read More <i className="fa-solid fa-arrow-right-long ms-1"></i></a>
                </div>


            </div>
            <div className="news_content_card col-12 col-md-4">
                <div className="news_card_top">
                    <img src="/images/news_card_1.png" alt="news card img" />
                </div>
                <div className="news_card_down">
                    <h5> 1 april 2022</h5>
                    <h4>Black car</h4>
                    <p>We offer attractive prices that will make you smile, twice! Please contact us today or book online.</p>
                    <a href="#">Read More <i className="fa-solid fa-arrow-right-long ms-1"></i></a>
                </div>


            </div>

        </div>

        <div className="Main_footer_content" data-aos="zoom-in-up">
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
            <p> Copyright &nbsp;  <i className="fa-solid fa-copyright"></i>&nbsp;  2022 RM Enterprise</p>
        </div>
    </div>
</div>
<BookingModal open={open} onClose={onClose}/>
</div>
  )
}
