import TodayPresenter from "./TodayPresenter";
import React from "react";
import { Api } from "../../api";
import { today_data } from "../../time";

export default class extends React.Component {
  state = {
    loading: true,
    data: []
  };
  async componentDidMount() {
    try {
      const { data } = await Api.get("/");

      let data1 = today_data(data);
      this.setState({ data: data1, loading: false });
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    const { loading, data } = this.state;

    return <TodayPresenter data={data} loading={loading} />;
  }
}
