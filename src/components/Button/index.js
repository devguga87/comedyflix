import styled from 'styled-components';

const Button = styled.button`
    color: #ff9000;
    border: 1px solid #ff9000;
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
    opacity: .5;
  }
`;

export default Button;
