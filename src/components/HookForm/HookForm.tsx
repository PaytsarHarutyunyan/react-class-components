import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { validationSchema } from '../../utils/validationSchema';
import { addFormData } from '../../store/formSlice';
import styles from '../App/App.module.css';
import { FormFields } from '@/types';

export const ControlledForm: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = (data: FormFields) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const pictureBase64 = reader.result as string;
            dispatch(
                addFormData({
                    ...data,
                    picture: pictureBase64,
                }),
            );
            navigate('/');
        };
        if (data.picture.length > 0) {
            reader.readAsDataURL(data.picture[0]);
        }
    };

    const getErrorClass = (field: keyof FormFields) => (errors[field] ? styles['error-input'] : '');

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='name'>Name</label>
                <input id='name' {...register('name')} className={getErrorClass('name')} />
                {errors.name && <p className={styles['error-message']}>{errors.name.message}</p>}
            </div>
            <div>
                <label htmlFor='age'>Age</label>
                <input
                    id='age'
                    type='number'
                    {...register('age')}
                    className={getErrorClass('age')}
                />
                {errors.age && <p className={styles['error-message']}>{errors.age.message}</p>}
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    type='email'
                    {...register('email')}
                    className={getErrorClass('email')}
                />
                {errors.email && <p className={styles['error-message']}>{errors.email.message}</p>}
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input
                    id='password'
                    type='password'
                    {...register('password')}
                    className={getErrorClass('password')}
                />
                {errors.password && (
                    <p className={styles['error-message']}>{errors.password.message}</p>
                )}
            </div>
            <div>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input
                    id='confirmPassword'
                    type='password'
                    {...register('confirmPassword')}
                    className={getErrorClass('confirmPassword')}
                />
                {errors.confirmPassword && (
                    <p className={styles['error-message']}>{errors.confirmPassword.message}</p>
                )}
            </div>
            <div>
                <label htmlFor='gender'>Gender</label>
                <select id='gender' {...register('gender')} className={getErrorClass('gender')}>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
                {errors.gender && (
                    <p className={styles['error-message']}>{errors.gender.message}</p>
                )}
            </div>
            <div>
                <label htmlFor='acceptTerms'>Accept Terms</label>
                <input
                    id='acceptTerms'
                    type='checkbox'
                    {...register('acceptTerms')}
                    className={getErrorClass('acceptTerms')}
                />
                {errors.acceptTerms && (
                    <p className={styles['error-message']}>{errors.acceptTerms.message}</p>
                )}
            </div>
            <div>
                <label htmlFor='picture'>Upload Picture</label>
                <input
                    id='picture'
                    type='file'
                    {...register('picture')}
                    className={getErrorClass('picture')}
                />
                {errors.picture && (
                    <p className={styles['error-message']}>{errors.picture.message}</p>
                )}
            </div>
            <div>
                <label htmlFor='country'>Country</label>
                <select id='country' {...register('country')} className={getErrorClass('country')}>
                    <option value='USA'>USA</option>
                    <option value='Canada'>Canada</option>
                    <option value='Armenia'>Armenia</option>
                </select>
                {errors.country && (
                    <p className={styles['error-message']}>{errors.country.message}</p>
                )}
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};
