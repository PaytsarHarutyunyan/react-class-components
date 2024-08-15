import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    name: Yup.string()
        .matches(/^[A-Z][a-z]*$/, 'Name must start with an uppercase letter')
        .required('Name is required'),
    age: Yup.number()
        .positive('Age must be a positive number')
        .integer('Age must be an integer')
        .required('Age is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/\d/, 'Password must contain at least one number')
        .matches(/[@$!%*?&#]/, 'Password must contain at least one special character')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required('Please confirm your password'),
    gender: Yup.string().required('Gender is required'),
    acceptTerms: Yup.boolean()
        .oneOf([true], 'You must accept the terms and conditions')
        .required('You must accept the terms and conditions'),
    picture: Yup.mixed<FileList>()
        .required('File is required')
        .test('fileSize', 'File size is too large', function (value) {
            if (!value || value.length === 0) {
                return true;
            }
            console.log({ value });
            return value[0].size <= 2000000;
        })
        .test('fileType', 'Unsupported file format', function (value) {
            if (!value || value.length === 0) {
                return true;
            }
            return ['image/jpeg', 'image/png'].includes(value[0].type);
        })
        .test('fileType', 'File is required', function (value) {
            return !(value && value.length === 0);
        }),
    country: Yup.string().required('Country is required'),
});
