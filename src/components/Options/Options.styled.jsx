import styled from 'styled-components';

export const FeedbackOptionsUi = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const FeedbackButton = styled.button`
  width: 100px;
  height: 40px;

  border: 2px solid rgb(34, 176, 171);
  border-radius: 10px;

  background-color: rgb(4, 66, 73);

  font-weight: 900;
  color: rgb(248, 249, 250);
  text-shadow: 1px 1px 5px rgb(4, 74, 90);
  letter-spacing: 3px;

  &:hover {
    box-shadow: inset -1px -1px 3px 1px rgb(121, 222, 242);
  }
`;
