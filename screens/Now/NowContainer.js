import NowPresenter from "./NowPresenter";
import React from "react";
import { Api } from "../../api";

export default class extends React.Component {
  async componentDidMount() {
    try {
      const data = await Api.get("/");
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return <NowPresenter />;
  }
}
