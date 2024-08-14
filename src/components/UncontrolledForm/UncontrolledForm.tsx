import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { ValidationError } from 'yup';
import { addFormData } from '../../store/formSlice';
import { validationSchema } from '../../utils/validationSchema';
import styles from '../App/App.module.css';

export const UncontrolledForm: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [errors, setErrors] = useState<Record<string, string>>({});

    const nameRef = useRef<HTMLInputElement>(null);
    const ageRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const genderRef = useRef<HTMLSelectElement>(null);
    const acceptTermsRef = useRef<HTMLInputElement>(null);
    const pictureRef = useRef<HTMLInputElement>(null);
    const countryRef = useRef<HTMLSelectElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const formData = {
            name: nameRef.current?.value || '',
            age: ageRef.current?.value || '',
            email: emailRef.current?.value || '',
            password: passwordRef.current?.value || '',
            confirmPassword: confirmPasswordRef.current?.value || '',
            gender: genderRef.current?.value || '',
            acceptTerms: acceptTermsRef.current?.checked || false,
            picture: pictureRef.current?.files?.[0],
            country: countryRef.current?.value || '',
        };

        validationSchema
            .validate(formData, { abortEarly: false })
            .then((validatedData) => {
                setErrors({});
                const reader = new FileReader();
                reader.onloadend = () => {
                    const pictureBase64 = reader.result;
                    dispatch(
                        addFormData({
                            ...validatedData,
                            picture: pictureBase64,
                        }),
                    );
                    navigate('/');
                };
                if (formData.picture) {
                    reader.readAsDataURL(formData.picture);
                }
            })
            .catch((err: ValidationError) => {
                const errors = err.inner.reduce((acc: Record<string, string>, curr) => {
                    if (curr.path) {
                        acc[curr.path] = curr.message;
                    }
                    return acc;
                }, {});
                setErrors(errors);
            });
    };

    const getErrorClass = (field: string) => (errors[field] ? styles['error-input'] : '');

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name</label>
                <input id='name' type='text' ref={nameRef} className={getErrorClass('name')} />
                {errors.name && <div className={styles['error-message']}>{errors.name}</div>}
            </div>
            <div>
                <label htmlFor='age'>Age</label>
                <input id='age' type='number' ref={ageRef} className={getErrorClass('age')} />
                {errors.age && <div className={styles['error-message']}>{errors.age}</div>}
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input id='email' type='email' ref={emailRef} className={getErrorClass('email')} />
                {errors.email && <div className={styles['error-message']}>{errors.email}</div>}
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input
                    id='password'
                    type='password'
                    ref={passwordRef}
                    className={getErrorClass('password')}
                />
                {errors.password && (
                    <div className={styles['error-message']}>{errors.password}</div>
                )}
            </div>
            <div>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input
                    id='confirmPassword'
                    type='password'
                    ref={confirmPasswordRef}
                    className={getErrorClass('confirmPassword')}
                />
                {errors.confirmPassword && (
                    <div className={styles['error-message']}>{errors.confirmPassword}</div>
                )}
            </div>
            <div>
                <label htmlFor='gender'>Gender</label>
                <select id='gender' ref={genderRef} className={getErrorClass('gender')}>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
                {errors.gender && <div className={styles['error-message']}>{errors.gender}</div>}
            </div>
            <div>
                <label htmlFor='acceptTerms'>Accept Terms</label>
                <input
                    id='acceptTerms'
                    type='checkbox'
                    ref={acceptTermsRef}
                    className={getErrorClass('acceptTerms')}
                />
                {errors.acceptTerms && (
                    <div className={styles['error-message']}>{errors.acceptTerms}</div>
                )}
            </div>
            <div>
                <label htmlFor='picture'>Upload Picture</label>
                <input
                    id='picture'
                    type='file'
                    ref={pictureRef}
                    className={getErrorClass('picture')}
                />
                {errors.picture && <div className={styles['error-message']}>{errors.picture}</div>}
            </div>
            <div>
                <label htmlFor='country'>Country</label>
                <select id='country' ref={countryRef} className={getErrorClass('country')}>
                    <option value='USA'>USA</option>
                    <option value='Canada'>Canada</option>
                    <option value='Armenia'>Armenia</option>
                </select>
                {errors.country && <div className={styles['error-message']}>{errors.country}</div>}
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};
