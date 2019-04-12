import WeekPresenter from "./WeekPresenter";
import React from "react";
import { Api } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    data: []
  };
  async componentDidMount() {
    try {
      const { data } = await Api.get("/");

      this.setState({ data, loading: false });
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    const { loading, data } = this.state;

    return <WeekPresenter data={data} loading={loading} />;
  }
}
