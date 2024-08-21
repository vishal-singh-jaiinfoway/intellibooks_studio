import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

// layout
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components 
import { NioSection, NioButton, NioMedia, NioCard, NioSubscribeField, NioIcon } from '../../../components';

// section content 
import ContactForm from '../../../components/PageComponents/SectionComponents/ContactForm/ContactForm';

function index() {
  return (
    <AppLayout title="Contact" rootClass="layout-1">

      {/*  Contact Section Start  */}
      <NioSection className="pt-120 pt-lg-160" masks={["blur-1 left center"]}>
        <NioSection.Head alignX="center">
        <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >NEES SUPPORTS</span>
          <h2>Contact Us</h2>
          <p className="fs-20"> Contact us for any inquiries or support you may need. Our dedicated team is ready to assist you and provide the best solutions. </p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5 gy-xl-0">
            <Col md={6} xl={4} >
              <NioCard className="h-100 bg-blue-50 border-0">
                <NioCard.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <NioMedia size="lg" rounded variant="primary" icon="cc-alt2-fill" className="mb-3 mb-md-5" />
                    <h4>Billing &amp; Payments</h4>
                    <p className="line-clamp-3">Manage your billing and payments effortlessly with our user-friendly platform. Stay on top of your financial transactions and ensure smooth and secure payment processes.</p>
                    <NioButton href="/contact-us" className="btn-link mt-3 text-primary" icon="arrow-right after" label="Contact Us" />
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} xl={4} >
              <NioCard className="h-100 bg-blue-50 border-0">
                <NioCard.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <NioMedia size="lg" rounded variant="primary" icon="users-fill" className="mb-3 mb-md-5" />
                    <h4>Users and Collaboration</h4>
                    <p className="line-clamp-3">Connect and collaborate with users seamlessly on our platform. Share information, assign tasks, and work together efficiently to achieve your goals. Foster a productive and collaborative environment for your team with our user-centric features.</p>
                    <NioButton href="/blogs" className="btn-link mt-3 text-primary" icon="arrow-right after" label="Our Blogs" />
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} xl={4}>
              <NioCard className="h-100 bg-blue-50 border-0" >
                <NioCard.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <NioMedia size="lg" rounded variant="primary" icon="puzzle-fill" className="mb-3 mb-md-5" />
                    <h4>Features and Integrations</h4>
                    <p className="line-clamp-3">Unlock a wide range of features and integrations to enhance your workflow. From project management and communication tools to data analytics and automation, our platform offers a comprehensive suite of features that cater to your business needs. Seamlessly integrate with popular apps and services to streamline your operations and boost productivity.</p>
                    <NioButton href="/about" className="btn-link mt-3 text-primary" icon="arrow-right after" label="About Us" />
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Contact Section End  */}

      {/*  Support Section Start  */}
      <NioSection masks={["blur-1 right center"]}>
        <NioSection.Head alignX="center">
        <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >CONTACT SUPPORTS</span>
          <h2>Get in touch</h2>
          <p className="fs-20">Get in touch for personalized assistance. We're here to help and provide solutions tailored to your requirements.</p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5">
            <Col lg={12} >
              <ContactForm />
            </Col>
            <Col lg={4}>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Support Section End  */}

      {/*  CTA Section Start  */}
      <NioSection>
        <NioSection.Content>
          <div className="nk-cta-wrap nk-cta-card bg-primary-gradient rounded-3 is-theme position-relative overflow-hidden" >
            <Row className="g-0 align-items-center overflow-hidden">
              <Col xs={{ order: 2 }} lg={{ span: 7, order: 0 }}>
                <div className="nk-block-head-content mb-0">
                  <h2 className="newsletter-heading text-capitalize h1 m-0 mb-4 mb-lg-7">Start tracking your user analytics to boost your business</h2>
                  <ul className="nk-btn-group flex-wrap ps-1">
                    <li>
                      <NioButton href="https://ibprocess.intellibooks.io/signin" target="_blank" className="btn-lg btn-white text-dark" label="Get Started" />
                    </li>
                    <li>
                      <NioButton href="/pricing" className="btn-lg btn-outline-white" label="Pricing &amp; Plans" />
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={{ order: 1 }} lg={{ span: 5, order: 0 }}>
                <div className="nk-cta-img-wrap text-end ps-5 pt-7 pt-lg-0 ps-sm-6 ps-lg-0">
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
              <p className="fs-16">More than 10+ models to choose from IntellibooksStudio</p>
            </div>
          </Col>
          <Col md={10} lg={6} xl={5}>
            <NioSubscribeField variant="one" />
          </Col>
        </Row>
      </NioSection>
      {/*  Newsletter Section End  */}
    </AppLayout >
  )
}

export default index;