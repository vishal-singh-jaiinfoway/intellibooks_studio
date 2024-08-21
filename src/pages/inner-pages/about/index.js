import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';


// layout 
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components
import { NioButton, NioIcon, NioSection, NioMedia, NioCard, NioSubscribeField, NioBrand } from '../../../components';

function index() {
  return (
    <AppLayout title="About" rootClass="layout-1">

      {/*  Story Section Start  */}
      <NioSection className="pt-120 pt-lg-160" masks={["blur-1 left center"]}>
        <Row className="justify-content-center">
          <Col lg={6}>
            <div className="nk-section-head text-center">
              <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >OUR STORY: THE RISE OF INTELLIGENAI
              </span>
              <h2 >The Story Behind IntellibooksStudio </h2>
              <p className="fs-18 mb-0" >
                Discover the inspiring story behind <strong>IntellibooksStudio </strong> - how
                a vision became a reality, empowering individuals
                and businesses to thrive in the Generative AI
                world.

              </p>
              <ul className="nk-btn-group justify-content-center pt-5">
                <li>
                  <NioButton href="https://ibprocess.intellibooks.io/signin" target="_blank" className="btn-lg btn-primary rounded-2" label="Join Our Team" />
                </li>
                <li>
                  <NioButton href="/blogs" className="btn-lg btn-outline-primary rounded-2" label="Our Blogs" />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <div className="nk-video rounded-4 bg-blue-100 " >
                <div className="nk-mask shape-1 rounded-4 overflow-hidden" ></div>
                <div className="nk-video-inner">
                  <div className="nk-video-logo p-4">
                    <NioBrand />
                  </div>
                  <div className="nk-video-content">
                    <div className="nk-video-img">
                      <img src="images/video/e.png" alt="video" />
                    </div>
                    <div className="nk-video-btn">
                      <NioMedia
                        rounded
                        size="xl"
                        icon="play-fill"
                        variant="primary"
                        lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
                        className="shadow-xl animate animate-infinite animate-pulse animate-duration-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Story Section End */}

      {/*  Features Section Start  */}
      <NioSection>
        <NioSection.Content>
          <Row className="gy-5">
            <Col md={6} >
              <NioCard>
                <NioCard.Body>
                  <div className="media-group gap-3 gap-md-4 flex-column flex-lg-row align-items-start align-items-lg-center">
                    <div className="media-text">
                      <h1 className="text-primary">100%</h1>
                    </div>
                    <div className="media-text m-0">
                      <h4 className="text-capitalize">Democratize Access</h4>
                      <p>Democratizing GenAI reinvents the way work is donebyimproving existing processes.</p>
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} >
              <NioCard>
                <NioCard.Body>
                  <div className="media-group gap-3 gap-md-4 flex-column flex-lg-row align-items-start align-items-lg-center">
                    <div className="media-text">
                      <h1 className="text-warning">400%</h1>
                    </div>
                    <div className="media-text m-0">
                      <h4 className="text-capitalize">Cross Model and Platform Access</h4>
                      <p>Work on models from different vendors in oneplace </p>
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} >
              <NioCard>
                <NioCard.Body>
                  <div className="media-group gap-3 gap-md-4 flex-column flex-lg-row align-items-start align-items-lg-center">
                    <div className="media-text">
                      <h1 className="text-danger">300%</h1>
                    </div>
                    <div className="media-text m-0">
                      <h4 className="text-capitalize">API Driven platform</h4>
                      <p> Build , test and deploy Model using API in an automatedmanner </p>
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} >
              <NioCard>
                <NioCard.Body>
                  <div className="media-group gap-3 gap-md-4 flex-column flex-lg-row align-items-start align-items-lg-center">
                    <div className="media-text">
                      <h1 className="text-success">200%</h1>
                    </div>
                    <div className="media-text m-0">
                      <h4 className="text-capitalize">
                        Building the Future with Ease
                      </h4>
                      <p> Our platform is a testament to the power of API-driven design. Build, test, and deploy models with unmatched ease, streamlining your development journey towards success.</p>
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Features Section End  */}

      {/*  Journey Section Start  */}
      {/* <NioSection>
        <NioSection.Content>
          <Row className="align-items-lg-end justify-content-lg-between gy-5">
            <Col lg={6}>
              <div className="d-flex flex-column" >
                <div className="nk-frame mb-5">
                  <img src="images/cover/cover-37.png" alt="cover-bg" style={{ borderRadius: "3rem" }} />
                </div>
                <div className="nk-section-head pb-0">
                  <span className="d-inline-block fs-16 text-uppercase text-primary fw-semibold mb-2">THE JOURNEY TO SUCCESS</span>
                  <h2>Charting the Path of IntellibooksStudio</h2>
                  <p className="fs-20">Discover the remarkable story of IntellibooksStudio, a journey fueled by vision and unwavering dedication. Initially conceived as a dream to revolutionize business collaboration, IntellibooksStudio has evolved into a powerhouse of productivity and innovation. Our relentless pursuit of excellence has led us to develop groundbreaking solutions that simplify complex business processes. As we navigate the ever-changing terrain of the business world, our commitment to adaptability and foresight positions us at the forefront of technological advancement. We're not just keeping pace with the business needs of today; we're shaping the future, ensuring that every step with IntellibooksStudio is a stride towards efficiency, ingenuity, and unparalleled success. Join us as we continue to break barriers and redefine the landscape of business productivity.</p>
                  <ul className="nk-btn-group pt-5">
                    <li>
                      <NioButton href="/auth/sign-up" className="btn-primary" label="Join Our Team" />
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6} xl={5}>
              <div className="d-flex flex-column">
                <div className="nk-frame mb-5 mb-lg-0 order-lg-2 mt-lg-3" >
                  <img src="images/cover/cover-38.png" alt="cover-bg" style={{ borderRadius: "3rem" }} />
                </div>
                <div className="nk-section-head pb-0">
                  <span className="d-inline-block fs-16 text-uppercase text-primary fw-semibold mb-2">THE FOUNDATION OF OUR SUCCESS
                  </span>
                  <h2>The Origins of IntellibooksStudio
                  </h2>
                  <p className="fs-20" style={{ marginBottom: "1rem" }}>IntellibooksStudio's story starts with the vision of a passionate team, dedicated to revolutionizing business collaboration. Rooted in the robust framework of LangChain, our journey has been marked by a transformative approach to low-code and no-code workflows. We've meticulously crafted intelligent solutions that not only elevate productivity but also foster seamless collaboration. Our platform stands as a testament to innovation, designed to empower users with intuitive tools that streamline complex tasks. As we continue to push the boundaries of what's possible, IntellibooksStudio remains committed to delivering unmatched efficiency and collaborative excellence.</p>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection> */}

      {/* <NioSection>
        <NioSection.Content>
          <Row className="align-items-start justify-content-between gy-5">
            <Col lg={6} className="mb-5">
              <div className="d-flex flex-column" style={{ padding: "20px", borderRadius: "15px", backgroundColor: "#f8f9fa" }}>
                <div className="nk-frame mb-5">
                  <img src="images/cover/cover-37.png" alt="cover-bg" style={{ borderRadius: "3rem", width: "100%", objectFit: "cover", maxHeight: "300px" }} />
                </div>
                <div className="nk-section-head pb-0">
                  <span className="d-inline-block fs-16 text-uppercase text-primary fw-semibold mb-2">THE FOUNDATION OF OUR SUCCESS</span>
                  <h2>The Origins of IntellibooksStudio</h2>
                  <p className="fs-20" style={{ marginBottom: "1rem" }}>IntellibooksStudio's story starts with the vision of a passionate team, dedicated to revolutionizing business collaboration. Rooted in the robust framework of LangChain, our journey has been marked by a transformative approach to low-code and no-code workflows. We've meticulously crafted intelligent solutions that not only elevate productivity but also foster seamless collaboration. Our platform stands as a testament to innovation, designed to empower users with intuitive tools that streamline complex tasks. As we continue to push the boundaries of what's possible, IntellibooksStudio remains committed to delivering unmatched efficiency and collaborative excellence.</p>
                </div>
              </div>
            </Col>
            <Col lg={6} xl={5} className="mb-5 mb-lg-0 mt-lg-3">
              <div className="d-flex flex-column" style={{ padding: "20px", borderRadius: "15px", backgroundColor: "#f8f9fa" }}>
                <div className="nk-frame mb-5">
                  <img src="images/cover/cover-38.png" alt="cover-bg" style={{ borderRadius: "3rem", width: "100%", objectFit: "cover", maxHeight: "300px" }} />
                </div>
                <div className="nk-section-head pb-0">
                  <span className="d-inline-block fs-16 text-uppercase text-primary fw-semibold mb-2">THE JOURNEY TO SUCCESS</span>
                  <h2>Charting the Path of IntellibooksStudio</h2>
                  <p className="fs-20">Discover the remarkable story of IntellibooksStudio, a journey fueled by vision and unwavering dedication. Initially conceived as a dream to revolutionize business collaboration, IntellibooksStudio has evolved into a powerhouse of productivity and innovation. Our relentless pursuit of excellence has led us to develop groundbreaking solutions that simplify complex business processes. As we navigate the ever-changing terrain of the business world, our commitment to adaptability and foresight positions us at the forefront of technological advancement. We're not just keeping pace with the business needs of today; we're shaping the future, ensuring that every step with IntellibooksStudio is a stride towards efficiency, ingenuity, and unparalleled success.</p>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection> */}


      <NioSection>
        <NioSection.Content>
          <Row className="align-items-start justify-content-between gy-5">
            <Col lg={6} className="mb-5">
              <div className="d-flex flex-column" style={{ padding: "20px", borderRadius: "15px", backgroundColor: "#f8f9fa" }}>
                <div className="nk-frame mb-5">
                  <img src="images/cover/cover-37.png" alt="cover-bg" style={{ borderRadius: "3rem", width: "100%", objectFit: "cover", maxHeight: "300px" }} />
                </div>
                <div className="nk-section-head pb-0">
                  <span className="d-inline-block fs-16 text-uppercase text-primary fw-semibold mb-2">THE FOUNDATION OF OUR SUCCESS</span>
                  <h2>The Origins of IntellibooksStudio</h2>
                  <p className="fs-20" style={{ marginBottom: "1rem" }}>IntellibooksStudio emerged from a visionary group's desire to transform how businesses collaborate, introducing aground breaking approach to streamline workflows. Founded by a team of dedicated individuals, they recognized the necessity for a platform that effortlessly integrates diverse tools and channels, enabling teams to collaborate more efficiently. Built upon the LangChain foundation, IntellibooksStudio is set to revolutionizelow-code and no-code workflows, offering an intelligent and generative AI solution for unparalleled business
                    productivity</p>
                </div>
              </div>
            </Col>
            <Col lg={6} className="mb-5 mt-lg-3">
              <div className="d-flex flex-column" style={{ padding: "20px", borderRadius: "15px", backgroundColor: "#f8f9fa" }}>
                <div className="nk-frame mb-5">
                  <img src="images/cover/cover-38.png" alt="cover-bg" style={{ borderRadius: "3rem", width: "100%", objectFit: "cover", maxHeight: "300px" }} />
                </div>
                <div className="nk-section-head pb-0">
                  <span className="d-inline-block fs-16 text-uppercase text-primary fw-semibold mb-2">THE JOURNEY TO SUCCESS</span>
                  <h2>Journey Towards Success</h2>
                  <p className="fs-20">The journey towards success for IntellibooksStudio has been a remarkable one. It started with a vision to provide businesses with a comprehensive platform that simplifies collaboration and maximizes productivity. With a dedicated teamand a
                    customer-centric approach, IntellibooksStudio has continuously evolved and improvedits
                    offerings to meet the changing needs of businesses. Success is not merely a destination but a continuous process of self-discovery and improvement.Each step taken on this journey contributes to the development of skills, the accumulation of knowledge, and the honing of one's mindset.</p>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>

      {/*  Journey Section End  */}

      {/*  Values Section Start  */}
      <NioSection>
        <NioSection.Head alignX="center">
          <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >OUR CORE VALUES
          </span>
          <h2>The Pillars of IntellibooksStudio's Philosophy
          </h2>
          <p className="fs-20">Innovation, Collaboration, Excellence. These core values guide us as we strive to deliver exceptional solutions and empower businesses.</p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5">
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia
                    rounded
                    size="lg"
                    className="mb-4"
                    variant="primary-soft"
                    icon="file-text-fill"
                  />
                  <h4>Innovation</h4>
                  <p > Driving the future with groundbreaking ideas.
                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia
                    rounded
                    size="lg"
                    icon="gift"
                    className="mb-4"
                    variant="info-soft"
                  />
                  <h4>Collaboration</h4>
                  <p >Believing in the power of collective genius.
                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia
                    rounded
                    size="lg"
                    className="mb-4"
                    variant="warning-soft"
                    icon="growth-fill"
                  />
                  <h4>Excellence</h4>
                  <p > Delivering outstanding solutions, every time.</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia
                    rounded
                    size="lg"
                    className="mb-4"
                    icon="users-fill"
                    variant="danger-soft"
                  />
                  <h4>Result-Oriented</h4>
                  <p>  Committed to impactful,measurable.
                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia
                    rounded
                    size="lg"
                    className="mb-4"
                    icon="bulb-fill"
                    variant="primary-soft"
                  />
                  <h4>Growth</h4>
                  <p > Embracing continuous learning and evoluation.
                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia
                    rounded
                    size="lg"
                    className="mb-4"
                    icon="flag-fill"
                    variant="success-soft"
                  />
                  <h4>Team work</h4>
                  <p > Celebrating the strength in unity.
                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>

      </NioSection>
      {/*  Values Section Start  */}

      {/*  Team Section Start  */}
      {/* <NioSection>
        <NioSection.Head alignX="center">
          <span className="d-inline-block fs-16 text-uppercase text-primary fw-semibold mb-2">team members</span>
          <h2>The Team Behind IntellibooksStudio </h2>
          <p className="fs-20 mb-0">Meet the dedicated team behind IntellibooksStudio,
            working tirelessly to bring you the best
            experience.</p>
          <ul className="nk-btn-group justify-content-center pt-5">
            <li>
              <NioButton href="/auth/sign-up" className="btn-lg btn-primary rounded-2" label="Join Our Team" />
            </li>
            <li>
              <NioButton href="/blogs" className="btn-lg btn-outline-primary rounded-2" label="Learn More" />
            </li>
          </ul>
        </NioSection.Head>

        <NioSection.Content>
          <Row className="gy-5">
            <Col md={6} lg={4} >
              <NioCard className="border-0 bg-purple-50 ">
                <NioCard.Body className="pb-0">
                  <div className="card-title-group align-items-start mb-4">
                    <div className="card-title-group-item">
                      <h4 className="text-capitalize mb-1">John Carter</h4>
                      <p className="fs-16">CEO &amp; Founder</p>
                    </div>
                    <div className="card-title-group-item">
                      <Link to="#" className="text-dark">
                        <NioIcon className="fs-28" name="fedora" />
                      </Link>
                    </div>
                  </div>
                  <div className="card-image text-center">
                    <img src="images/team/a.png" alt="team" />
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard className="border-0 bg-green-50">
                <NioCard.Body className="pb-0">
                  <div className="card-title-group align-items-start mb-4">
                    <div className="card-title-group-item">
                      <h4 className="text-capitalize mb-1">Sophie Moor</h4>
                      <p className="fs-16"> Manager Of XYZ</p>
                    </div>
                    <div className="card-title-group-item">
                      <Link to="#" className="text-dark">
                        <NioIcon className="fs-28" name="b-si" />
                      </Link>
                    </div>
                  </div>
                  <div className="card-image text-center">
                    <img src="images/team/b.png" alt="team" />
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard className="border-0 bg-yellow-50">
                <NioCard.Body className="pb-0">
                  <div className="card-title-group align-items-start mb-4">
                    <div className="card-title-group-item">
                      <h4 className="text-capitalize mb-1">Sam Houston</h4>
                      <p className="fs-16">VP of Development</p>
                    </div>
                    <div className="card-title-group-item">
                      <Link to="#" className="text-dark">
                        <NioIcon className="fs-28" name="linkedin-round" />
                      </Link>
                    </div>
                  </div>
                  <div className="card-image text-center">
                    <img src="images/team/c.png" alt="team" />
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>

      </NioSection> */}
      {/*  Team Section Start  */}

      {/*  Brands Section Start  */}
      {/* <NioSection>
        <NioSection.Head alignX="center">
          <span className="d-inline-block fs-16 text-uppercase text-primary fw-semibold mb-2">support From</span>
          <h2>Our Investors</h2>
          <p className="fs-20">We are proud to have the support of our valued investors who believe in our vision and contribute to our growth.</p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gap g-3 justify-content-xl-center">
            {
              ["a", "b", "c", "d", "e"]?.map((brand, idx) => (
                <Col xs={6} sm={4} lg={3} xl={2} key={idx}>
                  <Link
                    to="#"

                    className="nk-brand bg-gray border border-gray-500 py-3 py-md-4 px-5 px-md-6 rounded-2 text-center d-inline-block w-100 h-100"
                  >
                    <img src={`images/brands/${brand}.png`} alt="brand" className="img-fluid" />
                  </Link>
                </Col>
              ))
            }
          </Row>
        </NioSection.Content>
      </NioSection> */}
      {/*  Brands Section Start  */}

      {/*  Blog Section Start  */}
      <NioSection masks={["blur-1 right center"]}>
        <NioSection.Head alignX="center">
          <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >INTELLIGENAI IN THE LIMELIGHT
          </span>

          <h2>Making Headlines, Setting Trends</h2>
          <p className="fs-20">Stay updated with IntellibooksStudio's latest achievements and milestones, as we make waves in top media publications.</p>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5">
            <Col lg={6}>
              <NioCard className="card-gutter-lg bg-primary is-theme h-100" >
                <NioCard.Body className="p-5 p-md-7">
                  <div className="card-content h-100 d-flex flex-column justify-content-between">
                    <div className="card-image mb-3">
                      <Link to="#">
                        <img src="images/brands/b.png" alt="brand" className="h-15px" />
                      </Link>
                    </div>
                    <h3 className="card-title text-capitalize"> IntellibooksStudio  raises in Series </h3>
                    <p> IntellibooksStudio , a rapidly growing technology company, recently announced the successful completion of its Series C funding round, securing a substantial investment of $84 million. <br /><br /> The funding will be utilized to further enhance and expand NioLand's products and services, solidifying its position as a market leader in the industry. The significant investment highlights the confidence and support from investors in IntellibooksStudio  vision and potential for continued success. </p>
                    <div>
                      {/* <NioButton
                        label="Read More"
                        href="/blog-details"
                        className="btn-link"
                        icon="arrow-right after"
                      /> */}
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col lg={6}>
              <Row className="gy-5">
                <Col xs={12}>
                  <NioCard className="card-gutter-md" >
                    <NioCard.Body className="p-5">
                      <div className="card-content">
                        <div className="card-image mb-3 mb-md-5 brand">
                          <Link to="#">
                            <img src="images/brands/bedrock.png" alt="brand" className="h-20px" />
                          </Link>
                        </div>
                        <h4 className="card-title text-capitalize mb-3 mb-md-5">
                          <Link to="/blog-details">IntellibooksStudio claims to be the #1 player in the analytics industry</Link>
                        </h4>
                        <div>
                          {/* <NioButton
                            label="Read More"
                            href="/blog-details"
                            className="btn-link"
                            icon="arrow-right after"
                          /> */}
                        </div>
                      </div>
                    </NioCard.Body>
                  </NioCard>
                </Col>
                <Col xs={12} >
                  <NioCard className="card-gutter-md bg-dark ">
                    <NioCard.Body className="p-5">
                      <div className="card-content">
                        <div className="card-image mb-3 mb-md-5 brand">
                          {/* <Link to="#">
                            <img src="images/brands/openAI.png" alt="brand" className="h-24px" />
                          </Link> */}
                        </div>
                        <h4 className="card-title text-capitalize mb-3 mb-md-5 text-white">
                          <Link to="/blog-details">IntellibooksStudio  CEO steps-back, new CEO comes in September after the board decisions</Link>
                        </h4>
                        <div>
                          {/* <NioButton
                            label="Read More"
                            href="/blog-details"
                            className="btn-link"
                            icon="arrow-right after"
                          /> */}
                        </div>
                      </div>
                    </NioCard.Body>
                  </NioCard>
                </Col>
              </Row>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Blog Section End  */}

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

export default index