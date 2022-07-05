import App from '../src/Component/App';
import { shallow } from 'enzyme';

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

  });

