import { ReactNode } from "react";
import { BackgroundArea, ImageContainer } from "./styles";

export interface ColorProps {
  upperColor: string;
  lowerColor: string;
}

export interface BackgroundProps {
  children: ReactNode;
  image?: string;
  color?: ColorProps;
}

export function Background({ children, color, image }: BackgroundProps) {
  return (
    <BackgroundArea
      upperColor={color?.upperColor || "transparent"}
      lowerColor={color?.lowerColor || "transparent"}
    >
      {image && <ImageContainer src={image} />}
      {children}
    </BackgroundArea>
  );
}
