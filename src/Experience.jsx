import React from "react";
import styled from "styled-components";
import {Body2, H2,H3} from "./common/ui/Headings";
import FlexBox from "./common/ui/FlexBox";

const Wrapper =styled(FlexBox)`
width:100%;
flex-direction:column;
background-color:blue;
justify-content:center;
align-items:center;
height:54.925rem;
padding-top:20px;
`;
const Experience=()=>{
    return(
<Wrapper>
        <H2 >Experience</H2>
        <FlexBox  align="center" justify="center">
        <H3>Employer:</H3>
        <Body2>Pamprazzi.co.ltd</Body2>
        </FlexBox>
        
        </Wrapper>
    )
}
export default Experience;