import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Helmet } from "react-helmet";
import "../../../styles/intelli-landing-page.css";

const TypingText = () => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontFamily: "Plus Jakarta Sans, sans-serif",
      textAlign: "center",
      backgroundColor: "rgba(255,255,255,0.5)",
      borderRadius: 5,
      padding: "5px 7px",
      fontWeight: "600",
      marginTop: "60px",
    }}
  >
    <ReactTyped
      style={{ color: "blue" }}
      strings={["Innovate AI", "Build AI", "Use AI"]}
      typeSpeed={100}
      loop
    />
  </div>
);

const TypingTextBooks = () => (
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontFamily: "Plus Jakarta Sans, sans-serif",
      textAlign: "center",
      backgroundColor: "rgba(255,255,255,0.5)",
      borderRadius: 5,
      padding: "5px 7px",
      fontWeight: "600",
      marginTop: "60px",
    }}
  >
    <ReactTyped
      style={{ color: "blue" }}
      strings={[
        "Billing",
        "Ordering",
        "Inventory",
        "Kitchen order management",
        "Captain Ordering",
        "Website",
      ]}
      typeSpeed={100}
      loop
    />
  </div>
);

const IntelliBooks = () => {
  const handleButtonClick = () => {
    window.location.href = "https://intellibooks.io/";
  };

  return (
    <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        width="100%"
        height="100%"
        style={{
          maxWidth: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/videos/intellibooks_v.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="text-container"
        style={{
          position: "absolute",
          zIndex: 1,
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Text Container */}

        <div style={{ position: "absolute", top: "20%" }}>
          <motion.h1
            style={{
              fontSize: "0.75rem",
              color: "white",
              backgroundColor: "blue",
              textAlign: "center",
              padding: "8px 15px",
              borderRadius: "16px",
              fontWeight: "600",
              lineHeight: 1,
              wordSpacing: 0.5,
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {"Restaurant pos platform".trim("").toUpperCase()}
          </motion.h1>
        </div>
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <motion.h1
            style={{
              color: "white",
              textAlign: "center",
              lineHeight: 1.32,
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            All in one restaurant software<br></br> to manage
          </motion.h1>

          <motion.div
            style={{ fontSize: "2rem", color: "black", marginTop: "4rem" }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TypingTextBooks />
          </motion.div>
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            bottom: "0%",
            alignSelf: "flex-start",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            href="https://www.facebook.com/intellibooks?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img  style={{ margin: 5 }}
              src="images/facebook.png"
              alt="facebook"
              width={20}
              height={20}
            ></img>
          </a>
          <a
            href="https://instagram.com/intelli_books?igshid=MzRlODBiNWFlZA=="
            target="_blank"
            rel="noopener noreferrer"
          > 
            <img  style={{ margin: 5 }}
              src="images/instagram.png"
              alt="instagram"
              width={20}
              height={20}
            ></img>
          </a>
          <a
            href="https://in.pinterest.com/intellibooks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img  style={{ margin: 5 }}
              src="images/pinterest.png"
              alt="pinterest"
              width={20}
              height={20}
            ></img>
          </a>
          <a
            href="https://www.linkedin.com/company/intellibooks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img  style={{ margin: 5 }}
              src="images/linkedin.png"
              alt="linkedin"
              width={20}
              height={20}
            ></img>
          </a>
        </div>

        {/* Button Container */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "20%",
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={handleButtonClick}
            style={{
              padding: "0.8rem 1.5rem",
              fontSize: "1rem",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "rgba(255,255, 255, 0.8)",
              color: "black",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Explore More
          </button>
        </motion.div>
      </div>

      <div className="overlay"></div>
      <style jsx>{`
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

const IntelligenAI = () => {
  const handleButtonClick = () => {
    window.location.href = "https://www.intelligenai.io/index-analytics";
  };

  return (
    <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        width="100%"
        height="100%"
        style={{
          maxWidth: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/videos/intellibooks_studio.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="text-container"
        style={{
          position: "absolute",
          zIndex: 1,
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Text Container */}

        <div style={{ position: "absolute", top: "20%" }}>
          <motion.h1
            style={{
              fontSize: "0.75rem",
              color: "white",
              backgroundColor: "blue",
              textAlign: "center",
              padding: "8px 15px",
              borderRadius: "16px",
              fontWeight: "600",
              lineHeight: 1,
              wordSpacing: 0.5,
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {"No Code Generative AI platform".toUpperCase()}
          </motion.h1>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            marginBottom: "3rem",
          }}
        >
          <motion.h1
            style={{
              color: "white",
              textAlign: "center",
              lineHeight: 1.32,
            }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            No Code platform for every <br></br>business to
          </motion.h1>

          <motion.div
            style={{ fontSize: "2rem", color: "black", marginTop: "4rem" }}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <TypingText />
          </motion.div>
        </div>
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            bottom: "0%",
            alignSelf: "flex-start",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <a
            href="https://www.facebook.com/Intelligenai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img  style={{ margin: 5 }}
              src="images/facebook.png"
              alt="facebook"
              width={20}
              height={20}
            ></img>
          </a>
          <a
            href="https://www.instagram.com/intelli_genai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img  style={{ margin: 5 }}
              src="images/instagram.png"
              alt="instagram"
              width={20}
              height={20}
            ></img>
          </a>
          <a
            href="https://twitter.com/i/flow/login?redirect_after_login=%2Fhome"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img  style={{ margin: 5 }}
              src="images/twitter.png"
              alt="twitter"
              width={20}
              height={20}
            ></img>
          </a>
          <a
            href="https://www.instagram.com/intelli_genai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img  style={{ margin: 5 }}
              src="images/instagram.png"
              alt="instagram"
              width={20}
              height={20}
            ></img>
          </a>
        </div>
        {/* Button Container */}
        <motion.div
          style={{
            position: "absolute",
            bottom: "20%",
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={handleButtonClick}
            style={{
              padding: "0.8rem 1.5rem",
              fontSize: "1rem",
              border: "none",
              borderRadius: "5px",
              backgroundColor: "rgba(255,255, 255, 0.8)",
              color: "black",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Explore More
          </button>
        </motion.div>
      </div>

      <div className="overlay"></div>
      <style jsx>{`
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          pointer-events: none;

          @media (max-width: 766px) {
            .text-container h1 {
              font-size: 1rem;
            }
          }

          @media (max-width: 480px) {
            .text-container h1 {
              font-size: 1.5rem;
            }
          }
        }
      `}</style>
    </div>
  );
};

function IntelliLandingPage() {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          margin: "0",
          background: "black",
          fontWeight: "500",
          fontFamily: "Plus Jakarta Sans, sans-serif",
          letterSpacing: -0.025,
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            alignItems: "stretch",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <IntelliBooks />
          <IntelligenAI />
        </div>
      </div>
    </>
  );
}

function Index() {
  return <IntelliLandingPage></IntelliLandingPage>;
}

export default Index;
