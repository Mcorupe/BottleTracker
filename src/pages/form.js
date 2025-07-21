import React from "react";
// import { withFirebase } from "../components/withFirebase";

import Seo from "../components/seo";
import Form from "../components/Form";
import Table from "../components/table";
import Layout from "../components/layout";

import "../css/style.scss";

//class component because table was being a bitch when it came to firebase
class FormPage extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <Layout location={location}>
        <Seo
          keywords={["gatsby", "tailwind", "react", "tailwindcss", "home"]}
          title="Home"
        />
        <Form />
        <br />
        <Table />
      </Layout>
    );
  }
}

export default FormPage;
// export default withFirebase(FormPage);
