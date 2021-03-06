import styled, { css } from 'styled-components';

export const Input = styled.input`
  padding: 0 16px;
  height: 52px;
  font-size: 16px;
  width: 100%;
  border: 2px solid #fff;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  outline: 0;
  transition: border-color 0.15s ease-in;
  appearance: none;

  &::placeholder {
    color: #BCBCBC;
  }
  &:focus{
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  &[disabled]{
    background: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[200]};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}
`;
