import React from "react"

import * as S from "./styles"

export interface IButton extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes {}

export const PrimaryButton: React.FC<IButton> = ({
    children,
    ...rest
  }) => {
    return (
      <S.Button>
        <button {...rest}>{children}</button>
      </S.Button>
    );
  };