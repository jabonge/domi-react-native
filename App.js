import React from "react";
import MainNavigation from "./navigation/MainNavigation";
import { AppLoading, Font, SplashScreen } from "expo";
import { Ionicons } from "@expo/vector-icons";

export default class App extends React.Component {
  state = {
    loaded: false
  };

  handleError = error => console.log(error);

  handleLoaded = () => this.setState({ loaded: true });

  loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
  };
  render() {
    // const { loaded } = this.state;
    // if (loaded) {
    //   return <MainNavigation />;
    // } else {
    //   return (
    //     <AppLoading
    //       startAsync={this.loadAssets}
    //       onFinish={this.handleLoaded}
    //       onError={this.handleError}
    //     />
    //   );
    // }
    return <MainNavigation />;
  }
}
