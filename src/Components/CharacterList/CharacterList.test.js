import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CharacterList from './CharacterList';

Enzyme.configure({ adapter: new Adapter() });

describe('<CharacterList/> Component', () => {
    const initialProps = {
        characters: {
            data:
            {
                results: [{ name: 'Rick', id: 1, status: 'Alive', species: 'Human' }]
            }
        }
    };

    const component = shallow(
        <CharacterList {...initialProps} />
    );

    it('should render the CharacterList component', () => {
        expect(component.length).toEqual(1);
    });

    it('should render the CharacterList component header', () => {
        const header = component.find('[data-testid="header"]').text();
        expect(header).toEqual('List of characters');
    });

    it('should render the characters list table', () => {        
        expect(component.find('tbody').length).toEqual(1);
    });

    it('should render the characters list table with 1 character', () => {
        expect(component.find('tbody').find('tr').length).toEqual(1);
    });

    it('should render the characters list table with character name as per props', () => {
        const rows = component.find('tbody').find('tr');
        expect(rows.length).toEqual(1)

        const firstRowColumns = rows.first().find('td').map(column => column.text())
        expect(firstRowColumns.length).toEqual(4);
        expect(firstRowColumns[1]).toEqual('Rick');
        expect(firstRowColumns[2]).toEqual('Alive');
        expect(firstRowColumns[3]).toEqual('Human');
    });
    
    it('should have 1 input field', () => {
        expect(component.find('input').length).toEqual(1);
    });

    it('should render form submit button successfully', () => {
        expect(component.find('Form').find('Button').length).toEqual(1);
    });

    it('should set the input value on change event', () => {
        let input = component.find('#inCharacter');
        input.simulate('change', {
            target: {
                value: 'morty',
            },
        });
        component.update();
        expect(component.find("#inCharacter").props().value).toEqual('morty');
    });

    it('test button click event', () => {
        const mockCallBack = jest.fn();
        const button = shallow((<input type="button" onClick={mockCallBack}>Ok!</input>));
        button.simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    })

});