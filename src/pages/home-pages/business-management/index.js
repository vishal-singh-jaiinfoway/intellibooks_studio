import React from 'react'
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// layout 
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components  
import { NioSection, NioButton, NioMedia, NioCount, NioCard, NioSubscribeField, NioIcon, NioField } from '../../../components';

// section content 
import FaqContent from '../../../components/PageComponents/Homepages/BSManagement/FaqContent/FaqContent';
import PricingContent from '../../../components/PageComponents/Homepages/BSManagement/PricingContent/PricingContent';
import TestimonialContent from '../../../components/PageComponents/Homepages/BSManagement/TestimonialContent/TestimonialContent';


function index() {
  return (
    <AppLayout title="Business Management" rootClass="layout-10" >

      {/*  Banner Section Start   */}
      <section className=" ">
        <div className="nk-banner-wrap"  style={{"background-color": "aliceblue"}}>
          <Container>
          <div style={{ display:'flex',justifyContent: 'center', color: "#64728f" }}>
            <div style={{ margin: "-70px -31px 5px 0px" }}>
              <p style={{ lineHeight: 1, fontSize: "25px" }}>
                <span style={{ fontWeight: "bold", fontSize: "25px", color: "#6366F1" }}>Evaluate</span>&nbsp;
                LLM’s response - Drag and Drop&nbsp;
                <span style={{ fontWeight: "bold", fontSize: "25px", color: "#6366F1" }}>Build</span>{" "}&nbsp;
                workflow -&nbsp;
                <span style={{ fontWeight: "bold", fontSize: "25px", color: "#6366F1" }}>Publish</span>{" "}&nbsp; API &nbsp;
                <span style={{ fontWeight: "bold", fontSize: "25px", color: "#6366F1" }}>Sell Earn</span>{" "}&nbsp;
                in Market place
              </p>
              
            </div>
          </div>
            <Row className="justify-content-center">
              <Col lg={8} xl={6}>
                <div className="nk-banner-content text-center">
                  <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >RETRIEVAl</span>
                  <div>
                    <h1 className="text-capitalize mb-2" > We bring rapid solutions for your business needs </h1>
                    <p className="fs-20" > Rapid Business Solutions Speed up Growth, Enhance Efficiency, and Achieve Success with our Agile and Effective Tools. </p>
                  </div>
                  <ul className="nk-btn-group justify-content-center pt-5 pt-lg-6">
                    <li>
                      <NioButton
                        href="/blogs"
                        label="Learn More"
                        className="btn-primary text-nowrap" />
                    </li>
                    <li>
                      <NioButton href="/contact-us" label="Contact Us" className="btn-outline-primary-alt text-nowrap" />
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/*  Banner Section End   */}

      {/*  Banner Thumbnail Section Start   */}
      {/* <NioSection className="nk-section-player">
        <NioSection.Content>
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="nk-video" >
                <div className="nk-video-inner">
                  <div className="nk-video-content">
                    <div className="nk-video-img nk-frame text-center">
                      <img src="images/business-management/section-cover-2.jpg" alt="cover" className="position-relative rounded-3 overflow-hidden" />
                      <div className="nk-frame-children nk-frame-children-one animate animate-shakeY animate-duration-12">
                        <img src="images/business-management/section-cover-2-a.png" alt="frame-child" />
                      </div>
                      <div className="nk-frame-children nk-frame-children-two animate animate-shakeY animate-duration-12 animate-delay-1">
                        <img src="images/business-management/section-cover-2-b.png" alt="frame-child" />
                      </div>
                    </div>
                    <div className="nk-video-btn">
                      <NioMedia
                        rounded
                        size="lg"
                        icon="play-fill"
                        lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
                        className="text-bg-info text-white shadow-xl animate animate-infinite animate-pulse animate-duration-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="nk-video-counter bg-white shadow-xl rounded-4 p-5">
                  <Row>
                    <Col sm={6} lg={3} >
                      <div className="position-relative text-center mb-5 mb-lg-0">
                        <NioCount className="h2 d-block" end={235} />
                        <p className="m-0 fs-18 ">Projects completed</p>
                      </div>
                    </Col>
                    <Col sm={6} lg={3} >
                      <div className="position-relative text-center mb-5 mb-lg-0">
                        <NioCount className="h2 d-block" end={3472} />
                        <p className="m-0 fs-18 ">Happy Customers</p>
                      </div>
                    </Col>
                    <Col sm={6} lg={3} >
                      <div className="position-relative text-center mb-5 mb-lg-0">
                        <NioCount className="h2 d-block" end={50} prefix="+" />
                        <p className="m-0 fs-18 ">Hours Saved Annually</p>
                      </div>
                    </Col>
                    <Col sm={6} lg={3} >
                      <div className="position-relative text-center mb-5 mb-lg-0">
                        <NioCount className="h2 d-block" end={3500} />
                        <p className="m-0 fs-18 ">Unique Users</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection> */}
      {/*  Banner Thumbnail Section End   */}

      {/*  features Section Start   */}
      <NioSection className="pb-7 pb-lg-120">
        <NioSection.Content>
          <Row className="justify-content-center justify-content-xxl-start">
            <Col lg={8} xl={4}>
              <div className="nk-section-head text-center text-xxl-start pb-5 pb-md-7 pb-xxl-0">
                <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4">powerful features</span>
                <h2 className="mb-3">Discover Powerful Features</h2>
                <p className="fs-18 mb-0"> Harness the Power of Our Feature-rich Platform to Drive Growth and Success. </p>
                <ul className="nk-btn-group justify-content-center justify-content-xxl-start pt-6">
                  <li>
                    <NioButton
                      href="/blogs"
                      label="Learn More"
                      className="btn-info text-nowrap"
                    />
                  </li>
                  <li>
                    <NioButton
                      href="/contact-us"
                      label="Contact Us"
                      className="btn-info-soft text-nowrap"
                    />
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={8}>
              <Row className="gy-5 gy-xl-7">
                <Col sm={6} lg={4} xl={6}>
                  <NioCard className="bg-transparent border-0" >
                    <NioCard.Body className="p-0">
                      <NioMedia size="lg" rounded icon="trend-up" variant="info-soft" className="mb-4" />
                      <div className="mb-5">
                        <h4>AI project</h4>
                        <p className="fs-16 mb-0 line-clamp-2">Our AI project centers around custom analytics, leveraging advanced algorithms and machine learning to provide tailored insights and data analysis solutions. Our platform is designed to empower businesses with the ability to extract meaningful information from their data, driving informed decision-making</p>
                      </div>
                      <Link to="/blogs" className="btn-link">
                        <span>Learn More</span>
                        <NioIcon name="arrow-right" />
                      </Link>
                    </NioCard.Body>
                  </NioCard>
                </Col>
                <Col sm={6} lg={4} xl={6} >
                  <NioCard className="bg-transparent border-0" >
                    <NioCard.Body className="p-0">
                      <NioMedia size="lg" rounded icon="users" variant="warning-soft" className="mb-4" />
                      <div className="mb-5">
                        <h4>Fast-paced and dynamic landscape</h4>
                        <p className="fs-16 mb-0 line-clamp-2"> In the fast-paced and dynamic landscape of today's business world, effective team management is crucial for success. Leveraging the power of Artificial Intelligence (AI), our platform revolutionizes the way teams collaborate, communicate, and achieve their goals. </p>
                      </div>
                      <Link to="/blogs" className="btn-link">
                        <span>Learn More</span>
                        <NioIcon name="arrow-right" />
                      </Link>
                    </NioCard.Body>
                  </NioCard>
                </Col>
                <Col sm={6} lg={4} xl={6} >
                  <NioCard className="bg-transparent border-0" >
                    <NioCard.Body className="p-0">
                      <NioMedia size="lg" rounded icon="edit-alt" variant="danger-soft" className="mb-4" />
                      <div className="mb-5">
                        <h4>Website tailored</h4>
                        <p className="fs-16 mb-0 line-clamp-2">Empower your online presence with a professionally crafted website tailored to your unique needs and vision. Our expert team is ready to build a stunning, responsive website that captivates your audience and drives success for your business or personal brand.</p>
                      </div>
                      <Link to="/blogs" className="btn-link">
                        <span>Learn More</span>
                        <NioIcon name="arrow-right" />
                      </Link>
                    </NioCard.Body>
                  </NioCard>
                </Col>
                <Col sm={6} lg={4} xl={6} >
                  <NioCard className="bg-transparent border-0" >
                    <NioCard.Body className="p-0">
                      <NioMedia size="lg" rounded icon="emails" variant="success-soft" className="mb-4" />
                      <div className="mb-5">
                        <h4>Endeavors by systematically</h4>
                        <p className="fs-16 mb-0 line-clamp-2"> Unlock the potential of your endeavors by systematically measuring your performance. Our comprehensive tools and analytics provide a clear and insightful view, enabling you to track progress, identify areas for improvement, and make informed decisions to optimize your success. </p>
                      </div>
                      <Link to="/blogs" className="btn-link">
                        <span>Learn More</span>
                        <NioIcon name="arrow-right" />
                      </Link>
                    </NioCard.Body>
                  </NioCard>
                </Col>
              </Row>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  features Section End   */}

      {/*  Works Section Start   */}
      <NioSection className="bg-gray-400">
        <NioSection.Content>
          <Row className="align-items-center justify-content-lg-between">
            <Col lg={6} >
              <div className="nk-frame nk-frame-one text-center mb-7 mb-lg-0">
                <img src="images/business-management/mobile.png" alt="mobile-frame" />
                {/* <div className="nk-frame-children nk-frame-children-one  animate animate-shakeY animate-duration-12 ">
                  <img src="images/business-management/section-cover-1-b.png" alt="mobile-frame-child" />
                </div>
                <div className="nk-frame-children nk-frame-children-two animate animate-shakeY animate-duration-12 animate-delay-1">
                  <img src="images/business-management/section-cover-1-a.png" alt="mobile-frame-child" />
                </div> */}
              </div>
            </Col>
            <Col lg={6}>
              <div className="nk-section-head text-center text-lg-start">
                <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >How it works?</span>
                <h2 className="h1 text-capitalize" >Download the app, <span className="d-lg-block">Make SignUp and start growing</span> </h2>
                {/* <ul className="d-flex gap-3 justify-content-center justify-content-lg-start pt-6">
                  <li>
                    <Link to="#" className="d-inline-flex rounded-2 overflow-hidden h-60">
                      <img src="images/apps/app-store.png" srcSet="images/apps/app-store2x.png 2x" className="img-fluid" alt="app-store" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="d-inline-flex rounded-2 overflow-hidden h-60">
                      <img src="images/apps/play-store.png" srcSet="images/apps/play-store2x.png 2x" className="img-fluid" alt="play-store" />
                    </Link>
                  </li>
                </ul> */}
              </div>
              <Row className="gy-5 gy-lg-0">
                <Col lg={4} sm={6} >
                  <div className="text-center text-lg-start">
                    <NioMedia size="lg" rounded icon="download" variant="info text-white" className="mb-4" />
                    <h5>Chose Amazon , Google , OpenAI or Azure platform</h5>
                    <p className="fs-16 line-clamp-3"> Join us now and create your account to start exploring our platform and unlocking Generative AI platform features. </p>
                  </div>
                </Col>
                <Col lg={4} sm={6} >
                  <div className="text-center text-lg-start">
                    <NioMedia size="lg" rounded icon="user-check" variant="warning text-white" className="mb-4" />
                    <h5>Select Models like Antropic , Palm , OpenAI</h5>
                    <p className="fs-16 line-clamp-3"> Install Models of your choice like Antropic , Palm, OpenAI to get started with AI. </p>
                  </div>
                </Col>
                <Col lg={4} sm={6} >
                  <div className="text-center text-lg-start">
                    <NioMedia size="lg" rounded icon="growth-fill" variant="indigo-alt" className="mb-4" />
                    <h5>Start with prompt , evaluation and Monitoring</h5>
                    <p className="fs-16 line-clamp-3"> Design effective prompts, assessing responses using human evaluation and automated metrics and check for biases. </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Works Section End   */}

      {/*  Customer Testimonials Section Start   */}
      {/* <NioSection className="pt-7 pt-lg-120">
        <NioSection.Head alignX="center">
          <span className="d-inline-block text-bg-danger text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4">Customer testimonials</span>
          <h2>Stories From Our Customers</h2>
          <p className="fs-20 mb-0">Hear inspiring stories from our satisfied customers who have achieved remarkable success with our solutions. </p>
          <ul className="nk-btn-group justify-content-center pt-6">
            <li>
              <NioButton href="#" label="See All Reviews" className="btn-info text-nowrap" />
            </li>
            <li>
              <NioButton href="#" label="Try Free Demo" className="btn-info-soft text-nowrap" />
            </li>
          </ul>
        </NioSection.Head>
        <NioSection.Content>
          <TestimonialContent />
        </NioSection.Content>
      </NioSection> */}
      {/*  Customer Testimonials Section End   */}

      {/*  Pricing Plans Section Start   */}
      {/* <NioSection className="overflow-hidden">
        <PricingContent />
      </NioSection> */}
      {/*  Pricing Plans Section End   */}


      {/*  Faqs Section Start   */}
      <NioSection className="nk-section-faq">
        <NioSection.Content>
          <Row className="justify-content-between">
            <Col xl={4}>
              <div className="nk-section-head pb-5 pb-xl-0">
                <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4">FAQS</span>
                <h2 className="mb-3">Frequently Asked Questions</h2>
                <p className="fs-18 mb-0"> Get quick answers to common queries about our service, pricing, security, and account management in our FAQ section. </p>
                <ul className="nk-btn-group pt-6">
                  <li>
                    <NioButton href="/help-center" label="Go to support center" className="btn-info text-nowrap" />
                  </li>
                  <li>
                    <NioButton href="/contact-us-solution" label="Contact Us" className="btn-info-soft" />
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={8}>
              <FaqContent />
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Faqs Section End   */}

      {/*  Cta Section Start   */}
      {/* <NioSection className="nk-cta-section pt-lg-120">
        <NioSection.Content>
          <div className="nk-cta-card position-relative bg-indigo-50 rounded-3">
            <Row className="align-items-xl-center justify-content-between text-center text-xl-start">
              <Col xl={7}>
                <div className="mb-xl-0 mt-xl-3 p-5 p-md-7">
                  <h2 className="h1 mb-2" >Get Discount Up To 50%</h2>
                  <p className="fs-20 m-0" >Put your email address and get started</p>
                  <div>
                    <form onSubmit={e => e.preventDefault()} >
                      <Row className="form-group nk-newsletter-one justify-content-center justify-content-xl-start pt-5">
                        <Col md={8}>
                          <NioField.Input type="email" placeholder="Enter Your Email" childClass="p-3" />
                        </Col>
                        <Col md={3} className="ps-md-0">
                          <NioButton type="submit" label="Get Voucher" className="btn-info text-nowrap btn-block h-100 mt-3 mt-md-0" />
                        </Col>
                      </Row>
                    </form>
                  </div>
                  <ul className="d-flex gap-3 justify-content-center justify-content-lg-start pt-6 pt-lg-7">
                    <li>
                      <Link to="#" className="d-inline-flex rounded-2 overflow-hidden h-60">
                        <img src="images/apps/app-store.png" srcSet="images/apps/app-store2x.png 2x" className="img-fluid" alt="app-store" />
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="d-inline-flex rounded-2 overflow-hidden h-60">
                        <img src="images/apps/play-store.png" srcSet="images/apps/play-store2x.png 2x" className="img-fluid" alt="play-store" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xl={5} className="text-xl-end position-relative" >
                <div className="nk-cta-card-cover two">
                  <img src="images/cta/d.png" alt="cta" />
                </div>
              </Col>
            </Row>
          </div>
        </NioSection.Content>
      </NioSection> */}
      {/*  Cta Section End   */}

      {/*  Newsletter Section Start  */}
      <NioSection className="nk-newsletter-section pb-lg-0">
        <Row className="justify-content-center justify-content-lg-between align-items-center pb-5 border-bottom border-lighter">
          <Col lg={6} xl={4}>
            <div className="nk-newsletter-content text-center text-lg-start pb-5 pb-lg-0">
              <h4 className="text-capitalize">Subscribe to our newsletter</h4>
              <p className="fs-16">Join the 5000+ People That Uses Softnio Products.</p>
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