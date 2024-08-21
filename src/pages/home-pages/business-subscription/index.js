// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Col, Container, Row } from 'react-bootstrap';

// // layout
// import AppLayout from '../../../layouts/AppLayout/AppLayout';

// // components 
// import { NioButton, NioCount, NioIcon, NioMedia, NioSection, NioCard, NioSubscribeField } from '../../../components';

// // section content 
// import FaqContent from '../../../components/PageComponents/Homepages/BSSubscription/FaqContent/FaqContent';
// import PricingContent from '../../../components/PageComponents/Homepages/BSSubscription/PricingContent/PricingContent';
// import TestimonialContent from '../../../components/PageComponents/Homepages/BSSubscription/TestimonialContent/TestimonialContent';

// function index() {
//   return (
//     <AppLayout  title="Subscriptions" rootClass="layout-11">

//       {/*  Banner Section Start   */}
//       <section className="nk-banner">
//         <div className="nk-banner-wrap"  style={{"background-color": "aliceblue"}}>
//           <Container>
//           <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
//        <div style={{  margin: "0px 40px 40px 0px", }}> <p style={{ lineHeight: 1, fontSize: "30px", }} > <span style={{ fontWeight: "bold", fontSize: "40px", color: "#6366F1", }}>Evaluate </span>  &nbsp; LLM’s response - Drag and Drop &nbsp;  <span style={{ fontWeight: "bold", fontSize: "40px", color: "#6366F1", }}  >   Build </span>{" "}   &nbsp; workflow - &nbsp; <span style={{ fontWeight: "bold", fontSize: "40px", color: "#6366F1", }}   > Publish  </span>{" "} &nbsp; API  </p>  <p style={{ lineHeight: 1, fontSize: "30px", }}   >      <span style={{ fontWeight: "bold", fontSize: "40px", color: "#6366F1", }}  >   Sell Earn  </span>{" "}   &nbsp; in Market place </p> </div>

//        </div>
//             <Row className="align-items-center justify-content-lg-between position-relative">
//               <Col lg={6} >
//                 <div className="nk-section-head text-center text-lg-start pb-5 pb-sm-7 pb-lg-0">
//                   {/* <span className="d-inline-block fs-16 fw-semibold text text-uppercase mb-2" >RETRIEVAl</span> */}
//                   <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >RETRIEVAl</span>

//                   <h1 className="display-6 mb-md-5" >Grow Your <br className="d-none d-lg-block" /> Turn your LLMs into reasoning engines
//                     <span className="d-lg-block"></span></h1>
//                   {/* <p className="fs-20 opacity-75 mb-0" >
//                     NioLand is the only saas business platform to run your business on one platform, seamlessly across all digital channels.
//                   </p> */}
//                   <ul className="nk-btn-group justify-content-center justify-content-lg-start pt-5 pt-lg-6">
//                     <li>
//                       <NioButton href="/auth/sign-up" label="Try Now" className="btn-primary" />
//                     </li>
//                     <li>
//                       <NioButton href="/blogs" label="Learn More" className="btn-outline-primary" />
//                     </li>
//                   </ul>
//                   {/* <Row className="justify-content-center justify-content-lg-start pt-5 pt-lg-7">
//                     <Col md={10} lg={12}>
//                       <div>
//                         <h5 className="mb-2 fw-medium" >Trusted by</h5>
//                         <Row className="justify-content-center justify-content-lg-start gy-2 gy-md-0">
//                           <Col xs={4} sm={3} >
//                             <Link to="#" className="nk-brand">
//                               <img src="images/brands/a-light.png" alt="brand" className="opacity-75" />
//                             </Link>
//                           </Col>
//                           <Col xs={4} sm={3} >
//                             <Link to="#" className="nk-brand">
//                               <img src="images/brands/b-light.png" alt="brand" className="opacity-75" />
//                             </Link>
//                           </Col>
//                           <Col xs={4} sm={3} >
//                             <Link to="#" className="nk-brand">
//                               <img src="images/brands/c-light.png" alt="brand" className="opacity-75" />
//                             </Link>
//                           </Col>
//                           <Col xs={4} sm={3} >
//                             <Link to="#" className="nk-brand">
//                               <img src="images/brands/d-light.png" alt="brand" className="opacity-75" />
//                             </Link>
//                           </Col>
//                         </Row>
//                       </div>
//                     </Col>
//                   </Row> */}
//                 </div>
//               </Col>
//               <Col lg={5}>
//                 <div className="nk-banner-cover nk-frame nk-frame-three">
//                   <img src="images/business-subscription/banner-cover-1.jpg" alt="banner-cover" className="rounded-2 overflow-hidden" />
//                   {/* <div className="nk-frame-children nk-frame-children-one">
//                     <img src="images/business-subscription/mask-circle-1.png" alt="mask-circle" />
//                   </div>
//                   <div className="nk-frame-children nk-frame-children-two">
//                     <img src="images/business-subscription/mask-dot-1.png" className="animate animate-shakeY animate-duration-12" alt="mask-circle" />
//                   </div> */}
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </section>

// {/* 
//       <section className="nk-banner-wrap nk-banner-business-feature">
//         <div className="nk-mask shape"  ></div>
//         <Container>
//           <Row className="justify-content-center">
//             <Col lg={6}>
//               <div className="nk-banner-business-feature-content text-center">
//                 <div className="nk-section-head pb-0">
//                   <span className="d-inline-block rounded-pill fs-14 text-uppercase text-bg-indigo text-white fw-bold py-1 px-3 mb-3" >AGENTS</span>
//                   <h1 className="text-capitalize" > Grow Your <br className="d-none d-lg-block" /> Turn your LLMs into reasoning engines

//                   </h1>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section> */}
//       {/*  Banner Section End   */}

//       {/* features Section Start */}
//       <NioSection className="nk-section-features py-7 py-lg-120">
//         <NioSection.Head alignX="center">
//         <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >Features</span>
//           <h2>Discover powerful features</h2>
//           <p className="fs-20 mb-0"> Unlock a variety of advanced features crafted to elevate your experience and optimize efficiency. Discover now! </p>
//           <ul className="nk-btn-group justify-content-center pt-5">
//             <li>
//               <NioButton href="/auth/sign-up" label="Try Now" className="btn-primary-alt text-nowrap" />
//             </li>
//             <li>
//               <NioButton href="/blogs" label="Learn More" className="btn-outline-primary-alt text-nowrap" />
//             </li>
//           </ul>
//         </NioSection.Head>
//         <NioSection.Content>
//           <Row className="gy-5 gy-lg-7">
//             <Col md={6} lg={4}>
//               <NioCard className="text-center bg-transparent border-0" >
//                 <NioCard.Body className="p-0">
//                   <NioMedia size="lg" rounded icon="trend-up" variant="primary-alt-soft" className="mb-4" />
//                   <div className="mb-4">
//                     <h4>Enhance the capabilities of your (LLMs)</h4>
//                     <p className="fs-16  line-clamp-2">Traditional models may face challenges in handling fundamental tasks such as logic, calculations, and search functions.
//                     </p>
//                   </div>
//                   <Link to="/blogs" className="btn-link ">
//                     <span>Learn More</span>
//                     <NioIcon name="arrow-right" />
//                   </Link>
//                 </NioCard.Body>
//               </NioCard>
//             </Col>
//             <Col md={6} lg={4}>
//               <NioCard className="text-center bg-transparent border-0" >
//                 <NioCard.Body className="p-0">
//                   <NioMedia size="lg" rounded icon="emails" variant="success-soft" className="mb-4" />
//                   <div className="mb-4">
//                     <h4>Debug in real-time with LangSmith</h4>
//                     <p className="fs-16  line-clamp-2"> facilitating logging and observability at each level. Swiftly pinpoint the origins of errors and unexpected behaviors.
//                     </p>
//                   </div>
//                   <Link to="/blogs" className="btn-link ">
//                     <span>Learn More</span>
//                     <NioIcon name="arrow-right" />
//                   </Link>
//                 </NioCard.Body>
//               </NioCard>
//             </Col>
//             <Col md={6} lg={4}>
//               <NioCard className="text-center bg-transparent border-0" >
//                 <NioCard.Body className="p-0">
//                   <NioMedia size="lg" rounded icon="users" variant="warning-soft" className="mb-4" />
//                   <div className="mb-4">
//                     <h4>Enhanced Search Functions</h4>
//                     <p className="fs-16  line-clamp-2"> The search capabilities of our LLMs have been refined to deliver more precise and relevant information.
//                     </p>
//                   </div>
//                   <Link to="/blogs" className="btn-link ">
//                     <span>Learn More</span>
//                     <NioIcon name="arrow-right" />
//                   </Link>
//                 </NioCard.Body>
//               </NioCard>
//             </Col>
//             <Col md={6} lg={4}>
//               <NioCard className="text-center bg-transparent border-0" >
//                 <NioCard.Body className="p-0">
//                   <NioMedia size="lg" rounded icon="edit-alt" variant="danger-soft" className="mb-4" />
//                   <div className="mb-4">
//                     <h4>Observability at Each Level</h4>
//                     <p className="fs-16  line-clamp-2">LangSmith provides comprehensive observability, allowing you to monitor the inner workings of the LLMs during runtime.</p>
//                   </div>
//                   <Link to="/blogs" className="btn-link ">
//                     <span>Learn More</span>
//                     <NioIcon name="arrow-right" />
//                   </Link>
//                 </NioCard.Body>
//               </NioCard>
//             </Col>
//             <Col md={6} lg={4}>
//               <NioCard className="text-center bg-transparent border-0" >
//                 <NioCard.Body className="p-0">
//                   <NioMedia size="lg" rounded icon="grid" variant="purple-soft" className="mb-4" />
//                   <div className="mb-4">
//                     <h4>Security Enhancements</h4>
//                     <p className="fs-16  line-clamp-2"> Strengthened security measures to ensure the confidentiality and integrity of debugging sessions. </p>
//                   </div>
//                   <Link to="/blogs" className="btn-link ">
//                     <span>Learn More</span>
//                     <NioIcon name="arrow-right" />
//                   </Link>
//                 </NioCard.Body>
//               </NioCard>
//             </Col>
//             <Col md={6} lg={4}>
//               <NioCard className="text-center bg-transparent border-0" >
//                 <NioCard.Body className="p-0">
//                   <NioMedia size="lg" rounded icon="setting-alt" variant="cyan-soft" className="mb-4" />
//                   <h4>Swift Error Identification</h4>
//                   <p className="fs-16  line-clamp-2">It facilitates swift error pinpointing by providing detailed logs and traceability.
//                   </p>
//                   <Link to="/blogs" className="btn-link ">
//                     <span>Learn More</span>
//                     <NioIcon name="arrow-right" />
//                   </Link>
//                 </NioCard.Body>
//               </NioCard>
//             </Col>
//           </Row>
//         </NioSection.Content>
//       </NioSection>
//       {/* features Section End */}

//       {/* Process Section Start */}
//       <NioSection className="nk-how-it-work-section bg-gray overflow-hidden">
//         <Row className="justify-content-center">
//           <Col lg={8} xl={7}>
//             <div className="nk-section-head text-center pb-7">
//               <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >HOW IT WORKS</span>

//               <h2>Easy Process to Get Started</h2>
//               <p className="fs-20 mb-0">
//                 Discover how it works by leveraging Generative AI Platforms,Models and Prompt engineering .
//               </p>
//               <ul className="nk-btn-group justify-content-center pt-5">
//                 <li>
//                   <NioButton href="/blogs" className="btn-primary-alt text-nowrap" label="More Details" />
//                 </li>
//                 <li>
//                   <NioButton href="/contact-us" className="btn-outline-primary-alt text-nowrap" label="Contact Us" />
//                 </li>
//               </ul>
//             </div>
//           </Col>
//         </Row>
//         <NioSection.Content>
//           <Row className="flex-row-reverse align-items-center justify-content-between">
//             <Col lg={5} >
//               <div className="nk-video nk-video-s1 mb-5 mb-md-7 mb-lg-0 ">
//                 <div className="nk-mask shape-28 d-none d-md-block"></div>
//                 <div className="nk-video-inner">
//                   <div className="nk-video-content">
//                     <div className="nk-video-img">
//                       <img src="images/business-digital/section-cover-1.jpg" alt="" className="rounded-2 w-100" />
//                     </div>
//                     <div className="nk-video-btn">
//                       <NioMedia
//                         size="lg"
//                         rounded
//                         icon="play-fill text-white"
//                         lightboxSrc="https://www.youtube.com/watch?v=pVE92TNDwUk"
//                         className="text-bg-danger shadow-xl animate animate-infinite animate-pulse animate-duration-1"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </Col>
//             <Col lg={6} xl={5}>
//               <ul className="nk-schedule d-flex flex-column gap-5 nk-schedule-s2">
//                 <li className="nk-schedule-item p-0">
//                   <div className="nk-schedule-item-inner">
//                     <div className="nk-schedule-symbol">
//                       <NioMedia size="md" rounded icon="check" variant="danger-soft" />
//                     </div>
//                     <div className="nk-schedule-content">
//                       <span className="fs-14 fw-semibold text-uppercase  mb-3"></span>
//                       <div>
//                         <h3 className="mb-2">Chose Amazon , Google , OpenAI Or Azure Platform</h3>
//                         <p className="fs-16 ">Join us now and create your account to start exploring our platform and unlocking Generative AI platform features. </p>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//                 <li className="nk-schedule-item p-0">
//                   <div className="nk-schedule-item-inner">
//                     <div className="nk-schedule-symbol">
//                       <NioMedia size="md" rounded icon="check" variant="danger-soft" />
//                     </div>
//                     <div className="nk-schedule-content">
//                       <span className="fs-14 fw-semibold text-uppercase  mb-3"></span>
//                       <div>
//                         <h3 className="mb-2">Select Models Like Antropic , Palm , OpenAI</h3>
//                         <p className="fs-16 "> Install Models of your choice like Antropic , Palm, OpenAI to get started with AI. </p>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//                 <li className="nk-schedule-item p-0">
//                   <div className="nk-schedule-item-inner">
//                     <div className="nk-schedule-symbol">
//                       <NioMedia size="md" rounded icon="check" variant="danger-soft" />
//                     </div>
//                     <div className="nk-schedule-content">
//                       <span className="fs-14 fw-semibold text-uppercase  mb-3"></span>
//                       <div>
//                         <h3 className="mb-2">Start With Prompt , Evaluation And Monitoring</h3>
//                         <p className="fs-16 "> Design effective prompts, assessing responses using human evaluation and automated metrics and check for biases. </p>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//               </ul>
//             </Col>
//           </Row>
//         </NioSection.Content>
//       </NioSection>
//       {/* Process Section End */}

//       {/* funfact Section Start */}
//       {/* <NioSection className="nk-funfact-section pt-7 pt-lg-120">
//         <NioSection.Content>
//           <Row className="align-items-center justify-content-between text-center text-lg-start">
//             <Col lg={4}>
//               <div className="nk-section-head pb-7 pb-lg-0">
//                 <span className="d-inline-block fs-14 fw-bold text-uppercase text-danger mb-2">our facts</span>
//                 <h2>We are proud of our works</h2>
//               </div>
//             </Col>
//             <Col lg={8}>
//               <Row className="gy-5 gy-md-0 justify-content-center">
//                 <Col sm={6} md={4} >
//                   <div className="text-center">
//                     <div className="mb-3">
//                       <NioIcon size="lg" name="users-fill" className="text-primary" />
//                     </div>
//                     <div>
//                       <NioCount className="h2 d-block" end={3472} />
//                       <p className="fs-18 ">Happy Customers</p>
//                     </div>
//                   </div>
//                 </Col>
//                 <Col sm={6} md={4} >
//                   <div className="text-center">
//                     <div className="mb-3">
//                       <NioIcon size="lg" name="grid-fill-c" className="text-info" />
//                     </div>
//                     <div>
//                       <NioCount className="h2 d-block" end={235} decimals={2} decimal="." />
//                       <p className="fs-18 ">Average Rating</p>
//                     </div>
//                   </div>
//                 </Col>
//                 <Col sm={6} md={4} >
//                   <div className="text-center">
//                     <div className="mb-3">
//                       <NioIcon size="lg" name="user-check-fill" className="text-warning" />
//                     </div>
//                     <div>
//                       <NioCount className="h2 d-block" end={2184} />
//                       <p className="fs-18 ">Active Users</p>
//                     </div>
//                   </div>
//                 </Col>
//               </Row>
//             </Col>
//           </Row>
//         </NioSection.Content>
//       </NioSection> */}
//       {/* funfact Section Start */}

//       {/* Customer Testimonials Section Start */}
//       {/* <NioSection>
//         <NioSection.Content>
//           <TestimonialContent />
//         </NioSection.Content>
//       </NioSection> */}
//       {/* Customer Testimonials Section End */}

//       {/* Faqs Section Start */}
//       <NioSection className="nk-section-faq">
//         <Row className="justify-content-between">
//           <Col xl={4}>
//             <div className="nk-section-head pb-5 pb-xl-0">
//             <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >FAQS</span>
//               <h2>Frequently Asked Questions</h2>
//               <p className="fs-20 mb-0"> Get quick answers to common queries about our service, pricing, security, and account management in our FAQ section. </p>
//               <ul className="nk-btn-group pt-5">
//                 <li>
//                   <NioButton href="/help-center" label="Go to support center" className="btn-primary-alt text-nowrap" />
//                 </li>
//                 <li>
//                   <NioButton href="/contact-us" label="Contact Us" className="btn-primary-alt-soft" />
//                 </li>
//               </ul>
//             </div>
//           </Col>
//           <Col xl={8} >
//             <FaqContent />
//           </Col>
//         </Row>
//       </NioSection>
//       {/* Faqs Section End */}

//       {/* Pricing Plans Section Start */}
//       {/* <NioSection className="nk-section-pricing bg-blue-50">
//         <PricingContent />
//       </NioSection> */}
//       {/* Pricing Plans Section End */}

//       {/* Cta Section Start */}
//       {/* <NioSection className="nk-section-cta pt-7 pt-lg-120">
//         <NioSection.Content className="nk-cta-card card-mask card-mask-one bg-primary-alt p-5 px-md-5 py-md-7 p-lg-7 rounded-3">
//           <Row className="justify-content-center">
//             <Col lg={8}>
//               <div className="nk-section-head pb-5 text-center">
//                 <h2 className="text-white">Get Voucher Discount Up To 50%</h2>
//                 <p className="fs-20 text-white opacity-75">Put your email address and get started</p>
//               </div>
//             </Col>
//             <Col lg={8} xl={6}>
//               <NioSubscribeField
//                 icon="mail before"
//                 variant="one"
//                 buttontext="Get Voucher"
//               />
//               <ul className="d-flex flex-wrap justify-content-center gap g-3 mt-5 mt-lg-7">
//                 <li className="m-0">
//                   <Link className="d-inline-flex rounded-2 overflow-hidden h-60" to="#">
//                     <img src="images/apps/app-store.png" srcSet="images/apps/app-store2x.png 2x" className="img-fluid" alt="app-store" />
//                   </Link>
//                 </li>
//                 <li className="m-0">
//                   <Link className="d-inline-flex rounded-2 overflow-hidden h-60" to="#">
//                     <img src="images/apps/play-store.png" srcSet="images/apps/play-store2x.png 2x" className="img-fluid" alt="play-store" />
//                   </Link>
//                 </li>
//               </ul>
//             </Col>
//           </Row>
//         </NioSection.Content>
//       </NioSection> */}
//       {/* Cta Section End */}

//     </AppLayout >
//   )
// }

// export default index;




import React from 'react';
import { Col, Row } from 'react-bootstrap';

// layout
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components 
import { NioSection, NioSubscribeField, NioButton, NioMedia, NioCard } from '../../../components';

// section content 
import TestimonialContent from '../../../components/PageComponents/InnerPages/Features/TestimonialContent/TestimonialContent';
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

          <span className="d-inline-block text-bg-primary text-white fs-14 rounded-pill text-uppercase fw-semibold py-1 px-3 mb-4" >build</span>

          <h2 >Automate complete, end-to-end workflow
          </h2>
          <p className="fs-20 mb-0" >Whether you need to automate a
            simple prompt or build an entire
            automated LLM system, you can do it
            all on IntellibooksStudio.
            Drag and drop to start your workflow.
          </p>
          {/* <ul className="nk-btn-group justify-content-center pt-5">
            <li>
              <NioButton href="#" className="btn-primary" label="Get Started" />
            </li>
            <li>
              <NioButton href="#" className="btn-outline-primary" label="Learn More" />
            </li>
          </ul> */}
        </NioSection.Head>
        {/* <NioSection.Content>
          <div className="nk-banner-img nk-banner-features pt-xl-7 mt-xl-3 text-center">
            <div className="nk-banner-features-content" >
              <img src="images/features/banner-cover.png" alt="cover-img" className="nk-banner-features-base" />
              <img src="images/features/banner-cover-a.png" alt="cover-img" className="nk-banner-features-children one h-120" />
              <img src="images/features/banner-cover-b.png" alt="cover-img" className="nk-banner-features-children two h-200  animate animate-shakeY animate-duration-12" />
              <img src="images/features/banner-cover-c.png" alt="cover-img" className="nk-banner-features-children three h-300 animate animate-shakeY animate-duration-12" />
            </div>
          </div>
        </NioSection.Content> */}
      </NioSection>
      {/*  Discover Section End  */}

      {/*  Features Section Start  */}
      <NioSection className="pb-7 pb-lg-120">
        <NioSection.Content>
          <Row className="gy-5 gy-lg-0 align-items-center">
            <Col sm={6} lg={4} >
              <div className="nk-feature-card-text line-1">
                <div className="nk-feature-card-text-body">
                  <h5 className="title fw-normal">Drag and drop
                    <span className="fw-semibold d-inline-block d-sm-block">to start your workflow.</span>
                  </h5>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4} >
              <div className="nk-feature-card-text line-2">
                <div className="nk-feature-card-text-body">
                  <h5 className="title fw-normal">
                    <span className="fw-semibold d-inline-block d-sm-block">Turn an integration </span> into an automation.
                  </h5>
                </div>
              </div>
            </Col>
            <Col sm={6} lg={4} >
              <div className="nk-feature-card-text line-3">
                <div className="nk-feature-card-text-body">
                  <h5 className="title fw-normal">Customize your <span className="fw-semibold d-inline-block d-sm-block"> workflow with no-code.
                  </span></h5>
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
                <img src="images/cover/x.png" alt="cover-forground" className="children children-1" style={{ height: "32rem", borderRadius: "3rem" }} />
              </div>
            </Col>
            <Col lg={6} xl={5}>
              <div className="nk-section-head pb-0">

                <div className="media-group align-items-center mb-5">
                  <NioMedia size="md" rounded variant="primary-soft" icon="activity-round-fill" />

                  <div className="media-text">
                    <span className="d-inline-block fs-14 text-uppercase text-primary fw-semibold mb-2">No-Code</span>
                  </div>
                </div>
                <h2> IntellibooksStudio is a no-code AI eco system
                  {/* <span className="d-lg-block"> in Details</span> */}
                </h2>
                <ul className="nk-timeline pt-4">
                  <li className="nk-timeline-item">
                    <div className="nk-timeline-item-inner">
                      <div className="nk-timeline-symbol text-bg-primary text-white"></div>
                      <div className="nk-timeline-content mt-n1">
                        <p>Most apps and platforms just aren’t
                          built for workflow—but IntellibooksStudio is.
                          Our suite of tools is what you need to
                          grow your business
                          Make your RAG with IntellibooksStudio
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* <li className="nk-timeline-item">
                    <div className="nk-timeline-item-inner">
                      <div className="nk-timeline-symbol text-bg-primary text-white"></div>
                      <div className="nk-timeline-content mt-n1">
                        <p>See how often users perform meaningful actions, monitor growth of key user cohorts, like power users</p>
                      </div>
                    </div>
                  </li> */}
                  {/* <li className="nk-timeline-item">
                    <div className="nk-timeline-item-inner">
                      <div className="nk-timeline-symbol text-bg-primary text-white"></div>
                      <div className="nk-timeline-content mt-n1">
                        <p>know how current trends compare to previous results.</p>
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
                <img src="images/cover/y.png" alt="cover-children" className="children children-2" style={{ height: "32rem", width: "33rem", borderRadius: "3rem" }} />
              </div>
            </Col>
            <Col lg={6} xl={5}>
              <div className="nk-section-head pb-0">

                <div className="media-group align-items-center mb-5">
                  <NioMedia size="md" rounded variant="danger-soft" icon="filter-fill" />

                  <div className="media-text">
                    <div className="d-inline-block fs-14 text-uppercase text-danger fw-semibold mb-2">Rag Report</div>
                  </div>
                </div>
                <h2>Make your RAG with IntellibooksStudio
                </h2>
                <ul className="nk-timeline pt-4">
                  <li className="nk-timeline-item">
                    <div className="nk-timeline-item-inner">
                      <div className="nk-timeline-symbol text-bg-danger text-white"></div>
                      <div className="nk-timeline-content mt-n1">
                        <p>
                          Building a RAG needs yo to connect all your
                          tools like Embeddings , Vector store, Document
                          loader etc. With IntellibooksStudio no waiting for a
                          developer to solve your business problems.
                          Just Drag and Drop
                          Connect to SQL and Talk in english with
                          IntellibooksStudio
                          Combining drag-and-drop workflow tools with natural
                          language conversations with IntellibooksStudio opens up a
                          world of possibilities.
                        </p>
                      </div>
                    </div>
                  </li>
                  {/* <li className="nk-timeline-item">
                    <div className="nk-timeline-item-inner">
                      <div className="nk-timeline-symbol text-bg-danger text-white"></div>
                      <div className="nk-timeline-content mt-n1">
                        <p>
                          Locate the funnel steps that cause friction, so you can better engage users before they drop off.
                        </p>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="gy-5 gy-lg-0 flex-row-reverse align-items-lg-center justify-content-lg-between">
            <Col lg={6} >
              <div className=" mb-5 mb-lg-10">
                {/* <img src="images/cover/cover-26.png" alt="cover-base" className="base" /> */}
                <img src="images/cover/z.png" alt="cover-children" className="children children-3" style={{ height: "32rem", borderRadius: "3rem" }} />
              </div>
            </Col>
            <Col lg={6} xl={5}>
              <div className="nk-section-head pb-0">

                <div className="media-group align-items-center mb-5">
                  <NioMedia size="md" rounded variant="purple-soft" icon="signal" />

                  <div className="media-text">
                    <div className="d-inline-block fs-14 text-uppercase text-indigo fw-semibold mb-2">Connect to SQL</div>
                  </div>
                </div>
                <h2>Connect to SQL and Talk in english with IntellibooksStudio</h2>

                <ul className="nk-timeline pt-4">
                  <li className="nk-timeline-item">
                    <div className="nk-timeline-item-inner">
                      <div className="nk-timeline-symbol text-bg-indigo text-white"></div>
                      <div className="nk-timeline-content mt-n1">
                        <p>
                          Combining drag-and-drop workflow tools with natural
                          language conversations with IntellibooksStudio opens up a
                          world of possibilities.

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
          <span className="d-inline-block fs-14 text-uppercase text-primary fw-semibold mb-2">our values</span>
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
                  <h4> Simplicity and Flexibility</h4>
                  <p>Like Legos for AI, IntellibooksStudio
                    breaks down complex development into manageable
                    modules. Anyone regardless of their coding expertise
                    can easily build and experiment with Generative AI
                    applications.</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="info-soft" icon="pie-fill" className="mb-4" />
                  <h4>Endless Building Blocks</h4>
                  <p>Imagine a treasure trove of
                    pre-built Generative AI components at your fingertips.
                    IntellibooksStudio offers a vast library of tools, including text
                    generators, chatbots, sentiment analyzers and more, all
                    drag-and-drop ready for crafting your custom LLM
                    solutions</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="warning-soft" icon="color-palette-fill" className="mb-4" />
                  <h4>Seamless Integrations</h4>
                  <p>IntellibooksStudio plays well with
                    others! It seamlessly integrates with your existing tools
                    and platforms, like email, Slack,and CRMs, allowing you
                    to effortlessly infuse your workflow with LLM
                    capabilities without massive restructuring.</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="danger-soft" icon="view-grid-wd" className="mb-4" />
                  <h4>Built with IntellibooksStudio</h4>
                  <p>Talk about self-reliance!
                    IntellibooksStudio leverages its own powerful technology to
                    build and improve itself, showcasing its versatility and
                    problem-solving prowess .</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="primary-soft" icon="bell-fill" className="mb-4" />
                  <h4>Thriving Community</h4>
                  <p>
                    It's a vibrant community of like-minded individuals.
                    Comprehensive documentation, tutorials and active
                    forums foster knowledge sharing and support,
                    empowering both new comers and veterans in the world
                    of AI</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard>
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="success-soft" icon="puzzle-fill" className="mb-4" />
                  <h4>Real-World Impact</h4>
                  <p>IntellibooksStudio isn't just theoretical. It
                    empowers a diverse range of users to tackle real-world
                    challenges. From building engaging chatbots to
                    automating tedious tasks, IntellibooksStudio equips people
                    with the tools to leverage AI for tangible outcomes.
                  </p>
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
          {/* <span className="d-inline-block fs-14 text-uppercase text-primary fw-semibold mb-2">responsive on every device</span> */}
          <h2>Users love us. They can’t be wrong!</h2>
          <ul className="nk-btn-group justify-content-center pt-5">
            <li>
              <NioButton href="https://ibprocess.intellibooks.io/signin" target="_blank" className="btn-primary" label="Get Started" />
            </li>
            <li>
              <NioButton href="/blogs" className="btn-outline-primary" label="Our blogs" />
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
          <span className="d-inline-block fs-14 text-uppercase text-primary fw-semibold mb-2">learn more</span>
          <h2>The World's Most Grossing Generative AI Software
            product
          </h2>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5">
            <Col lg={6} >
              <NioCard className="nk-feature-block overflow-hidden border-0 bg-blue-50 rounded-2 h-100">
                <NioCard.Body>
                  <div className="nk-feature-block-content h-100">
                    <NioMedia size="lg" rounded variant="primary" icon="users-fill" className="mb-3 mb-md-5" />
                    <h4>Drag-and-drop simplicity</h4>
                    <p className="fs-18 mb-0">
                      IntellibooksStudio breaks down
                      complex AI development into easily understandable
                      modules, allowing anyone – even users without deep
                      coding knowledge – to build and experiment with AI
                      applications. This "Legos for AI" approach lowers the
                      barrier to entry and empowers users to leverage the
                      power of AI without needing extensive technical
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
                      IntellibooksStudio offers a vast
                      library of pre-built AI components. Think text
                      generators, chatbots, sentiment analyzers, and many
                      more. These components are like building blocks that
                      users can drag and drop to create custom AI
                      solutions. This eliminates the need for manual coding
                      and saves development time, accelerating the workflow
                      and making AI readily available for diverse projects.

                    </p>
                    <NioButton href="/about" className="btn-link text-primary pt-5" label="Help Center" icon="arrow-right after" />
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
                  <h2 className="newsletter-heading text-capitalize h1 m-0 mb-4 mb-lg-7">Combine the magic of AI with the
                    power of IntellibooksStudio to make LLM do
                    more work for you.</h2>
                  <ul className="nk-btn-group flex-wrap ps-1">
                    <li>
                      <NioButton href="https://ibprocess.intellibooks.io/signin" target="_blank" className="btn-lg btn-white text-dark" label="Get Started" />
                    </li>
                    <li>
                      <NioButton href="/blogs" className="btn-lg btn-outline-white" label="Blogs" />
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