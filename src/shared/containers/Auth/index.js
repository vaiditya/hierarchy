import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { auth } from "./../../store";

function Auth(Component) {
  return <Component />;
}

const mapDispatchToProps = {
  auth
};

export default compose(
  connect(
    auth,
    mapDispatchToProps
  ),
  Auth
);
