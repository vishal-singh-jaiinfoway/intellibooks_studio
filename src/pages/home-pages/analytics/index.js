import React, { useEffect } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// layout
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components
import { NioButton, NioMedia, NioBrand, NioCount, NioIcon, NioSection, NioCard } from '../../../components';

// section content 
import NioSubscribeField from '../../../components/Forms/NioSubscribeField/NioSubscribeField';

function Index() {
  useEffect(() => {
    const targetElement = document.getElementById('elementstyle');
    const options = {
      strings: ['Build', 'Use AI', 'Innovate AI'],
      typeSpeed: 90,
      loop: true,
      showCursor: true,
    };
    const typed = new Typed(targetElement, options);
    return () => {
      typed.destroy();
    };
  }, []);


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
    <AppLayout variant={2} title="IntellibooksStudio">

      {/*   Banner Section Start  */}
      <section className="nk-banner nk-banner-analytics overflow-hidden">
        <div className="nk-mask blur-1 left top"></div>
        <div className="nk-mask blur-1 right bottom"></div>
        <div className="nk-banner-wrap pb-0 pb-md-8 overflow-hidden" style={{ "background-color": "aliceblue" }}>
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


          <Container>
            <Row className="justify-content-center">
              <Col lg={10} xl={7}>
                <div className="nk-banner-content text-center">

                  <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >No Code Generative AI platform</span>

                  <h1 className="display-6">No Code platform for every business to
                    {/* <span className="title-shape title-shape-1" style={{ marginLeft: "10px" }}>  Build AI</span> */}
                  </h1>
                  <h1 className="display-6"><span id="elementstyle" className="text-indigo">
                  </span></h1>

                  <p className="fs-20 mt-20" >
                    Empower your team with a state-of-the-art platform to create AI solutions easily, even without extensive coding knowledge. Our platform offers top-notch security, user-friendly access controls and dedicated support tailored to your needs.
                  </p>
                  <ul className="nk-btn-group justify-content-center pt-4 pt-md-5" >
                    <li>
                      <NioButton href="https://ibprocess.intellibooks.io/signin" target="_blank" className="btn-primary" label="Try Now" />
                    </li>
                    <li>
                      <NioButton href="/blogs" className="btn-outline-primary" label="Learn More" />
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={9} lg={10} xl={9} >
                <div className="pt-6 mt-md-2 pb-7 pb-md-0">
                  <div className="position-relative nk-banner-img nk-banner-img-s1">
                    <img className="thumb-base border rounded-3" src="images/thumb/a1.png" alt="thumb-content" />
                    {/* <img className="thumb thumb-1 animate animate-shakeY animate-duration-12" src="images/thumb/a-1.png" alt="thumb-content" /> */}
                    {/* <img className="thumb thumb-2 animate animate-shakeY animate-duration-12 animate-delay-1" src="images/thumb/a-2.png" alt="thumb-content" /> */}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/*  Banner Section End  */}

      {/*  Brand Section Start  */}
      {/* <NioSection className="nk-brand-section">
        <NioSection.Content>
          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <div className="text-center">
                <h6 className="fw-normal text-light mb-5">Trusted by 10,000+ companies around the world</h6>
                <Row className="gy-2 gy-lg-0 align-items-center justify-content-center">
                  {
                    ["a", "b", "c", "d", "e"]?.map((brand, idx) => (
                      <Col xs={4} sm={3} lg={2} key={idx}>
                        <div className="nk-brand">
                          <Link to="#">
                            <img src={`images/brands/${brand}.png`} alt={`brand-${brand}`} />
                          </Link>
                        </div>
                      </Col>
                    ))
                  }
                </Row>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection> */}
      {/*  Brand Section End  */}

      {/*  Feature Section Start  */}
      <NioSection masks={["blur-1 left top", "blur-1 right bottom"]}>
        <NioSection.Head alignX="center">
          <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >FEATURES</span>
          <h2>Discover Powerful Features</h2>
          <p className="fs-20">A Complete Platform for No code Generative AI Application. IntellibooksStudio is an complete ecosystem for Business and Builders</p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5">
            <Col lg={6} >
              <NioCard className="border-0 bg-blue-50">
                <NioCard.Body>
                  <div className="nk-feature-block-content">
                    <NioMedia size="lg" variant="primary" rounded icon="pie-2-fill" className="mb-3 mb-lg-5" />
                    <h4 > Try it Out</h4>
                    <p className="fs-16 mb-0">Explore a vast library of open models and datasets to enhance your applications with natural language processing capabilities. Easily experiment with various models from Amazon Bedrock, OpenAI, Azure Open AI and Google Vertex AI within intelligenai no-code platform. With screenshot that is up on intelligenAI website.</p>
                    <NioButton href="/index-analytics" icon="arrow-right after" className="btn-link mt-2 mt-md-5" label="Learn More" />
                  </div>
                </NioCard.Body>
                <div className="text-start">
                  <img src="images/features/a.png" alt="feature" className="pe-3 pe-md-7" style={{ "height": "22rem", "width": "26rem" }} />
                </div>
              </NioCard>
            </Col>
            <Col lg={6} >
              <NioCard className="border-0 bg-blue-50">
                <NioCard.Body>
                  <div className="nk-feature-block-content">
                    <NioMedia size="lg" variant="danger text-white" rounded icon="files-fill" className="text-white mb-3 mb-lg-5" />
                    <h4 >No Code Workflow</h4>
                    <p className="fs-16 mb-0">Our no-code workflow builder effortlessly exposes generative AI APIs, empowering users to create custom applications. Features include drag-and-drop interface, real-time previews, data integration, and seamless deployment. Generate content, reports, and more with ease, without the need for extensive coding expertise. Boost productivity and creativity in a user-friendly environment.  With screenshot that is up on intelligenAI website.</p>
                    <NioButton href="/index-analytics" icon="arrow-right after" label="Learn More" className="btn-link mt-2 mt-md-5" />
                  </div>
                </NioCard.Body>
                <div className="text-end"  >
                  <img src="images/features/b.png" alt="feature" className="ps-3 ps-md-7" style={{ "height": "20rem", "width": "26rem" }} />
                </div>
              </NioCard>
            </Col>
            <Col md={6} xl={4} >
              <NioCard className="border-0 bg-blue-50">
                <NioCard.Body>
                  <NioMedia size="lg" variant="warning" rounded icon="user-switch-fill" className="text-white mb-3 mb-lg-5" />
                  <h4 >API Marketplace</h4>
                  <p className="fs-16">
                    Offer your tailor-made models, datasets and Spaces through your IntellibooksStudio Marketplace ensuring privacy and control.Benefit from built-in features like role-based access control, pull requests discussions, Pricing ,Feedback and versioning. For instance, you can use this marketplace to share a built-in generative AI API designed for business purposes.

                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} xl={4} >
              <NioCard className="border-0 bg-blue-50">
                <NioCard.Body>
                  <NioMedia size="lg" variant="danger text-white" rounded icon="tree-structure-fill" className="text-white mb-3 mb-lg-5" />
                  <h4 >Model Evaluation</h4>
                  <p className="fs-16">Evaluating models from Amazon Bedrock, OpenAI, Azure Open AI and Google Vertex AI is a breeze with our no-code platform. Developers can seamlessly assess model performance, accuracy and suitability, thanks to user-friendly tools and intuitive interfaces, ensuring they select the best-fit model for their projects with ease.</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} xl={4} >
              <NioCard className="border-0 bg-blue-50">
                <NioCard.Body>
                  <NioMedia size="lg" variant="primary" rounded icon="puzzle-fill" className="mb-3 mb-lg-5" />
                  <h4>Logging and Monitoring</h4>
                  <p className="fs-16">Our no-code platform simplifies the monitoring, logging, and debugging of generative AI models like Amazon Bedrock, OpenAI, Azure Open AI and Google Vertex AI. Developers benefit from user-friendly tools and an intuitive interface making it, Elevate your generative AI development experience with our comprehensive platform. </p>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
          <div className="text-center pt-7">
            <ul className="nk-btn-group justify-content-center">
              <li>
                <NioButton href="https://ibprocess.intellibooks.io/signin" target="_blank" className="btn-primary" label="Get Started" />
              </li>
              <li>
                <NioButton href="/blogs" className="btn-outline-primary" label="Learn More" />
              </li>
            </ul>
          </div>
        </NioSection.Content>
      </NioSection>
      {/*  Feature Section End  */}

      {/*  Works Section Start  */}
      <NioSection className="nk-section-cta">
        <NioSection.Head alignX="center">
          <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >HOW IT WORKS</span>
          <h2 style={{ whiteSpace: "nowrap" }} >Easy Process to Get Started</h2>
          <p className="fs-20">Discover how it works by leveraging Generative AI Platforms,Models and Prompt engineering .</p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="align-items-center flex-row-reverse justify-content-between">
            <Col lg={6} >
              <div className="nk-cta-img-wrap bg-primary-gradient rounded-4 px-4 pt-4 mb-7 mb-lg-0 ms-lg-7 overflow-hidden" >
                <img src="images/cta/a.png" alt="thumb" />
              </div>
            </Col>
            <Col lg={6}>
              <ul className="gap gy-5 gy-lg-7">
                <li className="media-group gap-3 gap-md-5 flex-column flex-sm-row" >
                  <NioMedia size="lg" rounded border icon="laptop-fill" />

                  <div className="media-text m-0">
                    <h4 className="text-capitalize mb-2">Chose Amazon , Google , OpenAI or Azure platform</h4>
                    <p> Join us now and create your account to start exploring our platform and unlocking Generative AI platform features.</p>
                  </div>
                </li>
                <li className="media-group gap-3 gap-md-5 flex-column flex-sm-row" >
                  <NioMedia size="lg" rounded border icon="icon ni ni-centos" />


                  <div className="media-text m-0">
                    <h4 className="text-capitalize mb-2">Select Models like Antropic , Palm , OpenAI</h4>
                    <p> Install Models of your choice like Antropic , Palm, OpenAI to get started with AI.
                    </p>
                  </div>
                </li>
                <li className="media-group gap-3 gap-md-5 flex-column flex-sm-row" >
                  <NioMedia size="lg" rounded border icon="browser-fill" />

                  <div className="media-text m-0">
                    <h4 className="text-capitalize mb-2">Start with prompt , evaluation and Monitoring</h4>
                    <p>Design effective prompts, assessing responses using human evaluation and automated metrics and check for biases.
                    </p>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>

      {/*  Works Section End  */}

      {/*  Video Section Start  */}
      <NioSection className="nk-video-section" masks={["blur-1 left top", "blur-1 right bottom"]}>
        <NioSection.Head alignX="center">
          <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >OVERVIEW</span>
          <h2>All-In-One AI Tool</h2>
          <p className="fs-20">Harness the strength of artificial intelligence for effortless analytics. Drive data-informed choices with our comprehensive AI-powered tool.</p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="nk-video rounded-3 bg-blue-50 " >
                <div className="nk-mask shape-1 overflow-hidden rounded-4"  ></div>
                <div className="nk-video-inner">
                  <div className="nk-video-logo p-4 d-none d-sm-block">
                    <NioBrand logo="s1" variant="dark" />
                  </div>
                  <div className="nk-video-content">
                    <div className="nk-video-img overflow-hidden pt-4">
                      <img className="parallax-init mb-n6 mb-sm-n4" data-scale="1.25" data-orientation="down" src="images/video/a.png" alt="" />
                    </div>
                    <div className="nk-video-btn">
                      <NioMedia
                        size="lg"
                        icon="play-fill"
                        rounded variant="primary"
                        lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
                        className="shadow-sm animate animate-infinite animate-pulse animate-duration-1" />
                    </div>
                  </div>
                </div>

              </div>

              <div className="text-center pt-5 pt-md-7">
                <ul className="nk-btn-group justify-content-center">
                  <li>
                    <NioButton href="https://ibprocess.intellibooks.io/signin" target="_blank" className="btn-primary" label="Get Started" />
                  </li>
                  <li>
                    <NioButton href="/blogs" className="btn-outline-primary" label="Learn More" />
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          {/* <Row className="justify-content-center justify-content-xxl-between align-items-center pt-5 pt-md-7">
            <Col lg={7} xl={6}>
              <div className="nk-section-head pb-xxl-0 text-center text-xxl-start">
                <h2 className=" mb-0">More Than 1M+ People Around The World Are Already Using</h2>
              </div>
            </Col>
            <Col lg={8} xl={6}>
              <div className="d-flex gap-2 flex-wrap justify-content-center justify-content-lg-between text-xxl-end">
                <div className="mb-2 mb-xl-0 text-center text-lg-end">
                  <h3 className="mb-1">
                    <NioCount end="1" suffix="M+" />
                  </h3>
                  <p className="fs-20">Active Downloads</p>
                </div>
                <div className="mb-2 mb-xl-0 text-center text-lg-end">
                  <h3 className="mb-1">
                    <NioCount end={4} suffix=".86" />
                  </h3>
                  <p className="fs-20">Average Rating</p>
                </div>
                <div className="mb-2 mb-xl-0 text-center text-lg-end">
                  <h3 className="mb-1">
                    <NioCount end={60} suffix="K+" />
                  </h3>
                  <p className="fs-20">Active Users</p>
                </div>
              </div>
            </Col>
          </Row> */}
        </NioSection.Content>
      </NioSection>

      {/*  Video Section End  */}

      {/*  Testimonial Section Start  */}
      <NioSection className="nk-testimonial-section">
        {/* <Row className="justify-content-center">
          <Col lg={8} xl={4}>
            <div className="nk-section-head text-center">
              <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >Challenges</span>
              <h2 >What are Customers Main Challenges and How can we solve</h2>

            </div>
          </Col>
        </Row> */}

        <Row className="justify-content-center">
          <Col lg={8} xl={4}>
            <div className="nk-section-head text-center">
              <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4">Challenges</span>
              <h2 className="text-center">What are Customers' <br /> Main Challenges and How can we solve</h2>
            </div>
          </Col>
        </Row>



        <NioSection.Content>
          <Row className="g-gs">
            <Col md={6} lg={4}>
              <NioCard>
                <NioCard.Body>
                  {/* <ul className="d-flex gap-2 align-items-center mb-2">
                    <li>
                      <NioIcon name="star-fill" className="text-warning" />
                    </li>
                    <li>
                      <NioIcon name="star-fill" className="text-warning" />
                    </li>
                    <li>
                      <NioIcon name="star-fill" className="text-warning" />
                    </li>
                    <li>
                      <NioIcon name="star-fill" className="text-warning" />
                    </li>
                    <li>
                      <NioIcon name="star-fill" className="text-warning" />
                    </li>
                  </ul> */}
                  <div>
                    <h5 className="mb-3">Challenge 1</h5>
                    <strong>Lead time from concept to production takes long time</strong>
                    <p className="fs-14 line-clamp-3">
                      IntelligenAI is NO Code drag and drop workflow based tool with pre build integration to
                      fast track development.
                    </p>
                  </div>

                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4}>
              <NioCard>
                <NioCard.Body>
                  {/* <ul className="d-flex gap-2 align-items-center mb-2">
                    <li>
                      <NioIcon name="star-fill" className="text-warning" />
                    </li>
                    <li>
                      <NioIcon name="star-fill" className="text-warning" />
                    </li>
                    <li>
                      <NioIcon name="star-fill" className="text-warning" />
                    </li>
                    <li>
                      <NioIcon name="star-fill" className="text-warning" />
                    </li>
                    <li>
                      <NioIcon name="star-fill" className="text-warning" />
                    </li>
                  </ul> */}
                  <div>
                    <h5 className="mb-3">Challenge 2</h5>
                    <strong>Which model is better for our use case</strong>
                    <p className="fs-14 line-clamp-3" style={{ "margin-bottom": "50px" }}>
                      IntelligenAI provide evaluation of various model results in real time to compare with pre
                      build elevators.
                    </p>
                  </div>

                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4}>
              <NioCard>
                <NioCard.Body>
                  {/* <ul className="d-flex gap-2 align-items-center mb-2">
                    <li>
                      <NioIcon name="star-fill" className="text-warning" />
                    </li>
                    <li>
                      <NioIcon name="star-fill" className="text-warning" />
                    </li>
                    <li>
                      <NioIcon name="star-fill" className="text-warning" />
                    </li>
                    <li>
                      <NioIcon name="star-fill" className="text-warning" />
                    </li>
                    <li>
                      <NioIcon name="star-fill" className="text-warning" />
                    </li>
                  </ul> */}
                  <div>
                    <h5 className="mb-3">Challenge 3</h5>
                    <strong>We need to do lot of configurations and development to fine tune response</strong>
                    <p className="fs-14 line-clamp-3">
                      IntelligenAI provides GenAI API marketplace where based on your need you can pick pre
                      configured solution as an API to use it instantly.
                    </p>
                  </div>

                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
          {/* <div className="text-center pt-5 pt-lg-7">
            <NioButton href="/customer-testimonials" className="btn-outline-primary" label="See All Reviews" />
          </div> */}
        </NioSection.Content>
      </NioSection>
      {/*  Testimonial Section End  */}


      {/*  Blog Section Start  */}
      <NioSection className="nk-section-blog" masks={["blur-1 left top", "blur-1 right bottom"]}>

        <NioSection.Head alignX="center">
          <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4">OUR BLOGS</span>
          <h2>Resource Center</h2>
          <p className="fs-20">
            Unlock the potential of our resource center, accessing valuable information and insights for your business growth.
          </p>
        </NioSection.Head>

        <NioSection.Content>
          <Row className="gy-5 gy-lg-0">
            <Col md={6} lg={4} >
              <NioCard className="card-blog">
                <NioCard.Body>
                  <div className="card-image">
                    <img src="/images/blog/a1.jpg" alt="" className="card-img" />
                  </div>
                  <div className="card-content pt-4">
                    <div className="pb-1">
                      <span className="badge rounded-pill text-bg-primary-soft">Growth</span>
                    </div>
                    <h5 className="card-title">
                      <Link to="/blog-details/one">Unlocking the Transformative Potential of Language Models</Link>
                    </h5>

                    {/* <div className="media-group pt-4 align-items-center">

                      <div className="media media-sm media-circle">
                        <img src="images/avatar/a.jpg" alt="avatar" />
                      </div>

                      <div className="media-text">
                        <span className="lead-text fw-normal">John Carter</span>
                        <ul className="nk-list-meta smaller">
                          <li>Feb 10, 2022</li>
                          <li>8 min read</li>
                        </ul>
                      </div>
                    </div> */}
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard className="card-blog">
                <NioCard.Body>
                  <div className="card-image">
                    <img src="/images/blog/b1.jpg" alt="" className="card-img" />
                  </div>
                  <div className="card-content pt-4">
                    <div className="pb-1">
                      <span className="badge rounded-pill text-bg-primary-soft">Marketing</span>
                    </div>
                    <h5 className="card-title">
                      <Link to="/blog-details/two">How IntelligentAI is Empowering Businesses with Language Models</Link>
                    </h5>

                    {/* <div className="media-group pt-4 align-items-center">

                      <div className="media media-sm media-circle">
                        <img src="images/avatar/b1.jpg" alt="" />
                      </div>

                      <div className="media-text">
                        <span className="lead-text fw-normal">Annette Black</span>
                        <ul className="nk-list-meta smaller">
                          <li>Feb 10, 2022</li>
                          <li>8 min read</li>
                        </ul>
                      </div>
                    </div> */}
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard className="card-blog">
                <NioCard.Body>
                  <div className="card-image">
                    <img src="images/blog/c1.jpg" alt="" className="card-img" />
                  </div>
                  <div className="card-content pt-4">
                    <div className="pb-1">
                      <span className="badge rounded-pill text-bg-primary-soft">Growth</span>
                    </div>
                    <h5 className="card-title">
                      <Link to="/blog-details/three">Optimizing Language Models for Business Success with IntelligenAI</Link>
                    </h5>

                    {/* <div className="media-group pt-4 align-items-center">

                      <div className="media media-sm media-circle">
                        <img src="images/avatar/c.jpg" alt="" />
                      </div>

                      <div className="media-text">
                        <span className="lead-text fw-normal">Ralph Edwards</span>
                        <ul className="nk-list-meta smaller">
                          <li>Feb 10, 2022</li>
                          <li>8 min read</li>
                        </ul>
                      </div>
                    </div> */}
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
          <div className="text-center pt-5 pt-lg-7">
            <NioButton href="/blogs" className="btn-outline-primary" label="Browse All Articles" />
          </div>
        </NioSection.Content>
      </NioSection>
      {/*  Blog Section End  */}

      {/*  CTA Section Start  */}
      <NioSection>
        <NioSection.Content>
          <div className="nk-cta-wrap nk-cta-card bg-primary-gradient rounded-3 is-theme position-relative overflow-hidden" >
            <Row className="g-0 align-items-center overflow-hidden">
              <Col xs={{ order: 2 }} lg={{ span: 7, order: 0 }}>
                <div className="nk-block-head-content  mb-0">
                  <h2 className="newsletter-heading text-capitalize h1 m-0 mb-4 mb-lg-7">Initiate AI-driven to elevate your business performance.
                  </h2>
                  <ul className="nk-btn-group flex-wrap ps-1">
                    <li>
                      <NioButton href="https://ibprocess.intellibooks.io/signin" target="_blank" className="btn-white text-dark" label="Get Started" />
                    </li>
                    <li>
                      <NioButton href="/blogs" className="btn-outline-white" label="Learn More" />
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={{ order: 1 }} lg={{ span: 5, order: 0 }}>
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
      {/* <NioSection className="nk-newsletter-section pb-lg-0">
        <Row className="justify-content-center justify-content-lg-between align-items-center pb-5 border-bottom border-lighter">
          <Col lg={6} xl={4}>
            <div className="nk-newsletter-content text-center text-lg-start pb-5 pb-lg-0">
              <h4 className="text-capitalize">Subscribe to our newsletter</h4>
              <p className="fs-16">Streamline your business operations with our powerful AI solutions. Boost productivity and drive growth with IntelligenAI.</p>
            </div>
          </Col>
          <Col md={10} lg={6} xl={5}>
            <NioSubscribeField variant="one" />
          </Col>
        </Row>
      </NioSection> */}
      {/*  Newsletter Section End  */}

    </AppLayout >
  )
}

export default Index