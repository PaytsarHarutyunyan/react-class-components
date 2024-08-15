import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/index';
import { resetLastSubmittedIndex } from '../store/formSlice';

const MainPage: React.FC = () => {
    const dispatch = useDispatch();
    const formData = useSelector((state: RootState) => state.form.data);
    const lastSubmittedIndex = useSelector((state: RootState) => state.form.lastSubmittedIndex);

    useEffect(() => {
        if (lastSubmittedIndex !== null) {
            const timer = setTimeout(() => {
                dispatch(resetLastSubmittedIndex());
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [lastSubmittedIndex, dispatch]);

    return (
        <div>
            <h1>Main Page</h1>
            <div>
                {formData.map((data, index) => (
                    <div
                        key={index}
                        style={{
                            border: '1px solid black',
                            margin: '10px',
                            backgroundColor: index === lastSubmittedIndex ? 'lightgreen' : 'white',
                        }}
                    >
                        <p>Name: {data.name}</p>
                        <p>Age: {data.age}</p>
                        <p>Email: {data.email}</p>
                        <p>Gender: {data.gender}</p>
                        <p>Country: {data.country}</p>
                        <img src={data.picture} alt='Uploaded' width='100' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainPage;
