import React from 'react';
import { Link } from 'react-router-dom';
import { NioButton, NioCard } from '../../../components';
import { Col, Container, Row } from 'react-bootstrap';

// layouts
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// Components 
import { NioIcon, NioMedia, NioSection, NioSubscribeField } from '../../../components';

// sections content 
import TestimonialContent from '../../../components/PageComponents/Homepages/KidsCourse/TestimonialContent/TestimonialContent';

function index() {

  return (
    <AppLayout>

      {/*  Banner Section Start   */}
      <section className="nk-banner nk-banner-kd-course">
        <div className="nk-banner-wrap pb-0">
          <Container>
            <Row className="justify-content-between">
              <Col lg={10} xl={7}>
                <div className="nk-banner-content text-center text-lg-start pb-7 pb-xl-0 pt-lg-5">
                  <div className="d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center mb-3">
                    <div className="media-group media-group-overlap flex-grow-0 me-2">

                    </div>

                  </div>
                  <div>
                    <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >Text To SQL</span>

                    <h2 className="display-20 mb-3" >Transforming Natural Language into SQL Queries</h2>
                    <p className="fs-20 text-base" >TextToSQL is an innovative technology that bridges the gap between human language and database queries. It allows users to express their database queries in natural language, making it easier for non-technical users to interact with databases effectively. This page provides a comprehensive overview of how TextToSQL works, the steps to follow, and key considerations for using this technology.</p>
                  </div>
                  <ul className="nk-btn-group justify-content-center justify-content-lg-start pt-5 pt-lg-6 gap gap-3 ms-0">
                    <li className="p-0 m-0" >

                    </li>

                  </ul>

                </div>
              </Col>


            </Row>
          </Container>
        </div>
      </section>
      {/*  Banner Section End   */}

      {/*  Program Section Start   */}
      <NioSection className="nk-section-program" style={{ backgroundColor: "#f0f0fe" }}>
        <NioSection.Content>
          <Row className="align-items-end justify-content-between">
            <Col xl={3}>
              <div className="nk-section-head pb-xl-0">
                <span className="fs-14 fw-semibold text-uppercase d-inline-block text-danger mb-2">Steps to Follow</span>
                <h2>Using TextToSQL following steps  </h2>
              </div>
            </Col>
            <Col xl={7}>
              <Row className="gy-5 gy-xl-0 g-xl-4">
                <Col sm={6} lg={4} >
                  <div>
                    <div className="mb-3">
                      <img src="images/kids-course/icon-1.png" className="h-40px" alt="program-icon" />
                    </div>
                    <h5 className="mb-3 fw-bold"> Input Natural Language Query</h5>
                    <p className="fs-16 text-base line-clamp-2">
                      Begin by entering your database query as a natural language sentence or phrase. Make your query as clear and concise as possible to ensure accurate results.
                    </p>
                  </div>
                </Col>
                <Col sm={6} lg={4} >
                  <div>
                    <div className="mb-3">
                      <img src="images/kids-course/icon-3.png" className="h-40px" alt="program-icon" />
                    </div>
                    <h5 className="mb-3 fw-bold"> Text Analysis</h5>
                    <p className="fs-16 text-base line-clamp-2">Master the art of public speaking, captivating audiences with confidence and impactful communication.</p>
                  </div>
                </Col>
                <Col sm={6} lg={4} >
                  <div>
                    <div className="mb-3">
                      <img src="images/kids-course/icon-2.png" className="h-40px" alt="program-icon" />
                    </div>
                    <h5 className="mb-3 fw-bold">Public Speaking</h5>
                    <p className="fs-16 text-base line-clamp-2">Confidently engage audiences with impactful public speaking skills.</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-between align-items-center pt-7 pt-lg-120 pb-0">
            <Col lg={6}>
              <div className="nk-program-img mb-5 mb-md-7 mb-lg-0" >
                <img src="images/cover/topsql.png" alt="section-cover" style={{borderRadius:"4rem"}}/>
              </div>
            </Col>
            <Col lg={6} xl={5}>
              <div className="nk-section-head" >
                <h2>How TextToSQL Works</h2>
                <p className="fs-20">TextToSQL leverages natural language processing (NLP) and machine learning techniques to understand and convert human language queries into SQL (Structured Query Language) queries that can be executed on a database. Here's a simplified explanation of how it works:</p>
              </div>
              <ul className="d-flex flex-column gap-5">
                <li className="media-group gap-3" >
                  <span>
                    <NioIcon name="check-circle-fill" size="md" className="text-danger" />
                  </span>
                  <div className="media-text mt-n1 ms-0">
                    <h5 className="text-capitalize">Input Text</h5>
                    <p className="text-base">Users provide a natural language query in plain text. For example, Show me all customers who made a purchase in the last month.</p>
                  </div>
                </li>
                <li className="media-group gap-3" >
                  <span>
                    <NioIcon name="check-circle-fill" size="md" className="text-danger" />
                  </span>

                  <div className="media-text mt-n1 ms-0">
                    <h5 className="text-capitalize">Text Analysis</h5>
                    <p className="text-base">TextToSQL performs semantic analysis on the input text, identifying keywords, entities, and their relationships. In our example, it recognizes "customers," "purchase," and "last month" as important elements.</p>
                  </div>
                </li>
                <li className="media-group gap-3" >
                  <span>
                    <NioIcon name="check-circle-fill" size="md" className="text-danger" />
                  </span>

                  <div className="media-text mt-n1 ms-0">
                    <h5 className="text-capitalize">Query Generation</h5>
                    <p className="text-base"> Using the analyzed information, TextToSQL generates an SQL query that corresponds to the user's intent. In our example, it creates a SQL query to retrieve customer records based on purchase history within the last month.</p>
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Program Section End   */}

      {/*  Course Section End   */}
      <NioSection className="nk-section-course pt-7 pt-lg-120">
        <div className="nk-section-head pb-md-7 nk-block-head-between align-items-lg-end flex-column flex-lg-row">
          <div className="text-center text-lg-start pb-5 pb-lg-0">
            <span className="fs-14 fw-semibold text-uppercase d-inline-block text-purple mb-2">Our Key's</span>
            <h2>Here are some important points to keep in mind when using TextToSQL

            </h2>
          </div>

        </div>
        <NioSection.Content>
          <Row className="gy-5 gy-xl-0" style={{ marginBottom: "2rem" }}>
            <Col md={6} xl={4} >
              <NioCard>
                <div className="card-image">
                  <img src="images/cover/1.png" alt="blog" className="card-img-top img-fit-cover h-100" />
                </div>
                <NioCard.Body style={{ backgroundColor: "aliceblue" }}>
                  <div className="card-content h-100 d-flex flex-column">
                    <div className="pb-3">
                      <span className="badge text-bg-purple-soft text-uppercase py-1 px-3">Accuracy</span>
                    </div>
                    <p className="card-title">
                      <p>
                        While TextToSQL is powerful, its accuracy depends on the quality of the input query and the capabilities of the underlying NLP models.The accuracy of the weather forecast.
                      </p>
                    </p>
                    <Row className="g-3 pt-4">
                      <Col lg={6}>
                        {/* <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <NioIcon name="users" />
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">1200+ Students</span>
                          </div>
                        </div> */}
                      </Col>
                      {/* <Col lg={6}>
                        <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <NioIcon name="star" />
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">2812 Ratings</span>
                          </div>
                        </div>
                      </Col> */}
                      {/* <Col lg={6}>
                        <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <em className="icon ni ni-globe"></em>
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">English</span>
                          </div>
                        </div>
                      </Col> */}
                      {/* <Col lg={6}>
                        <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <em className="icon ni ni-tag-alt"></em>
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">Star60</span>
                          </div>
                        </div>
                      </Col> */}
                    </Row>
                    {/* <div className="pt-5 mt-auto">
                      <NioButton href="#" className="btn-block btn-danger text-white" label="Join For $11.99 Only" />
                    </div> */}
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} xl={4} >
              <NioCard className="mb-4 mb-xl-0">
                <div className="card-image">
                  <img src="images/cover/2.png" alt="blog" className="card-img-top" />
                </div>
                <NioCard.Body style={{ backgroundColor: "aliceblue" }}>
                  <div className="card-content h-100 d-flex flex-column">
                    <div className="pb-3">
                      <span className="badge text-bg-purple-soft text-uppercase py-1 px-3">Database Compatibility</span>
                    </div>
                    <p className="card-title">
                      <p>
                        Database compatibility refers to the ability of a system or application to seamlessly interact and exchange information with various databases, ensuring smooth and efficient data integration .</p>
                    </p>
                    {/* <Row className="g-3 pt-4">
                      <Col lg={6}>
                        <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <NioIcon name="users" />
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">340+ Students</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <NioIcon name="star" />
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">1410 Ratings</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <NioIcon name="globe" />
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">English</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <NioIcon name="tag-alt" />
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">Star60</span>
                          </div>
                        </div>
                      </Col>
                    </Row> */}
                    {/* <div className="pt-5 mt-auto">
                      <NioButton href="#" className="btn-block btn-danger text-white" label="Join for $11.99 only" />
                    </div> */}
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} xl={4} >
              <NioCard className="mb-4 mb-xl-0">
                <div className="card-image">
                  <img src="images/cover/3.png" alt="blog" className="card-img-top" />
                </div>
                <NioCard.Body style={{ backgroundColor: "aliceblue" }}>
                  <div className="card-content h-100 d-flex flex-column">
                    <div className="pb-3">
                      <span className="badge text-bg-purple-soft text-uppercase py-1 px-3">Query Complexity</span>
                    </div>
                    <p className="card-title">
                      <p> The query complexity of a computational problem is a measure of the number of queries or information requests needed to solve the problem using a specific algorithm or approach.</p>
                    </p>
                    {/* <Row className="g-3 pt-4">
                      <Col lg={6}>
                        <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <NioIcon name="users" />
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">120+ Students</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <NioIcon name="star" />
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">810 Ratings</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <NioIcon name="globe" />
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">English</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <NioIcon name="tag-alt" />
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">Star60</span>
                          </div>
                        </div>
                      </Col>
                    </Row> */}
                    {/* <div className="pt-5 mt-auto">
                      <NioButton href="#" className="btn-block btn-danger text-white" label="Join for $11.99 only" />
                    </div> */}
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>


        <NioSection.Content>
          <Row className="gy-5 gy-xl-0">
            <Col md={6} xl={4} >
              <NioCard>
                <div className="card-image">
                  <img src="images/cover/4.png" alt="blog" className="card-img-top img-fit-cover h-100" />
                </div>
                <NioCard.Body style={{ backgroundColor: "aliceblue" }}>
                  <div className="card-content h-100 d-flex flex-column">
                    <div className="pb-3">
                      <span className="badge text-bg-purple-soft text-uppercase py-1 px-3">Training Data</span>
                    </div>
                    <p className="card-title">
                      <p>
                        Some TextToSQL systems can be fine-tuned with domain-specific training data to improve accuracy for industry-specific queries.
                      </p>
                    </p>
                    <Row className="g-3 pt-4">
                      <Col lg={6}>
                        {/* <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <NioIcon name="users" />
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">1200+ Students</span>
                          </div>
                        </div> */}
                      </Col>
                      {/* <Col lg={6}>
                        <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <NioIcon name="star" />
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">2812 Ratings</span>
                          </div>
                        </div>
                      </Col> */}
                      {/* <Col lg={6}>
                        <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <em className="icon ni ni-globe"></em>
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">English</span>
                          </div>
                        </div>
                      </Col> */}
                      {/* <Col lg={6}>
                        <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <em className="icon ni ni-tag-alt"></em>
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">Star60</span>
                          </div>
                        </div>
                      </Col> */}
                    </Row>
                    {/* <div className="pt-5 mt-auto">
                      <NioButton href="#" className="btn-block btn-danger text-white" label="Join For $11.99 Only" />
                    </div> */}
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} xl={4} >
              <NioCard className="mb-4 mb-xl-0">
                <div className="card-image">
                  <img src="images/cover/5.png" alt="blog" className="card-img-top" />
                </div>
                <NioCard.Body style={{ backgroundColor: "aliceblue" }}>
                  <div className="card-content h-100 d-flex flex-column">
                    <div className="pb-3">
                      <span className="badge text-bg-purple-soft text-uppercase py-1 px-3">User Training</span>
                    </div>
                    <p className="card-title">
                      <p>
                        User training is essential for ensuring that individuals acquire the necessary skills and knowledge to effectively navigate and utilize a given system or software</p>
                    </p>
                    {/* <Row className="g-3 pt-4">
                      <Col lg={6}>
                        <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <NioIcon name="users" />
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">340+ Students</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <NioIcon name="star" />
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">1410 Ratings</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <NioIcon name="globe" />
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">English</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <NioIcon name="tag-alt" />
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">Star60</span>
                          </div>
                        </div>
                      </Col>
                    </Row> */}
                    {/* <div className="pt-5 mt-auto">
                      <NioButton href="#" className="btn-block btn-danger text-white" label="Join for $11.99 only" />
                    </div> */}
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} xl={4} >
              <NioCard className="mb-4 mb-xl-0">
                <div className="card-image">
                  <img src="images/cover/6.png" alt="blog" className="card-img-top" />
                </div>
                <NioCard.Body style={{ backgroundColor: "aliceblue" }}>
                  <div className="card-content h-100 d-flex flex-column">
                    <div className="pb-3">
                      <span className="badge text-bg-purple-soft text-uppercase py-1 px-3">
                        Integration Challenges</span>
                    </div>
                    <p className="card-title">
                      <p>Addressing potential challenges in integrating TextToSQL with existing systems, such as compatibility issues, data migration concerns, and ensuring seamless interaction.</p>
                    </p>
                    {/* <Row className="g-3 pt-4">
                      <Col lg={6}>
                        <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <NioIcon name="users" />
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">120+ Students</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <NioIcon name="star" />
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">810 Ratings</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <NioIcon name="globe" />
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">English</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className="nk-course-overview-list">
                          <div className="nk-course-overview-media text-purple">
                            <NioIcon name="tag-alt" />
                          </div>
                          <div className="nk-course-overview-content">
                            <span className="title">Star60</span>
                          </div>
                        </div>
                      </Col>
                    </Row> */}
                    {/* <div className="pt-5 mt-auto">
                      <NioButton href="#" className="btn-block btn-danger text-white" label="Join for $11.99 only" />
                    </div> */}
                  </div>
                </NioCard.Body>
              </NioCard>
            </Col>
          </Row>
        </NioSection.Content>


      </NioSection >
      {/*  Course Section End   */}

      {/*  Works Section Start   */}
      {/* <NioSection className="overflow-hidden" masks={["shape-13 d-done d-md-block"]}>
        <NioSection.Head alignX="center">
          <span className="fs-14 fw-semibold text-uppercase d-inline-block text-danger mb-2">How it works?</span>
          <h2>Unique for every learner</h2>
          <p className="fs-20">
            Tailored to each individual, our approach ensures a unique learning experience that meets diverse needs.
          </p>
          <ul className="nk-btn-group justify-content-center pt-5">
            <li>
              <NioButton href="/auth/sign-up" className="btn-danger" label="Sign Up Free" />
            </li>
            <li>
              <div className="d-flex align-items-center gap-2">
                <NioMedia
                  rounded
                  size="md"
                  icon="play-fill"
                  variant="purple"
                  lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
                  className="shadow-xl animate animate-infinite animate-pulse animate-duration-1"
                />

                <div className="media-text">
                  <div className="title fw-semibold">Watch Video</div>
                </div>
              </div>
            </li>
          </ul>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gap g-5 g-md-7 overflow-hidden">
            <Col md={6}>
              <div className="nk-course-cta-img position-relative"  >
                <img src="images/kids-course/section-cover-3-a.png" alt="kids-thumb" />
              </div>
            </Col>
            <Col md={6}>
              <div className="nk-course-cta-img position-relative" >
                <img src="images/kids-course/section-cover-3-b.png" alt="kids-thumb" />
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection> */}
      {/*  Works Section End   */}

      {/*  Testimonial Section Start    */}
      <NioSection className="nk-section-testimonial">
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="nk-section-head text-center pb-5">
              <span className="fs-14 fw-semibold text-uppercase d-inline-block text-danger mb-2">TextToSQL</span>
              <h2 className="mb-0">Conclusion</h2>
              <p>TextToSQL is a groundbreaking technology that democratizes database access by allowing users to interact with databases using their natural language. By following the steps and considering the key points outlined here, you can harness the power of TextToSQL to simplify data retrieval and analysis, making your database interactions more accessible and efficient.
                Explore the possibilities of TextToSQL and experience the future of database query interaction.</p>
              <ul className="nk-btn-group justify-content-center pt-5">
                <li>
                  <NioButton href="https://ibprocess.intellibooks.io/signin" target="_blank" className="btn-purple" label="Contact Us" />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        {/* <NioSection.Content className="overflow-hidden">
          <div className="mx-lg-n9">
            <div className="mx-xl-n9">
              <TestimonialContent />
            </div>
          </div>
        </NioSection.Content> */}
      </NioSection>
      {/*  Testimonial Section End   */}

      {/*  Gallery Section Start   */}
      {/* <NioSection className="nk-section-gallery overflow-hidden" masks={["shape-15", "shape-16", "shape-17"]}>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="nk-section-head text-center">
              <span className="fs-14 fw-semibold text-uppercase d-inline-block text-danger mb-2">our gallery</span>
              <h2>Few moments with our superkids</h2>
              <ul className="nk-btn-group justify-content-center pt-5">
                <li>
                  <NioButton href="/auth/sign-up" className="btn-danger text-white" label="Sign Up Free" />
                </li>
                <li>
                  <div className="d-flex gap-2 align-items-center">
                    <NioMedia
                      size="md"
                      rounded
                      icon="play-fill"
                      variant="purple"
                      lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
                      className="animate animate-infinite animate-pulse animate-duration-1"
                    />
                    <div className="media-text">
                      <div className="title fw-semibold">Watch Video</div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <div className="nk-gallery-img" >
            <img src="images/kids-course/gallary.png" alt="gallary" />
          </div>
        </NioSection.Content>
      </NioSection> */}
      {/*  Gallery Section End   */}

      {/*  App-Download Section Start   */}
      {/* <NioSection className="nk-section-app-dwnld pb-0 bg-purple-50 z-1 position-relative overflow-hidden pt-7 pt-lg-120" masks={["shape-18"]} py={false}>
        <NioSection.Content className="position-relative z-1">
          <Row className="align-items-center justify-content-between">
            <Col lg={5}>
              <div className="text-center text-lg-start pb-7 pb-xxl-0">
                <h2>Download Our App To Start Your Class.</h2>
                <p className="fs-20 text-base mb-0">Are you ready to make your children future skilled proof ? Join with 5M+ parents to explore our immersive world.</p>
                <ul className="d-flex justify-content-center justify-content-lg-start gap-3 pt-6">
                  <li>
                    <Link to="#">
                      <img src="images/apps/app-store.png" srcSet="images/apps/app-store2x.png 2x" className="border overflow-hidden rounded-3" alt="app-store" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src="images/apps/play-store.png" srcSet="images/apps/play-store2x.png 2x" className="border overflow-hidden rounded-3" alt="play-store" />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={6} className="align-self-end">
              <div className="nk-app-download">
                <img src="images/kids-course/app.png" alt="apps" />
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection> */}
      {/*  App-Download Section End   */}


      {/*  NewsLetter Section Start   */}
      {/* <NioSection className="nk-section-nwsletter pt-7 pt-lg-120 pb-0">
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
      </NioSection> */}
      {/*  NewsLetter Section End   */}

    </AppLayout >
  )
}

export default index;