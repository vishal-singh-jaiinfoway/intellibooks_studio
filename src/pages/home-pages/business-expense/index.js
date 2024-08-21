import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';


// layouts
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// component 
import { NioButton, NioMedia, NioSection, NioSubscribeField } from '../../../components';

// section component
import PricingContent from '../../../components/PageComponents/Homepages/BusinessExpense/PricingContent/PricingContent';
import TestimonialContent from '../../../components/PageComponents/Homepages/BusinessExpense/TestimonialContent/TestimonialContent';
import ProductiveContent from '../../../components/PageComponents/Homepages/BusinessExpense/ProductiveContent/ProductiveContent';

function index() {
  return (
    <AppLayout>

      {/*   Banner Section Start  */}
      <section className="">
        <div className="nk-banner-wrap pb-0">
          <Container>
            <Row className="justify-content-center">
              <Col lg={10} xl={7}>
                <div className="nk-banner-content text-center">
                  <div>
                    <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >Document Retrieval</span>

                    <h1 className="text-capitalize display-6 mb-2" >Finding Information in Your Documents</h1>
                    <p className="fs-20 mb-0" >
                      Document Retrieval is a powerful tool that helps you efficiently locate specific information within your documents. Whether you're dealing with a vast archive of textual data or searching for a specific piece of information in a document repository, this page provides a comprehensive overview of how Document Retrieval works, the steps to follow.
                    </p>
                  </div>
                  <ul className="nk-btn-group justify-content-center pt-5">
                    <li>
                      <NioButton href="/blogs" className="btn-primary-alt rounded-pill" label="Our Blogs" />
                    </li>

                  </ul>
                </div>
              </Col>
            </Row>
            {/* <div className="nk-banner-img pt-7" >
              <img src="images/business-saas/banner-cover.png" alt="thumbnail" />
            </div> */}
          </Container>
        </div>
      </section>
      {/*  Banner Section End   */}

      {/*  Feature Section Start   */}
      <NioSection className="py-7 pb-lg-120">
        <div className="nk-section-head pb-7">
          <Row className="align-items-end">
            <Col xl={6}>
              <div>
                <span className="d-inline-block fs-14 text-uppercase text-primary-alt fw-semibold mb-2">How It's Works</span>
                <h2 className="mb-xl-0">How Document Retrieval Works</h2>
              </div>
            </Col>
            <Col xl={6}>
              {/* <p className="fs-20  m-0">Document Retrieval is based on information retrieval techniques that enable users to search for and retrieve documents containing specific keywords or phrases. Here's an overview of how it works</p> */}
            </Col>
          </Row>
        </div>
        <NioSection.Content>
          <Row className="gy-5 gy-lg-0" style={{ marginBottom: "5rem" }}>
            <Col md={6} lg={4} >
              <div className="position-relative" style={{ marginBottom: "3rem" }}>
                <div className="position-relative overflow-hidden rounded-4 border border-light bg-gray">
                  <Link to="#">
                    <img src="images/blog/card-cover-6.png" alt="cover-img" className="img-fluid" />
                  </Link>
                </div>
                <div className="pt-4">
                  <h4>Document Collection</h4>
                  <p>You start with a collection of documents, which can be anything from text files, articles, research papers, or even emails.</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} >
              <div className="position-relative">
                <div className="position-relative overflow-hidden rounded-4 border border-light bg-gray">
                  <Link to="#">
                    <img src="images/blog/card-cover-1.png" alt="" className="img-fluid" />
                  </Link>
                </div>
                <div className="pt-4">
                  <h4>Query Input</h4>
                  <p>Users provide a search query, typically consisting of keywords or a phrase related to the information they are looking for.</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} >
              <div className="position-relative">
                <div className="position-relative overflow-hidden rounded-4 border border-light bg-gray">
                  <Link to="#">
                    <img src="images/blog/card-cover-2.png" alt="card-cover" className="img-fluid" />
                  </Link>
                </div>
                <div className="pt-4">
                  <h4>Matching</h4>
                  <p>The query is compared to the indexed information. The system identifies documents that match the search criteria.</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} >
              <div className="position-relative">
                <div className="position-relative overflow-hidden rounded-4 border border-light bg-gray">
                  <Link to="#">
                    <img src="images/blog/card-cover-2.png" alt="card-cover" className="img-fluid" />
                  </Link>
                </div>
                <div className="pt-4">
                  <h4>Indexing</h4>
                  <p>The documents are processed to create an index, which is essentially a structured database that stores information about the words or terms found in each document.</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} >
              <div className="position-relative">
                <div className="position-relative overflow-hidden rounded-4 border border-light bg-gray">
                  <Link to="#">
                    <img src="images/blog/card-cover-2.png" alt="card-cover" className="img-fluid" />
                  </Link>
                </div>
                <div className="pt-4">
                  <h4>Ranking</h4>
                  <p> Documents are ranked based on their relevance to the query. More relevant documents appear at the top of the search results.</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} >
              <div className="position-relative">
                <div className="position-relative overflow-hidden rounded-4 border border-light bg-gray">
                  <Link to="#">
                    <img src="images/blog/card-cover-2.png" alt="card-cover" className="img-fluid" />
                  </Link>
                </div>
                <div className="pt-4">
                  <h4>Presentation</h4>
                  <p>The system presents the search results to the user, allowing them to access and review the relevant documents.</p>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Feature Section End   */}

      {/*  Works Section End   */}
      <NioSection className="bg-purple-50 overflow-hidden" masks={["shape-10"]}>
        <NioSection.Content className="nk-cta-wrap">
          <Row className="align-items-center justify-content-between">
            <Col lg={6} >
              <div className="position-relative bg-darker overflow-hidden rounded-4 mb-7 mb-lg-0">
                <img src="images/blog/graph.png" alt="cover-fd" className="ms-1" />
              </div>
            </Col>
            <Col lg={6} xl={5}>
              <div>
                <div className="nk-section-head">
                  <span className="d-inline-block fs-14 text-uppercase text-primary-alt fw-semibold mb-2">Steps to Follow</span>
                  <h2>Efficient document retrieval involves several steps :</h2>
                  {/* <p className="fs-20 mb-0"> Achieve your goals in a few easy steps with our streamlined process. Get things done effortlessly and efficiently. </p> */}
                </div>
                <ul className="d-flex flex-column gap-5 nk-schedule nk-schedule-s4 nk-schedule-center">
                  <li className="nk-schedule-item p-0" >
                    <div className="nk-schedule-item-inner p-0">
                      <div className="nk-schedule-symbol">
                        <NioMedia size="sm" rounded variant="primary-alt text-white"> 1 </NioMedia>
                      </div>
                      <div className="nk-schedule-content">
                        <div className="h5 fw-normal"> <strong>Document Collection : </strong>
                          Gather and organize your documents in a central repository. Ensure that documents are properly categorized and labeled.</div>
                      </div>
                    </div>
                  </li>
                  <li className="nk-schedule-item p-0" >
                    <div className="nk-schedule-item-inner p-0">
                      <div className="nk-schedule-symbol">
                        <NioMedia size="sm" rounded variant="primary-alt text-white"> 2 </NioMedia>
                      </div>
                      <div className="nk-schedule-content">
                        <div className="h5 fw-normal"> <strong>Indexing : </strong>
                          Use a document indexing tool or system to create an index of your document collection. This step is crucial for efficient searching.
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nk-schedule-item p-0" >
                    <div className="nk-schedule-item-inner p-0">
                      <div className="nk-schedule-symbol">
                        <NioMedia size="sm" rounded variant="primary-alt text-white"> 3 </NioMedia>
                      </div>
                      <div className="nk-schedule-content">
                        <div className="h5 fw-normal"> <strong> Query Input : </strong>
                          Enter your search query into the Document Retrieval system. Be specific and use relevant keywords to narrow down your search.</div>
                      </div>
                    </div>

                  </li>
                  <li className="nk-schedule-item p-0" >
                    <div className="nk-schedule-item-inner p-0">
                      <div className="nk-schedule-symbol">
                        <NioMedia size="sm" rounded variant="primary-alt text-white"> 4 </NioMedia>
                      </div>
                      <div className="nk-schedule-content">
                        <div className="h5 fw-normal"> <strong> Access Documents : </strong>
                          Access and review the documents retrieved by the system to find the information you need.
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Works Section End   */}

      {/*  Productivity Section Start   */}
      {/* <NioSection className="py-7 py-lg-120">
        <ProductiveContent />
      </NioSection> */}
      {/*  Productivity Section End   */}

      {/*  Testimonials Section Start   */}
      <NioSection className=" overflow-hidden">
        <NioSection.Head alignX="center">
          <span className="d-inline-block fs-14 text-uppercase text-primary-alt fw-semibold mb-2">Key Points to Consider</span>
          <h2>Here are some important considerations for successful Document Retrieval</h2>
          {/* <p className="fs-20 mb-0">Hear the kind words from our satisfied users who have experienced our exceptional service firsthand. Join them today!</p> */}
        </NioSection.Head>
        <NioSection.Content>
          <TestimonialContent />
        </NioSection.Content>
      </NioSection>
      {/*  Testimonials Section End  */}

      {/*  Integration Section Start   */}
      <NioSection className="nk-section-testimonial">
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="nk-section-head text-center pb-5">
              <span className="fs-14 fw-semibold text-uppercase d-inline-block text-primary mb-2">Document retrieval</span>
              <h2 className="mb-0">Conclusion</h2>
              <p>Document Retrieval simplifies the process of finding information within your documents, helping you save time and make better use of your data resources. By following the steps outlined here and considering the key points, you can optimize your document search process and harness the full potential of Document Retrieval.
                Explore the capabilities of Document Retrieval and unlock the treasure trove of insights hidden within your documents.</p>
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
      {/*  Integration Section End   */}

      {/*  Pricing Section Start   */}
      {/* <NioSection masks={["shape-12"]}>
        <PricingContent />
      </NioSection> */}
      {/*  Pricing Section End   */}

      {/*  CTA Section Start   */}
      {/* <NioSection>
        <NioSection.Content className="overflow-hidden bg-darker rounded-4 is-theme" >
          <Row className="align-items-end justify-content-xl-between">
            <Col xl={6}>
              <div className="nk-section-head text-center text-xl-start p-5 p-md-7 pt-7">
                <span className="d-inline-block fs-16 text-uppercase text-primary-alt fw-semibold mb-2" >Download now!</span>
                <h2 >Start Track Your Business Expenses</h2>
                <p className="fs-18 opacity-50 mb-0" >Are you ready to make your business more organized ? Download Spend.In now!</p>
                <div className="pt-5">
                  <NioButton href="/contact-us" className="btn-primary-alt rounded-pill" label="Get A Free Demo" />
                </div>
              </div>
            </Col>
            <Col xl={5} >
              <div className="nk-frame text-end">
                <img src="images/business-saas/section-cover-frame.png" alt="thumb" className="mb-n2" />
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection> */}
      {/*  CTA Section End   */}

      {/*  Newsletter Section Start  */}
      {/* <NioSection className="pb-0">
        <div className="row justify-content-center justify-content-lg-between align-items-center pb-5 border-bottom border-lighter">
          <Col lg={6} xl={4}>
            <div className="nk-newsletter-content text-center text-lg-start pb-5 pb-lg-0">
              <h4 className="text-capitalize">Subscribe to our newsletter</h4>
              <p className="fs-16">Join the 5000+ People That Uses Softnio Products.</p>
            </div>
          </Col>
          <Col md={10} lg={6} xl={4}>
            <NioSubscribeField variant="three" rounded />
          </Col>
        </div>
      </NioSection> */}
      {/*  Newsletter Section End  */}

    </AppLayout >
  )
}

export default index;