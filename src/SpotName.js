import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: "Source Sans Pro";
  font-size: 15px;
  position: absolute;
  top: 5%;
  left: 5%;
  z-index: 1000;
`;

export default function Spot ({ name }) {
  return (<Container>
    Webcam: {name}
  </Container>);
}
