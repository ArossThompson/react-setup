import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('It renders a div without errors', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('#main-div').length).toBe(1);
})

