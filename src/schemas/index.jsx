import * as Yup from "yup";

export const signUpSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    username: Yup.string()
        .oneOf([Yup.ref('email'), null], 'Username and email must match')
        .required('Username is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[@$!%*?&]/, 'Password must contain at least one special character')
        .required('Password is required'),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    checkbox: Yup.boolean()
        .oneOf([true], 'You must agree to the terms and conditions')
        .required('You must agree to the terms and conditions'),
});

export const loginSchema = Yup.object({
    identifier: Yup.string()
       .email('Invalid email address')
       .required('Email is required'),
    password: Yup.string()
       .min(8, 'Password must be at least 8 characters long')
       .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
       .matches(/[0-9]/, 'Password must contain at least one number')
       .matches(/[@$!%*?&]/, 'Password must contain at least one special character')
       .required('Password is required'),
       
})