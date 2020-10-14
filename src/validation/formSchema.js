import * as yup from 'yup'

export default yup.object().shape({
    name: yup
        .string()
        .required('You must enter your name.'),
    email: yup
        .string()
        .email('Please enter a valid email.')
        .required("You must enter an email."),
    password: yup
        .string()
        .min(6, 'Password must me 6 characters long.')
        .required('Please enter a password.'),
    tos: yup
        .boolean()
        .oneOf([true], 'You must agree to the ToS')
})