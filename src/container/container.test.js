// import store from '../store/Store';
// import { connect } from 'react-redux';

// describe('redux-enzyme', () => {
//     const ReactComponent = () => <div>dummy component</div>;
  
//     describe('shallowWithStore', () => {
//       it('passes prop from mapStateToProps', () => {
//         const expectedState = 'expectedState';
//         const mapStateToProps = state => ({
//           state,
//         });
   
//       });
//     });
// });

import { shallow } from "enzyme";
import Container from './Container'
import store from '../Store/store';

import configureMockStore from 'redux-mock-store';
const testStore = configureMockStore();

describe('test', ()=>{ 
    test('hallowWithStor', ()=>{
        const shallowWithStore = (component, store)=>{
            const context = {store}
            return shallow(component, {context})
        };
        const initialState = {
            // loading: false,
            // users: [],
            // error: '',   
        }
       
        const container = shallowWithStore(<Container store={store}/>);
        expect(typeof(container)).toBe('object')
       
    })

    test('mapDispatchToProps', ()=>{
        const region = 'Africa' 
        const initialState = {
            reducer: {
            loading: false,
            users: undefined,
            error: '',
            }           
        }
        
        const getusers = [
            {type: 'GET_USERS'}
        ]
        const store = testStore(initialState);
        const wrapper = shallow(<Container store={store} />);
        const actions = store.getActions();
         expect(actions).toEqual([]);
    }) 

})