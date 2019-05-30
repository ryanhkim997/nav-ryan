import { shallow, mount, render } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import axios from 'axios';
import App from '../client/Components/App';
import Intro from '../client/Components/Intro/Intro';
import About from '../client/Components/About/About';
import Navbar from '../client/Components/Navbar/Navbar';
import Modal from '../client/Components/Modals/Modal';
import ShareModal from '../client/Components/Modals/Share/ShareModal';
import SigninModal from '../client/Components/Modals/Signin/SigninModal';

jest.mock('axios');

const testRestaurant = { 
  id: 1000,
  name: 'Test Restaurant',
  address: { 
    line1: '123 Test St',
    line2: 'Testing, CA 90000',
    milesAway: 1.0 
  },
  phone: '(123) 456-7890',
  ratings: { 
    number: 100, 
    stars: 4.5, 
    good: 90, 
    timely: 90, 
    correct: 90,
    sampleReview: {
      name: "John Doe",
      review: "I am a test review."
    }  
  },
  schedule: {
    monFri: { delivery: 'test', pickup: 'test' },
    satSun: { delivery: 'test', pickup: 'test' }
  },
  image: 'https://images.unsplash.com/photo-1536875489903-655d152ed785?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80',
  priceRange: 3,
  categories: [ 'Test' ] 
}

describe('Testing the App Component', () => {

  it('renders the App component', ()=> {
    expect(shallow(<App />).length).toEqual(1)
  });

  // it('should grab a snapshot of the component', ()=> {
  //   const component = renderer.create(<App />)
  //   let tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });

  it('should return a single-node wrapper.', ()=> {
		expect(shallow(<App />).length).toEqual(1)
	})
   
});

describe('Testing the Navbar Component', () => {

  it('should return a single-node wrapper.', ()=> {
		expect(shallow(<Navbar />).length).toEqual(1)
  });
   
});

describe('Testing the Intro Component', () => {

  it('should fetch restaurant when rendered', ()=> {
    const getSpy = jest.spyOn(axios, 'get');
    const introInstance = shallow(
      <Intro />
    );
    expect(getSpy).toBeCalled();
  });

  it('should return a single-node wrapper.', ()=> {
		expect(shallow(<Intro />).length).toEqual(1)
  });
   
});

describe('Testing the About Component', () => {

  it('should fetch restaurant when rendered', ()=> {
    const getSpy = jest.spyOn(axios, 'get');
    const aboutInstance = shallow(
      <About />
    );
    expect(getSpy).toBeCalled();
  });

  it('should show full schedule upon clicking link', () => {
    const wrapper = shallow(<About />);
    expect(wrapper.state('showFullSchedule')).toBe(false);
    wrapper.find('#see-full-sched').simulate('click');
    expect(wrapper.state('showFullSchedule')).toBe(true);
  });
   
});

describe('Testing the Modal component', ()=> {

	it('should return a single-node wrapper.', ()=> {
    var modalRoot = global.document.createElement('div');
		modalRoot.setAttribute('id', 'modal-root');
		var body = global.document.querySelector('body');
		body.appendChild(modalRoot);
		expect(shallow(<Modal />).length).toEqual(1)
	})

})

describe('Testing the ShareModal Component', () => {

   it('renders the restaurant passed to it', ()=> {
    const wrapper = mount(
      <ShareModal restaurant={testRestaurant.name} />
    );
    const header = wrapper.find('h3');
    expect(header.text()).toBe('Share Test Restaurant');
   });
   
});


describe('Testing the SigninModal Component', () => {

  it('should return a single-node wrapper.', ()=> {
		expect(shallow(<SigninModal />).length).toEqual(1)
  });

  it('should render a "forgot password" page upon clicking a link', ()=> {
    const wrapper = shallow(<SigninModal />);
    expect(wrapper.state('forgotPassword')).toBe(false);
    wrapper.find('.forgot-pass').simulate('click');
    expect(wrapper.state('forgotPassword')).toBe(true);  
  });
   
});
