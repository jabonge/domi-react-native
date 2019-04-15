import styled from "styled-components";
import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import TabIcon from "../components/TabIcon";

const Container = styled.View`
  margin: 60px 20px 20px 20px;
  /* border-width: 2px;
  border-radius: 10px;
  border-color: #1b1464; */
  justify-content: center;
`;
const TimeText = styled.Text`
  margin: 10px 15px 20px 10px;
  font-size: 38px;
  font-weight: 700;
  letter-spacing: 5px;
  text-align: center;
  color: black;
`;

const TimeTableContainer = styled.View`
  margin: 5px 10px 10px 10px;
  border-width: 2px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-color: #0652dd;
`;
const Row = styled.View`
  flex-direction: row;
  border-bottom-width: 2px;
  border-bottom-color: black;
  align-items: center;
`;
const IconContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin: 5px 0px 5px 15px;
`;
const IconTitle = styled.Text`
  font-size: 24px;
  margin-right: 3px;
`;
const TimeContainer = styled.Text`
  flex: 4;
  font-size: 30px;
  text-align: center;
  font-weight: 600;
`;

const ButtonContainer = styled.View`
  justify-content: center;

  margin-top: 60px;
`;

const Button = styled.Text`
  text-align: center;
  font-size: 26px;
  font-weight: 600;
  background-color: #a3cb38;
  padding: 10px 5px 10px 5px;
  margin: 0px 15px 0px 15px;
`;

const MainScreen = ({ navigation }) => {
  return (
    <Container>
      <TimeText>Time Table</TimeText>
      <TimeTableContainer>
        <Row>
          <IconContainer>
            <TabIcon
              name={Platform.OS === "ios" ? "ios-stopwatch" : "md-stopwatch"}
              size={56}
            />
            <IconTitle>아침</IconTitle>
          </IconContainer>
          <TimeContainer>7:30 ~ 9:20</TimeContainer>
        </Row>
        <Row>
          <IconContainer>
            <TabIcon
              name={Platform.OS === "ios" ? "ios-sunny" : "md-sunny"}
              size={56}
            />
            <IconTitle>점심</IconTitle>
          </IconContainer>
          <TimeContainer>11:30 ~ 13:30</TimeContainer>
        </Row>
        <Row>
          <IconContainer>
            <TabIcon
              name={Platform.OS === "ios" ? "ios-moon" : "md-moon"}
              size={56}
            />
            <IconTitle>저녁</IconTitle>
          </IconContainer>
          <TimeContainer>17:30 ~ 19:30</TimeContainer>
        </Row>
      </TimeTableContainer>
      <ButtonContainer>
        <TouchableOpacity
          onPressIn={() => navigation.navigate({ routeName: "Tabs" })}
        >
          <Button>식단표 보러가기</Button>
        </TouchableOpacity>
      </ButtonContainer>
    </Container>
  );
};

export default withNavigation(MainScreen);
