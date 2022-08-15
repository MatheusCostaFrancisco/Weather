import React, { InputHTMLAttributes } from "react";
import { Wrapper, SearchInput, IconWrapper } from "./styles";
import { Search } from "@material-ui/icons";

export interface InputProps
  extends React.InputHTMLAttributes<InputHTMLAttributes> {
  showIcon?: boolean;
  onSubmittFunction: () => void;
}

export function Input({ onSubmittFunction, showIcon }: InputProps) {
  return (
    <Wrapper>
      {showIcon && (
        <IconWrapper>
          <Search />
        </IconWrapper>
      )}

      <SearchInput onSubmit={onSubmittFunction} />
    </Wrapper>
  );
}
