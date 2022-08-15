import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  width: 200px;
  height: 54px;
  margin: auto;

  border-color: whitesmoke;
  border-width: 1px;
  border-radius: 5px;

  :hover {
    background-color: "#a3a4a5";
    border-color: white;
  }

  :focus {
    background-color: "#a3a4a5";
    border-width: 1.5px;
  }
`;

export const SearchInput = styled.input`
  display: flex;
  flex: 0.9;
  font-family: "Lato";
  font-size: 16px;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex: 0.1;
`;
