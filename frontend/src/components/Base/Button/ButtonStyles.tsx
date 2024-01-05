import styled, { css } from 'styled-components';

interface IStyledButtonProps {
  primary?: boolean;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${(props) => props.primary
    && css`
      background: #bf4f74;
      color: white;
    `}
`;
