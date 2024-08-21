import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// layout
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components
import { NioButton, NioCard, NioIcon, NioMedia, NioSection, NioSubscribeField } from '../../../components';

// section content 
import TestimonialContent from '../../../components/PageComponents/InnerPages/Careers/TestimonialContent/TestimonialContent';

function index() {

  return (
    <AppLayout title="Careers" rootClass="layout-1" >

      {/*  Team Section Start   */}
      <section className="nk-section nk-section-teams pt-120 pt-lg-160" >
        <div className="nk-mask blur-1 left top"></div>
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} xl={6}>
              <div className="nk-section-head text-center">
                <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >JOIN OUR TEAM</span>
                <h2 >Propel Your Professional Journey</h2>
                <p className="fs-20 mb-0" > Catapult your career trajectory skywards with IntelliGen AI's extensive suite of development tools, bespoke mentorship programs, and deep industry insights</p>
                <ul className="nk-btn-group justify-content-center pt-5">
                  <li>
                    <NioButton href="/blogs" label="Learn More" className="btn btn-primary" />
                  </li>
                  <li>
                    <NioButton href="/contact-us" label="Contact Us" className="btn btn-outline-primary" />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="nk-section-content">
          <TestimonialContent />
        </div>
      </section>
      {/*  Team Section End   */}

      {/*  Offer Section Start   */}
      <NioSection masks={["blur-1 right top"]}>
        <NioSection.Head alignX="center">
          <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >PERKS & BENEFITS</span>
          <h2>Discover a Suite of Employee-Centric Benefits
          </h2>
          <p className="fs-20"> At IntelliGen AI, we prioritize your holistic well-being and future prosperity by offering a meticulously curated benefits portfolio </p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5 justify-content-center">
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia rounded size="lg" variant="primary-soft" icon="home-fill" className="mb-5" />
                  <h4>Wellness Assurance</h4>
                  <p className="fs-16 mb-0">Extensive healthcare plans to safeguard your health and peace of mind.
                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia rounded size="lg" variant="primary-soft" icon="sun-fill" className="mb-5" />
                  <h4>Future Foresight</h4>
                  <p className="fs-16 mb-0">Forward-thinking retirement schemes to nurture your aspirations post-career.
                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia rounded size="lg" variant="primary-soft" icon="clock-fill" className="mb-5" />
                  <h4>Location Flexibility</h4>
                  <p className="fs-16 mb-0">Adapting to the new work culture, we provide versatile remote work arrangements.
                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia rounded size="lg" variant="primary-soft" icon="plus-medi-fill" className="mb-5" />
                  <h4>Boundless PTO</h4>
                  <p className="fs-16 mb-0">Our generous leave policy underscores our commitment to your work-life harmony and societal well-being.
                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia rounded size="lg" variant="primary-soft" icon="bar-chart-fill" className="mb-5" />
                  <h4>Adaptable Work Windows</h4>
                  <p className="fs-16 mb-0">We champion work-time flexibility to align with your unique rhythm and productivity cycles.
                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia rounded size="lg" variant="primary-soft" icon="building-fill" className="mb-5" />
                  <h4>Healthcare Commitment</h4>
                  <p className="fs-16 mb-0">Echoing the sentiments of industry professionals, we prioritize premium medical benefits.
                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>

        </NioSection.Content>
      </NioSection>
      {/*  Offer Section End   */}

      {/*  About-Info Section Start   */}
      <NioSection className="nk-section nk-section-info-about" masks={["blur-1 left center"]}>
        <NioSection.Content>
          <Row className="flex-row-reverse align-items-center justify-content-between">
            <Col lg={6}>
              <div className="nk-frame pb-md-7 pb-lg-0">
                <img src="images/career/section1.png" alt="section-cover" />
                {/* <div className="nk-frame-children">
                  <img src="images/career/section-cover-1-a.png" alt="section-cover" />
                </div> */}
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <div className="nk-section-head">
                  <h2>Cultivating Software Innovation
                  </h2>
                  <p className="fs-20">IntelliGen AI is where software development is redefined. We equip teams with a sophisticated, user-centric platform that makes building outstanding software an intuitive and collaborative experience. By joining us, you're not just crafting software—you're shaping the technology landscape. </p>
                </div>
                <NioButton href="/blogs" icon="arrow-right after" label="Learn More" className="btn btn-outline-primary" />
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  About-Info Section End   */}

      {/*  Positions Section Start   */}
      {/* <NioSection masks={["blur-1 right top", "blur-1 left bottom"]}>
        <NioSection.Head alignX="center">
        <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >OPEN POSITION</span>
          <h2>Come join us at IntellibooksStudio</h2>
          <p className="fs-20"> Join us at IntellibooksStudio and be part of our innovative and dynamic team. We offer exciting opportunities for growth. </p>
        </NioSection.Head>

        <NioSection.Content className="nk-section-content border rounded-3 p-5 p-md-7">
          <Row className="mb-5">
            <Col lg={3}>
              <h4 className="mb-5 mb-lg-0">Development</h4>
            </Col>
            <Col lg={9}>
              <div className="position-card ps-lg-2 pb-5 mb-5 border-bottom">
                <Row className="gx-5 justify-content-md-between align-items-center">
                  <Col md={8} className="position-card-info px-lg-0 mb-5 mb-md-0 ">
                    <h5 className="mb-2">Lead Backend Developer</h5>
                    <div className="d-flex gap-2 align-items-center text-primary mb-2">
                      <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="map-pin-fill" />
                        <span className="fs-14 fw-semibold text-uppercase"> san francisco</span>
                      </p> - <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="clock-fill" />
                        <span className="fs-14 fw-semibold text-uppercase">Full Time</span>
                      </p>
                    </div>
                    <p className="fs-14 line-clamp-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi in gravida sem enim sed in at euismod tortor et. Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi. lorem </p>
                  </Col>
                  <Col md={4} xl={3}>
                    <NioButton href="/career-details" label="Apply Now" className="btn btn-outline-dark border w-100" />
                  </Col>
                </Row>
              </div>
              <div className="position-card ps-lg-2 pb-5 mb-5 border-bottom">
                <Row className="gx-5 justify-content-md-between align-items-center">
                  <Col md={8} className="position-card-info px-lg-0 mb-5 mb-md-0 ">
                    <h5 className="mb-2">Full Stack Developer</h5>
                    <div className="d-flex gap-2 align-items-center text-primary mb-2">
                      <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="map-pin-fill" />
                        <span className="fs-14 fw-semibold text-uppercase"> san francisco</span>
                      </p> - <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="clock-fill" />
                        <span className="fs-14 fw-semibold text-uppercase">Full Time</span>
                      </p>
                    </div>
                    <p className="fs-14 line-clamp-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi in gravida sem enim sed in at euismod tortor et. Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi. lorem </p>
                  </Col>
                  <Col md={4} xl={3}>
                    <NioButton href="/career-details" label="Apply Now" className="btn btn-outline-dark border w-100" />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col lg={3}>
              <h4 className="mb-5 mb-lg-0">Design</h4>
            </Col>
            <Col lg={9}>
              <div className="position-card ps-lg-2 pb-5 mb-5 border-bottom">
                <Row className="gx-5 justify-content-md-between align-items-center">
                  <Col md={8} className="position-card-info px-lg-0 mb-5 mb-md-0">
                    <h5 className="mb-2">Senior Product Designer</h5>
                    <div className="d-flex gap-2 align-items-center text-primary mb-2">
                      <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="map-pin-fill" />
                        <span className="fs-14 fw-semibold text-uppercase"> san francisco</span>
                      </p> - <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="clock-fill" />
                        <span className="fs-14 fw-semibold text-uppercase">Full Time</span>
                      </p>
                    </div>
                    <p className="fs-14 line-clamp-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi in gravida sem enim sed in at euismod tortor et. Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi. lorem </p>
                  </Col>
                  <Col md={4} xl={3}>
                    <NioButton href="/career-details" label="Apply Now" className="btn btn-outline-dark border w-100" />
                  </Col>
                </Row>
              </div>
              <div className="position-card ps-lg-2 pb-5 mb-5 border-bottom">
                <Row className="gx-5 justify-content-md-between align-items-center">
                  <Col md={8} className="position-card-info px-lg-0 mb-5 mb-md-0">
                    <h5 className="mb-2">Senior UI/UX Designer</h5>
                    <div className="d-flex gap-2 align-items-center text-primary mb-2">
                      <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="map-pin-fill" />
                        <span className="fs-14 fw-semibold text-uppercase"> san francisco</span>
                      </p> - <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="clock-fill" />
                        <span className="fs-14 fw-semibold text-uppercase">Full Time</span>
                      </p>
                    </div>
                    <p className="fs-14 line-clamp-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi in gravida sem enim sed in at euismod tortor et. Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi. lorem </p>
                  </Col>
                  <Col md={4} xl={3}>
                    <NioButton href="/career-details" label="Apply Now" className="btn btn-outline-dark border w-100" />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
              <h4 className="mb-5 mb-lg-0">Marketing</h4>
            </Col>
            <Col lg={9}>
              <div className="position-card ps-lg-2 pb-5 mb-5 border-bottom">
                <Row className="gx-5 justify-content-md-between align-items-center">
                  <Col md={8} className="position-card-info px-lg-0 mb-5 mb-md-0">
                    <h5 className="mb-2">Head of Growth Hacking</h5>
                    <div className="d-flex gap-2 align-items-center text-primary mb-2">
                      <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="map-pin-fill" />
                        <span className="fs-14 fw-semibold text-uppercase"> san francisco</span>
                      </p> - <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="clock-fill" />
                        <span className="fs-14 fw-semibold text-uppercase">Full Time</span>
                      </p>
                    </div>
                    <p className="fs-14 line-clamp-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi in gravida sem enim sed in at euismod tortor et. Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi. lorem </p>
                  </Col>
                  <Col md={4} xl={3}>
                    <NioButton href="/career-details" label="Apply Now" className="btn btn-outline-dark border w-100" />
                  </Col>
                </Row>
              </div>
              <div className="position-card ps-lg-2 pb-5">
                <Row className="gx-5 justify-content-md-between align-items-center">
                  <Col md={8} className="position-card-info px-lg-0 mb-5 mb-md-0">
                    <h5 className="mb-2">Social Media & Community Manager</h5>
                    <div className="d-flex gap-2 align-items-center text-primary mb-2">
                      <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="map-pin-fill" />
                        <span className="fs-14 fw-semibold text-uppercase"> san francisco</span>
                      </p> - <p className="d-flex align-items-center gap-1 mb-0">
                        <NioIcon name="clock-fill" />
                        <span className="fs-14 fw-semibold text-uppercase">Full Time</span>
                      </p>
                    </div>
                    <p className="fs-14 line-clamp-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi in gravida sem enim sed in at euismod tortor et. Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi. lorem </p>
                  </Col>
                  <Col md={4} xl={3}>
                    <NioButton href="/career-details" label="Apply Now" className="btn btn-outline-dark border w-100" />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection> */}
      {/* Positions Section End */}


      {/* CTA Section Start */}
      <NioSection className="nk-cta-section" >
        <div className="nk-cta-wrap bg-primary-gradient rounded-3 is-theme p-5 p-lg-7">
          <Row className="g-gs align-items-center">
            <Col lg={8}>
              <div className="media-group flex-column flex-lg-row align-items-center ">
                <NioMedia rounded size="lg" variant="white" icon="mail-fill" className="text-primary mb-2 mb-lg-0 me-lg-1" />
                <div className="media-text text-center text-lg-start">
                  <h4 className="text-capitalize mb-sm-0">Don’t see your role listed in positions ?</h4>
                  <p className="fs-16">Get in touch with our support team if you still can’t find your answer.</p>
                </div>
              </div>
            </Col>
            <Col lg={4} className="text-center text-lg-end">
              <NioButton href="/contact-us" label="Contact support" className="btn btn-white text-dark" />
            </Col>
          </Row>
        </div>

      </NioSection>
      {/* CTA Section End */}

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