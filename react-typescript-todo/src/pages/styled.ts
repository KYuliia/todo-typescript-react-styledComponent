import styled from 'styled-components';

export const Button = styled.div`
 width: 150px;
 height: 50px;
 background-color: #009688;
 border: 2px solid #009688 ;
 border-radius: 15px;
 color: #ffffff;
 display: flex;
 align-items: center;
 justify-content: center;
 box-shadow: 0 0 5px rgba(0,0,0,0.3);
 font-size: 20px;

 :hover{
    background-color: #4db6ac;
    border: 2px solid #4db6ac;
    color: #ffffff;
    cursor: pointer;
 }
`;