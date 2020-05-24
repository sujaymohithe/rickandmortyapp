import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Pagination from './Pagination';

Enzyme.configure({ adapter: new Adapter() });

describe('<Pagination/> component', () => {
    const initialProps = {
        info: {
            count: 5,
            prev: 'prev',
            next: 'next'
        }
    };
    const component = shallow(<Pagination {...initialProps} />);

    it('should render without parent component', () => {
        expect(component.length).toEqual(1);
    });


    it('should render total recods of character list correctly', () => {
        const wrapper = component.find('.sum-number');
        expect(wrapper.text() == 'Total Records : 5');
    })

    it('should render form previous and next button successfully', () => {
        expect(component.find('Button').length).toEqual(2);
    });

    const nextProps = {
        info: {
            count: 5,
            prev: null,
            next: 'https://rickandmortyapi.com/api/character/?page=2&name=rick'
        }
    };
    const wrapper = shallow(<Pagination {...nextProps} />);
    it('should not render previous button since prev prop is null', () => {
        expect(wrapper.find('Button').length).toEqual(1);
        expect(wrapper.find('Button').props().href)
            .toEqual('https://rickandmortyapi.com/api/character/?page=2&name=rick');
    });

})