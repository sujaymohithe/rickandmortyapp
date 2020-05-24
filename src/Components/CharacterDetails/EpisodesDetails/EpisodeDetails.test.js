import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EpisodesDetails from './EpisodesDetails';

Enzyme.configure({ adapter: new Adapter() });

describe('<EpisodesDetails/> component', () => {
    const initialProps = {
        characterEpisodeDetails: [
            {name : 'Strong Man', air_date : 'December 16, 2013', episode : 'E1'},
            {name : 'Wealthy Man', air_date : 'March 16, 2019', episode : 'E2'},
        ]
    };
    const component = shallow(<EpisodesDetails {...initialProps} />);

    it('should render without parent component', () => {
        expect(component.length).toEqual(1);
    });

    it('should render the component header', () => {
        const header = component.find('h5').text();
        expect(header).toEqual('Episode Details');
    });

    it('should render character episode details count equals 2 correctly', () => {
        const rows = component.find('tbody').find('tr');
        expect(rows.length).toEqual(2);
    });

    it('should render the episode list table with valid details', () => {
        const rows = component.find('tbody').find('tr');
        const firstRowColumns = rows.first().find('td').map(column => column.text())
        expect(firstRowColumns.length).toEqual(3);
        expect(firstRowColumns[0]).toEqual('Strong Man');
        expect(firstRowColumns[1]).toEqual('December 16, 2013');
        expect(firstRowColumns[2]).toEqual('E1');
    });
})