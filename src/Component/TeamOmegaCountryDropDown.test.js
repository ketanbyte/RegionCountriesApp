import { checkProps, findTestByAttr } from "./App.Mock"
import { mount, shallow } from 'enzyme'
import store from '../Store/store';
import CountryDropDown from './TeamOmegaCountryDropDown'

let wrapper = (props = {}) => shallow(<CountryDropDown {...props} store={store} />).childAt(0).dive();


describe("TeamOmegaDropdown2", () => {

     let component, props;

     describe("TeamOmegaDropDown2 Component", () => {

          beforeEach(() => {

               component = wrapper(props)
          });

          it('render data', () => {
               expect(findTestByAttr(component, 'TeamOmegaCountryDropDown').exists()).toEqual(true);
            
          })
        
     });
})
