import styled from "vue-styled-components";
import { PHONE, TABLET } from "../../styles/queries";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  position: relative;
  top: 3rem;

  ${PHONE} {
    width: 17rem;
  }
  ${TABLET} {
    width: 35rem;
  }

  width: 45rem;
  margin: 0 auto;
`;

export const InputUserURL = styled.input`
  font-size: 2rem;
  padding: 0.8rem 1rem;
  width: 100%;
  background: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.primary};
  border-radius: 10px;

  &::placeholder {
    color: ${({ theme }) => theme.secondary};
  }

  &:hover {
    border: 2px solid ${({ theme }) => theme.navyBlue};
  }

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.secondary};
    box-shadow: 0px 0px 2px 3px ${({ theme }) => theme.secondary};
  }
`;

export const UrlResults = styled.div`
  position: relative;
  top: 96px;
  display: flex;
  justify-content: center;

  span {
    margin: 4px;
  }
`;

export const Button = styled.button`
  border-radius: 30px;
  padding: 0.9rem 1rem;
  border: 2px solid ${({ theme }) => theme.primary};
  position: absolute;
  top: 9px;
  right: 0px;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.secondary};
    box-shadow: 0px 0px 2px 3px ${({ theme }) => theme.secondary};
  }
`;
