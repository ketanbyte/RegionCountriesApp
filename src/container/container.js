import { connect } from "react-redux";
import App from "../App";
import { getusers } from "../Action/Action";

const mapStateToProps = (state) => {

  return {
    users: state.region.users,
    error: state.region.error
  };
};


const mapDispatchToProps = (dispatch) => ({
  fetch: (user) => dispatch(getusers(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);