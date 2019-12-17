import React, { useState } from "react";
import { withFirebase } from "../components/withFirebase";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { navigate } from "gatsby";

const IndexPage = props => (
  <Layout>
    {props.firebase && props.firebase.auth().currentUser
      ? navigate("/form")
      : navigate("/signup")}
  </Layout>
);

export default withFirebase(IndexPage);
