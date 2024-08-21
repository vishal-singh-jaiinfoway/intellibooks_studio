import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// layouts
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components 
import { NioBrand, NioButton, NioCard, NioMedia, NioSection, NioSubscribeField } from '../../../components';

// section content 
import FaqContent from '../../../components/PageComponents/InnerPages/FeaturesSolution/FaqContent/FaqContent';
import { bottom } from '@popperjs/core';

function index() {
  const containerStyle = {
    margin: '-83px 0px 20px 0px',
    display: 'flex',
    justifyContent: 'center',
    color: "#64728f",
    textAlign: 'center',
    padding: "10px",
    paddingTop: "28px"
  };
  const contentContainerStyle = {
    marginBottom: "1rem",
    maxWidth: "100%",
  };
  const paragraphStyle = {
    marginTop: window.innerWidth <= 1000 ? '5rem' : '0rem',
    fontSize: window.innerWidth <= 1000 ? '19px' : '25px',
    lineHeight: window.innerWidth <= 1000 ? '1.5' : '1',
  };
  return (
    // <AppLayout variant={7} title="Features" rootClass="layout-6">
    <AppLayout title="Features" rootClass="layout-6">

      {/*  Banner Section Start   */}
      <section className="nk-banner-wrap" style={{ "background-color": "aliceblue" }}>
        <div className="nk-mask shape"></div>
        <Container>
          <div style={containerStyle}>
            <div style={contentContainerStyle}>
              <p style={paragraphStyle}>
                <span style={{ fontWeight: "bold", color: "#6366F1" }}>Evaluate</span>&nbsp;
                LLM’s response - Drag and Drop&nbsp;
                <span style={{ fontWeight: "bold", color: "#6366F1" }}>Build</span>{" "}&nbsp;
                workflow -&nbsp;
                <span style={{ fontWeight: "bold", color: "#6366F1" }}>Publish</span>{" "}&nbsp; API &nbsp;
                <span style={{ fontWeight: "bold", color: "#6366F1" }}>Sell Earn</span>{" "}&nbsp;
                in Market place
              </p>
            </div>
          </div>
          <Row className="justify-content-center">
            <Col lg={6}>
              <div className="nk-banner-business-feature-content text-center">
                <div className="nk-section-head pb-0">
                  <span className="d-inline-block rounded-pill fs-14 text-uppercase text-bg-indigo text-white fw-bold py-1 px-3 mb-3" >Evaluation</span>
                  <h2 className="text" > IntellibooksStudio allow you to evaluate compare and choose best suited Models for your down stream <br className="d-none d-lg-block" />
                    <span className="text-indigo">  generative AI
                      applications.
                    </span>
                  </h2>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*  Banner Section End */}

      {/*  Brand Section Start   */}
      <NioSection py={false} className="bg-gray pb-lg-5">
        <NioSection.Content>
          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <div className="nk-block-head text-center sm">
                <h6 className="h6 fw-normal text-light"  >More than 10+ models to choose from IntellibooksStudio</h6>
              </div>
              <Row className="justify-content-center justify-content-lg-between text-center gap g-1">
                {
                  ["a", "b", "c"]?.map((brand, idx) => (
                    <Col key={idx} xs={4} sm={3} lg={2}>
                      <div className="nk-brand w-26 h-25">
                        <Link to="#">
                          <img src={`images/brands/${brand}.png`} alt="brand-logo" style={{ "height": "60px", "width": "50rem" }} />
                        </Link>
                      </div>
                    </Col>
                  ))
                }
              </Row>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Brand Section End    */}

      {/*  Analytics Section Start   */}
      <NioSection className="py-7 py-lg-120">
        <NioSection.Content>
          <Row className="justify-content-center justify-content-xl-between align-items-xl-end pb-5 pb-md-7 ">
            <Col md={8} xl={5}>
              <div className="nk-section-head text-center text-xl-start pb-5 pb-xl-0">
                <span className="d-inline-block rounded-pill fs-14 text-uppercase text-bg-indigo text-white fw-bold py-1 px-3 mb-3">Category</span>
                <h2>Model Evaluation
                </h2>
                <p className="text-base fs-20">Welcome to our Intelligent Generative AI
                  platform—a space where your prompts come
                  to life. Enter your query, select the idealmodel and engine, Test and Validate results
                  then chose the best model for your use case.
                </p>
              </div>
            </Col>
            <Col xl={6}>
              <ul className="nk-btn-group justify-content-center justify-content-xl-end">
                <li>
                  <NioButton href="https://ibprocess.intellibooks.io/signin" target="_blank" className="btn-indigo" label="Contact Us" />
                </li>
                <li>
                  <NioButton href="/blogs" className="btn-outline-indigo" label="Our Blogs" />
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="gy-5 gy-lg-0">
            <Col md={6} lg={4} >
              <div className="nk-feature-block">
                <div className="nk-feature-block-content">
                  <div className="nk-feature-img position-relative overflow-hidden rounded-4 mb-3 mb-md-5 border border-light bg-gray">
                    <img src="images/blog/prompt.png" alt="cover-img" className="img-fluid" style={{ "height": "29.6rem" }} />
                  </div>
                  <h4>Select Model And Engine</h4>
                  <p className="text-base">Choose the appropriate model and engine combinations
                    tailored to your task or application. Our platform offers a
                    diverse array of models and engines to match your
                    specific needs.</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} >
              <div className="nk-feature-block">
                <div className="nk-feature-block-content">
                  <div className="nk-feature-img position-relative overflow-hidden rounded-4 mb-3 mb-md-5 border border-light bg-gray">
                    <img src="images/blog/model.png" alt="" className="img-fluid" style={{ "height": "29.6rem" }} />
                  </div>
                  <h4>Enter Your Specific Prompt</h4>
                  <p className="text-base">Begin by entering your specific prompt or query into the
                    designated input field, articulating the information or
                    action you seek from the system.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} >
              <div className="nk-feature-block">
                <div className="nk-feature-block-content">
                  <div className="nk-feature-img position-relative overflow-hidden rounded-4 mb-3 mb-md-5 border border-light bg-gray">
                    <img src="images/blog/result.png" alt="" className="img-fluid" style={{ "height": "29.6rem" }} />
                  </div>
                  <h4>Get Evaluation results</h4>
                  <p className="text-base">Once your prompt is submitted and processed by the
                    selected model and engine built-in metrics available for
                    automated measurement . These outcomes are
                    generated for realistic, diverse and consistent outputs
                    as well as its alignment with the intended tasks.</p>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Analytics Section End    */}

      {/*  Performance Section Start   */}
      {/* <NioSection className="bg-gray-200-soft">
        <NioSection.Content>
          <Row className="pb-5 pb-md-7 justify-content-center justify-content-xl-between align-items-xl-end">
            <Col md={8} xl={5}>
              <div className="nk-section-head text-center text-xl-start pb-5 pb-xl-0">
                <span className="d-inline-block rounded-pill fs-14 text-uppercase text-bg-indigo text-white fw-bold py-1 px-3 mb-3">Category 2</span>
                <h2>Measure Performance</h2>
                <p className="text-base fs-20">Gain visibility into the performance of your business with our comprehensive measurement solutions.</p>
              </div>
            </Col>
            <Col xl={5}>
              <ul className="nk-btn-group justify-content-center justify-content-xl-end">
                <li>
                  <NioButton href="#" className="btn-indigo" label="Request A Demo" />
                </li>
                <li>
                  <NioButton href="/pricing-solution" className="btn-outline-indigo" label="See Pricing" />
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="gy-5 gy-lg-0">
            <Col md={6} lg={4} >
              <div className="nk-feature-block">
                <div className="nk-feature-block-content">
                  <div className="nk-feature-img position-relative overflow-hidden rounded-4 mb-3 border border-light bg-purple-50">
                    <img src="images/blog/card-cover-3.png" alt="cover-bg" className="img-fluid" />
                  </div>
                  <h4>Setup Collaboration Metrics</h4>
                  <p className="text-base">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa just.</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} >
              <div className="nk-feature-block">
                <div className="nk-feature-block-content">
                  <div className="nk-feature-img position-relative overflow-hidden rounded-4 mb-3 border border-light bg-purple-50">
                    <img src="images/blog/card-cover-4.png" alt="cover-bg" className="img-fluid" />
                  </div>
                  <h4>Track Development Progress</h4>
                  <p className="text-base">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa just.</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} >
              <div className="nk-feature-block">
                <div className="nk-feature-block-content">
                  <div className="nk-feature-img position-relative overflow-hidden rounded-4 mb-3 border border-light bg-purple-50">
                    <img src="images/blog/card-cover-5.png" alt="cover-bg" className="img-fluid" />
                  </div>
                  <h4>Identify Project Backlog</h4>
                  <p className="text-base">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa just.</p>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection> */}
      {/*  Performance Section End    */}

      {/*  Tools Section Start   */}
      <NioSection className="overflow-hidden bg-indigo-200-soft" masks={["shape-35 d-none d-xl-block"]}>
        <NioSection.Head alignX="center">
          <span className="d-inline-block rounded-pill fs-14 text-uppercase text-bg-indigo text-white fw-bold py-1 px-3 mb-3">More features</span>
          <h2 className="mb-0">Why Choose Our Model Evaluations Service?</h2>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5">
            <Col md={6} lg={4} >
              <NioCard className="border-0 h-100">
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="info text-white" icon="files-fill" className="mb-3 mb-md-5" />
                  <h4>Elevating Model Quality
                  </h4>
                  <p className="text-base mb-0">
                    IntellibooksStudio evaluation tool enables
                    you to continuously iterate and evaluate your prompt
                    against your test data in a single interface </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard className="border-0 h-100">
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="warning text-white" icon="clock" className="mb-3 mb-md-5" />
                  <h4>Fostering Responsible AI</h4>
                  <p className="text-base mb-0">
                    Checking for accuracy, robustness, and toxicity:
                    Evaluate models for accuracy, robustness, and toxicity
                    to ensure their reliability and safety in real-world
                    applications.

                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard className="border-0 h-100">
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="primary-alt text-white" icon="sign-mxn" className="mb-3 mb-md-5" />
                  <h4>Tailored Evaluations for Actionable Insights
                  </h4>
                  <p className="mb-0">Tailored datasets for specific use cases and
                    improved model performance: Generate customized
                    datasets to enhance model training and performance for
                    targeted applications.</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard className="border-0 h-100">
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="danger text-white" icon="users" className="mb-3 mb-md-5" />
                  <h4>Building Trust and Compliance</h4>
                  <p className="text-base mb-0">

                    Establish
                    transparency, reliability, and adherence to regulations to
                    foster trust and compliance with ethical and legal
                    standards in AI development and deployment.</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard className="border-0 h-100">
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="info-alt text-white" icon="laptop" className="mb-3 mb-md-5" />
                  <h4>Continuous Improvement and Adaptation</h4>
                  <p className="mb-0">
                    Clear metrics, measurement test sets, and iterative
                    testing: Develop precise evaluation metrics, create test
                    sets for measurement, and conduct iterative testing to
                    assess and improve model performance.

                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard className="border-0 h-100">
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="success text-white" icon="layer" className="mb-3 mb-md-5" />
                  <h4>Robust Security Measures
                  </h4>
                  <p className="mb-0">Robust
                    security
                    measures:
                    Implement
                    strong
                    security protocols to safeguard AI models and data
                    against potential threats.
                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            {/* <Col md={6} lg={4} >
              <NioCard className="border-0 h-100">
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="blue-600 text-white" icon="shield-check" className="mb-3 mb-md-5" />
                  <h4>Data Security</h4>
                  <p className="mb-0">We prioritize the security of your data. With robust encryption protocols, regular backups, and strict access controls</p>
                </NioCard.Body>
              </NioCard>
            </Col> */}
            {/* <Col md={6} lg={4} >
              <NioCard className="border-transparent border-0 h-100 rounded-3" >
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="purple" icon="growth" className="mb-3 mb-md-5" />
                  <h4>Progress Tracking</h4>
                  <p className="text-base mb-0"> Track your progress with ease. Our platform provides comprehensive tools and features to monitor your performance, set goals, and track.</p>
                </NioCard.Body>
              </NioCard>
            </Col> */}
            {/* <Col md={6} lg={4} >
              <NioCard className="border-transparent border-0 h-100 rounded-3" >
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="blue-800 text-white" icon="headphone-fill" className="mb-3 mb-md-5" />
                  <h4>Customer Support</h4>
                  <p className="mb-0">
                    We prioritize exceptional customer support. Our dedicated team is available 24/7 to assist you with any inquiries, technical issues.
                  </p>
                </NioCard.Body>
              </NioCard>
            </Col> */}
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Tools Section End    */}

      {/*  faq Section Start   */}
      <NioSection className="pt-7 pt-lg-120">
        <NioSection.Content>
          <Row className="justify-content-between align-items-center">
            <Col lg={5} xl={4}>
              <div className="nk-section-head pb-lg-0 mt-xl-n6 text-center text-lg-start">
                <span className="d-inline-block rounded-pill fs-14 text-uppercase text-bg-indigo text-white fw-bold py-1 px-3 mb-3">FAQs</span>
                <h2 className="mb-3">Frequently Asked Questions</h2>
                <p className="fs-20 text-base mb-0">Find answers to commonly asked questions about our product or service in our comprehensive FAQ section.</p>
                <ul className="nk-btn-group flex-wrap justify-content-center justify-content-lg-start pt-5 pt-lg-6">
                  <li>
                    <NioButton href="https://ibprocess.intellibooks.io/signin" target="_blank" className="btn-indigo" label="Join with Us" />
                  </li>
                  <li>
                    <NioButton href="/blogs" className="btn-outline-indigo" label="Our Blogs" />
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={7} xl={8}>
              <FaqContent />
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  faq Section End    */}

      {/*  CTA Section Start   */}
      <NioSection>
        <NioSection.Content>
          <div className="position-relative nk-cta-wrap bg-darker rounded-16 is-theme p-4 p-md-7 py-6 py-md-7 overflow-hidden">
            <div className="nk-mask z-1 shape-22"  ></div>
            <Row className="justify-content-center">
              <Col>
                <div className="nk-section-head pb-0 text-center">
                  <NioBrand variant="light" logo="s2" className="mb-5 pb-1" />
                  <h2 >IntellibooksStudio is intelligent generative AI tool for all your LLM models' Use cases.
                    <br className="d-none d-lg-block" />  ready to build AI ? </h2>
                  <ul className="nk-btn-group pt-5 justify-content-center" >
                    <li>
                      <NioButton href="/blogs" className="btn-indigo" label="Learn More" />
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </NioSection.Content>
      </NioSection>
      {/*  CTA Section End   */}

      {/*  Newsletter Section Start  */}
      <NioSection className="nk-newsletter-section pb-lg-0">
        <Row className="justify-content-center justify-content-lg-between align-items-center pb-5 border-1 border-bottom border-gray-500">
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