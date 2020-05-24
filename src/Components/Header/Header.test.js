import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';

Enzyme.configure({ adapter: new Adapter() });

describe('<Header/> component', () => {
    const component = shallow(<Header />);

    it('renders without parent component', () => {        
        expect(component.length).toEqual(1);
    });


    it('renders Header Component with logo', () => {
        const wrapper = component.find(`[data-test='Logo']`);
        expect(wrapper.text() == "RICK & MORTY CHARACTERS");
    })

})