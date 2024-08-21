import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// layouts
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components
import { NioSection, NioMedia, NioIcon, NioButton, NioCount, NioSubscribeField, NioField } from '../../../components';

// section content 
import FaqContent from '../../../components/PageComponents/Homepages/BusinessTracker/FaqContent/FaqContent';
import PricingContent from '../../../components/PageComponents/Homepages/BusinessTracker/PricingContent/PricingContent';
import TestimonialContent from '../../../components/PageComponents/Homepages/BusinessTracker/TestimonialContent/TestimonialContent';

function index() {

  return (
    <AppLayout>

      {/*   Banner Section Start  */}
      <section className="">
        <div className="nk-banner-wrap">
          <Container>
            <Row className="flex-row-reverse align-items-center justify-content-between">
              {/* <Col lg={6}>
                <div className="nk-banner-img mb-5  mb-lg-0" >
                  <img src="images/business-tracker/banner-cover.png" alt="banner-cover" />
                </div>
              </Col> */}
              <Col lg={12}>
                <div className="nk-banner-content">
                  <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >Web Scraping</span>

                  <h2 className="display-6 mb-2">Extracting Data from Websites</h2>
                  <p className="fs-20 mb-0" >Web scraping is a valuable technique that allows you to automatically extract data from websites. Whether you need to gather information for research, monitor prices, or create datasets, this page provides a comprehensive overview of how web scraping works, the steps to follow, and key considerations for successful data extraction.</p>
                  {/* <ul className="nk-btn-group pt-5 pt-lg-6">
                    <li>
                      <NioButton href="/auth/sign-up" className="btn-primary-alt" label="Join with Us" />
                    </li>
                    <li>
                      <NioButton href="/blogs" className="btn-outline-primary-alt" label="Our blogs" />
                    </li>
                  </ul> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/*  Banner Section End   */}

      {/*  Brands Section Start   */}
      {/* <NioSection className="nk-brand-section pt-0">
        <NioSection.Content className="text-center">
          <h4 className="fw-normal text-base mb-5" >Over <span className="text-dark fw-semibold">32K+ software</span> business growing with NioLand </h4>
          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <Row className="gy-3 align-items-center justify-content-center justify-content-lg-between">
                {
                  ["a", "b", "c", "d", "e"]?.map((brand, idx) => (
                    <Col xs={4} sm={3} lg={2} key={idx} >
                      <div className="nk-brand">
                        <Link to="#">
                          <img src={`images/brands/${brand}.png`} alt="brand-logo" />
                        </Link>
                      </div>
                    </Col>
                  ))
                }
              </Row>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection> */}
      {/*  Brands Section End   */}

      {/*  Feature Section Start   */}
      <NioSection className="nk-feature-section pb-7 pb-lg-120">
        <NioSection.Head alignX="center">
          <span className="d-inline-block fs-16 text-uppercase text-primary-alt fw-bold mb-2">Web Scraping</span>
          <h2>How Web Scraping Works
          </h2>
          <p className="fs-20 mb-0"> Web scraping involves the automated retrieval of data from websites. Here's a simplified overview of how it works </p>
          <ul className="nk-btn-group justify-content-center pt-5">
            <li>
              <NioButton href="https://ibprocess.intellibooks.io/signin" target="_blank" className="btn-primary-alt" label="Join with Us" />
            </li>
            <li>
              <NioButton href="/blogs" className="btn-outline-primary-alt" label="Our Blogs" />
            </li>
          </ul>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gap g-5">
            <Col sm={6} lg={4} >
              <div className="text-center">
                <div className="mb-3 mb-md-5">
                  <img src="images/business-tracker/section-cover-1.png" alt="cover" />
                </div>
                <div className="mb-4">
                  <h4 className="text-capitalize">URL Input</h4>
                  <p className="fs-16 line-clamp-2 fw-medium">You provide the URL of the website or web page from which you want to extract data.</p>
                </div>
                {/* <NioButton href="/features" className="btn-link text-primary-alt d-inline-block" label="learn More" icon="arrow-right after" /> */}
              </div>
            </Col>
            <Col sm={6} lg={4} >
              <div className="text-center">
                <div className="mb-3 mb-md-5">
                  <img src="images/business-tracker/section-cover-1-a.png" alt="cover" />
                </div>
                <div className="mb-4">
                  <h4 className="text-capitalize">HTTP Request</h4>
                  <p className="fs-16 line-clamp-2 fw-medium">A web scraping tool or script sends an HTTP request to the specified URL, simulating a visit to the web page.</p>
                </div>
                {/* <NioButton href="/features" className="btn-link text-primary-alt d-inline-block" label="Learn More" icon="arrow-right after" /> */}
              </div>
            </Col>
            <Col sm={6} lg={4} >
              <div className="text-center">
                <div className="mb-3 mb-md-5">
                  <img src="images/business-tracker/section-cover-1-b.png" alt="cover" />
                </div>
                <div className="mb-4">
                  <h4 className="text-capitalize">HTML Retrieval</h4>
                  <p className="fs-16 line-clamp-2 fw-medium">The web server responds by sending back the HTML content of the web page.</p>
                </div>
                {/* <NioButton href="/features" className="btn-link text-primary-alt d-inline-block" label="Learn More" icon="arrow-right after" /> */}
              </div>
            </Col>
            <Col sm={6} lg={4} >
              <div className="text-center">
                <div className="mb-3 mb-md-5">
                  <img src="images/business-tracker/section-cover-1-b.png" alt="cover" />
                </div>
                <div className="mb-4">
                  <h4 className="text-capitalize">Parsing</h4>
                  <p className="fs-16 line-clamp-2 fw-medium">The HTML content is parsed to extract the specific data elements you're interested in. This may involve using libraries like BeautifulSoup or Scrapy in Python.</p>
                </div>
                {/* <NioButton href="/features" className="btn-link text-primary-alt d-inline-block" label="Learn More" icon="arrow-right after" /> */}
              </div>
            </Col>
            <Col sm={6} lg={4} >
              <div className="text-center">
                <div className="mb-3 mb-md-5">
                  <img src="images/business-tracker/section-cover-1-b.png" alt="cover" />
                </div>
                <div className="mb-4">
                  <h4 className="text-capitalize">Data Extraction</h4>
                  <p className="fs-16 line-clamp-2 fw-medium">Extracted data, such as text, images, tables, or links, is collected according to your specifications.</p>
                </div>
                {/* <NioButton href="/features" className="btn-link text-primary-alt d-inline-block" label="Learn More" icon="arrow-right after" /> */}
              </div>
            </Col>
            <Col sm={6} lg={4} >
              <div className="text-center">
                <div className="mb-3 mb-md-5">
                  <img src="images/business-tracker/section-cover-1-b.png" alt="cover" />
                </div>
                <div className="mb-4">
                  <h4 className="text-capitalize">Data Storage</h4>
                  <p className="fs-16 line-clamp-2 fw-medium">The scraped data can be stored in various formats, such as CSV, JSON, or a database.</p>
                </div>
                {/* <NioButton href="/features" className="btn-link text-primary-alt d-inline-block" label="Learn More" icon="arrow-right after" /> */}
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Feature Section End   */}

      {/*  Testimonial Section Start   */}
      <NioSection className="bg-blue-50">
        <Row className="justify-content-center">
          <Col xl={7}>
            <div className="nk-section-head pb-7 text-center">
              <span className="d-inline-block fs-16 text-uppercase text-primary-alt fw-bold mb-2">Steps to Follow</span>
              <h2>Web scraping involves several steps</h2>
              <p className="fs-20 mb-0">
                Web scraping involves several steps, each contributing to the extraction of valuable data from websites. Initially, the process begins with identifying the target website and the specific web pages containing the desired information. Following this, the scraper must send HTTP requests to the website's server, mimicking the behavior of a web browser.
              </p>
              {/* <ul className="nk-btn-group justify-content-center pt-5">
                <li>
                  <NioButton href="/auth/sign-up" className="btn-primary-alt" label="Join with us" />
                </li>
                <li>
                  <NioButton href="/blogs" className="btn-outline-primary-alt" label="Our blogs" />
                </li>
              </ul> */}
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <TestimonialContent />
        </NioSection.Content>
      </NioSection>
      {/*  Testimonial Section End   */}

      {/*  Process Section Start   */}
      <NioSection className="nk-process-section py-7 py-lg-120">
        <Row className="justify-content-center">
          <Col lg={8} xl={6}>
            <div className="nk-section-head pb-7 pb-lg-120 text-center">
              <span className="d-inline-block fs-16 text-uppercase text-primary-alt fw-bold mb-2">Key Points to Consider</span>
              <h2>Here are some important considerations for successful web scraping</h2>
              <p className="fs-20 mb-0">Successful web scraping involves careful planning and consideration of various factors to ensure efficiency, legality, and the reliability of the collected data.</p>
              <ul className="nk-btn-group justify-content-center pt-5">
                <li>
                  <NioButton href="https://ibprocess.intellibooks.io/signin" target="_blank" className="btn-primary-alt" label="Join With Us" />
                </li>
                <li>
                  <NioButton href="/blogs" className="btn-outline-primary-alt" label="Our Blogs" />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <ul className="nk-schedule d-flex flex-column gap-5 gap-md-7 gap-lg-120 nk-schedule-s1">
            <li className="nk-schedule-item p-0">
              <div className="nk-schedule-item-inner">
                <div className="nk-schedule-symbol">
                  <NioMedia size="lg" rounded variant="primary-soft" className="fw-bold">
                    1
                  </NioMedia>
                </div>
                <div className="nk-schedule-content">
                  <Row className="flex-row-reverse justify-content-between">
                    <Col lg={7} >
                      <div className="nk-feature-overview-img text-lg-end mb-n2 mb-lg-n0 mt-lg-n9">
                        <img src="images/business-tracker/section-cover-2-a.png" alt="cover-bg" />
                        <img src="images/business-tracker/section-cover-2.png" alt="cover-fd" className="children children-center" />
                      </div>
                    </Col>
                    <Col lg={5} >
                      <div className="nk-section-head">
                        <h3 className="text-capitalize mb-3">Legality <span className="text-primary-alt"></span></h3>
                        <p className="fs-20 text-base">Ensure that you have the legal right to scrape data from a website and that you comply with data protection regulations. </p>
                        <ul className="nk-btn-group pt-3 pt-md-5">
                          {/* <li>
                            <NioButton href="#" className="btn-outline-primary-alt" icon="arrow-right after" label="Learn More" />
                          </li> */}
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </li>
            <li className="nk-schedule-item p-0">
              <div className="nk-schedule-item-inner">
                <div className="nk-schedule-symbol">
                  <NioMedia size="lg" rounded variant="warning-soft" className="fw-bold">
                    2
                  </NioMedia>
                </div>
                <div className="nk-schedule-content">
                  <Row className="flex-row-reverse justify-content-between">
                    <Col lg={7} >
                      <div className="nk-feature-overview-img text-lg-end mb-4 mb-sm-0 mb-sm-n3 mb-lg-n0 mt-lg-n9">
                        <img src="images/business-tracker/section-cover-3-a.png" alt="cover-bg" />
                        <img src="images/business-tracker/section-cover-3.png" alt="cover-fd" className="children children-center" />
                      </div>
                    </Col>
                    <Col lg={5} >
                      <div className="nk-section-head">
                        <h3 className="text-capitalize mb-3">Ethics<span className="text-warning"></span></h3>
                        <p className="fs-20 text-base"> Practice ethical scraping by not overloading a website with requests and respecting its terms of use. </p>
                        <ul className="nk-btn-group pt-3 pt-md-5">
                          {/* <li>
                            <NioButton href="#" className="btn-outline-warning" icon="arrow-right after" label="Learn More" />
                          </li> */}
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </li>
            <li className="nk-schedule-item p-0">
              <div className="nk-schedule-item-inner p-0">
                <div className="nk-schedule-symbol">
                  <NioMedia size="lg" rounded variant="danger-soft" className="fw-bold">
                    3
                  </NioMedia>
                </div>
                <div className="nk-schedule-content">
                  <Row className="flex-row-reverse justify-content-between">
                    <Col lg={7} >
                      <div className="nk-feature-overview-img text-lg-end mb-4 mb-sm-0 mb-sm-n3 mb-lg-n0 mt-lg-n9">
                        <img src="images/business-tracker/section-cover-4-a.png" alt="cover-bg" />
                        <img src="images/business-tracker/section-cover-4.png" alt="cover-fd" className="children children-center" />
                      </div>
                    </Col>
                    <Col lg={5} >
                      <div className="nk-section-head">
                        <h3 className="text-capitalize mb-3">Data Cleaning <span className="text-danger"></span></h3>
                        <p className="fs-20 text-base">The scraped data may require cleaning and validation to ensure its accuracy and usefulness. </p>
                        <ul className="nk-btn-group pt-3 pt-md-5">
                          {/* <li>
                            <NioButton href="#" className="btn-outline-danger" label="Learn More" icon="arrow-right after" />
                          </li> */}
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </li>
          </ul>
        </NioSection.Content>
      </NioSection>
      {/*  Process Section End   */}

      {/*  Funfact Section Start   */}
      {/* <NioSection className="bg-gray-400">
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="nk-section-head text-center">
              <span className="d-inline-block fs-16 text-uppercase text-purple fw-bold mb-2">our facts</span>
              <h2>We Believe In The Power Of Data</h2>
              <p className="fs-20 mb-0">At our company, we harness the power of data to drive insights and make informed decisions that propel your business forward.</p>
              <ul className="nk-btn-group justify-content-center pt-5">
                <li>
                  <NioButton href="#" className="btn-purple" label="More Details" />
                </li>
                <li>
                  <NioButton href="/contact-us" className="btn-outline-purple" label="Contact Us" />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="flex-row-reverse align-items-center justify-content-center justify-content-xl-between">
            <Col xl={7} >
              <div className="nk-funfact-img text-center text-xl-end mb-6 mb-xl-0">
                <img src="images/business-tracker/section-cover-5.png" alt="cover" />
              </div>
            </Col>
            <Col xl={5}>
              <Row className="gx-sm-5 gy-5">
                <Col xs={6} >
                  <div className="text-center">
                    <NioCount className="d-inline-block h1 text-purple" end={235} decimals={3} decimal="." />
                    <div>
                      <h5>Projects completed</h5>
                      <p className="fs-14">No need to hire specialists for each channel.</p>
                    </div>
                  </div>
                </Col>
                <Col xs={6} >
                  <div className="text-center">
                    <NioCount className="d-inline-block h1 text-purple" end={10} prefix="$" suffix="m" />
                    <div>
                      <h5>APR</h5>
                      <p className="fs-14"> Track how much money a company just in case</p>
                    </div>
                  </div>
                </Col>
                <Col xs={6} >
                  <div className="text-center">
                    <NioCount className="d-inline-block h1 text-purple" decimals={3} decimal="." end={50} prefix="+" />
                    <div>
                      <h5>Hours Saved</h5>
                      <p className="fs-14">Manage many companies, even with different languages.</p>
                    </div>
                  </div>
                </Col>
                <Col xs={6} >
                  <div className="text-center">
                    <NioCount className="d-inline-block h1 text-purple" end={3} suffix=".500" />
                    <div>
                      <h5>Unique Users</h5>
                      <p className="fs-14"> Everyone works the way they want to, on their own schedule.</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection> */}
      {/*  Funfact Section End   */}

      {/*  Faq Section Start   */}
      {/* <NioSection className="pt-7 pt-lg-120">
        <Row className="justify-content-center">
          <Col xl={7}>
            <div className="nk-section-head pb-7 text-center">
              <span className="d-inline-block fs-16 text-uppercase text-primary-alt fw-bold mb-2">faqs</span>
              <div>
                <h2>Frequently Asked Questions</h2>
                <p className="fs-20 mb-0">
                  Find answers to commonly asked questions about our product or service in our comprehensive FAQ section.
                </p>
              </div>
              <ul className="nk-btn-group justify-content-center pt-5">
                <li>
                  <NioButton href="#" className="btn-primary-alt" icon="arrow-right after" label="Read All Faqs" />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <NioSection.Content>
          <Row className="gy-5 gy-lg-0">
            <Col lg={8}>
              <FaqContent />
            </Col>
            <Col lg={4} >
              <div className="nk-contact-box bg-gray rounded-2 border border-gray-500">
                <div className="nk-contact-content">
                  <div className="media media-lg media-middle media-circle media-border text-primary-alt border-primary mb-3 mb-md-5">
                    <NioIcon name="chat-fill" />
                  </div>
                  <h5 className="title m-0 mb-2">Do you need any help? Get in touch with our support team.</h5>
                  <p className="fs-18 mb-0">Lorem ipsum dolor sit amet, consectet adipiscing elit. Consequat aliquet soll ac.</p>
                  <Link to="#" className="btn-link text-primary-alt p-0 pt-3 pt-md-5 rounded-0 border-0">
                    <span>support@nioland.com</span>
                    <NioIcon name="arrow-right" />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection> */}
      {/*  Faq Section End   */}

      {/*  Pricing Plans Section Start   */}
      {/* <NioSection className="nk-section-pricing overflow-hidden pt-7 pb-7 pb-lg-120">
        <PricingContent />
      </NioSection> */}
      {/*  Pricing Plans Section End   */}

      {/*  CTA Section Start   */}
      {/* <NioSection className="pt-lg-120">
        <NioSection.Content className="nk-cta-card position-relative bg-blue-50 rounded-3">
          <Row className="align-items-xl-center justify-content-center justify-content-xl-between text-center text-xl-start">
            <Col lg={10} xl={7}>
              <div className="mb-xl-0 mt-xl-3 p-5 p-md-7 pt-sm-7">
                <h2>Get Discount Up To 50%</h2>
                <p className="fs-20 m-0">Put your email address and get started</p>
                <div className="mt-5">
                  <form>
                    <Row className="form-group nk-newsletter-one justify-content-center justify-content-xl-start">
                      <Col md={8}>
                        <NioField.Input className="border-gray-200" childClass="p-3" type="email" placeholder="Enter Your Email" />
                      </Col>
                      <Col md={3} className="ps-md-0">
                        <NioButton type="submit" label="Get Voucher" className="btn-primary-alt text-nowrap btn-block h-100 mt-3 mt-md-0" />
                      </Col>
                    </Row>
                  </form>
                </div>
                <ul className="nk-btn-group justify-content-center justify-content-xl-start pt-5 pt-lg-7">
                  <li>
                    <Link className="d-block" to="#">
                      <img src="images/apps/app-store.png" srcSet="images/apps/app-store2x.png 2x" className="rounded-2" alt="store" />
                    </Link>
                  </li>
                  <li>
                    <Link className="d-block" to="#">
                      <img src="images/apps/play-store.png" srcSet="images/apps/play-store2x.png 2x" className="rounded-2" alt="store" />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xl={5} className="text-xl-end position-relative">
              <div className="nk-cta-card-cover two">
                <img src="images/cta/d.png" alt="cta" />
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection> */}
      {/*  CTA Section End   */}

      {/*  Newsletter Section Start  */}
      {/* <NioSection className="nk-newsletter-section pb-lg-0">
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
      {/*  Newsletter Section End  */}
      <NioSection className="nk-section-testimonial">
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="nk-section-head text-center pb-5">
              <span className="fs-14 fw-semibold text-uppercase d-inline-block text-danger mb-2">Web scraping</span>
              <h2 className="mb-0">Conclusion</h2>
              <p>Web scraping is a powerful tool for data extraction and automation, enabling you to gather valuable information from websites. By following the steps outlined here and considering the key points, you can harness the potential of web scraping for research, analysis, and business applications.
                Explore the possibilities of web scraping and unlock a world of data at your fingertips.</p>
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
    </AppLayout >
  )
}

export default index;