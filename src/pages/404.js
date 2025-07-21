import React from "react";
// import firebase from "gatsby-plugin-firebase"
// import { withFirebase } from "../components/withFirebase";

import Seo from "../components/seo";
import Layout from "../components/layout";
import abductionIllustration from "../images/abduction-illustration.svg";

function NotFoundPage() {
  return (
    <Layout>
      <Seo title="404: Not found" />
      <div>
        <img
          alt="Ghost getting abducted by aliens"
          className="block mx-auto w-1/2"
          src={abductionIllustration}
        />
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Looks like this page is a ghost that got abducted by aliens...
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
// export default withFirebase(NotFoundPage);
