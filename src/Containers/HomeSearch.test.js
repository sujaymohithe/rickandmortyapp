import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import { store } from '../store/store';
import HomeSearch from './HomeSearch';

Enzyme.configure({ adapter: new Adapter() });

describe('<HomeSearch/> Container', () => {
    const container = shallow(
        <Provider store={store}>
            <HomeSearch />
        </Provider>
    );

    it('should render the HomeSearch container', () => {
        expect(container.length).toEqual(1);
    });
});