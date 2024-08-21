import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

// layout 
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components 
import { NioSection, NioField, NioIcon, NioBadge, NioButton, NioMedia, NioCard, NioSubscribeField } from '../../../components';

// section content  
import BlogsContent from '../../../components/PageComponents/InnerPages/Blogs/BlogsContent/BlogsContent';

function index() {

  return (
    <AppLayout title="Blog / News" rootClass="layout-1">

      {/*  Resource Section Start  */}
      <NioSection className="overflow-hidden pt-120 pt-lg-160" masks={["blur-1 left center"]}>
        <NioSection.Content>
          <Row className="justify-content-center text-center">
            <Col lg={8} xl={6}>
              <div className="nk-section-head">
              <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >OUR BLOGS</span>
                <h2 >Resource Center</h2>
                <p className="fs-20" >Maximize the capabilities of our resource center by gaining access to invaluable information and insights to propel the growth of your business.
                </p>
              </div>
            </Col>
            {/* <Col lg={8}>
              <div className="nk-filter-wrap pb-5 pb-md-7">
                <div >
                  <NioField.Input icon="search before z-1" placeholder="Search for articles" />
                </div>
                <ul className="nk-tag justify-content-center pt-4">
                  <li>
                    <Link to="#" className="nk-tag-item">all</Link>
                  </li>
                  <li>
                    <Link to="#" className="nk-tag-item">Growth</Link>
                  </li>
                  <li>
                    <Link to="#" className="nk-tag-item">Marketing</Link>
                  </li>
                  <li>
                    <Link to="#" className="nk-tag-item">Tech</Link>
                  </li>
                </ul>
              </div>
            </Col> */}
          </Row>
          {/* <Row>
            <Col xl={8} >
              <BlogsContent />
            </Col>
          </Row> */}
        </NioSection.Content>
      </NioSection>
      {/*  Resource Section End  */}

      {/*  Latest Section Start  */}
      <NioSection className="nk-blog-section" masks={["blur-1 right bottom"]}>
        <NioSection.Head className="pb-5" space={false}>
          <h2 className="mb-0">Latest Posts</h2>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5">


          <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <div className="card-image">
                    <img src="/images/blog/d1.jpg" alt="blog-cover" className="card-img" />
                  </div>
                  <div className="card-content pt-4">
                    <NioBadge rounded className="text-bg-primary-soft mb-2 mb-md-3" label="Growth" />
                    <h5 className="text-capitalize m-0">
                      <Link className="text-dark" to="/blog-details/four">Unleashing the Power of Language Models</Link>
                    </h5>

                    {/* <div className="media-group pt-4 align-items-center">
                      <NioMedia size="md" rounded img="images/avatar/d.jpg" />

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




            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <div className="card-image">
                    <img src="/images/blog/b1.jpg" alt="blog-cover" className="card-img" />
                  </div>
                  <div className="card-content pt-4">
                    <NioBadge rounded className="text-bg-primary-soft mb-2 mb-md-3" label="Marketing" />
                    <h5 className="text-capitalize m-0">
                      <Link className="text-dark" to="/blog-details/two">How IntelligentAI is Empowering Businesses with Language Models</Link>
                    </h5>
                    {/* <div className="media-group pt-4 align-items-center">
                      <NioMedia size="md" rounded img="images/avatar/b.jpg" />

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
              <NioCard>
                <NioCard.Body>
                  <div className="card-image">
                    <img src="/images/blog/c1.jpg" alt="blog-cover" className="card-img" />
                  </div>
                  <div className="card-content pt-4">
                    <NioBadge rounded className="text-bg-primary-soft mb-2 mb-md-3" label="Growth" />
                    <h5 className="text-capitalize m-0">
                      <Link className="text-dark" to="/blog-details/three">Optimizing Language Models for Business Success with IntellibooksStudio</Link>
                    </h5>

                    {/* <div className="media-group pt-4 align-items-center">
                      <NioMedia size="md" rounded img="images/avatar/c.jpg" />

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
          

            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <div className="card-image">
                    <img src="/images/blog/a1.jpg" alt="blog-cover" className="card-img" />
                  </div>
                  <div className="card-content pt-4">
                    <NioBadge rounded className="text-bg-primary-soft mb-2 mb-md-3" label="Growth" />
                    <h5 className="text-capitalize m-0">
                      <Link className="text-dark" to="/blog-details/one">Unlocking the Transformative Potential of Language Models</Link>
                    </h5>

                    {/* <div className="media-group pt-4 align-items-center">
                      <NioMedia size="md" rounded img="images/avatar/a.jpg" />

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
              <NioCard>
                <NioCard.Body>
                  <div className="card-image">
                    <img src="/images/blog/e1.jpg" alt="blog-cover" className="card-img" />
                  </div>
                  <div className="card-content pt-4">
                    <NioBadge rounded className="text-bg-primary-soft mb-2 mb-md-3" label="Growth" />
                    <h5 className="text-capitalize m-0">
                      <Link className="text-dark" to="/blog-details/five">Harnessing the Power of Few-Shot Prompt Templates for Enhanced AI Experiences</Link>
                    </h5>

                    {/* <div className="media-group pt-4 align-items-center">
                      <NioMedia size="md" rounded img="images/avatar/e.jpg" />

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
              {/* <NioCard>
                <NioCard.Body>
                  <div className="card-image">
                    <img src="images/blog/f.jpg" alt="blog-cover" className="card-img" />
                  </div>
                  <div className="card-content pt-4">
                    <NioBadge rounded className="text-bg-primary-soft mb-2 mb-md-3" label="Marketing" />
                    <h5 className="text-capitalize m-0">
                      <Link className="text-dark" to="/blog-details/six">4 tips to optimize your funnels for conversion</Link>
                    </h5>

                    <div className="media-group pt-4 align-items-center">
                      <NioMedia size="md" rounded img="images/avatar/f.jpg" />

                      <div className="media-text">
                        <span className="lead-text fw-normal">Annette Black</span>
                        <ul className="nk-list-meta smaller">
                          <li>Feb 10, 2022</li>
                          <li>8 min read</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </NioCard.Body>
              </NioCard> */}
            </Col>
          </Row>
          {/* <div className="nk-pagination-wrap d-flex flex-wrap flex-sm-nowrap align-items-center gap g-3 justify-content-center justify-content-md-between pt-5 pt-lg-7">
            <div className="nk-pagination-col">
              <p>Showing: <span >1-4 of 23 Products</span>
              </p>
            </div>
            <div className="nk-pagination-col">
              <nav aria-label="Page navigation example">
                <ul className="pagination pagination-s1">
                  <li className="page-item d-none">
                    <Link className="page-link" to="#">
                      <NioIcon name="chevron-left" />
                      <span className="d-none d-sm-inline-block">Prev</span>
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" to="#">1</Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">2</Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">3</Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">4</Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      <span className="d-none d-sm-inline-block">Next</span>
                      <NioIcon name="chevron-right" />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div> */}
          {/*  .nk-pagination-wrap  */}
        </NioSection.Content>
      </NioSection>
      {/*  Latest Section End  */}

      {/*  CTA Section Start  */}
      <NioSection>
        <NioSection.Content>
          <div className="nk-cta-wrap nk-cta-card bg-primary-gradient rounded-3 is-theme position-relative overflow-hidden" >
            <Row className="g-0 align-items-center overflow-hidden">
              <Col xs={{ order: 2 }} lg={{ span: 7, order: 0 }}>
                <div className="nk-block-head-content mb-0">
                  <h2 className="newsletter-heading text-capitalize h1 m-0 mb-4 mb-lg-7">Initiate AI-driven to elevate your business performance.
                  </h2>
                  <ul className="nk-btn-group flex-wrap ps-1">
                    <li>
                      <NioButton href="https://ibprocess.intellibooks.io/signin" target="_blank" className="btn-lg btn-white text-dark" label="Try Now" />
                    </li>
                    <li>
                      <NioButton href="/blogs" className="btn-lg btn-outline-white" label="Learn More" />
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={{ order: 1 }} lg={{ span: 5, order: 0 }}>
                <div className="nk-cta-img-wrap text-end  ps-5 pt-7 pt-lg-0 ps-sm-6 ps-lg-0">
                  <img src="images/thumb/c1.png" alt="tracking-thumb" className="me-n1" />
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
    </AppLayout>
  )
}

export default index;