import React from "react";
import MemoryGame from "./components/MemoryGame";
import baloon from "./assets/images/air-hot-balloon.svg";
import baloonred from "./assets/images/air-hot-balloon-red.svg";
import {
  StyledBaloon,
  StyledWebsiteContainer,
  StyledBaloonContainerBlue,
  StyledBaloonContainer,
  StyledBaloonBlue,
} from "./AppStyles";

function App() {
  return (
    <>
      <StyledWebsiteContainer>
        <MemoryGame />
        <StyledBaloonContainer>
          <StyledBaloon src={baloonred} />
        </StyledBaloonContainer>
        <StyledBaloonContainerBlue>
          <StyledBaloonBlue src={baloon} />
        </StyledBaloonContainerBlue>
      </StyledWebsiteContainer>
    </>
  );
}

export default App;
