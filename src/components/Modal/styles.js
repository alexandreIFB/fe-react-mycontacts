import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background: #FFF;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 24px;
  max-width: 450px ;
  width: 100%;

  h1{
    font-size: 22px;
    color: ${({ danger, theme }) => (
    danger ? theme.colors.danger.main : theme.colors.gray[900]
  )};
  }
  p {
    margin-top: 8px;
    font-size: 16px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .button-cancel {
    background: none;
    border: none;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.gray[200]};
    margin-right: 8px;
  }
`;
