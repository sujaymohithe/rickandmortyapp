import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PersonalDetails from './PersonalDetails';

Enzyme.configure({ adapter: new Adapter() });

describe('<PersonalDetails/> component', () => {
    const initialProps = {
        characterPrimaryInfo: {
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            gender: 'Male',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        }
    };
    const component = shallow(<PersonalDetails {...initialProps} />);

    it('should render without parent component', () => {
        expect(component.length).toEqual(1);
    });

    it('should render the component header', () => {
        const header = component.find('h5').text();
        expect(header).toEqual('Personal Details');
    });

    it('should render character details correctly', () => {
        const rows = component.find('.articleContent').find('Row');
        expect(rows.length).toEqual(4);
        expect(rows.first().find('b').text()).toEqual('Rick Sanchez');
        expect(rows.at(1).find('b').text()).toEqual('Alive');
        expect(rows.at(2).find('b').text()).toEqual('Human');
    })

    it('should render image element correctly', () => {
        const image = component.find('Image');
        expect(image.props().src).toEqual('https://rickandmortyapi.com/api/character/avatar/1.jpeg');
    })
})