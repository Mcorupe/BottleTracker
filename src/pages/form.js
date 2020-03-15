import React from "react";
import { withFirebase } from "../components/withFirebase";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Form from "../components/Form";
import Table from "../components/table";
import "../css/style.scss";

//class component because table was being a bitch when it came to firebase
class FormPage extends React.Component {
  render() {
    const { firebase, location } = this.props;
    return (
      <Layout location={location}>
        <SEO
          keywords={["gatsby", "tailwind", "react", "tailwindcss", "home"]}
          title="Home"
        />
        <Form />
        <br />
        {firebase && <Table firebase={firebase} />}
      </Layout>
    );
  }
}

export default withFirebase(FormPage);
