import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 1px 
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 0px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  margin-right:-5px;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .7;
    border: 2px solid;
    border-radius: 10px;
  }
  
  &:not(:first-child) {
    margin-left: 0px;
  }
`;
