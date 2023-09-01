import { BookingModal } from '@page-components/BookingModal'
import React, { useState } from 'react'

export default function Home() {
  const [open, setOpen] = useState(false)

  const onClose = () => {
    setOpen(false)
  }
  const onOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <div className="common_container">
        <div className="Main_content">
          <section className="pageSizing">
            <div className="banner">
              <h2 data-aos="zoom-in-down">
                Saint Louis Primary <span>Luxury</span>
              </h2>
              <h3 data-aos="zoom-in-down">Transportation Service</h3>
              <div className="bannerContent container">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="banner_left" data-aos="zoom-in-up">
                      <div className="banner_left_content">
                        <p className="pt-3">
                          Black Car Service offers elite private transportation
                          for individuals and groups in the Saint Louis area and
                          beyond. Our professional drivers will take care of the
                          driving, allowing you to sit back and enjoy the ride in
                          style.
                        </p>
                        <div onClick={onOpen}><img className="book_now" src="/images/book_now.png" alt="" /></div>
                        <div className="Social_icon_container">
                          <a href="#"><i className="social_icon fa-brands fa-whatsapp"></i></a>
                          <a href="#"><i className="social_icon fa-brands fa-facebook"></i>
                          </a>
                          <a href="#">
                            <i className="social_icon fa-brands fa-twitter"></i></a>
                          <a href="#"><i className="social_icon fa-brands fa-instagram"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="banner_right" data-aos="zoom-in-up">
                      <img className="banner_car" src="/images/eEsR.png" alt="Car" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="slider">
            <div className="slider_title_container">
              <div className="slider_title">
                <h2>Choose Your <span>Car</span></h2>
                <p>
                  Black Car Service offers exclusive luxury transportation. Choose
                  your vehicle and book now.
                </p>
              </div>
            </div>
            <div className="container mt-5">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel "
                style={{ paddingBottom: "50px" }}>
                <div className="carousel-indicators slide_bar">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-lg-3 clo-md-6 col-sm12 bootstrap_card_column">
                        <div className="car_card">
                          <img src="/images/eEsR.png" alt="car" />
                          <h3>Escalade ESV Suv</h3>
                          <p>6 Seats : <span> 10 Luggages </span></p>
                          <div className="capacity">
                            <img src="/images/capacity1.png" alt="" />
                            <img src="/images/capacity2.png" alt="" />
                          </div>
                          <div onClick={onOpen} className="book_white_btn"><img className="" src="/images/book_white.png"
                            alt="" /></div>
                        </div>
                      </div>
                      <div className="col-lg-3 clo-md-6 col-sm12 bootstrap_card_column">
                        <div className="car_card">
                          <img src="/images/SuburbanSUV.png" alt="car" />
                          <h3>Suburban SUV</h3>
                          <p>6 Seats : <span> 8 luggages </span></p>
                          <div className="capacity">
                            <img src="/images/capacity1.png" alt="" />
                            <img src="/images/capacity2.png" alt="" />
                          </div>
                          <div onClick={onOpen} className="book_white_btn"><img className="" src="/images/book_white.png"
                            alt="" /></div>
                        </div>
                      </div>
                      <div className="col-lg-3 clo-md-6 col-sm12 bootstrap_card_column">
                        <div className="car_card">
                          <img src="/images/cadillac.png" alt="car" />
                          <h3>Cadillac CT6 Sedan</h3>
                          <p>4 Seats : <span>2 Luggages </span></p>
                          <div className="capacity">
                            <img src="/images/capacity1.png" alt="" />
                            <img src="/images/capacity2.png" alt="" />
                          </div>
                          <div onClick={onOpen} className="book_white_btn"><img className="" src="/images/book_white.png"
                            alt="" /></div>
                        </div>
                      </div>
                      <div className="col-lg-3 clo-md-6 col-sm12 bootstrap_card_column">
                        <div className="car_card">
                          <img src="/images/mercedesBenz.png" alt="car" />
                          <h3>Mercedes Benz S Class</h3>
                          <p>4 Seats : <span> 2 luggages </span></p>
                          <div className="capacity">
                            <img src="/images/21.png" alt="" />

                            <img src="/images/capacity2.png" alt="" />
                          </div>
                          <div onClick={onOpen} className="book_white_btn"><img className="" src="/images/book_white.png"
                            alt="" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-3 clo-md-6 col-sm12 bootstrap_card_column">
                        <div className="car_card">
                          <img src="/images/21.png" alt="car" />
                          <h3>Airport – O’Fallon125</h3>
                          <p>Single Trip : <span>$150 </span></p>
                          <div className="capacity">
                            <img src="/images/capacity1.png" alt="" />
                            <img src="/images/capacity2.png" alt="" />
                          </div>
                          <div onClick={onOpen} className="book_white_btn"><img className="" src="/images/book_white.png"
                            alt="" /></div>
                        </div>
                      </div>
                      <div className="col-lg-3 clo-md-6 col-sm12 bootstrap_card_column">
                        <div className="car_card">
                          <img src="/images/21.png" alt="car" />
                          <h3>Airport – Lake St. Louis</h3>
                          <p>Single Trip : <span>$175 </span></p>
                          <div className="capacity">
                            <img src="/images/capacity1.png" alt="" />
                            <img src="/images/capacity2.png" alt="" />
                          </div>
                          <div onClick={onOpen} className="book_white_btn"><img className="" src="/images/book_white.png"
                            alt="" /></div>
                        </div>
                      </div>
                      <div className="col-lg-3 clo-md-6 col-sm12 bootstrap_card_column">
                        <div className="car_card">
                          <img src="/images/1111.png" alt="car" />
                          <h3>Airport – Chesterfield</h3>
                          <p>Single Trip : <span>$100 </span></p>
                          <div className="capacity">
                            <img src="/images/capacity1.png" alt="" />

                            <img src="/images/capacity2.png" alt="" />
                            <p>x5</p>
                          </div>
                          <div onClick={onOpen} className="book_white_btn"><img className="" src="/images/book_white.png"
                            alt="" /></div>
                        </div>
                      </div>
                      <div className="col-lg-3 clo-md-6 col-sm12 bootstrap_card_column">
                        <div className="car_card">
                          <img src="/images/wwww.png" alt="car" />
                          <h3>Airport – Wildwood</h3>
                          <p>Single Trip : <span>$150 </span></p>
                          <div className="capacity">
                            <img src="/images/capacity1.png" alt="" />

                            <img src="/images/capacity2.png" alt="" />
                          </div>
                          <div onClick={onOpen} className="book_white_btn"><img className="" src="/images/book_white.png"
                            alt="" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-3 clo-md-6 col-sm12 bootstrap_card_column">
                        <div className="car_card">
                          <img src="/images/car1.png" alt="car" />
                          <h3>Airport – Downtown</h3>
                          <p>Single Trip : <span>$100 </span></p>
                          <div className="capacity">
                            <img src="/images/capacity1.png" alt="" />
                            <p>x6</p>
                            <img src="/images/capacity2.png" alt="" />
                            <p>x5</p>
                          </div>
                          <div onClick={onOpen} className="book_white_btn"><img className="" src="/images/book_white.png"
                            alt="" /></div>
                        </div>
                      </div>
                      <div className="col-lg-3 clo-md-6 col-sm12 bootstrap_card_column">
                        <div className="car_card">
                          <img src="/images/21.png" alt="car" />
                          <h3>Airport – Clayton</h3>
                          <p>Single Trip : <span>$75 </span></p>
                          <div className="capacity">
                            <img src="/images/capacity1.png" alt="" />
                            <p>x6</p>
                            <img src="/images/capacity2.png" alt="" />
                            <p>x5</p>
                          </div>
                          <div onClick={onOpen} className="book_white_btn"><img className="" src="/images/book_white.png"
                            alt="" /></div>
                        </div>
                      </div>
                      <div className="col-lg-3 clo-md-6 col-sm12 bootstrap_card_column">
                        <div className="car_card">
                          <img src="/images/1111.png" alt="car" />
                          <h3>Airport – Chesterfield</h3>
                          <p>Single Trip : <span>$100 </span></p>
                          <div className="capacity">
                            <img src="/images/capacity1.png" alt="" />
                            <p>x6</p>
                            <img src="/images/capacity2.png" alt="" />
                            <p>x5</p>
                          </div>
                          <div onClick={onOpen} className="book_white_btn"><img className="" src="/images/book_white.png"
                            alt="" /></div>
                        </div>
                      </div>
                      <div className="col-lg-3 clo-md-6 col-sm12 bootstrap_card_column">
                        <div className="car_card">
                          <img src="/images/wwww.png" alt="car" />
                          <h3>Airport – Wildwood</h3>
                          <p>Single Trip : <span>$150 </span></p>
                          <div className="capacity">
                            <img src="/images/capacity1.png" alt="" />
                            <p>x6</p>
                            <img src="/images/capacity2.png" alt="" />
                            <p>x5</p>
                          </div>
                          <div onClick={onOpen} className="book_white_btn"><img className="" src="/images/book_white.png"
                            alt="" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row Chauffeur">
              <div className="col-lg-6 col-md-6 col-sm-12 Chauffeur_left" data-aos="zoom-in-up">
                <h2>
                  World Class Chauffeur <br />
                  <span>Going The Extra Mile </span>
                </h2>
                <p>
                  We offer attractive prices that will make you smile, twice!
                  Please contact us today or book online.
                </p>
                <div onClick={onOpen}><img src="/images/book_now.png" alt="Book now" className="chauffur_book_btn" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 Chauffeur_right" data-aos="zoom-in-up">
                <img src="/images/smiling-businessman.png" alt="" className="smile_busness" />
              </div>
            </div>
          </div>
          <div className="travel">
            <div className="container pt-5 travel_container">
              <div className="row pt-5">
                <div className="col-lg-5 col-md-5 col-sm-12 travel_left" data-aos="zoom-in-up">
                  <img src="/images/travel_img.png" alt="" className="travel_img" />
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12 travel_right" data-aos="zoom-in-up">
                  <h2>
                    Travel From A To B <br />
                    <span>In Style </span>
                  </h2>
                  <p>
                    We offer attractive prices that will make you smile, twice!
                    Please contact us today or book online.
                  </p>
                  <div onClick={onOpen}><img src="/images/book_now.png" alt="Book now" className="chauffur_book_btn" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="save" data-aos="zoom-in-up">
            <div className="save_content">
              <h2>Save <span>Big!</span></h2>
              <p>
                We offer attractive prices that will make you smile, twice! Please
                contact us today or book online.
              </p>
              <div onClick={onOpen} className="book_ride">Book Ride <i className="fa-solid fa-check ms-2"></i></div>
            </div>
          </div>


          <div className="testmonial_container">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 test_left">
                        <h2>
                          What&apos;s Our <span>Customer </span> <br />
                          Say
                        </h2>
                        <div className="test_left_container">
                          I&apos;ve hired Black Car Service on multiple business trips, and each time the experience has been outstanding. The cars are always spotless, and the drivers are always professional and kind. I wholeheartedly suggest their services to anyone seeking a first-rate travel experience.
                          <img src="/images/Group622.png" alt="test_img" />
                          <div className="test_left_complement">
                            <h4>John T.</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 test_right">
                        <img src="/images/Group620.png" alt="group_620" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 test_left">
                        <h2>
                          What&apos;s Our <span>Customer </span> <br />
                          Say
                        </h2>
                        <div className="test_left_container">
                        I recently hired Black Car Service for my wedding and couldn&apos;t be more pleased with the results. The driver was on time, kind, and went above and beyond to ensure that everything went properly. The car was very stunning and added to the day&apos;s overall elegance. I wholeheartedly recommend this company!
                          <img src="/images/Group622.png" alt="test_img" />
                          <div className="test_left_complement">
                            <h4>Sarah L.</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 test_right">
                        <img src="/images/Group620.png" alt="group_620" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 test_left">
                        <h2>
                          What&apos;s Our <span>Customer </span> <br />
                          Say
                        </h2>
                        <div className="test_left_container">
                        I travel regularly for work, and I always use Black Car Service for airport transfers. Even for early morning flights, the drivers are always on time, and the cars are elegant and comfy. I value the dependability and attention to detail that this company offers. Highly recommended!
                          <img src="/images/Group622.png" alt="test_img" />
                          <div className="test_left_complement">
                            <h4> Mr. David M.</h4>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 test_right">
                        <img src="/images/Group620.png" alt="group_620" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="service_container" data-aos="zoom-in-up">
            <div className="service_shadow">
              <div className="service">
                <h2>Looking For</h2>
                <h3>Special <span> Offers?</span></h3>

                <p>We offer exotic car services in your range</p>
                <a href="#">Subscribe Now <i className="fa-solid fa-arrow-right fa-sm"></i></a>
              </div>
            </div>
          </div>

          <div className="Main_footer_content">
            <div className="footer_content">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12 footer_left">
                  <img src="/images/v.png" alt="footer logo" />
                  <p>Black Car Services will accommodate your travel needs.</p>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 footer">
                  <h4>Company</h4>
                  <ul>
                    <li><a href="Home.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="booking.html">Booking</a></li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 footer">
                  <h4>Information</h4>
                  <ul>
                    <li><a href=""> Lorem</a></li>
                    <li><a href="">service</a></li>
                    <li><a href="">Contact Us</a></li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12 footer">
                  <h4>Events</h4>
                  <ul>
                    <li><a href="">Wedding</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href=""> Special Event</a></li>
                  </ul>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-12 footer_social_container">
                  <h4>Follow us</h4>
                  <ul className="footer_social">
                    <li>
                      <a href=""><i className="fa-brands fa-whatsapp-square"></i></a>
                    </li>
                    <li>
                      <a href=""> <i className="fa-brands fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href=""><i className="fa-brands fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href=""><i className="fa-brands fa-instagram-square"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p>
              Copyright &nbsp; <i className="fa-solid fa-copyright"></i>&nbsp; 2022 RM
              Enterprise
            </p>
          </div>
        </div>
      </div>
      <BookingModal open={open} onClose={onClose}  />
    </>
  )
}
