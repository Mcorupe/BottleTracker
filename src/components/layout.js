import React from "react";
import PropTypes from "prop-types";
import { withFirebase } from "../components/withFirebase";
import { FirebaseContext } from "gatsby-plugin-firebase";
import useDarkMode from "use-dark-mode";
import "../css/style.scss";
import Header from "./header";


function Layout(props) {
  const { children, firebase, location } = props;
  const Firebase = React.useContext(FirebaseContext);

  return (
    <FirebaseContext.Provider firebase={Firebase}>
      <div className="flex flex-col font-sans min-h-screen text-gray-900">
        <Header firebase={firebase} location={location} className="background" />
        <main
          className={
            "flex flex-col flex-1 md:justify-center max-w-4xl mx-auto px-4 py-8 md:p-8 w-full"
          }
        >
          {children}
          <br />
        </main>
        <footer className="bg-teal-700">
          <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
            <p className="text-white">
              Created by{" "}
              <a
                className="font-bold no-underline text-white"
                title={"Why hello there"}
              >
                Kevin and Mark
              </a>
            </p>

            <p>
              <a
                className="font-bold no-underline text-white"
                href="https://github.com/Mcorupe/BottleTracker"
                title={"Our repo for this project"}
              >
                GitHub
              </a>
            </p>
          </nav>
        </footer>
      </div>
    </FirebaseContext.Provider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default withFirebase(Layout);
