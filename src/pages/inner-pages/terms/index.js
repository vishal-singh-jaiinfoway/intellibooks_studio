import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

// layout 
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// section content 
import { NioButton, NioSection, NioSubscribeField } from '../../../components';

function index() {
  return (
    <AppLayout variant={2} title="Terms and Conditions" rootClass="layout-1">

      {/*  Terms Section Start  */}
      <NioSection className="pt-120 pt-lg-180" masks={["blur-1 left top", "blur-1 right bottom"]}>
        <div className="nk-block-head md">
          <div className="nk-section-head pb-0">
            <nav>
              <ol className="breadcrumb mb-3 mb-md-4">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Terms &amp; Conditions</li>
              </ol>
            </nav>
            <h2>Terms &amp; Conditions</h2>
          </div>
          <hr className="mt-5 mb-0" />
        </div>
        <NioSection.Content>
          <Row className="g-gs pt-3">
            <Col lg={3}>
              <div className="nk-entry-sidebar">
                <ul className="nk-list-link nk-list-link-page flush">
                  <li className="active">
                    <Link to="#" className="fs-16">Term &amp; Conditions</Link>
                  </li>
                  {/* <li>
                    <Link to="#" className="fs-16">Privacy Policy</Link>
                  </li> */}
                  {/* <li>
                    <Link to="#" className="fs-16">Platform Agreement</Link>
                  </li>
                  <li>
                    <Link to="#" className="fs-16">Offer Terms</Link>
                  </li>
                  <li>
                    <Link to="#" className="fs-16">Prohibited Activities</Link>
                  </li> */}
                </ul>
              </div>
            </Col>
            <Col lg={9}>
              <div className="nk-entry-wrap pt-3 ps-lg-5">
                <div className="nk-entry">
                  <div className="pb-5">
                    <h5>PERSONAL INFORMATION WE COLLECT</h5>
                    <p className="fs-16">When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”</p>
                    <p className="fs-16">We collect Device Information using the following technologies:
                      – “Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
                      – “Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.
                      Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, email address, and phone number. We refer to this information as “Order Information.”
                      When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.</p>

                    <h5>HOW DO WE USE YOUR PERSONAL INFORMATION?
                    </h5>

                    <p className="fs-16">We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations). Additionally, we use this Order Information to: Communicate with you;
                      Screen our orders for potential risk or fraud; and When in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.
                    </p>
                    <p className="fs-16">We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).</p>
                  </div>
                  <div className="pb-5">
                    <h5>SHARING YOUR PERSONAL INFORMATION</h5>
                    <p className="fs-16">We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Shopify to power our online store–you can read more about how Shopify uses your Personal Information here: https://www.shopify.com/legal/privacy. We also use Google Analytics to help us understand how our customers use the Site–you can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here: https://tools.google.com/dlpage/gaoptout.
                      Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</p>
                  </div>
                  <div className="pb-5">
                    <h5>BEHAVIOURAL ADVERTISING</h5>
                    <p className="fs-16">As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s (“NAI”) educational page at http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
                    </p>
                  </div>
                  <div className="pb-5">
                    <h5>DO NOT TRACK</h5>
                    <p className="fs-16">Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.
                    </p>
                  </div>

                  <div className="pb-5">
                    <h5>DATA RETENTION
                    </h5>
                    <p className="fs-16">When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.

                    </p>
                  </div>
                </div>
                {/*  .nk-entry  */}
              </div>
              {/*  .nk-entry-wrap  */}
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Terms Section End  */}

      {/*  CTA Section Start  */}
      <NioSection>
        <NioSection.Content>
          <div className="nk-cta-wrap nk-cta-card bg-primary-gradient rounded-3 is-theme position-relative overflow-hidden" >
            <Row className="g-0 align-items-center overflow-hidden">
              <Col xs={{ order: 2 }} lg={{ span: 7, order: 0 }}>
                <div className="nk-block-head-content  mb-0">
                  <h2 className="newsletter-heading text-capitalize h1 m-0 mb-4 mb-lg-7">Combine The Magic Of AI With The Power Of IntellibooksStudio To Make LLM Do More Work For You.</h2>
                  <ul className="nk-btn-group flex-wrap ps-1">
                    <li>
                      <NioButton href="https://ibprocess.intellibooks.io/signin" target="_blank" className="btn-lg btn-white text-dark" label="Get Started" />
                    </li>
                    <li>
                      <NioButton href="/blogs" className="btn-lg btn-outline-white" label="Our Blogs" />
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={{ order: 0 }} lg={{ span: 5, order: 0 }}>
                <div className="nk-cta-img-wrap text-end  ps-5 pt-7 pt-lg-0 ps-sm-6 ps-lg-0">
                  <img src="images/thumb/a1.png" alt="tracking-thumb" className="me-n1" />
                </div>
              </Col>
            </Row>
          </div>
        </NioSection.Content>
      </NioSection>
      {/*  CTA Section End  */}

      {/*  Newsletter Section Start  */}
      <NioSection className="nk-newsletter-section pb-lg-0">
        <Row className="justify-content-center justify-content-lg-between align-items-center pb-5 border-bottom border-lighter">
          <Col lg={6} xl={4}>
            <div className="nk-newsletter-content text-center text-lg-start pb-5 pb-lg-0">
              <h4 className="text-capitalize">Subscribe to our newsletter</h4>
              {/* <p className="fs-16">Join the 5000+ People That Uses Softnio Products.</p> */}
            </div>
          </Col>
          <Col md={10} lg={6} xl={5}>
            <NioSubscribeField variant="one" />
          </Col>
        </Row>
      </NioSection>
      {/*  Newsletter Section End  */}

    </AppLayout>
  )
}

export default index;