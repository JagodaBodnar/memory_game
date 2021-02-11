import sun from "../../assets/images/sunny.svg";
import { device } from "../../globalStyles/device";
import styled from "styled-components";

export const StyledMovesNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  width: 200px;
  height: 200px;
  top: -38px;
  left: 50%;
  font-size: 50px;
  color: #fff;
  z-index: 10;
  background-image: url(${sun});
  background-position: center;
  background-repeat: no-repeat;
  font-family: "Sigmar One", cursive;
  @media ${device.mobile} {
    left: 50%;
    width: 200px;
    height: 200px;
  }
  @media ${device.tablet} {
    left: 80%;
  }
`;

export const StyledGameContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0;
  margin: 0 auto;
  position: absolute;
  top: 20%;
  left: 10%;
  z-index: 1;
  background-color: #fe587e;
  padding: 20px;
  border-radius: 5px;
  @media ${device.mobile} {
    left: 10%;
    top: 20%;
  }
  @media ${device.tablet} {
    top: 10%;
    left: 10%;
  }
  @media ${device.laptop} {
    left: 20%;
  }
  @media ${device.desktop} {
    left: 30%;
  }
`;

export const StyledCard = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  cursor: pointer;
  background-image: ${({ showImg, item }) => (showImg ? `url(${item})` : ``)};
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 60% 60%;
  border: none;
  outline: none;
  border-radius: 5px;
  @media ${device.mobile} {
    width: 100px;
    height: 100px;
  }
  @media ${device.tablet} {
    width: 150px;
    height: 150px;
  }
`;

export const StyledStartButton = styled.button`
  cursor: pointer;
  height: 70px;
  width: 200px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  background-color: transparent;
  text-transform: uppercase;
  margin: 0 auto;
  letter-spacing: 3px;
  font-family: "Sigmar One", cursive;
  position: absolute;
  z-index: 99;
  left: 10%;
  bottom: 20%;
  &:hover {
    color: #fe587e;
  }
  @media ${device.mobile} {
    left: 10%;
    bottom: 25%;
  }
  @media ${device.tablet} {
    left: 8%;
    bottom: 15%;
  }
  @media ${device.laptop} {
    left: 20%;
    bottom: 15%;
  }
  @media ${device.desktop} {
    left: 30%;
    bottom: 15%;
  }
`;
export const StyledEndGameContainer = styled.div`
  width: 80%;
  margin: 250px auto;
  font-size: 30px;
  color: #ffdb2d;
  padding-top: 0px;
  @media ${device.mobile} {
    padding-top: 0px;
    font-size: 30px;
    width: 60%;
  }
  @media ${device.tablet} {
    font-size: 40px;
  }
  @media ${device.laptop} {
    font-size: 40px;
  }
  @media ${device.desktop} {
    width: 40%;
    font-size: 50px;
  }
`;
