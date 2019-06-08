import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import pic1 from '../images/pic01.jpg';
import pic2 from '../images/pic02.jpg';
import pic3 from '../images/pic03.jpg';
import Sidebar from '../components/Sidebar';
import Scroll from '../components/Scroll';

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <section id="intro" className="wrapper style1 fullscreen fade-up">
        <div className="inner">
          <h1>True North Community Safety Consulting</h1>
          <p>
            We specialize in Indigenous community safety and regulatory enforcement program development.
            We have the experience and knowledge to help your Nation or Band, set up a robust enforcement
            scheme that will be able to address your current issues, and flexible enough to grow with your
            needs. At True North Community Safety, we want to work with you to build and sustain a healthier,
            safer community.
          </p>
          <ul className="actions">
            <li>
              <Scroll type="id" element="one">
                <a href="#one" className="button">
                  Learn more
                </a>
              </Scroll>
            </li>
          </ul>
        </div>
      </section>

      <section id="team" className="wrapper style2 spotlights">
        <section>
          <a href="/#" className="image" alt="image">
            <img src={pic1} alt="" data-position="center center" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>Sed ipsum dolor</h2>
              <p>
                Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
                turpis mauris, eu ultricies erat malesuada quis. Aliquam
                dapibus.
              </p>
              <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href="/#" className="image">
            <img src={pic2} alt="" data-position="top center" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>Feugiat consequat</h2>
              <p>
                Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
                turpis mauris, eu ultricies erat malesuada quis. Aliquam
                dapibus.
              </p>
              <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href="/#" className="image">
            <img src={pic3} alt="" data-position="25% 25%" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>Ultricies aliquam</h2>
              <p>
                Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
                turpis mauris, eu ultricies erat malesuada quis. Aliquam
                dapibus.
              </p>
              <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>

      <section id="about" className="wrapper style3 fade-up">
        <div className="inner">
          <h2>What we do</h2>
          <div className="features">
            <section>
              <span className="icon major fa-code" />
              <h3>Law and Bylaw Development and Review</h3>
              <p>
                TNCSC can help Nations and Bands draft appropriate laws and bylaws that will address community
                safety, and or other regulatory enforcement issues such as trespass, nuisance, illegal dumping,
                etc.
              </p>
            </section>
            <section>
              <span className="icon major fa-lock" />
              <h3>Community Safety Program Development</h3>
              <p>
                We have experience working with Indigenous communities in creating robust community safety
                programs that deal with the social issues experience on reserve land. TNCSC can conduct a
                community needs assessment and provide recommendations to the leadership on how to best address
                the issues.
              </p>
            </section>
            <section>
              <span className="icon major fa-cog" />
              <h3>Animal Control Program Development</h3>
              <p>
                At TNCSC, we recognize that there are issues related to animal control issues on reserve. We can
                help develop Animal Control laws, bylaws, and regulations, to help deal with issues related to
                aggressive dogs, illegal breeding, or over breeding, and animal cruelty.
              </p>
            </section>
            <section>
              <span className="icon major fa-desktop" />
              <h3>Community Safety and Regulator Enforcement Training</h3>
              <p>
                TNCSC has the experience and knowledge on the types of training a community may need when they
                begin their first steps towards making their land safer. Please contact us to see what type of
                training may be the most suitable for your community.
              </p>
            </section>
            <section>
              <span className="icon major fa-chain" />
              <h3>Community Stabilization</h3>
              <p>
                If you believe your community is in need of assistance due to issues related to safety,
                please contact us to see what types of assistance we may be able to provide.
              </p>
            </section>
            <section>
              <span className="icon major fa-diamond" />
              <h3>Aliquam urna dapibus</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
          </div>
          <ul className="actions">
            <li>
              <Link className="button" to="/generic">
                Learn more
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section id="three" className="wrapper style1 fade-up">
        <div className="inner">
          <h2>Get in touch</h2>
          <p>
            Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
            turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus,
            lacus eget hendrerit bibendum, urna est aliquam sem, sit amet
            imperdiet est velit quis lorem.
          </p>
          <div className="split style1">
            <section>
              <form method="post" action="#">
                <div className="fields">
                  <div className="field half">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="field half">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" />
                  </div>
                  <div className="field">
                    <label for="message">Message</label>
                    <textarea name="message" id="message" rows="5" />
                  </div>
                </div>
                <ul className="actions">
                  <li>
                    <a href="/#" className="button submit">
                      Send Message
                    </a>
                  </li>
                </ul>
              </form>
            </section>
            <section>
              <ul className="contact">
                <li>
                  <h3>Address</h3>
                  <span>
                    12345 Somewhere Road #654
                    <br />
                    Nashville, TN 00000-0000
                    <br />
                    USA
                  </span>
                </li>
                <li>
                  <h3>Email</h3>
                  <a href="/#">user@untitled.tld</a>
                </li>
                <li>
                  <h3>Phone</h3>
                  <span>(000) 000-0000</span>
                </li>
                <li>
                  <h3>Social</h3>
                  <ul className="icons">
                    <li>
                      <a href="/#" className="fa-twitter">
                        <span className="label">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="fa-facebook">
                        <span className="label">Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="fa-github">
                        <span className="label">GitHub</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="fa-instagram">
                        <span className="label">Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="fa-linkedin">
                        <span className="label">LinkedIn</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
