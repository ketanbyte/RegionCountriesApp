import React from "react";
import { getusers } from "../Action/Action";
import { connect } from "react-redux";
import "./Dropdown.css";

class CountryDropDown extends React.Component {
    dropdownhandler=(e)=>{ return;}
    render() {
        const { country, error } = this.props

        return (
            <div data-test="TeamOmegaCountryDropDown" >
                {
                    error!== "" && alert("Error 404",error)
                }{
                 country.length > 0 &&
                 <select id="w">
                 {
                     country.map(val => {
                         return (<option key={val.name.official}>{val.name.common}</option>)})
                 }
             </select>
                }
               
            </div>
        );
    }
};



const mapStateToProps = (state) => ({
    country: state.users.country,
    error: state.users.error
});



export default connect(mapStateToProps, { getusers })(CountryDropDown);