import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Verdana;
  letter-spacing: -0.08em;
  font-size: 50px;
  position: absolute;
  top: 5%;
  left: 5%;
  z-index: 1000;
`;

export default function Spot ({ name }) {
  return (<Container>
    {name}
  </Container>);
}
