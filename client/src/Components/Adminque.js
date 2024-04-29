import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Adminque() {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        try {
            // Fetch questions from the backend
            const response = await axios.get('http://localhost:5000/api/admin');
            // Set the questions in the state
            setQuestions(response.data);
        } catch (error) {
            console.error('Error fetching questions:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">All Questions</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Topic</th>
                        <th>Question</th>
                        <th>Options</th>
                        <th>Correct Option</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((question, index) => (
                        <tr key={index}>
                            <td>{question.Topic}</td>
                            <td>{question.Question}</td>
                            <td>
                                <ul>
                                    <li>{question.Opt1}</li>
                                    <li>{question.Opt2}</li>
                                    <li>{question.Opt3}</li>
                                    <li>{question.Opt4}</li>
                                </ul>
                            </td>
                            <td>{question.Correct_opt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Adminque;
