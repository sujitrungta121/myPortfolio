import React from "react";
import styled from "styled-components";
import FlexBox from "./common/ui/FlexBox";
import {H2} from "./common/ui/Headings"; 
const Wrapper=styled(FlexBox)`
width:100%;
flex-direction:column;
align-items:center;
row-gap:50px;
height:54.925rem;background-color:blue;
justify-content:center;
`;
const Form=styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
row-gap:50px;
`;
const Input=styled.input`
width:50%;
height:2rem;
border:1px solid black;
border-radius:1rem;
background-color:black;
color:white;
padding:1rem;
font-size:1rem;

`;
const TextArea=styled.input`
width:50%;
height:8rem;
border:1px solid black;
border-radius:1rem;
background-color:black;
color:white;
// padding:1rem;
font-size:1rem;
`;
const Button=styled.button`
width:50%;
background-color:#9400D3;
padding:1rem;
border-radius:1rem;
color:white;
font-size:20px;
border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

&:hover {
  background-color: red; /* Change the color on hover */
}
`;

const Contact = () => {
  const handleSubmit=()=>{
    alert("you have succuesfully submitted");
  }
  return (
  <Wrapper>
    <H2 bold >Please Fill the Below form for any query.</H2>
    <Form>
      <Input type="text" placeholder="Name"/>
      <Input type="email" placeholder="Email"/>
      <Input type="number" placeholder="Phone number"/>
      <TextArea type="text" placeholder="Put your query"/>
     <Button onClick={handleSubmit}>submit</Button>
    </Form>
  </Wrapper>
  )
};
export default Contact;
