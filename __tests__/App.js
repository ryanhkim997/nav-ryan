import { shallow, mount, render } from 'enzyme';
import React from 'react';
import App from '../client/Components/App';

it('expect to render App component', ()=> {
	expect(shallow(<App />).length).toEqual(1)
})