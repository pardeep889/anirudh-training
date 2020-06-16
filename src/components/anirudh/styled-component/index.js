import React from "react";
import styled from 'styled-components';

const StyledView = styled.span`
  background: ${props => props.primary ? "palevioletred" : "white"};
  .primary {
    padding: 5px
  }
`

const StyledText = styled.span`
  color: palevioletred;
`

class MyReactNativeComponent extends React.Component {
  render() {
      // cal 
    return (
      <StyledView primary>
          <div className="primary"> I am in div</div>
        <StyledText>Hello World!</StyledText>
      </StyledView>
    )
  }
}

export default MyReactNativeComponent;