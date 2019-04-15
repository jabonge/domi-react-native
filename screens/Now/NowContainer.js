import NowPresenter from "./NowPresenter";
import React from "react";
import { Api } from "../../api";
import { now_data } from "../../time";

export default class extends React.Component {
  state = {
    loading: true,
    data: ["", "", ""]
  };
  async componentDidMount() {
    try {
      const { data } = await Api.get("/");
      let data1 = now_data(data);
      this.setState({ data: data1, loading: false });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { loading, data } = this.state;

    return (
      <NowPresenter
        data={data[0]}
        name={data[1]}
        date={data[2]}
        loading={loading}
      />
    );
  }
}
