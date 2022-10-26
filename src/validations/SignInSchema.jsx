import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({

    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
    .min(5, 'The password needs at least 5 characters')
    .required('Password is required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm your password is required')
});
