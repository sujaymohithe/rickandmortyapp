import React from 'react';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CharacterDetails from './CharacterDetails';

Enzyme.configure({ adapter: new Adapter() });

describe('<CharacterDetails/> component', () => {
    const initialProps = {
        show: true,
        onHide: () => { },
        characterDetails: {
            loading: false,
            data: {
                characterPrimaryInfo: {
                    name: 'rick'
                }
            },
        }
    };
    const component = shallow(<CharacterDetails {...initialProps} />);

    it('should render without parent component', () => {
        expect(component.length).toEqual(1);
    });

    it('should render correct onHide prop type', () => {
        expect(component.props().onHide).toBeInstanceOf(Function)
    });

    it('check show prop value and type', () => {
        expect(component.props().show).toEqual(true);
    });

    it('should render correct modal title', () => {
        expect(component.find('ModalTitle').text()).toEqual('rick');
    });

    it('should render all three child components', () => {
        expect(component.find('PersonalDetails').length).toEqual(1);
        expect(component.find('LocationDetails').length).toEqual(1);
        expect(component.find('EpisodeDetails').length).toEqual(1);
    });   

})