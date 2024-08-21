import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// layout
import AppLayout from '../../../layouts/AppLayout/AppLayout';

// components 
import { NioButton, NioCount, NioIcon, NioMedia, NioSection, NioCard, NioSubscribeField } from '../../../components';

// section content 
import FaqContent from '../../../components/PageComponents/Homepages/BSSubscription/FaqContent/FaqContent';
import PricingContent from '../../../components/PageComponents/Homepages/BSSubscription/PricingContent/PricingContent';
import TestimonialContent from '../../../components/PageComponents/Homepages/BSSubscription/TestimonialContent/TestimonialContent';

function index() {


    const containerStyle = {
        margin: '-83px 0px 20px 0px',
        display: 'flex',
        justifyContent: 'center',
        color: "#64728f",
        textAlign: 'center',
        padding: "10px",
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
        <AppLayout>

            {/*  Banner Section Start   */}
            <section className="nk-banner">
                <div className="nk-banner-wrap" style={{ "background-color": "aliceblue" }}>
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
                        <Row className="align-items-center justify-content-lg-between position-relative">
                            <Col lg={6} >
                                <div className="nk-section-head text-center text-lg-start pb-5 pb-sm-7 pb-lg-0">
                                    <span className="d-inline-block fs-16 fw-semibold text-indigo  mb-1" >The Featuer of Conversation</span>
                                    <h1 className="display-6 mb-md-5" >Your IntellibooksStudio <br className="d-none d-lg-block" /> Dialog Partner <span className="d-lg-block"></span></h1>
                                    <p className="fs-20 opacity-75 mb-0" >
                                        Welcome to the next level of digital communication with our AI chatbot. Designed to understand and respond to your needs, our chatbot is here to provide instant assistance, answers, and insights. Just enter your email to start the conversation. Our smart bot is equipped to learn and adapt, ensuring every interaction is smoother and more intuitive than the last.
                                    </p>
                                    {/* <ul className="nk-btn-group justify-content-center justify-content-lg-start pt-5 pt-lg-6">
                                        <li>
                                            <NioButton href="#" label="Request A Demo" className="btn btn-danger text-nowrap" />
                                        </li>
                                        <li>
                                            <NioButton href="/auth/sign-up" label="Sign Up" className="btn btn-white text-dark text-nowrap" />
                                        </li>
                                    </ul> */}
                                    {/* <Row className="justify-content-center justify-content-lg-start pt-5 pt-lg-7">
                                        <Col md={10} lg={12}>
                                            <div>
                                                
                                                <Row className="justify-content-center justify-content-lg-start gy-2 gy-md-0">
                                                    <Col xs={4} sm={3} >
                                                        <Link to="#" className="nk-brand">
                                                            <img src="images/brands/a-light.png" alt="brand" className="opacity-75" />
                                                        </Link>
                                                    </Col>
                                                    <Col xs={4} sm={3} >
                                                        <Link to="#" className="nk-brand">
                                                            <img src="images/brands/b-light.png" alt="brand" className="opacity-75" />
                                                        </Link>
                                                    </Col>
                                                    <Col xs={4} sm={3} >
                                                        <Link to="#" className="nk-brand">
                                                            <img src="images/brands/c-light.png" alt="brand" className="opacity-75" />
                                                        </Link>
                                                    </Col>
                                                    <Col xs={4} sm={3} >
                                                        <Link to="#" className="nk-brand">
                                                            <img src="images/brands/d-light.png" alt="brand" className="opacity-75" />
                                                        </Link>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                    </Row> */}
                                </div>
                            </Col>
                            <Col lg={5}>
                                <div className="nk-banner-cover nk-frame nk-frame-three">
                                    <img src="images/business-subscription/banner-cover-1.jpg" alt="banner-cover" className="rounded-5 overflow-hidden" />
                                    {/* <div className="nk-frame-children nk-frame-children-one">
                                        <img src="images/business-subscription/mask-circle-1.png" alt="mask-circle" />
                                    </div> */}
                                    <div className="nk-frame-children nk-frame-children-two">
                                        <img src="images/business-subscription/mask-dot-1.png" className="animate animate-shakeY animate-duration-12" alt="mask-circle" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            {/*  Banner Section End   */}


            {/* Process Section Start */}
            <NioSection className="nk-how-it-work-section bg-gray overflow-hidden">
                <Row className="justify-content-center">
                    <Col lg={8} xl={7}>
                        <div className="nk-section-head text-center pb-7">
                            <span className="d-inline-block fs-14 fw-bold text-uppercase text-danger mb-2">our process</span>
                            <h2>Let’s See How it Works</h2>
                            <p className="fs-20 mb-0">
                                Get a firsthand look at how our platform works and discover its intuitive interface and seamless functionality. Dive in now!
                            </p>
                            {/* <ul className="nk-btn-group justify-content-center pt-5">
                                <li>
                                    <NioButton href="#" className="btn-danger text-white" label="More Details" />
                                </li>
                                <li>
                                    <NioButton href="/contact-us" className="btn-outline-danger" label="Contact Us" />
                                </li>
                            </ul> */}
                        </div>
                    </Col>
                </Row>
                {/* <NioSection.Content>
                    <Row className="flex-row-reverse align-items-center justify-content-between">
                        <Col lg={5} >
                            <div className="nk-video nk-video-s1 mb-5 mb-md-7 mb-lg-0 ">
                                <div className=""></div>
                                <div className="nk-video-inner">
                                    <div className="nk-video-content">
                                        <div className="nk-video-img">
                                            <img src="images/business-digital/section-cover-1.jpg" alt="" className="rounded-2 w-100" />
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} xl={5}>
                            <ul className="nk-schedule d-flex flex-column gap-5 nk-schedule-s2">
                                <li className="nk-schedule-item p-0">
                                    <div className="nk-schedule-item-inner">
                                        <div className="nk-schedule-symbol">
                                            <NioMedia size="md" rounded icon="check" variant="danger-soft" />
                                        </div>
                                        <div className="nk-schedule-content">
                                            <span className="fs-14 fw-semibold text-uppercase  mb-3">step 1</span>
                                            <div>
                                                <h3 className="mb-2">Sign Up </h3>
                                                <p className="fs-16 "> Sign up and create your account in just a few easy steps. Enter your email to begin unlocking a world of possibilities today.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nk-schedule-item p-0">
                                    <div className="nk-schedule-item-inner">
                                        <div className="nk-schedule-symbol">
                                            <NioMedia size="md" rounded icon="check" variant="danger-soft" />
                                        </div>
                                        <div className="nk-schedule-content">
                                            <span className="fs-14 fw-semibold text-uppercase  mb-3">step 2</span>
                                            <div>
                                                <h3 className="mb-2">Login</h3>
                                                <p className="fs-16 "> Login effortlessly with a click. Enter your email, press 'Send OTP,' and a secure, AI-crafted code will land in your inbox. This code is your quick pass, valid for 20 minutes, to a world of possibilities. No OTP? Just tap 'Resend OTP.' Once entered, you’re all set to explore the smart side of Intellibooks. </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nk-schedule-item p-0">
                                    <div className="nk-schedule-item-inner">
                                        <div className="nk-schedule-symbol">
                                            <NioMedia size="md" rounded icon="check" variant="danger-soft" />
                                        </div>
                                        <div className="nk-schedule-content">
                                            <span className="fs-14 fw-semibold text-uppercase  mb-3">step 3</span>
                                            <div>
                                                <h3 className="mb-2">Data Analysis</h3>
                                                <p className="fs-16 "> Uncover valuable insights and make data-driven decisions with our advanced data analysis tools. </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </NioSection.Content> */}


                <NioSection.Content>
                    <Row className="align-items-center justify-content-between">
                        <Col lg={6} xl={5}>
                            <ul className="nk-schedule d-flex flex-column gap-5 nk-schedule-s2">
                                <li className="nk-schedule-item p-0">
                                    <div className="nk-schedule-item-inner">
                                        <div className="nk-schedule-symbol">
                                            <NioMedia size="md" rounded icon="check" variant="danger-soft" />
                                        </div>
                                        <div className="nk-schedule-content">
                                            <span className="fs-14 fw-semibold text-uppercase  mb-3">step 1</span>
                                            <div>
                                                <h3 className="mb-2">Sign Up </h3>
                                                <p className="fs-16 "> Sign up and create your account in just a few easy steps. Enter your email to begin unlocking a world of possibilities today.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nk-schedule-item p-0">
                                    <div className="nk-schedule-item-inner">
                                        <div className="nk-schedule-symbol">
                                            <NioMedia size="md" rounded icon="check" variant="danger-soft" />
                                        </div>
                                        <div className="nk-schedule-content">
                                            <span className="fs-14 fw-semibold text-uppercase  mb-3">step 2</span>
                                            <div>
                                                <h3 className="mb-2">Sign In</h3>
                                                <p className="fs-16 "> Sign In effortlessly with a click. Enter your email, press 'Send OTP,' and a secure, AI-crafted code will land in your inbox. This code is your quick pass, valid for 20 minutes, to a world of possibilities. No OTP? Just tap 'Resend OTP.' Once entered, you’re all set to explore the smart side of Intellibooks. </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                {/* <li className="nk-schedule-item p-0">
                    <div className="nk-schedule-item-inner">
                        <div className="nk-schedule-symbol">
                            <NioMedia size="md" rounded icon="check" variant="danger-soft" />
                        </div>
                        <div className="nk-schedule-content">
                            <span className="fs-14 fw-semibold text-uppercase  mb-3">step 3</span>
                            <div>
                                <h3 className="mb-2">Data Analysis</h3>
                                <p className="fs-16 "> Uncover valuable insights and make data-driven decisions with our advanced data analysis tools. </p>
                            </div>
                        </div>
                    </div>
                </li> */}
                            </ul>
                        </Col>
                        <Col lg={5}>
                            <div className="nk-video nk-video-s1 mb-5 mb-md-7 mb-lg-0">
                                <div className=""></div>
                                <div className="nk-video-inner">
                                    <div className="nk-video-content mb-2">
                                        <div className="nk-video-img">
                                            <img src="images/business-digital/signup.png" alt="" className="rounded-2 w-100" style={{ maxWidth: '18rem' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="nk-video nk-video-s1 mb-5 mb-md-7 mb-lg-0">
                                <div className=""></div>
                                <div className="nk-video-inner">
                                    <div className="nk-video-content">
                                        <div className="nk-video-img">
                                            <img src="images/business-digital/login.png" alt="" className="rounded-2 w-100" style={{ maxWidth: '18rem' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="nk-video nk-video-s1 mb-5 mb-md-7 mb-lg-0">
                <div className=""></div>
                <div className="nk-video-inner">
                    <div className="nk-video-content mb-1">
                        <div className="nk-video-img">
                            <img src="images/business-digital/section-cover-1.jpg" alt="" className="rounded-2 w-100" style={{maxWidth: '18rem'}} />
                        </div>
                    </div>
                </div>
            </div> */}
                        </Col>
                    </Row>
                </NioSection.Content>
            </NioSection>
            {/* Process Section End */}




            <NioSection className="py-7 py-lg-120">
                <NioSection.Content>
                    <Row className="justify-content-center justify-content-xl-between align-items-xl-end pb-5 pb-md-7 ">
                        <Col md={9} xl={9}>
                            <div className="nk-section-head text-center text-xl-start pb-5 pb-xl-0">
                                {/* <span className="d-inline-block rounded-pill fs-14 text-uppercase text-bg-indigo text-white fw-bold py-1 px-3 mb-3"></span> */}
                                <h2>Dashboard
                                </h2>
                                <p className="text-base fs-20">Navigate through the Intellibooks ecosystem with unparalleled ease. Our user interface is a testament to the power of AI, where every click brings you closer to efficiency and innovation. With intuitive options like 'My Ticket' and 'Use Case List', you're always just a step away from managing your tasks or exploring potential applications. Ready to create magic? Hit '+ Create Workflow' and let our intelligent algorithms guide you through crafting processes that transform the mundane into the extraordinary. Your account is a portal to progress, with 'Model Evaluation' offering insights that redefine what you thought possible. And when you're ready to pause, 'Logout' awaits to secure your session. Dive into an interface where every interaction is a leap towards the future.
                                </p>
                            </div>
                        </Col>
                        {/* <Col xl={6}>
                            <ul className="nk-btn-group justify-content-center justify-content-xl-end">
                                <li>
                                    <NioButton href="/auth/sign-up" className="btn-indigo" label="Contact Us" />
                                </li>
                                <li>
                                    <NioButton href="/blogs" className="btn-outline-indigo" label="Our Blogs" />
                                </li>
                            </ul>
                        </Col> */}
                    </Row>
                    <Row className="gy-5 gy-lg-0">
                        <h3 className="flex justify-center pb-2">Create WorkFlow : </h3>
                        <div className="nk-feature-block mb-5">
                            <div className="nk-feature-block-content">
                                {/* <div className="nk-feature-img position-relative overflow-hidden rounded-4 mb-3 mb-md-5 border border-light bg-gray">
                                        <img src="images/blog/prompt.png" alt="cover-img" className="img-fluid" style={{ "height": "29.6rem" }} />
                                    </div> */}
                                <h4>Models</h4>
                                <p className="text-base"> Pick from a list like Amazon-Bedrock, OpenAI, and VertexAI to make your workflow smart. For instance, Amazon-Bedrock offers engines such as ai21.j2-ultra-v1, stable-diffusion(image-only), and cohere.command-text-v14. On the other hand, OpenAI presents engines like gpt-3.5-turbo and gpt-3.5-turbo-16k. Lastly, VertexAI boasts engines such as gemini-pro-vision, gemini-pro, text-bison, and text-bison-32k.


                                </p>
                            </div>
                        </div>
                        <Col md={6} lg={4} >
                            <div className="nk-feature-block mb-5">
                                <div className="nk-feature-block-content">
                                    {/* <div className="nk-feature-img position-relative overflow-hidden rounded-4 mb-3 mb-md-5 border border-light bg-gray">
                                        <img src="images/blog/prompt.png" alt="cover-img" className="img-fluid" style={{ "height": "29.6rem" }} />
                                    </div> */}
                                    <h4>Engines</h4>
                                    <p className="text-base">These are what make your workflows go, handling all the hard work smoothly.

                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4} >
                            <div className="nk-feature-block">
                                <div className="nk-feature-block-content">
                                    {/* <div className="nk-feature-img position-relative overflow-hidden rounded-4 mb-3 mb-md-5 border border-light bg-gray">
                                        <img src="images/blog/model.png" alt="" className="img-fluid" style={{ "height": "29.6rem" }} />
                                    </div> */}
                                    <h4>Agents </h4>
                                    <p className="text-base">Think of these as helpers that do tasks for you within your workflow.

                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4} >
                            <div className="nk-feature-block">
                                <div className="nk-feature-block-content">
                                    {/* <div className="nk-feature-img position-relative overflow-hidden rounded-4 mb-3 mb-md-5 border border-light bg-gray">
                                        <img src="images/blog/result.png" alt="" className="img-fluid" style={{ "height": "29.6rem" }} />
                                    </div> */}
                                    <h4>Document Loaders</h4>
                                    <p className="text-base">This is where you’ll put all your files, and the system will keep them organized.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="gy-5 gy-lg-0">
                        <Col md={6} lg={4} >
                            <div className="nk-feature-block">
                                <div className="nk-feature-block-content">
                                    {/* <div className="nk-feature-img position-relative overflow-hidden rounded-4 mb-3 mb-md-5 border border-light bg-gray">
                                        <img src="images/blog/prompt.png" alt="cover-img" className="img-fluid" style={{ "height": "29.6rem" }} />
                                    </div> */}
                                    <h4>Vector Stores</h4>
                                    <p className="text-base">These keep important data that your workflow will use to make decisions.


                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4} >
                            <div className="nk-feature-block">
                                <div className="nk-feature-block-content">
                                    {/* <div className="nk-feature-img position-relative overflow-hidden rounded-4 mb-3 mb-md-5 border border-light bg-gray">
                                        <img src="images/blog/model.png" alt="" className="img-fluid" style={{ "height": "29.6rem" }} />
                                    </div> */}
                                    <h4>Retrievers </h4>
                                    <p className="text-base">They find and bring the information you need for your workflow.

                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} lg={4} >
                            <div className="nk-feature-block">
                                <div className="nk-feature-block-content">
                                    {/* <div className="nk-feature-img position-relative overflow-hidden rounded-4 mb-3 mb-md-5 border border-light bg-gray">
                                        <img src="images/blog/result.png" alt="" className="img-fluid" style={{ "height": "29.6rem" }} />
                                    </div> */}
                                    <h4>Prompts</h4>
                                    <p className="text-base"> Set up questions or commands that your AI will respond to.
                                        Start crafting your next masterpiece with Intellibooks – where every interaction is a leap towards the future.

                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </NioSection.Content>
            </NioSection>


            <NioSection className="nk-how-it-work-section bg-gray overflow-hidden">
                <Row className="justify-content-center">
                    <Col lg={8} xl={7}>
                        <div className="nk-section-head text-center pb-7">
                            <span className="d-inline-block fs-14 fw-bold text-uppercase text-danger mb-2">our process</span>
                            <h2>How to create your workflow</h2>
                            <p className="fs-15 mb-0">
                                To create your workflow, just click and hold on any of the models listed, like 'Amazon-Bedrock', 'OpenAI', or 'VertexAI'. Then, drag it into the middle area where it says 'MODEL'. This will add the selected AI model to your workflow
                                After placing your model in the 'MODEL' area, you can name your workflow on the right side. For example, name it "Explore India" if it's about Indian information. The description is optional - it's fine to skip it if you prefer.                            </p>

                        </div>
                    </Col>
                </Row>



                <NioSection.Content>
                    <Row className="align-items-center justify-content-between">
                        <Col lg={12} xl={12}>
                            <ul className="nk-schedule d-flex flex-column gap-5 nk-schedule-s2">
                                <li className="nk-schedule-item p-0">
                                    <div className="nk-schedule-item-inner">
                                        <div className="nk-schedule-symbol">
                                            <NioMedia size="md" rounded icon="check" variant="danger-soft" />
                                        </div>
                                        <div className="nk-schedule-content">
                                            <span className="fs-14 fw-semibold text-uppercase  mb-3">step 1</span>
                                            <div>
                                                <h3 className="mb-2">Choose Model </h3>
                                                <p className="fs-16 "> After adding your AI model to the middle, next, drag an engine from the list on the left and drop it into the middle area too. This will connect your engine to the model, and you're good to go
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nk-schedule-item p-0">
                                    <div className="nk-schedule-item-inner">
                                        <div className="nk-schedule-symbol">
                                            <NioMedia size="md" rounded icon="check" variant="danger-soft" />
                                        </div>
                                        <div className="nk-schedule-content">
                                            <span className="fs-14 fw-semibold text-uppercase  mb-3">step 2</span>
                                            <div>
                                                <h3 className="mb-2">Choose Engine</h3>
                                                <p className="fs-16 "> After adding an engine below the selected model, an 'Add' button will appear. Click it to open a space where you can drag Agents, Document Loaders, Vector Stores, Retrievers, or Prompts to customize your workflow further. </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nk-schedule-item p-0">
                                    <div className="nk-schedule-item-inner">
                                        <div className="nk-schedule-symbol">
                                            <NioMedia size="md" rounded icon="check" variant="danger-soft" />
                                        </div>
                                        <div className="nk-schedule-content">
                                            <span className="fs-14 fw-semibold text-uppercase  mb-3">step 3</span>
                                            <div>
                                                <h3 className="mb-2">To create "Workflow 1," follow the same steps as step-1 and step-2</h3>
                                                <ul className="pl-4">
                                                    <li className="list-disc"> <strong>1. </strong> Add a model to the 'MODEL' area.</li>
                                                    <li className="list-disc"> <strong>2. </strong> Place an engine below the selected model.</li>
                                                    <li className="list-disc">  <strong>3. </strong> Click the 'Add' button that appears.</li>
                                                    <li className="list-disc">  <strong>4. </strong> Drag and drop the Prompt component into the workspace to customize your workflow.</li>
                                                    <li className="list-disc"> <strong>5. </strong> A panel will appear on the right side with prompt details.</li>
                                                    <li className="list-disc"> <strong>6. </strong> In the panel, find the field labeled "Enter prompt here."</li>
                                                    <li className="list-disc"> <strong>7. </strong> Input your prompt text, such as “List of Neighboring Countries of $ val and Details” or "Tell about the area of $ val and neighboring countries."</li>
                                                    <li className="list-disc"> <strong>8. </strong> Once the prompt is entered, click on the 'Generate' button located above.</li>
                                                    <li className="list-disc"> <strong>9. </strong> Your workflow is now finalized and ready for execution.</li>
                                                </ul>


                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Col>
                        {/* <Col lg={5}>
                            <div className="nk-video nk-video-s1 mb-5 mb-md-7 mb-lg-0">
                                <div className=""></div>
                                <div className="nk-video-inner">
                                    <div className="nk-video-content mb-2">
                                        <div className="nk-video-img">
                                            <img src="images/business-digital/signup.png" alt="" className="rounded-2 w-100" style={{ maxWidth: '18rem' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="nk-video nk-video-s1 mb-5 mb-md-7 mb-lg-0">
                                <div className=""></div>
                                <div className="nk-video-inner">
                                    <div className="nk-video-content">
                                        <div className="nk-video-img">
                                            <img src="images/business-digital/login.png" alt="" className="rounded-2 w-100" style={{ maxWidth: '18rem' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Col> */}
                    </Row>
                </NioSection.Content>
            </NioSection>



        </AppLayout >
    )
}

export default index;