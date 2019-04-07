import React from "react";
import { Platform } from "react-native";
import OneMeal from "../../components/OneMeal";
import Loader from "../../components/Loader";
import styled from "styled-components";

const Container = styled.ScrollView`
  margin-top: 24px;
`;

const ContainerTitle = styled.Text`
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  background-color: #0097e6;
  padding: 10px 0 10px 0;
`;
const DayContainer = styled.View`
  border-color: #fdcb6e;
  border-width: 2px;
  border-radius: 10px;
  margin: 0 10px 17px 10px;
`;
const Title = styled.Text`
  text-align: center;
  font-size: 27px;
  font-weight: 600;
  margin-bottom: 10px;
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
const WeekPresenter = ({ data, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <ContainerTitle>
        {data.Monday.date + " ~ " + data.Sunday.date}
      </ContainerTitle>
      {/* <DayContainer>
         <Title>{data.Monday.date}</Title>
        <OneMeal name={pickname("moning", Platform.OS)} data={data.Monday.moning} />
        <OneMeal name={pickname("lunch", Platform.OS)} data={data.Monday.lunch} />
        <OneMeal name={pickname("dinner", Platform.OS)} data={data.Monday.dinner} /> 

      </DayContainer> */}
      {data &&
        Object.keys(data)
          .filter(d => {
            return typeof data[d] === "object";
          })
          .map(m => (
            <DayContainer key={m}>
              <Title>{data[m].date}</Title>
              <OneMeal
                name={pickname("moning", Platform.OS)}
                data={data[m].moning}
              />
              <OneMeal
                name={pickname("lunch", Platform.OS)}
                data={data[m].lunch}
              />
              <OneMeal
                name={pickname("dinner", Platform.OS)}
                data={data[m].dinner}
              />
            </DayContainer>
          ))}
    </Container>
  );

export default WeekPresenter;
