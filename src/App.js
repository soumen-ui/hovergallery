import React from "react";
import { Container, Box, TextBox, ImageBox, H1 } from "./Styles";
import "./App.css";

import ban1 from "./images/bnn1.jpg";
// import ban2 from "../../../images/ban2.png";
// import ban3 from "../../../images/ban3.png";
const imageVariants = {
  beforeHover: {},
  onHover: { scale: 1.4 }
};

const textVariants = {
  beforeHover: { opacity: 0, position: "absolute", bottom: "-85px" },
  onHover: { opacity: 1, position: "absolute", top: "190px" }
};

// const H1Variants = {
//   initial: { y: -100 },
//   animate: { y: 0, transition: { delay: 0.7 } }
// };

function App() {
  return (
    <div className="App">
      <Container>
        {/* <p>Hover over the box </p> */}
        <Box initial="beforeHover" whileHover="onHover">
          <ImageBox variants={imageVariants}>
            <img src={ban1} className="respic" alt="sl1" />
          </ImageBox>
          <TextBox variants={textVariants}>
            <h1> Lorium 1</h1>
            Lorem ipsum dolor amet mustache knausgaard swag.
          </TextBox>
        </Box>
      </Container>

      <Container>
        {/* <p>Hover over the box </p> */}
        <Box initial="beforeHover" whileHover="onHover">
          <ImageBox variants={imageVariants}>
            <img src={ban1} className="respic" alt="sl1" />
          </ImageBox>
          <TextBox variants={textVariants}>
            <h1> Lorium 2</h1>
            Lorem ipsum dolor amet mustache knausgaard swag.
          </TextBox>
        </Box>
      </Container>

      <Container>
        {/* <p>Hover over the box </p> */}
        <Box initial="beforeHover" whileHover="onHover">
          <ImageBox variants={imageVariants}>
            <img src={ban1} className="respic" alt="sl1" />
          </ImageBox>
          <TextBox variants={textVariants}>
            <h1> Lorium 3</h1>
            Lorem ipsum dolor amet mustache knausgaard swag.
          </TextBox>
        </Box>
      </Container>
      <Container>
        {/* <p>Hover over the box </p> */}
        <Box initial="beforeHover" whileHover="onHover">
          <ImageBox variants={imageVariants}>
            <img src={ban1} className="respic" alt="sl1" />
          </ImageBox>
          <TextBox variants={textVariants}>
            <h1> Lorium 4</h1>
            Lorem ipsum dolor amet mustache knausgaard swag.
          </TextBox>
        </Box>
      </Container>
    </div>
  );
}

export default App;
