import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { fade } from "@material-ui/core";
// import { img } from "../images/images/model-s.jpg";
// import { img1 } from "./images/model-s.jpg";

function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Fade bottom>
        <Button>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            <RightButton>{rightBtnText}</RightButton>
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" />
        </Button>
      </Fade>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  // z-index: 10;
  width: 100vw;
  height: 100vh;
  //   background: orange;
  background-image: url("/images/model-s.jpg");

  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-item: center;
  overflow: hidden;
`;
const ItemText = styled.div`
  padding-top: 16vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: upperCase;
  font-size: 12px;
  cursor: pointer;
  margin: 20px;
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;
const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
`;
