import React from "react";
import styled from "styled-components";
import TabIcon from "./TabIcon";
import { BG_COLOR } from "../constants/Color";

const Container = styled.View`
  flex-direction: row;
  margin: 30px 20px 30px 20px;
  border-radius: 10px;
  border-width: 2px;
`;
const ImageColumn = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-right-color: red;
  border-right-width: 2px;
`;
const TextColumn = styled.View`
  flex: 4;
`;
const Row = styled.Text`
  text-align: center;
  font-size: 23px;
  font-weight: 300;
  color: ${BG_COLOR};
  border-bottom-color: black;
  border-bottom-width: 2px;
`;

const OneMeal = ({ name, data }) => (
  <Container>
    <ImageColumn>
      <TabIcon name={name} />
    </ImageColumn>
    <TextColumn>
      {data.map(food => (
        <Row key={food}>{food}</Row>
      ))}
    </TextColumn>
  </Container>
);

export default OneMeal;
