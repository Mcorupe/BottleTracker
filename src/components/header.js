import { graphql, useStaticQuery, Link, navigate } from "gatsby";
import React, { useState } from "react";

const Header = props => {
  const { firebase, location } = props;
  const [isExpanded, toggleExpansion] = useState(false);
  //logout func
  const logOut = () =>
    firebase
      .auth()
      .signOut()
      .then(() => {
        //if successful, remove localstorage user and redirect to index page
        localStorage.removeItem("user");
        navigate("/");
      })
      .catch(error => {
        console.log("failure", error);
        // An error happened
      });
  //grab the site name from gatsby-config.js
  const { site } = useStaticQuery(query);
  return (
    <header className="bg-teal-700">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
        <Link
          className="flex items-center no-underline text-white"
          to="/"
          state={{ prevPath: location && location.pathname }}
        >
          <svg
            className="fill-current h-8 mr-2 w-8"
            height="54"
            viewBox="0 0 54 54"
            width="54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-bold text-xl tracking-tight">
            {site.siteMetadata.title}
          </span>
        </Link>
        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <nav
          className={`${
            isExpanded ? "block" : "hidden"
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            { route: "/form", title: "Form" },
            { route: "/login", title: "Login" },
            { route: "/signup", title: "Signup" },
            { route: "/logout", title: "Log Out" }
          ].map(link => {
            //if localstorage exists
            if (typeof window !== "undefined") {
              //if the user is logged in
              if (localStorage.getItem("user")) {
                //dont show the login and signup route
                if (link.route === "/login" || link.route === "/signup") {
                  return null;
                }
                //other the user is not logged in
              } else {
                //and we shouldn't show the form or logout link
                if (link.route === "/form" || link.route === "/logout") {
                  return null;
                }
              }
            }
            //custome a link for logout func
            if (link.route === "/logout") {
              return (
                <a
                  className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-white"
                  href={"#"}
                  key={link.title}
                  onClick={logOut}
                >
                  Log out
                </a>
              );
            }
            //return a gatsby link otherwise.
            return (
              <Link
                className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-white"
                key={link.title}
                to={link.route}
              >
                {link.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Header;
