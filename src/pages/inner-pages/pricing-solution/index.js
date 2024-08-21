// import React from 'react';
// import { Col, Row } from 'react-bootstrap';

// // layouts 
// import AppLayout from '../../../layouts/AppLayout/AppLayout';

// // components 
// import { NioSection, NioIcon, NioBrand, NioButton, NioSubscribeField } from '../../../components';

// // section content 
// import FaqContent from '../../../components/PageComponents/InnerPages/PricingSolution/FaqContent/FaqContent';

// function index() {
//   return (
//     <AppLayout variant={7} title="Pricing" rootClass="layout-6">

//       {/*  Banner Section Start   */}
//       <NioSection py={false} className="nk-banner-wrap nk-banner-business-feature pb-lg-120 is-theme" masks={["shape-36"]}>
//         <NioSection.Head alignX="center">
//           <span className="d-inline-block rounded-pill fs-14 text-uppercase text-bg-indigo text-white fw-bold py-1 px-3 mb-2" >pricing</span>
//           <h2 className="text-white" > Pricing built to suit <span className="text-indigo d-inline-block d-xl-block">your needs</span>
//           </h2>
//         </NioSection.Head>
//         <NioSection.Content className="position-relative z-1">
//           <Row className="align-items-center">
//             <Col xs={{ order: 2 }} md={6} xl={{ span: 4, order: 0 }} >
//               <div className="card-pricing mb-5 mb-xl-0">
//                 <div className="card-pricing-heading">
//                   <div className="icon">
//                     <img src="images/icon/thundar.png" alt="icon" />
//                   </div>
//                   <div className="info">
//                     <h3>Standard</h3>
//                     <span className="text-base">For the beginners</span>
//                   </div>
//                 </div>
//                 <div className="card-pricing-content">
//                   <div className="price-tag"> $24 <span className="text-base">/user</span></div>
//                   <ul className="card-pricing-info">
//                     <li>
//                       <p>20 Asset Delivery</p>
//                     </li>
//                     <li>
//                       <p>Unlimited Bandwidth</p>
//                     </li>
//                     <li>
//                       <p className="mute text-base">Support System</p>
//                     </li>
//                     <li>
//                       <p className="mute text-base">120+ Message all Operator</p>
//                     </li>
//                   </ul>
//                   <div className="card-pricing-action">
//                     <NioButton href="#" className="btn-outline-indigo w-100" label="Choose Plan" icon="arrow-right after" />
//                   </div>
//                 </div>
//               </div>
//             </Col>
//             <Col xs={{ order: 1 }} xl={{ span: 4, order: 0 }} >
//               <div className="card-pricing border border-indigo card-pricing-lg mb-5 mb-xl-0">
//                 <div className="card-pricing-heading">
//                   <div className="icon">
//                     <img src="images/icon/crown.png" alt="icon" />
//                   </div>
//                   <div className="info">
//                     <h3>Pro Business</h3>
//                     <span className="text-base">For the professionals</span>
//                   </div>
//                 </div>
//                 <div className="card-pricing-content">
//                   <div className="price-tag text-indigo"> $28 <span className="text-base">/user</span></div>
//                   <ul className="card-pricing-info">
//                     <li>
//                       <p>20 Asset Delivery</p>
//                     </li>
//                     <li>
//                       <p>Unlimited Bandwidth</p>
//                     </li>
//                     <li>
//                       <p>Support System</p>
//                     </li>
//                     <li>
//                       <p className="mute text-base">120+ Message all Operator</p>
//                     </li>
//                   </ul>
//                   <div className="card-pricing-action">
//                     <NioButton href="#" className="btn-indigo w-100" label="Choose Plan" icon="arrow-right after" />
//                   </div>
//                 </div>
//               </div>
//             </Col>
//             <Col xs={{ order: 3 }} md={6} xl={{ span: 4, order: 0 }} className="col-md-6 col-xl-4 order-3 order-xl-0" >
//               <div className="card-pricing mb-5 mb-xl-0">
//                 <div className="card-pricing-heading">
//                   <div className="icon">
//                     <img src="images/icon/cup.png" alt="icon" />
//                   </div>
//                   <div className="info">
//                     <h3>Standard</h3>
//                     <span className="text-base">For the beginners</span>
//                   </div>
//                 </div>
//                 <div className="card-pricing-content">
//                   <div className="price-tag"> $35 <span className="text-base">/user</span></div>
//                   <ul className="card-pricing-info">
//                     <li>
//                       <p>20 Asset Delivery</p>
//                     </li>
//                     <li>
//                       <p>Unlimited Bandwidth</p>
//                     </li>
//                     <li>
//                       <p>Support System</p>
//                     </li>
//                     <li>
//                       <p>120+ Message all Operator</p>
//                     </li>
//                   </ul>
//                   <div className="card-pricing-action">
//                     <NioButton href="#" className="btn-outline-indigo w-100" label="Choose Plan" icon="arrow-right after" />
//                   </div>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </NioSection.Content>
//       </NioSection>
//       {/*  Banner Section End   */}

//       {/*  Pricing Section Start   */}
//       <NioSection className="pt-7 pt-lg-120">
//         <div className="nk-pricing-wrap">
//           <NioSection.Head alignX="center">
//             <span className="d-inline-block rounded-pill fs-14 text-uppercase text-bg-indigo text-white fw-bold py-1 px-3 mb-2">Compare plans</span>
//             <h2>Grow Your Early Stage Startup</h2>
//             <p className="fs-20 mb-0 text-base">Unlock the full potential of your early-stage startup with our tailored solutions and expert guidance to drive growth and success.</p>
//           </NioSection.Head>
//           <NioSection.Content>
//             <div className="nk-compare table-responsive">
//               <table className="table">
//                 <thead>
//                   <tr>
//                     <th className="nk-compare-col lg empty-col"></th>
//                     <th className="nk-compare-col empty-col center">
//                       <div className="nk-compare-content">
//                         <div className="overline-title small mb-3 text-light">Startup</div>
//                         <div className="amount h3 mb-4">$99</div>
//                         <NioButton href="#" className="btn-outline-indigo text-nowrap" label=" Get Started" />
//                       </div>
//                     </th>
//                     <th className="nk-compare-col active empty-col center">
//                       <div className="nk-compare-content">
//                         <div className="overline-title small mb-3 text-light">Growth</div>
//                         <div className="amount h3 mb-4">$199</div>
//                         <NioButton href="#" className="btn-indigo text-nowrap" label=" Get Started" />
//                       </div>
//                     </th>
//                     <th className="nk-compare-col empty-col center">
//                       <div className="nk-compare-content">
//                         <div className="overline-title small mb-3 text-light">Enterprise</div>
//                         <div className="amount h3 mb-4">$399</div>
//                         <NioButton href="#" className="btn-outline-indigo text-nowrap" label=" Get Started" />
//                       </div>
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td className="nk-compare-col lg">
//                       <div className="nk-compare-content">
//                         <h4 className="title">Analytics</h4>
//                       </div>
//                     </td>
//                     <td className="nk-compare-col"></td>
//                     <td className="nk-compare-col active"></td>
//                     <td className="nk-compare-col"></td>
//                   </tr>
//                   <tr>
//                     <td className="nk-compare-col lg">
//                       <div className="nk-compare-content">
//                         <p className="lead">Real-time analytics</p>
//                       </div>
//                     </td>
//                     <td className="nk-compare-col center">
//                       <div className="nk-compare-content">
//                         <NioIcon size="md" name="check-circle" className="text-indigo" />
//                       </div>
//                     </td>
//                     <td className="nk-compare-col active center">
//                       <div className="nk-compare-content">
//                         <NioIcon size="md" name="check-circle-fill" className="text-indigo" />
//                       </div>
//                     </td>
//                     <td className="nk-compare-col center">
//                       <div className="nk-compare-content">
//                         <NioIcon size="md" name="check-circle" className="text-indigo" />
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="nk-compare-col lg">
//                       <div className="nk-compare-content">
//                         <p className="lead">Individual user analytics</p>
//                       </div>
//                     </td>
//                     <td className="nk-compare-col center">
//                       <div className="nk-compare-content">
//                         <NioIcon size="md" name="check-circle" className="text-indigo" />
//                       </div>
//                     </td>
//                     <td className="nk-compare-col active center">
//                       <div className="nk-compare-content">
//                         <NioIcon size="md" name="check-circle-fill" className="text-indigo" />
//                       </div>
//                     </td>
//                     <td className="nk-compare-col center">
//                       <div className="nk-compare-content">
//                         <NioIcon size="md" name="check-circle" className="text-indigo" />
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="nk-compare-col lg">
//                       <div className="nk-compare-content">
//                         <p className="lead">Behaviour analytics</p>
//                       </div>
//                     </td>
//                     <td className="nk-compare-col center"></td>
//                     <td className="nk-compare-col active center">
//                       <div className="nk-compare-content">
//                         <NioIcon size="md" name="check-circle-fill" className="text-indigo" />
//                       </div>
//                     </td>
//                     <td className="nk-compare-col center">
//                       <div className="nk-compare-content">
//                         <NioIcon size="md" name="check-circle" className="text-indigo" />
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="nk-compare-col empty-col lg">
//                       <div className="nk-compare-content">
//                         <p className="lead">Data Predictions</p>
//                       </div>
//                     </td>
//                     <td className="nk-compare-col empty-col center"></td>
//                     <td className="nk-compare-col empty-col active center"></td>
//                     <td className="nk-compare-col empty-col center">
//                       <div className="nk-compare-content">
//                         <NioIcon size="md" name="check-circle" className="text-indigo" />
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="nk-compare-col lg">
//                       <div className="nk-compare-content">
//                         <h4 className="title">Reporting</h4>
//                       </div>
//                     </td>
//                     <td className="nk-compare-col"></td>
//                     <td className="nk-compare-col active"></td>
//                     <td className="nk-compare-col"></td>
//                   </tr>
//                   <tr>
//                     <td className="nk-compare-col lg">
//                       <div className="nk-compare-content">
//                         <p className="lead">Daily reports</p>
//                       </div>
//                     </td>
//                     <td className="nk-compare-col center">
//                       <div className="nk-compare-content">
//                         <NioIcon size="md" name="check-circle" className="text-indigo" />
//                       </div>
//                     </td>
//                     <td className="nk-compare-col active center">
//                       <div className="nk-compare-content">
//                         <NioIcon size="md" name="check-circle-fill" className="text-indigo" />
//                       </div>
//                     </td>
//                     <td className="nk-compare-col center">
//                       <div className="nk-compare-content">
//                         <NioIcon size="md" name="check-circle" className="text-indigo" />
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="nk-compare-col lg">
//                       <div className="nk-compare-content">
//                         <p className="lead">Weekly reports</p>
//                       </div>
//                     </td>
//                     <td className="nk-compare-col center"></td>
//                     <td className="nk-compare-col active center">
//                       <div className="nk-compare-content">
//                         <NioIcon size="md" name="check-circle-fill" className="text-indigo" />
//                       </div>
//                     </td>
//                     <td className="nk-compare-col center">
//                       <div className="nk-compare-content">
//                         <NioIcon size="md" name="check-circle" className="text-indigo" />
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="nk-compare-col lg">
//                       <div className="nk-compare-content">
//                         <p className="lead">Monthly reports</p>
//                       </div>
//                     </td>
//                     <td className="nk-compare-col center"></td>
//                     <td className="nk-compare-col active center">
//                       <div className="nk-compare-content">
//                         <NioIcon size="md" name="check-circle-fill" className="text-indigo" />
//                       </div>
//                     </td>
//                     <td className="nk-compare-col center">
//                       <div className="nk-compare-content">
//                         <NioIcon size="md" name="check-circle" className="text-indigo" />
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="nk-compare-col empty-col lg">
//                       <div className="nk-compare-content">
//                         <p className="lead">Custom reports</p>
//                       </div>
//                     </td>
//                     <td className="nk-compare-col empty-col center"></td>
//                     <td className="nk-compare-col empty-col active center">
//                       <div className="nk-compare-content">
//                         <NioIcon size="md" name="check-circle-fill" className="text-indigo" />
//                       </div>
//                     </td>
//                     <td className="nk-compare-col empty-col center"></td>
//                   </tr>
//                   <tr>
//                     <td className="nk-compare-col lg">
//                       <div className="nk-compare-content">
//                         <h4 className="title">Security &amp; Privacy</h4>
//                       </div>
//                     </td>
//                     <td className="nk-compare-col"></td>
//                     <td className="nk-compare-col active"></td>
//                     <td className="nk-compare-col"></td>
//                   </tr>
//                   <tr>
//                     <td className="nk-compare-col lg">
//                       <div className="nk-compare-content">
//                         <p className="lead">Two-Factor authentication</p>
//                       </div>
//                     </td>
//                     <td className="nk-compare-col center"></td>
//                     <td className="nk-compare-col active center"></td>
//                     <td className="nk-compare-col center">
//                       <div className="nk-compare-content">
//                         <NioIcon size="md" name="check-circle" className="text-indigo" />
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="nk-compare-col lg">
//                       <div className="nk-compare-content">
//                         <p className="lead">SAML-based single sign-on SS</p>
//                       </div>
//                     </td>
//                     <td className="nk-compare-col center"></td>
//                     <td className="nk-compare-col active center"></td>
//                     <td className="nk-compare-col center">
//                       <div className="nk-compare-content">
//                         <NioIcon size="md" name="check-circle" className="text-indigo" />
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="nk-compare-col lg">
//                       <div className="nk-compare-content">
//                         <p className="lead">Complience</p>
//                       </div>
//                     </td>
//                     <td className="nk-compare-col center"></td>
//                     <td className="nk-compare-col active center"></td>
//                     <td className="nk-compare-col center">
//                       <div className="nk-compare-content">
//                         <NioIcon size="md" name="check-circle" className="text-indigo" />
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="nk-compare-col empty-col lg">
//                       <div className="nk-compare-content">
//                         <p className="lead">CCPA complient processing</p>
//                       </div>
//                     </td>
//                     <td className="nk-compare-col empty-col center"></td>
//                     <td className="nk-compare-col empty-col active center"></td>
//                     <td className="nk-compare-col empty-col center">
//                       <div className="nk-compare-content">
//                         <NioIcon size="md" name="check-circle" className="text-indigo" />
//                       </div>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </NioSection.Content>
//         </div>
//       </NioSection>
//       {/*  Pricing Section End   */}

//       {/*  faq Section Start   */}
//       <NioSection>
//         <NioSection.Content>
//           <Row className="justify-content-between align-items-center">
//             <Col lg={5} xl={4}>
//               <div className="nk-section-head pb-lg-0 mt-xl-n6 text-center text-lg-start">
//                 <span className="d-inline-block rounded-pill fs-14 text-uppercase text-bg-indigo text-white fw-bold py-1 px-3 mb-3">FAQs</span>
//                 <h2 className="mb-3">Frequently Asked Questions</h2>
//                 <p className="fs-20 mb-0 text-base">Find answers to commonly asked questions about our product or service in our comprehensive FAQ section.</p>
//                 <ul className="nk-btn-group flex-wrap justify-content-center justify-content-lg-start pt-5 pt-lg-6">
//                   <li>
//                     <NioButton href="/help-center" className="btn-indigo" label="Go To Support Center" />
//                   </li>
//                   <li>
//                     <NioButton href="/contact-us-solution" className="btn-outline-indigo" label="Contct Us" />
//                   </li>
//                 </ul>
//               </div>
//             </Col>
//             <Col lg={7} xl={8}>
//               <FaqContent />
//             </Col>
//           </Row>
//         </NioSection.Content>
//       </NioSection>
//       {/*  faq Section End   */}

//       {/*  CTA Section Start   */}
//       <NioSection>
//         <NioSection.Content>
//           <div className="position-relative nk-cta-wrap bg-darker rounded-16 is-theme p-4 p-md-7 py-6 py-md-7 overflow-hidden">
//             <div className="nk-mask z-1 shape-22"  ></div>
//             <Row className="justify-content-center">
//               <Col xl={8}>
//                 <div className="nk-section-head pb-0 text-center">
//                   <NioBrand
//                     logo="s2"
//                     variant="light"
//                     className="mb-5 pb-1"
//                   />
//                   <h2 >We are trusted by 5k+ clients. <br className="d-none d-lg-block" /> Join them to grow your business. </h2>
//                   <NioButton href="/auth/sign-up" className="btn-indigo mt-5" label="Join Our Community" />
//                 </div>
//               </Col>
//             </Row>
//           </div>
//         </NioSection.Content>
//       </NioSection>
//       {/*  CTA Section End   */}

//       {/*  Newsletter Section Start  */}
//       <NioSection className="nk-newsletter-section pb-lg-0">
//         <Row className="justify-content-center justify-content-lg-between align-items-center pb-5 border-1 border-bottom border-gray-500">
//           <Col lg={6} xl={4}>
//             <div className="nk-newsletter-content text-center text-lg-start pb-5 pb-lg-0">
//               <h4 className="text-capitalize">Subscribe to our newsletter</h4>
//               <p className="fs-16">Join the 5000+ People That Uses Softnio Products.</p>
//             </div>
//           </Col>
//           <Col md={10} lg={6} xl={5}>
//             <NioSubscribeField variant="one" />
//           </Col>
//         </Row>
//       </NioSection>
//       {/*  Newsletter Section End  */}

//     </AppLayout>
//   )
// }

// export default index;


import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// layouts
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components 
import { NioBrand, NioButton, NioCard, NioMedia, NioSection, NioSubscribeField } from '../../../components';

// section content 
import FaqContent from '../../../components/PageComponents/InnerPages/FeaturesSolution/FaqContent/FaqContent';

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
                  <span className="d-inline-block rounded-pill fs-14 text-uppercase text-bg-indigo text-white fw-bold py-1 px-3 mb-3" >Rag</span>
                  <h2 >IntellibooksStudio, an intuitive no-code GenAI application
                  </h2>
                  <p className="text-base fs-20">IntellibooksStudio, an intuitive no-code GenAI application, seamlessly integrates with LangChain to facilitate Retrieval Augmented Generation (RAG) tasks. With drag-and-drop workflow capabilities, users can effortlessly fetch external data and empower
                    LangChain's RAG process, covering essential modules for data retrieval with in a user-friendly environment. </p>
                  {/* <span className="text-indigo">  generativeAI
                    applications.
                  </span> */}

                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*  Brand Section End    */}

      {/*  Analytics Section Start   */}
      <NioSection className="py-7 py-lg-120">
        <NioSection.Content>
          <Row className="justify-content-center justify-content-xl-between align-items-xl-end pb-5 pb-md-7 ">
            <Col md={8} xl={5}>
              <div className="nk-section-head text-center text-xl-start pb-5 pb-xl-0">
                <span className="d-inline-block rounded-pill fs-14 text-uppercase text-bg-indigo text-white fw-bold py-1 px-3 mb-3">GenAI App</span>
                <h2>Document Loader ,Text Splitting and Embeddings</h2>
                <p className="text-base fs-20">IntellibooksStudio, a no-code GenAI app, integrates with LangChain for document loading, text
                  splitting and embeddings. Simplify AI workflows with drag-and-drop ease.</p>
              </div>
            </Col>
            <Col xl={6}>
              <ul className="nk-btn-group justify-content-center justify-content-xl-end">
                <li>
                  <NioButton href="https://ibprocess.intellibooks.io/signin" target="_blank" className="btn-indigo" label="Join with us" />
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
                    <img src="images/blog/m.png" alt="cover-img" className="img-fluid" style={{ width: "30rem" }} />
                  </div>
                  <h4>Document Loader</h4>
                  <p className="text-base">IntellibooksStudio, a user-friendly no-code GenAI application, seamlessly integrates
                    LangChain's 100+ document loaders and provider integrations, simplifying document
                    retrieval from various sources and formats.</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} >
              <div className="nk-feature-block">
                <div className="nk-feature-block-content">
                  <div className="nk-feature-img position-relative overflow-hidden rounded-4 mb-3 mb-md-5 border border-light bg-gray">
                    <img src="images/blog/n.png" alt="cover-img" className="img-fluid" style={{ width: "30rem" }} />
                  </div>
                  <h4>Text Splitting</h4>
                  <p className="text-base">IntellibooksStudio, a no-code GenAI application, streamlines text splitting with in LangChain. It
                    simplifies document preparation by breaking down large files into smaller chunks, tailored for different document types.</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} >
              <div className="nk-feature-block">
                <div className="nk-feature-block-content">
                  <div className="nk-feature-img position-relative overflow-hidden rounded-4 mb-3 mb-md-5 border border-light bg-gray">
                    <img src="images/blog/o.png" alt="cover-img" className="img-fluid" style={{ width: "30rem" }} />
                  </div>
                  <h4>Embeddings</h4>
                  <p className="text-base">IntellibooksStudio, a no-code GenAI app, seamlessly incorporates LangChain's text embeddingcapabilities. It simplifies semantic text analysis by offering diverse embedding providersand easy model switching for optimal results</p>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Analytics Section End    */}

      {/*  Performance Section Start   */}
      <NioSection className="bg-gray-200-soft">
        <NioSection.Content>
          <Row className="pb-5 pb-md-7 justify-content-center justify-content-xl-between align-items-xl-end">
            <Col md={8} xl={5}>
              <div className="nk-section-head text-center text-xl-start pb-5 pb-xl-0">
                <span className="d-inline-block rounded-pill fs-14 text-uppercase text-bg-indigo text-white fw-bold py-1 px-3 mb-3">genAi</span>
                <h2>Vector stores , Retrievers and Indexing</h2>
                <p className="text-base fs-20">IntellibooksStudio, a drag-and-drop GenAI app, streamlines vector stores, retrievers, and
                  indexing within LangChain, simplifying AI workflows for efficient document retrieval andanalysis.</p>
              </div>
            </Col>
            <Col xl={5}>
              <ul className="nk-btn-group justify-content-center justify-content-xl-end">
                <li>
                  <NioButton href="https://ibprocess.intellibooks.io/signin" target="_blank" className="btn-indigo" label="Get started" />
                </li>
                <li>
                  <NioButton href="/blogs" className="btn-outline-indigo" label="Blogs" />
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="gy-5 gy-lg-0">
            <Col md={6} lg={4} >
              <div className="nk-feature-block">
                <div className="nk-feature-block-content">
                  <div className="nk-feature-img position-relative overflow-hidden rounded-4 mb-3 border border-light bg-purple-50">
                    <img src="images/blog/p.png" alt="cover-bg" className="img-fluid" style={{ width: "30rem" }} />
                  </div>
                  <h4>Vector Stores</h4>
                  <p className="text-base">IntellibooksStudio, a no-code GenAI app, harmonizes with LangChain, offering 50+ vector store in tegrations for embedding storage. Examples include Elasticsearch, Amazon
                    DynamoDB, and more, for simplified AI workflows.</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} >
              <div className="nk-feature-block">
                <div className="nk-feature-block-content">
                  <div className="nk-feature-img position-relative overflow-hidden rounded-4 mb-3 border border-light bg-purple-50">
                    <img src="images/blog/q.png" alt="cover-bg" className="img-fluid" style={{ width: "30rem" }} />
                  </div>
                  <h4>Retriever</h4>
                  <p className="text-base">IntellibooksStudio, a no-code GenAI app, seamlessly incorporates LangChain's retrieval
                    features, including Parent Document Retriever, Self Query Retriever, and Ensemble
                    Retriever for efficient data access. Examples: Elasticsearch, Solr, customalgorithms.</p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4} >
              <div className="nk-feature-block">
                <div className="nk-feature-block-content">
                  <div className="nk-feature-img position-relative overflow-hidden rounded-4 mb-3 border border-light bg-purple-50">
                    <img src="images/blog/r.png" alt="cover-bg" className="img-fluid" style={{ width: "30rem" }} />
                  </div>
                  <h4>Indexing</h4>
                  <p className="text-base">IntellibooksStudio, a no-code GenAI app, seamlessly couples with LangChain's Indexing API.
                    It stream lines data synchronization, preventing duplication, unnecessary rewrites, and redundant computations for optimized AI workflows.</p>
                </div>
              </div>
            </Col>
          </Row>
        </NioSection.Content>
      </NioSection>
      {/*  Performance Section End    */}

      {/*  Tools Section Start   */}
      <NioSection className="overflow-hidden bg-indigo-200-soft" masks={["shape-35 d-none d-xl-block"]}>
        <NioSection.Head alignX="center">
          <span className="d-inline-block rounded-pill fs-14 text-uppercase text-bg-indigo text-white fw-bold py-1 px-3 mb-3">More Rag</span>
          <h2 className="mb-0">All the tools</h2>
        </NioSection.Head>
        <NioSection.Content>
          <Row className="gy-5">
            <Col md={6} lg={4} >
              <NioCard className="border-0 h-100">
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="info text-white" icon="files-fill" className="mb-3 mb-md-5" />
                  <h4>Document Loaders with IntellibooksStudio</h4>
                  <p className="text-base mb-0">Seamlessly integrate over 100 document loaders with IntellibooksStudio.
                    Easily fetch documents from various sources, such as AirByte and Unstructured, for efficient AI workflows.</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard className="border-0 h-100">
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="warning text-white" icon="clock" className="mb-3 mb-md-5" />
                  <h4>Text Splitting Made Simple</h4>
                  <p className="text-base mb-0"> IntellibooksStudio stream lines text splitting in LangChain. Break down large documents into smaller, manageable chunks, optimizing retrieval. Ideal
                    for handling code or markdown documents. </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard className="border-0 h-100">
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="primary-alt text-white" icon="sign-mxn" className="mb-3 mb-md-5" />
                  <h4>Efficient Text Embeddings</h4>
                  <p className="mb-0">Integrate LangChain's 25+ text embedding providers with IntellibooksStudio. Quickly capture text semantics for improved similarity searches. Tailor embedding choices for specific needs, whether open-source or proprietary.</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard className="border-0 h-100">
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="danger text-white" icon="users" className="mb-3 mb-md-5" />
                  <h4>Vector Stores for Scalability</h4>
                  <p className="text-base mb-0">Integrate 50+ vector storeswith IntellibooksStudio to efficiently store and retrieve embeddings. Opt for local or cloud-based solutions, enhancing scalability. Simplify switching between vector stores.</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard className="border-0 h-100">
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="info-alt text-white" icon="laptop" className="mb-3 mb-md-5" />
                  <h4>Retrievers for Enhanced Search</h4>
                  <p className="mb-0">
                    Combine IntellibooksStudio
                    with LangChain's retrieval algorithms. Boost search
                    performance with features like Parent Document
                    Retriever, Self Query Retriever, Ensemble Retriever, andmore..
                  </p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
              <NioCard className="border-0 h-100">
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="success text-white" icon="layer" className="mb-3 mb-md-5" />
                  <h4>Streamlined Indexing with IntellibooksStudio</h4>
                  <p className="mb-0">Use IntellibooksStudio tosync data with LangChain's Indexing API. Prevent
                    duplicate content, rewrite unnecessary data, and avoid recomputing embeddings for optimized AI workflows.</p>
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
            </Col>
            <Col md={6} lg={4} >
              <NioCard className="border-transparent border-0 h-100 rounded-3" >
                <NioCard.Body>
                  <NioMedia size="lg" rounded variant="purple" icon="growth" className="mb-3 mb-md-5" />
                  <h4>Progress Tracking</h4>
                  <p className="text-base mb-0"> Track your progress with ease. Our platform provides comprehensive tools and features to monitor your performance, set goals, and track.</p>
                </NioCard.Body>
              </NioCard>
            </Col>
            <Col md={6} lg={4} >
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
                    <NioButton href="/help-center" className="btn-indigo" label="Go To Support Center" />
                  </li>
                  <li>
                    <NioButton href="/contact-us-solution" className="btn-outline-indigo" label="Contact Us" />
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
                    ready to build AI ?</h2>
                  <ul className="nk-btn-group pt-5 justify-content-center" >
                    <li>
                      <NioButton href="https://ibprocess.intellibooks.io/signin" target="_blank" className="btn-indigo" label="Join Our Community" />
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