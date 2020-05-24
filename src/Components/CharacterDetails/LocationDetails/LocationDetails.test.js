import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LocationDetails from './LocationDetails';

Enzyme.configure({ adapter: new Adapter() });

describe('<LocationDetails/> component', () => {
    const initialProps = {
        characterLocationDetails: {
            origin : {name : 'earth'},
            location : {name : 'mars'}
        }
    };
    const component = shallow(<LocationDetails {...initialProps} />);

    it('should render without parent component', () => {
        expect(component.length).toEqual(1);
    });

    it('should render the component header', () => {
        const header = component.find('h5').text();
        expect(header).toEqual('Location Details');
    });

    it('should render character location details correctly', () => {
        const rows = component.find('.articleContent').find('Row');
        expect(rows.length).toEqual(2);
        expect(rows.first().find('b').text()).toEqual('earth');
        expect(rows.at(1).find('b').text()).toEqual('mars');
    });
})