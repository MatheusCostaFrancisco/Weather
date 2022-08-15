import styled from "styled-components";

export interface ColorProps {
  upperColor: string;
  lowerColor: string;
}

export const BackgroundArea = styled.div<ColorProps>`
  flex: 1;
  width: 100vw;
  padding: 0;
  margin: 0;

  background: ${(props) => props.upperColor};
  background: -webkit-linear-gradient(
    to bottom,
    ${(props) => props.upperColor},
    ${(props) => props.lowerColor}
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    ${(props) => props.upperColor},
    ${(props) => props.lowerColor}
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const ImageContainer = styled.img`
  width: 100vw;
  flex: 1;
  padding: 0;
  margin: 0;
`;
