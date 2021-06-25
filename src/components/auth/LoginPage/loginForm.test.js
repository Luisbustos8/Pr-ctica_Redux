import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginForm from './LoginForm';


Enzyme.configure({ adapter: new Adapter() });



describe('LoginForm', () => {
    const props = {
        isLoading: false,
        onSubmit: jest.fn(),
    };
    const render = ()=>shallow(<LoginForm {...props} />);

    test('should render', () => {
        const wrapper = render();
        expect(wrapper.exists()).toBe(true);
        
    })

    test('should submit credentials', () => {
        const credentials = {email:'test@example.com', password:'passwordTest', remember:true}
        const wrapper = render();
        const mailField = wrapper.find('[name="email"]')
        mailField
        .props()
        .onChange({target: {name:'email', value:credentials.email}})
        const passwordField = wrapper.find('[name="password"]')
        passwordField
        .props()
        .onChange({target: {name:'password', value:credentials.password}})
        const rememberField = wrapper.find('[name="remember"]')
        rememberField
        .props()
        .onChange({target:{name: 'remember', value: credentials.remember} })

        const form = wrapper.find('form');
        form.simulate('submit', {preventDefault : () => {}})

        expect(props.onSubmit).toHaveBeenCalledWith(credentials);
    });

});