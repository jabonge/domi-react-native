import React from "react";
import { Platform } from "react-native";
import OneMeal from "../../components/OneMeal";
import Loader from "../../components/Loader";
import styled from "styled-components";

const Title = styled.Text`
  text-align: center;
  font-size: 27px;
  font-weight: 600;
  background-color: #0097e6;

  margin: 24px 20px 0px 20px;
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
const NowPresenter = ({ name, data, loading, date }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <Title>{date}</Title>
      <OneMeal name={pickname(name, Platform.OS)} data={data} />
    </>
  );

export default NowPresenter;
