import { useEffect, useState, useContext } from 'react';
import useFetch from '../../hooks/useFetch';
import './Exercises.css';
import { BiSolidSave } from "react-icons/bi";
import { ImFolderUpload } from "react-icons/im";
import axios from 'axios';
import AuthContext from '../../context/AuthProvider';

const Exercises = () => {
    const { data: exData, loading: loadingEx, error: errorEx } = useFetch('http://localhost:8000/exercises');
    const { data: anData, loading: loadingAn, error: errorAn } = useFetch('http://localhost:8000/answers');

    const { auth } = useContext(AuthContext);

    const [exercises, setExercises] = useState([]);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        if (exData && exData.exercises && Array.isArray(exData.exercises)) {
            setExercises(exData.exercises);
        }
    }, [exData]);

    useEffect(() => {
        if (anData && anData.answers && Array.isArray(anData.answers)) {
            // Filter answers based on the logged-in user's user_id
            const userAnswers = anData.answers.filter(answer => answer.user_id === auth.user_id);
            setAnswers(userAnswers);
        }
    }, [anData, auth]);

    const handleFileChange = (exerciseId, event) => {
        const file = event.target.files[0];
        console.log(`File selected for exercise ${exerciseId}:`, file);
    };

    console.log(answers);

    const handleSubmitClick = async (exerciseId, userId) => {
        const fileInput = document.getElementById(`file_${exerciseId}`);
        const file = fileInput.files[0];

        // console.log('EX ID: ', exerciseId);
        // console.log('user id click: ', userId);
        console.log('FILE: ', file);
        
        if (!file) {
            console.error('No file selected.');
            return;
        }

        const formData = new FormData();
        formData.append('user_id', userId);
        formData.append('exercise_id', exerciseId);
        formData.append('file', file);

        console.log('FORMDATA: ', formData);

        try {
            await axios.post(
                'http://localhost:8000/answers',
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${auth.accessToken}`,
                        'Content-Type': 'multipart/form-data'
                    }
                }

        );

            console.log('Answer uploaded successfully.');
        } catch (error) {
            console.log('Error uploading answer:', error.message);
        }
    };

    if (loadingEx || loadingAn) {
        return <div>Loading user data...</div>;
    }

    if (errorEx || errorAn) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <h1 className='exHeader'>Exercises</h1>
            <ul className='exercisesList'>
                {exercises.map(exercise => {

                    // Find the answer corresponding to the current exercise
                    const answer = answers.find(answer => answer.exercise_id === exercise.id);
                    const grade = answer !== undefined && answer !== null ? answer.grade : ' ';

                    return (
                        <li key={exercise.id} className='exerciseItem'>
                            <div className='exerciseName'>
                                <h2>{exercise.ex_name}</h2>
                            </div>
                            <div className='exerciseFile'>
                                <a href={`http://localhost:8000/${exercise.file_path}`} download>
                                    <BiSolidSave size={26} />
                                </a>
                            </div>
                            <div className='uploadAnswer'>
                                <label htmlFor={`file_${exercise.id}`} className='answerLabel'>
                                    Upload Answer: <ImFolderUpload size={22} />
                                </label>
                                <input
                                    type="file"
                                    id={`file_${exercise.id}`}
                                    onChange={(e) => handleFileChange(exercise.id, e)}
                                />
                                <button onClick={() => handleSubmitClick(exercise.id, auth.user_id)}>Submit</button>
                            </div>
                            <div className='exerciseGrade'>
                                <h2>{grade}/10</h2>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}

export default Exercises;


