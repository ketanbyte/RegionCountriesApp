import React from "react";
import CountryDropDown from './TeamOmegaCountryDropDown';
import RegionDropDown from './TeamOmegaDropDown';
import HeaderFile from "./TeamOmegaHeader";
import { connect } from "react-redux";
import { getusers } from "../Action/Action";
import "../App.css";


class User extends React.Component {

    constructor(){
        super();
        this.state={
            region:"Africa"
        }
    }

    componentDidMount() {
        this.props.getusers(this.state.region)
        
    }
 
    changeRegion = (region) => {
        this.props.getusers(region)
       
    }  //fun para
    
    render() {
      
        return (
            <main data-test="Main">
               
                <div>

                    <HeaderFile className="h" text="Assesment 003 -- redux"/>
                </div>
<br></br>

                <div id="w">
                   
                    <label className="l1">Region:</label>
                        <RegionDropDown Regionchange={this.changeRegion} />
                        </div>
                        <div id="w">
                         <label className="l1">Countries:</label>

                        <CountryDropDown />
                   
                </div>
    
            </main>
        );
    }
};


const mapStateToProps = (state) => ({
    country: state.users,
    error:state.error
});

   


export default connect(mapStateToProps,{getusers})(User);

