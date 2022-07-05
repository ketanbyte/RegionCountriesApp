import { checkProps, findTestByAttr } from './App.Mock';
import { shallow } from 'enzyme'
import RegionData from './TeamOmegaDropDown'
import sinon from 'sinon';

let wrapper = (props = {}) => shallow(<RegionData {...props} />);

let event = { target: { value: "" } };


describe("RegionDropDown ", () => {
  let component, mockFunc;

  describe("regionDropDown Component", () => {

    beforeEach(() => {

      mockFunc = sinon.spy();

      let props = { Regionchange: mockFunc }

      component = wrapper(props);

    });

    it('render data', () =>

      expect(findTestByAttr(component, 'TeamOmegaDropDown').exists()).toEqual(true));

    it('should render select tag', () =>

      expect(component.find('select').length).toBe(1));


    it("selects diffrent dropdown passes value to changeSelect prop", () => {

      component.find('select').simulate('change', event);

      expect(mockFunc.calledOnce).toEqual(true);

      expect(mockFunc.calledWith(event.target.value)).toEqual(true);

    })

    describe("TeamOmega Header", () => {

      it("checking proptype", () => {
        const expectedProps = {

          Regionchange: () => { }

        }
        const propsError = checkProps(RegionData, expectedProps);
      
      })
    })

  });



})