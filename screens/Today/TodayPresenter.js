import React from "react";
import { Platform } from "react-native";
import OneMeal from "../../components/OneMeal";
import Loader from "../../components/Loader";
import styled from "styled-components";

const Container = styled.ScrollView`
  margin-top: 24px;
`;
const Title = styled.Text`
  text-align: center;
  font-size: 27px;
  font-weight: 600;
  background-color: #0097e6;
`;

const pickname = (name, os) => {
  if (name === "moning") {
    if (os === "ios") {
      return "ios-stopwatch";
    } else {
      return "md-stopwatch";
    }
  } else if (name === "lunch") {
    if (os === "ios") {
      return "ios-sunny";
    } else {
      return "md-sunny";
    }
  } else {
    if (os === "ios") {
      return "ios-moon";
    } else {
      return "md-moon";
    }
  }
};
const TodayPresenter = ({ data, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Title>{data.date}</Title>
      <OneMeal name={pickname("moning", Platform.OS)} data={data.moning} />
      <OneMeal name={pickname("lunch", Platform.OS)} data={data.lunch} />
      <OneMeal name={pickname("dinner", Platform.OS)} data={data.dinner} />
    </Container>
  );

export default TodayPresenter;
