import App from './App';
import { shallow } from 'enzyme';
import MainFile from './MainFile';


const setUp = shallow(<App />);

describe('App-test', () => {
  let component, wrapper;
  beforeAll(() => {
    component = setUp;
  });

  describe('Render All data', () => {

    it("Should render without errors", () => {
      let wrapper = component.find(`[data-test="App"]`);
      expect(wrapper.length).toBe(1);
    });

  });

  describe('Main Component', () => {
    beforeEach(() => {
      wrapper = component.find(MainFile)

    })
    it('APP should contain All Data', () => {
      expect(wrapper.exists()).toEqual(true);
    });
  });
});

