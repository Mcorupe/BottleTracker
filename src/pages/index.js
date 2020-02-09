import React from "react";
import { withFirebase } from "../components/withFirebase";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { navigate } from "gatsby";

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  componentWillUnmount() {
    //reset state when unmounting component
    this.setState({ loading: true });
  }
  //only works when clicking on '/' link twice
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.location.state &&
      this.props.location.state.prevPath !== "/" &&
      localStorage.getItem("key")
    ) {
      navigate("/form");
    }
    if (
      this.state.loading &&
      this.props.firebase &&
      !localStorage.getItem("key")
    ) {
      this.isUserLoggedIn();
    }
  }
  isUserLoggedIn = () => {
    const { firebase } = this.props;
    //check for firebase
    firebase &&
      //if firebase exists, check if auth has been changed
      firebase.auth().onAuthStateChanged(user => {
        //if a user was returned
        if (user) {
          //store the user in localstorage
          localStorage.setItem("user", JSON.stringify(user));
          //stop loading
          this.setState({ loading: false });
          //redirect to the form page
          return navigate("/form");
        } else {
          // No user is signed in so back to the login page
          return navigate("/login");
        }
      });
  };
  render() {
    const { location } = this.props;
    const { loading } = this.state;
    return (
      <Layout location={location}>
        <SEO
          keywords={[
            "gatsby",
            "tailwind",
            "react",
            "tailwindcss",
            "inex",
            "BottleTracker"
          ]}
          title={"Login"}
        />
        {/* if we are not loading, show null. Otherwise show the spinner */}
        {!loading ? null : (
          <div className="container">
            <div className="spinner"></div>
            <br />
          </div>
        )}
      </Layout>
    );
  }
}

export default withFirebase(IndexPage);
