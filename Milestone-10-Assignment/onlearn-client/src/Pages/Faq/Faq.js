import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import Accordion from "react-bootstrap/Accordion";

const Faq = () => {
  const { dark } = useContext(AuthContext);
  useTitle("FAQ");
  return (
    <div
      className={`mx-2 p-2 ${
        dark ? "bg-dark text-white" : "bg-transparent text-dark"
      }`}
    >
      <Accordion
        defaultActiveKey={["0"]}
        className={dark ? "bg-dark text-white" : "bg-transparent text-dark"}
      >
        <Accordion.Item
          eventKey="0"
          className={dark ? "bg-dark text-white" : "bg-transparent text-dark"}
        >
          <Accordion.Header>What is JSX?</Accordion.Header>
          <Accordion.Body>
            <code>{"const element =<h1>Hello, world!</h1>"};</code>
            <p>
              This funny tag syntax is neither a string nor HTML. It is called
              JSX, and it is a syntax extension to JavaScript. We recommend
              using it with React to describe what the UI should look like. JSX
              may remind you of a template language, but it comes with the full
              power of JavaScript. JSX produces React “elements”. We will
              explore rendering them to the DOM in the next section. Below, you
              can find the basics of JSX necessary to get you started.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="1"
          className={dark ? "bg-dark text-white" : "bg-transparent text-dark"}
        >
          <Accordion.Header>What is Flutter?</Accordion.Header>
          <Accordion.Body>
            Control every pixel to create customized & adaptive designs that
            look great on any screen. Take control of your codebase with
            plugins, testing, dev tools & build high quality apps. Null Safe
            Code. Web Stable. Native Performance. Mobile Ads SDK. Open Source.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item
          eventKey="2"
          className={dark ? "bg-dark text-white" : "bg-transparent text-dark"}
        >
          <Accordion.Header>
            What is required to enroll courses?
          </Accordion.Header>
          <Accordion.Body>
            Our courses are made by the very best mentor across the world and
            they made the course and outline very easy that most of the courses
            are required just very basic knowledge of operating computer
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
