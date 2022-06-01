import React from 'react';
import { shallow } from 'enzyme';
import HeaderFile from './TeamOmegaHeader'
import { checkProps, findTestByAttr } from './App.Mock';
import "./Dropdown.css";
import "../App.css";

const setUp = shallow(<HeaderFile />);

describe('TeamOmegaHeader Component', () => {

    let component;

    describe(`type h1`, () => {
        beforeEach(() => {
            component = setUp;
        });

        it('render data', () => expect(findTestByAttr(component, 'TeamOmegaHeader').exists()).toEqual(true));
    });

    describe("TeamOmega Header",()=>{

        it("checking proptype", () => {
            const expectedProps = {
            
              className: "",
              text:"",              
            }
            const propsError = checkProps(HeaderFile, expectedProps);
            expect(propsError).toBeUndefined();
          })
    })
});