import { shallow, mount, render } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../client/Components/App';
import Intro from '../client/Components/Intro/Intro';
import Navbar from '../client/Components/Navbar/Navbar';
import Modal from '../client/Components/Modals/Modal';
import ShareModal from '../client/Components/Modals/Share/ShareModal';
import SigninModal from '../client/Components/Modals/Signin/SigninModal';

describe('Testing the App Component', () => {

   it('renders the App component', ()=> {
      expect(shallow(<App />).length).toEqual(1)
   });

   it('should grab a snapshot of the component', ()=> {
		const component = renderer.create(<App />)
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
   });
   
});
