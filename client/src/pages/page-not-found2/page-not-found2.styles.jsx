import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageNotFoundOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PageNotFoundImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover ;
  background-position: center;
  width: 40vh;
  height: 40vh;

  @media screen and (max-width: 800px) {
    background-size: cover;
    width: 20vh;
    height: 20vh;
  }

`;

export const PageNotFoundImageText = styled.h2`
  font-size: 28px;
  color: #2f8e89;

  @media screen and (max-width: 800px) {
    font-size: 18px;
`;

export const PageNotFoundHomeLink = styled(Link)`
  text-decoration: underline;
  cursor: pointer;
`;
