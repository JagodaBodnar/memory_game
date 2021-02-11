import styled, { keyframes } from "styled-components";
import cloud from "./assets/images/cloud.svg";
import cloud2 from "./assets/images/cloudsThree.svg";
import baloongreen from "./assets/images/air-hot-balloon-green.svg";
import baloonorange from "./assets/images/air-hot-balloon-orange.svg";
import baloonpink from "./assets/images/air-hot-balloon-pink.svg";
import { device } from "./globalStyles/device";

export const StyledWebsiteContainer = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
  background-color: #56daff;
  background-image: url(${cloud}), url(${cloud}), url(${cloud2}), url(${cloud2}),
    url(${cloud}), url(${baloonorange}), url(${baloongreen}), url(${baloonpink});
  background-position: 85% 0%, 95% 0%, 10% 15%, 80% 100%, 0% 0%, 90% 80%, 20% 0%,
    0% 100%;
  background-repeat: no-repeat;
  background-size: 40%, 22%, 24%, 34%, 32%, 23%, 43%, 43%;
  overflow: hidden;
  z-index: 0;
  @media ${device.mobile} {
    background-size: 10%, 12%, 14%, 14%, 12%, 13%, 13%, 13%;
    background-position: 85% 0%, 95% 0%, 10% 15%, 80% 100%, 0% 0%, 90% 80%,
      20% 0%, 0% 80%;
  }
  @media ${device.desktop} {
    background-position: 85% 0%, 95% 0%, 10% 15%, 80% 60%, 0% 0%, 90% 80%,
      20% 0%, 0% 80%;
  }
`;
export const baloonAnimation = keyframes` 
  to { transform: translatey(150px);}
 `;
export const baloonContainer = keyframes`
  to { left: 101%}
 `;

export const baloonContainerBlue = keyframes`
  to { left: -5%}
 `;
export const StyledBaloonContainer = styled.div`
  position: absolute;
  top: 5%;
  left: -20%;
  width: 10%;
  animation: ${baloonContainer} 45s infinite linear;
`;
export const StyledBaloonContainerBlue = styled.div`
  position: absolute;
  bottom: 35%;
  left: 101%;
  width: 10%;
  animation: ${baloonContainerBlue} 45s 5s infinite linear;
`;
export const StyledBaloon = styled.img`
  position: absolute;
  animation: ${baloonAnimation} 8s alternate infinite ease-in-out;
  width: 100%;
`;
export const StyledBaloonBlue = styled.img`
  position: absolute;
  animation: ${baloonAnimation} 8s alternate infinite ease-in-out;
  width: 100%;
`;
