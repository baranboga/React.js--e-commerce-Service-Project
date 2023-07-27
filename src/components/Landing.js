import React, { useEffect, useState } from 'react'
import { checkToken } from '../request/login';
import { Navigate, useNavigate } from 'react-router-dom';
import { getProducts, productType } from '../request/product';
import '../assets/css/templatemo-eduwell-style.css';
import '../assets/css/flex-slider.css';
import '../assets/css/lightbox.css';
import '../assets/fonts/flexslider-icon.svg';
import '../assets/fonts/fontawesome-webfont.svg';
import '../assets/fonts/slick.svg';
import ha from '../assets/images/banner-right-image.png';





export default function Landing() {
  let navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [usta, setusta] = useState();


  useEffect(() => {
    let token = localStorage.getItem('token');
    let ustaa = localStorage.getItem('usta');
    setusta(ustaa);



  })

  return (


    <>


      <section class="main-banner" id="top">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="header-text">
                <h6>Kolay iş ve işçi bulma dünyasına hoş geldin</h6>
                <h2>En iyi ve Kaliteli işler artık <em style={{ color: "#71b85f" }}>Kolayca!</em></h2>
                <div class="main-button-gradient">
                  <div class="scroll-to-section"><a href="/home">Bize Katıl!</a></div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="right-image">
                <img src={ha} />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="services" id="services">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading">
                <h6 style={{ color: "#71b85f" }}>Kolayca</h6>
                <h4>Sağladığımız <em style={{ color: "#71b85f" }}>Hizmetler</em></h4>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="owl-service-item owl-carousel">
                <div class="item">
                  <div class="service-item">
                    <div class="icon">
                      <img style={{width:"30rem"}} src="https://images.pexels.com/photos/5428267/pexels-photo-5428267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <h4>Eğitim</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, distinctio.</p>
                  </div>
                </div>
                <div className="item">
                  <div className="service-item" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="icon" style={{ marginBottom: '20px' }}>
                      <img style={{ width: '30rem' }} src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <h4>Tamir ve Tadilat</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, labore.</p>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="service-item">
                    <div class="icon">
                      <img style={{width:"30rem"}} src="https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <h4></h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, tempora.</p>
                  </div>
                </div>
                <div class="item">
                  <div class="service-item">
                    <div class="icon">
                      <img style={{width:"30rem"}} src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                    <h4>Teknoloji</h4>
                    <p>Aenean bibendum consectetur ex eu porttitor. Pellentesque id ultrices metus.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="our-courses" id="courses">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="section-heading">
                <h6>Neden Biz?</h6>
                <h4>Neler Yapabilceğini <em style={{ color: "#71b85f" }}>Öğren</em></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, molestiae?</p>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="naccs">
                <div class="tabs">
                  <div class="row">
                    <div class="col-lg-3">
                      <div class="menu">
                        <div class="active gradient-border"><span>Ne Arardın?</span></div>
                        <div class="gradient-border"><span>Hizmet Al</span></div>
                        <div class="gradient-border"><span>İlan Ver</span></div>
                        <div class="gradient-border"><span>Bizimle Çalış</span></div>
                      </div>
                    </div>
                    <div class="col-lg-9">
                      <ul class="nacc">
                        <li class="active">
                          <div>
                            <div class="left-image">
                              <img src="https://images.pexels.com/photos/2610309/pexels-photo-2610309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img-fluit' style={{ height: "25rem" }} alt="" />

                            </div>
                            <div class="right-content">
                              <h4>Kolayca ile tanış</h4>
                              <p>Lorem, ipsum dolor. for latest listing of HTML templates and a variety of useful templates.
                                <br /><br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quos a quod optio fuga minima. Recusandae dolor unde iste architecto adipisci dignissimos quod, natus quia, laudantium ipsam placeat mollitia nemo.</p>
                              <span>7 Gün</span>
                              <span>24 Saat</span>

                              <div class="text-button">
                                <a href="/singin">Kayıt ol</a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div class="left-image">
                              <img src="assets/images/courses-02.jpg" alt="" />
                              <div class="price"><h6>$156</h6></div>
                            </div>
                            <div class="right-content">
                              <h4>Creative Graphic Design</h4>
                              <p>You are not allowed to redistribute this template ZIP file on any other website without a permission from us.<br /><br />There are some unethical people on this world copied and reposted our templates without any permission from us. Their Karma will hit them really hard. Yeah!</p>
                              <span>48 Hours</span>
                              <span>6 Weeks</span>
                              <span class="last-span">1 Certificate</span>
                              <div class="text-button">
                                <a href="contact-us.html">Subscribe Course</a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div class="left-image">
                              <img src="assets/images/courses-03.jpg" alt="" />
                              <div class="price"><h6>$184</h6></div>
                            </div>
                            <div class="right-content">
                              <h4>Web Design</h4>
                              <p>Quinoa roof party squid prism sustainable letterpress cray hammock tumeric man bun mixtape tofu subway tile cronut. Deep v ennui subway tile organic seitan.<br /><br />Kogi VHS freegan bicycle rights try-hard green juice probably haven't heard of them cliche la croix af chillwave.</p>
                              <span>28 Hours</span>
                              <span>4 Weeks</span>
                              <span class="last-span">1 Certificate</span>
                              <div class="text-button">
                                <a href="contact-us.html">Subscribe Course</a>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div class="left-image">
                              <img src="assets/images/courses-04.jpg" alt="" />
                              <div class="price"><h6>$76</h6></div>
                            </div>
                            <div class="right-content">
                              <h4>WordPress Introduction</h4>
                              <p>Quinoa roof party squid prism sustainable letterpress cray hammock tumeric man bun mixtape tofu subway tile cronut. Deep v ennui subway tile organic seitan.<br /><br />Kogi VHS freegan bicycle rights try-hard green juice probably haven't heard of them cliche la croix af chillwave.</p>
                              <span>48 Hours</span>
                              <span>4 Weeks</span>
                              <span class="last-span">2 Certificates</span>
                              <div class="text-button">
                                <a href="contact-us.html">Subscribe Course</a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="simple-cta">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 offset-lg-1">
              <div class="left-image">
                <img src="assets/images/cta-left-image.png" alt="" />
              </div>
            </div>
            <div class="col-lg-5 align-self-center">
              <h6>Hemen Başla!</h6>
              <h4>İlk ilana özel 50% indirimleri kaçırma</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, doloremque.</p>
              <div class="white-button">
                <a href="contact-us.html">Hizmetlere bak</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
  <section class="testimonials" id="testimonials">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <h6>Testimonials</h6>
            <h4>What They <em>Think</em></h4>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="owl-testimonials owl-carousel" style="position: relative; z-index: 5;">
            <div class="item">
              <p>“just think about TemplateMo if you need free CSS templates for your website”</p>
                <h4>Catherine Walk</h4>
                <span>CEO &amp; Founder</span>
                <img src="assets/images/quote.png" alt=""/>
            </div>
            <div class="item">
              <p>“think about our website first when you need free HTML templates for your website”</p>
                <h4>David Martin</h4>
                <span>CTO of Tech Company</span>
                <img src="assets/images/quote.png" alt=""/>
            </div>
            <div class="item">
              <p>“just think about our website wherever you need free templates for your website”</p>
                <h4>Sophia Whity</h4>
                <span>CEO and Co-Founder</span>
                <img src="assets/images/quote.png" alt=""/>
            </div>
            <div class="item">
              <p>“Praesent accumsan condimentum arcu, id porttitor est semper nec. Nunc diam lorem.”</p>
                <h4>Helen Shiny</h4>
                <span>Tech Officer</span>
                <img src="assets/images/quote.png" alt=""/>
            </div>
            <div class="item">
              <p>“Praesent accumsan condimentum arcu, id porttitor est semper nec. Nunc diam lorem.”</p>
                <h4>George Soft</h4>
                <span>Gadget Reviewer</span>
                <img src="assets/images/quote.png" alt=""/>
            </div>
            <div class="item">
              <p>“Praesent accumsan condimentum arcu, id porttitor est semper nec. Nunc diam lorem.”</p>
                <h4>Andrew Hall</h4>
                <span>Marketing Manager</span>
                <img src="assets/images/quote.png" alt=""/>
            </div>
            <div class="item">
              <p>“Praesent accumsan condimentum arcu, id porttitor est semper nec. Nunc diam lorem.”</p>
                <h4>Maxi Power</h4>
                <span>Fashion Designer</span>
                <img src="assets/images/quote.png" alt=""/>
            </div>
            <div class="item">
              <p>“Praesent accumsan condimentum arcu, id porttitor est semper nec. Nunc diam lorem.”</p>
                <h4>Olivia Too</h4>
                <span>Creative Designer</span>
                <img src="assets/images/quote.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> */}

      {/* <section class="contact-us" id="contact-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div id="map">
          
          
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7151.84524236698!2d-122.19494600413192!3d47.56605883252286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490695e625f8965%3A0xf99b055e76477def!2sNewcastle%20Beach%20Park%20Playground%2C%20Bellevue%2C%20WA%2098006%2C%20USA!5e0!3m2!1sen!2sth!4v1644335269264!5m2!1sen!2sth" width="100%" height="420px" frameborder="0" style="border:0; border-radius: 15px; position: relative; z-index: 2;" allowfullscreen=""></iframe>
            <div class="row">
              <div class="col-lg-4 offset-lg-1">
                <div class="contact-info">
                  <div class="icon">
                    <i class="fa fa-phone"></i>
                  </div>
                  <h4>Phone</h4>
                  <span>010-020-0340</span>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="contact-info">
                  <div class="icon">
                    <i class="fa fa-phone"></i>
                  </div>
                  <h4>Mobile</h4>
                  <span>090-080-0760</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <form id="contact" action="" method="post">
            <div class="row">
              <div class="col-lg-12">
                <div class="section-heading">
                  <h6>Contact us</h6>
                  <h4>Say <em>Hello</em></h4>
                  <p>IF you need a working contact form by PHP script, please visit TemplateMo's contact page for more info.</p>
                </div>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <input type="name" name="name" id="name" placeholder="Full Name" autocomplete="on" required/>
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required=""/>
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <textarea name="message" id="message" placeholder="Your Message"></textarea>
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" class="main-gradient-button">Send Message</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
        <div class="col-lg-12">
          <ul class="social-icons">
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="#"><i class="fa fa-rss"></i></a></li>
            <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
          </ul>
        </div>
        <div class="col-lg-12">
          <p class="copyright">Copyright © 2022 EduWell Co., Ltd. All Rights Reserved. 
          
          <br/>Design: <a rel="sponsored" href="https://templatemo.com" target="_blank">TemplateMo</a></p>
        </div>
      </div>
    </div>
  </section> */}












    </>


  )
}