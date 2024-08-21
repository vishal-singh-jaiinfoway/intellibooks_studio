import React from 'react';
import { Col, Row } from 'react-bootstrap';

// layout
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components 
import { NioSection, NioSubscribeField, NioButton, NioMedia, NioCard } from '../../../components';

// section content 
import TestimonialContent from '../../../components/PageComponents/InnerPages/Features/TestimonialContent/TestimonialContent';

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
    marginTop: window.innerWidth <= 1000 ? '5rem' : '2.7rem',
    fontSize: window.innerWidth <= 1000 ? '19px' : '25px',
    lineHeight: window.innerWidth <= 1000 ? '1.5' : '1',
  };
  return (
    <AppLayout title="Features" rootClass="layout-1">

      {/*  Discover Section Start  */}
      <NioSection className="pt-120 pt-lg-160 pb-7 pb-lg-120 overflow-hidden" style={{ "background-color": "aliceblue" }} masks={[" blur-1 left top", " blur-1 right bottom"]}>

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
        <NioSection.Head alignX="center">
          <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >Publish API : UNLEASH THE POWER OF INTELLIGENAI</span>
          <h2 >IntellibooksStudio API’
            s are high performance, easy to use, ready for production

          </h2>
          <p className="fs-20 mb-0" >Interactive API documentation using swagger frame work based on Open API</p>
          <ul className="nk-btn-group justify-content-center pt-5">
            <li>
              <NioButton href="https://ibprocess.intellibooks.io/signin" target="_blank" className="btn-primary" label="Get Started" />
            </li>
            <li>
              <NioButton href="/blogs" className="btn-outline-primary" label="Learn More" />
            </li>
          </ul>
        </NioSection.Head>
        <NioSection.Content>
          <div className="nk-banner-img nk-banner-features pt-xl-7 mt-xl-3 text-center">
            <div className="nk-banner-features-content" >
              <img src="images/features/banner.png" alt="cover-img" className="nk-banner-features-base" />
              {/* <img src="images/features/banner-cover-a.png" alt="cover-img" className="nk-banner-features-children one h-120" /> */}
              {/* <img src="images/features/banner-cover-b.png" alt="cover-img" className="nk-banner-features-children two h-200  animate animate-shakeY animate-duration-12" /> */}
              {/* <img src="images/features/banner-cover-c.png" alt="cover-img" className="nk-banner-features-children three h-300 animate animate-shakeY animate-duration-12" /> */}
            </div>
          </div>
        </NioSection.Content>
      </NioSection>
      {/*  Discover Section End  */}

      {/*  Features Section Start  */}
      <NioSection className="pb-7 pb-lg-120">
        <NioSection.Content>
          <Row className="gy-5 gy-lg-0 align-items-center">
            <Col sm={6} lg={4} >
              <div className="nk-feature-card-text line-2">
                <div className="nk-feature-card-text-body">
                  <h5 className="title fw-normal">
                    <span className="fw-semibold d-inline-block d-sm-block">Easy : </span> Designed to be easy to use and learn.
                  </h5>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4} >
              <div className="nk-feature-card-text line-2">
                <div className="nk-feature-card-text-body">
                  <h5 className="title fw-normal">
                    <span className="fw-semibold d-inline-block d-sm-block">Robust : </span>Get production-ready code, With automatic interactive documentation.
                  </h5>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4} >
              <div className="nk-feature-card-text line-2">
                <div className="nk-feature-card-text-body">
                  <h5 className="title fw-normal">
                    <span className="fw-semibold d-inline-block d-sm-block">Standards-based : </span> Based on the open standardsfor API's.
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Features Section End  */}

      {/*  Testimonial Section Start  */}
      <NioSection className="bg-primary-gradient is-theme">
        <NioSection.Content>
          <TestimonialContent />
        </NioSection.Content>
      </NioSection>
      {/*  Testimonial Section End  */}

      {/*  Story-Line Section Start  */}
      <NioSection className="pb-lg-7 pt-7 pt-lg-120" masks={["blur-1 left center", "blur-1 right bottom"]}>
        <NioSection.Content className="d-flex flex-column gap-7 gap-lg-120">
          <Row className="gy-5 gy-lg-0 flex-row-reverse align-items-center justify-content-lg-between">
            <Col lg={6} >
              <div className=" mb-5 mb-lg-0">
                {/* <img src="images/cover/cover-24.png" alt="cover-bg" className="base" /> */}
                <img src="images/cover/a.png" alt="cover-forground" className="children children-1" style={{ height: "32rem", borderRadius: "3rem" }} />
              </div>
            </Col>
            <Col lg={6} xl={5}>
              <div className="nk-section-head pb-0">

                <div className="media-group align-items-center mb-5">
                  <NioMedia size="md" rounded variant="primary-soft" icon="activity-round-fill" />

                  <div className="media-text">
                    <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >INTELLIGENAI API</span>
                  </div>
                </div>
                <h2> IntellibooksStudio uses Rest API protocol<span className="d-lg-block"> </span>
                </h2>
                <ul className="nk-timeline pt-4">
                  <li className="nk-timeline-item">
                    <div className="nk-timeline-item-inner">
                      <div className="nk-timeline-symbol text-bg-primary text-white"></div>
                      <div className="nk-timeline-content mt-n1">
                        <p>The REST API provides a way to connect with external
                          applications and update their data in IntellibooksStudio engine. REST API is part of IntellibooksStudio integration frame work that you can use to integrate external applications with
                          the process automation engine applications. This resource data will be available in either JSON or XML format.
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* <li className="nk-timeline-item">
                    <div className="nk-timeline-item-inner">
                      <div className="nk-timeline-symbol text-bg-primary text-white"></div>
                      <div className="nk-timeline-content mt-n1">
                        <p>IntelliGen AI brings you a streamlined Insights Report, focused on unveiling the depths of user engagement. Explore user behavior with precision, track key trends, and identify your most active users. </p>
                      </div>
                    </div>
                  </li>
                  <li className="nk-timeline-item">
                    <div className="nk-timeline-item-inner">
                      <div className="nk-timeline-symbol text-bg-primary text-white"></div>
                      <div className="nk-timeline-content mt-n1">
                        <p>Gain a clear, comparative view of current and past performance, empowering you to make informed decisions. With IntelliGen AI, transform data into strategic action effortlessly</p>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="gy-5 gy-lg-0 align-items-lg-center justify-content-lg-between">
            <Col lg={6} >
              <div className=" mb-5 mb-lg-0">
                {/* <img src="images/cover/cover-25.png" alt="cover-base" className="base" /> */}
                <img src="images/cover/b.png" alt="cover-children" className="children children-2" style={{ height: "32rem", width: "33rem", borderRadius: "3rem" }} />
              </div>
            </Col>
            <Col lg={6} xl={5}>
              <div className="nk-section-head pb-0">

                <div className="media-group align-items-center mb-5">
                  <NioMedia size="md" rounded variant="primary-soft" icon="filter-fill" />

                  <div className="media-text">
                    <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >INTELLIGENAI AUTH</span>

                  </div>
                </div>
                <h2>Authentication
                </h2>
                <ul className="nk-timeline pt-4">
                  <li className="nk-timeline-item">
                    <div className="nk-timeline-item-inner">
                      <div className="nk-timeline-symbol text-bg-primary text-white"></div>
                      <div className="nk-timeline-content mt-n1">
                        <p>
                          You need an API key, User Key, and Username to authenticate requests. You can authenticate by logging into IntellibooksStudio and navigating.</p>
                      </div>
                    </div>
                  </li>
                  <li className="nk-timeline-item">
                    <div className="nk-timeline-item-inner">
                      <div className="nk-timeline-symbol text-bg-primary text-white"></div>
                      <div className="nk-timeline-content mt-n1">
                        <strong>
                          Dashboard - Admin - API Settings - Get API key
                        </strong>
                      </div>
                    </div>
                  </li>
                  <li className="nk-timeline-item">
                    <div className="nk-timeline-item-inner">
                      <div className="nk-timeline-symbol text-bg-primary text-white"></div>
                      <div className="nk-timeline-content mt-n1">
                        <p>
                          To get the User Key, navigate to Profile  - API Key - UserKey. You will need
                          these request parameters at the end of every endpoint for authentication.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="gy-5 gy-lg-0 flex-row-reverse align-items-lg-center justify-content-lg-between">
            <Col lg={6} >
              <div className=" mb-5 mb-lg-10">
                {/* <img src="images/cover/cover-26.png" alt="cover-base" className="base" /> */}
                <img src="images/cover/c.png" alt="cover-children" className="children children-3" style={{ height: "32rem", borderRadius: "3rem" }} />
              </div>
            </Col>
            <Col lg={6} xl={5}>
              <div className="nk-section-head pb-0">

                <div className="media-group align-items-center mb-5">
                  <NioMedia size="md" rounded variant="purple-soft" icon="signal" />

                  <div className="media-text">
                    <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >INTELLIGENAI:METHOD
                    </span>

                  </div>
                </div>
                <h2>POST, PUT, and DELETE Method's</h2>

                <ul className="nk-timeline pt-4">
                  <li className="nk-timeline-item">
                    <div className="nk-timeline-item-inner">
                      <div className="nk-timeline-symbol text-bg-indigo text-white"></div>
                      <div className="nk-timeline-content mt-n1">
                        <p>
                          You can use HTTP POST, PUT, and DELETE methods to modify the resources. You can use the PUT method to update an existing resource, the POST method to create a new resource, and the DELETE method to delete specific resources. You must use appropriate authentication headers and other parameters specifiedby the IntellibooksStudio API documentation.
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* <li className="nk-timeline-item">
                    <div className="nk-timeline-item-inner">
                      <div className="nk-timeline-symbol text-bg-indigo text-white"></div>
                      <div className="nk-timeline-content mt-n1">
                        <p>
                          Use your findings to nudge users towards the actions that lead them to experience value and stick around.
                        </p>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Story-Line Section End  */}

      {/*  Values Section Start  */}
      <NioSection masks={["blur-1 left center"]}>
        <NioSection.Head alignX="center">
          <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >THE VALUES</span>

          <h2 className="mb-0">Learn About Other IntellibooksStudio Features</h2>
          <ul className="nk-btn-group justify-content-center pt-5">
            <li>
              <NioButton href="https://ibprocess.intellibooks.io/signin" target="_blank" className="btn-primary" label="Get Started" />
            </li>
            <li>
              <NioButton href="/blogs" className="btn-outline-primary" label="Learn More" />
            </li>
          </ul>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5">
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="primary-soft" icon="file-text-fill" className="mb-4" />
                  <h4>Why IntellibooksStudio's Workflow API?</h4>
                  <p>Unlock the power of intelligent automation for your
                    business with IntellibooksStudio's Workflow API. Here's why it stands out .</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="info-soft" icon="pie-fill" className="mb-4" />
                  <h4>Intelligent Task Prioritization </h4>
                  <p>Goes beyond simple automation to prioritize tasks based on import urgency, ensuring you focus on what matters most.</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="warning-soft" icon="color-palette-fill" className="mb-4" />
                  <h4>Predictive Decision-Making</h4>
                  <p>Integrates with AI
                    models to make data-driven decisions with in workflows, optimizing outcomes and reducing errors.</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="danger-soft" icon="view-grid-wd" className="mb-4" />
                  <h4>Adaptive Learning </h4>
                  <p> Continuously learns from data and user interactions to refine workflows and deliver even better performance over time.</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="primary-soft" icon="bell-fill" className="mb-4" />
                  <h4>Seamless Integration Across Systems</h4>
                  <p>Connects disparate applications, tools, and data sources effortlessly, breaking down silos and unlocking new insights.</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="success-soft" icon="puzzle-fill" className="mb-4" />
                  <h4>Unified Workflow Management</h4>
                  <p>Centralize control
                    and visibility of all workflows across your organization, ensuring consistency and compliance.</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="primary-soft" icon="file-text-fill" className="mb-4" />
                  <h4>Flexible Workflow Design</h4>
                  <p>Build workflows that perfectly align with your unique business processes and requirements, without limitations</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="info-soft" icon="pie-fill" className="mb-4" />
                  <h4>Drag-and-Drop Interface</h4>
                  <p>Easily create and modify workflows with a user-friendly visual interface, no coding expertise required.</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="warning-soft" icon="color-palette-fill" className="mb-4" />
                  <h4>Handle Increased Demand</h4>
                  <p>Effortlessly scale to accommodate growing data volumes and process complexity, ensuring your workflows remain efficient asyour business expands.</p>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Values Section End  */}

      {/*  Device Section Start  */}
      <NioSection masks={["blur-1 right center"]}>
        <NioSection.Head alignX="center">
          <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >Responsive every device</span>
          <h2>Users love us. They can
            ’t be wrong</h2>
          <ul className="nk-btn-group justify-content-center pt-5">
            <li>
              <NioButton href="https://ibprocess.intellibooks.io/signin" target="_blank" className="btn-primary" label="Get Started" />
            </li>
            <li>
              <NioButton href="/blogs" className="btn-outline-primary" label="Our Blogs" />
            </li>
          </ul>
        </NioSection.Head>
        <NioSection.Content>
          <div className="nk-responsive-img text-center" >
            <img src="images/thumb/o.png" alt="" className="w-100" />
          </div>
        </NioSection.Content>
      </NioSection>
      {/*  Device Section End  */}

      {/*  Learn-More Section Start  */}
      <NioSection>
        <NioSection.Head alignX="center">
          <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >LEARN MORE</span>
          <h2>The World's Most Grossing Generative AI Software product</h2>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5">
            <Col lg={6} >
              <NioCard className="nk-feature-block overflow-hidden border-0 bg-blue-50 rounded-2 h-100">
                <NioCard.Body>
                  <div className="nk-feature-block-content h-100">
                    <NioMedia size="lg" rounded variant="primary" icon="users-fill" className="mb-3 mb-md-5" />
                    <h4>Drag-and-drop simplicity:</h4>
                    <p className="fs-18 mb-0">
                      IntellibooksStudio breaks down complex AI development into easily underst and able modules, allowing anyone – even users without deep coding knowledge – to build and experiment with AI
                      applications. This "Legos for AI" approach lowers the barrier to entry and empowers users to leverage the power of AI without needing extensive technical
                      expertise.
                    </p>
                    <NioButton href="/about" className="btn-link text-primary pt-5" label="About Us" icon="arrow-right after" />
                  </div>
                </NioCard.Body>
                <div className="text-start">
                  <img src="images/features/a.png" alt="feature" className="pe-3 pe-md-7" />
                </div>
              </NioCard>
            </Col>
            <Col lg={6} >
              <NioCard className="nk-feature-block overflow-hidden border-0 bg-blue-50 rounded-2 h-100">
                <NioCard.Body>
                  <div className="nk-feature-block-content h-100">
                    <NioMedia size="lg" rounded variant="danger text-white" icon="help-fill" className="mb-3 mb-md-5" />
                    <h4>Pre-built building blocks</h4>
                    <p className="fs-18 mb-0">
                      IntellibooksStudio offers a vastlibrary of pre-built AI components. Think text generators, chatbots, sentiment analyzers, and many more. These components are like building blocks that users can drag and drop to create customAI
                      solutions. This eliminates the need for manual codingand saves development time, accelerating the work flowand making AI readily available for diverse projects.
                    </p>
                    <NioButton href="/help-center" className="btn-link text-primary pt-5" label="Help Center" icon="arrow-right after" />
                  </div>
                </NioCard.Body>
                <div className="text-end">
                  <img src="images/features/b.png" alt="feature" className="ps-3 ps-md-7" />
                </div>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Learn-More Section End  */}

      {/*  CTA Section Start  */}
      <NioSection>
        <NioSection.Content>
          <div className="nk-cta-wrap nk-cta-card bg-primary-gradient rounded-3 is-theme position-relative overflow-hidden" >
            <Row className="g-0 align-items-center overflow-hidden">
              <Col xs={{ order: 2 }} lg={{ span: 7, order: 0 }} >
                <div className="nk-block-head-content mb-0">
                  <h2 className="newsletter-heading text-capitalize h1 m-0 mb-4 mb-lg-7">Combine the magic of AI with the power of IntellibooksStudio to make LLMdo more work for you.</h2>
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
              <Col xs={{ order: 1 }} lg={{ span: 5, order: 0 }} >
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