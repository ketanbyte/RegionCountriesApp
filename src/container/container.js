import { connect } from "react-redux";
import App from "../Component/App";
import { getusers } from "../Action/Action";

const mapStateToProps = (state) => {

  return {
    users: state.region.getusers,
    error: state.region.error
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
      getusers: (region) => dispatch(getusers(region)),
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(App)