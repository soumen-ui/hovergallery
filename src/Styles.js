import styled from "styled-components";
import { motion } from "framer-motion";
import img from "./images/gg.jpg";

export const Container = styled.div`
  width: 25%;
  /*  height: 100vh;*/
  /* display: flex;
  flex-direction: column;
  align-items: center;
  background: #111;  */
`;

export const Box = styled(motion.div)`
  width: 100%;
  height: 20rem;
  border-radius: 0px;
  background: #fff;
  /* display: flex;
  flex-direction: column;
  justify-content: flex-end; */
  overflow: hidden;
  margin-top: 0rem;
  position: relative;
`;

// export const H1 = styled(motion.h1)`
//   color: #fff;
//   margin-top: 0rem;
// `;

export const ImageBox = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: url(${img}); */
  background-size: cover;
  background-position: center;
  transition: transform 0.3s;
`;

export const TextBox = styled(motion.div)`
  color: #fff;
  padding: 1rem;
  background: #344;
  overflow: hidden;
  z-index: 2;
`;
