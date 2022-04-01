import styled, { css } from "styled-components";

const COLORS = {
  type1: css`
    --button-bg-color: #23518C;
    /* --button-hover-bg-color: #23518C; */
  `,
  type2: css`
    --button-bg-color: #5f94d9;
    /* --button-hover-bg-color: #23518C; */
  `
}

const SIZES = {
  sm: css`
    --button-radius: 10px;
    --button-width: 70px;
    --button-height: 25px;
    --button-font-size: 0.8rem;
    /* --button-font-size: 0.875rem; */
    /* --button-padding: 8px 12px; */
  `,
  md: css`
    --button-radius: 10px;
    --button-width: 120px;
    --button-height: 30px;
    --button-font-size: 1.0rem;
    /* --button-font-size: 0.875rem; */
    /* --button-padding: 8px 12px; */
  `,
  lg: css`
    --button-radius: 10px;
    --button-width: 150px;
    --button-height: 35px;
    --button-font-size: 1.2rem;
    /* --button-font-size: 0.875rem; */
    /* --button-padding: 8px 12px; */
  `
};



function Button({ size, color, children }) {
  const sizeStyle = SIZES[size];
  const colorStyle = COLORS[color];

  return (
    <StyledButton
      sizeStyle={sizeStyle}
      colorStyle={colorStyle}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${(p) => p.sizeStyle}
  ${(p) => p.colorStyle}

  margin: 0;
  border: none;
  cursor: pointer;
  font-size: var(--button-font-size);
  border-radius: var(--button-radius);
  color: var(--button-color, #f1f0f2);
  background: var(--button-bg-color, #0d6efd);
  width: var(--button-width);
  height: var(--button-height);

  &:active,
  &:hover {
    background: var(--button-hover-bg-color, #23518C);
  }
`;

export default Button;
