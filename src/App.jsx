import React from "react";
import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-scroll";

const GlobalStyle = createGlobalStyle`
  body, html {
    width: 100%;
    height: 100%;
  }
`;

const Wrapper = styled.div`
  padding-right: 0.5rem;
  padding-left: 0.5rem;
`;

const Header = styled.div`
  background-image: linear-gradient(
    to right bottom,
    #716bd1,
    #7d77d5,
    #8984d8,
    #9590db,
    #a19dde,
    #a9a5e1,
    #b1aee4,
    #b9b6e7,
    #bfbceb,
    #c5c3ef,
    #ccc9f2,
    #d2d0f6
  );

  color: #444;

  & h1 {
    font-size: 120px;
    font-weight: 500;
  }

  & span {
    font-weight: 200;
  }

  padding-top: 10%;
  padding-bottom: 15%;

  @media (min-width: 150px) and (max-width: 249px) {
    h1 {
      font-size: 20px;
    }
  }

  @media (min-width: 250px) and (max-width: 359px) {
    h1 {
      font-size: 40px;
    }
  }

  @media (min-width: 360px) and (max-width: 499px) {
    h1 {
      font-size: 60px;
    }
  }

  @media (min-width: 500px) and (max-width: 584px) {
    h1 {
      font-size: 85px;
    }
  }

  @media (min-width: 585px) and (max-width: 700px) {
    h1 {
      font-size: 100px;
    }
  }
`;

const NavBar = styled.div`
  margin-top: -8%;
`;

const NavItem = styled.div`
  padding: 45px;

  & h4 {
    color: #eee;
    font-size: 26px;
    font-weight: 600;

    letter-spacing: 1.5px;
  }

  & h4:hover {
    cursor: pointer;
    color: #f6f6f6;
  }

  @media (min-width: 150px) and (max-width: 384px) {
    link,
    h4 {
      font-size: 12px;
    }
  }
  @media (min-width: 385px) and (max-width: 700px) {
    link,
    h4 {
      font-size: 20px;
    }
  }
`;

// Contact styles
const ContactWrapper = styled.div`
  background-color: #f6f6f6;
  margin-top: 5%;
  padding-top: 4%;
  padding-bottom: 6%;

  & h1 {
    font-size: 80px;
  }

  & h2 {
    margin-top: -5%;
    margin-bottom: 10%;
  }
`;

const NameLabel = styled.label`
  color: black;
  font-size: 22px;
  font-weight: 600;

  & input[type="text"] {
    width: 100%;
    padding: 14px 20px;
    background-color: #f6f6f6;
    border: none;
    color: black;
    font-size: 15px;
    border: 1px solid black;
  }

  & input::placeholder {
    font-size: 15px;
    color: black;
  }

  & h4 {
    margin-bottom: 3%;
    text-align: left;
  }
`;

const EmailLabel = styled.label`
  color: black;
  font-size: 22px;
  font-weight: 600;

  & input[type="email"] {
    width: 100%;
    padding: 14px 20px;

    background-color: #f6f6f6;
    border: none;
    color: black;
    font-size: 15px;
    border: 1px solid black;
  }

  & input::placeholder {
    font-size: 15px;
    color: black;
  }

  & h4 {
    margin-bottom: 3%;
    text-align: left;
  }
`;

const TextAreaLabel = styled.label`
  & h4 {
    color: black;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 3%;
    text-align: left;
  }
  & textarea {
    width: 100%;
    resize: off;
    padding: 14px 20px;
    font-size: 15px;
    resize: none;
    border: 1px solid black;
    background-color: #f6f6f6;
  }

  & textarea::placeholder {
    font-size: 15px;
    color: black;
  }
`;

const Button = styled.button`
  color: black;
  border: 1px solid black;
  padding: 15px;
  width: 25%;

  text-decoration: none;
  font-size: 16px;
  margin-top: 4%;

  background-color: #f6f6f6;
`;

const AboutWrapper = styled.div`
  padding-top: 15%;
  padding-bottom: 15%;

  & h1 {
    font-size: 70px;

    font-weight: 100;
  }
  & h2 {
    opacity: 0.5;
    font-weight: 100;
  }
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header className="row middle-xs center-xs">
        <div className="col-xs-12">
          <h1>
            <span>Tandem</span>Logic
          </h1>
        </div>
        <NavBar className="row middle-xs center-xs">
          <NavItem className="col-xs-12 col-sm-6">
            <h4>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="about"
              >
                {" "}
                about
              </Link>
            </h4>
          </NavItem>
          <NavItem className="col-xs-12 col-sm-6">
            <h4>
              <Link
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="contact"
              >
                {" "}
                contact
              </Link>
            </h4>
          </NavItem>
        </NavBar>
      </Header>
      <AboutWrapper className="row middle-xs center-xs">
        <div id="about" className="col-xs-11">
          <h1>Our team rapidly delivers flawless and aerodynamic content.</h1>
          <h2>Hire Us Today</h2>
        </div>
      </AboutWrapper>
      <ContactWrapper className="row center-xs">
        <div className="col-xs-6">
          <h1 id="contact">Contact Us</h1>
          <h2>We'd love to hear from you.</h2>
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <NameLabel>
              <h4>Name</h4>
              <input type="text" name="name" placeholder="Your name..."></input>
            </NameLabel>

            <EmailLabel>
              <h4>Email</h4>
              <input type="email" name="email" placeholder="Your email..." />
            </EmailLabel>

            <TextAreaLabel>
              <h4>Message</h4>
              <textarea
                placeholder="Leave a message..."
                name="message"
              ></textarea>
            </TextAreaLabel>
            <Button type="submit">Send</Button>
          </form>
        </div>
      </ContactWrapper>
    </Wrapper>
  );
}

export default App;
