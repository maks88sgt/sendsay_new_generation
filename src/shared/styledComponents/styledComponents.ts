import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 40px;
  width: 110px;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  background:  linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4;
  cursor: pointer;
`;

export const StyledLoginFailureComponent = styled.div`
  height: 70px;
  margin-top: 20px;
  border-radius: 5px;
  color: red;
  font-size: 18px;
  padding-left: 18px;
  background:  rgba(207, 44, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
  
`;