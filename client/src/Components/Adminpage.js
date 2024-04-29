import React, { useState } from 'react';
import axios from 'axios';
import '../index'

function AdminPage() {
    const [formData, setFormData] = useState({
        Topic: '',
        Question: '',
        Opt1: '',
        Opt2: '',
        Opt3: '',
        Opt4: '',
        Correct_opt: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/questions', formData);
            console.log(res.data); // Assuming your backend returns the saved question data
            // Optionally reset form fields after successful submission
            setFormData({
                Topic: '',
                Question: '',
                Opt1: '',
                Opt2: '',
                Opt3: '',
                Opt4: '',
                Correct_opt: ''
            });
        } catch (err) {
            console.error('Error:', err);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Add Question</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="topic" className="form-label">Topic:</label>
                    <input type="text" className="form-control" id="topic" name="Topic" value={formData.Topic} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="question" className="form-label">Question:</label>
                    <textarea className="form-control" id="question" name="Question" value={formData.Question} onChange={handleChange}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="opt1" className="form-label">Option 1:</label>
                    <input type="text" className="form-control" id="opt1" name="Opt1" value={formData.Opt1} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="opt2" className="form-label">Option 2:</label>
                    <input type="text" className="form-control" id="opt2" name="Opt2" value={formData.Opt2} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="opt3" className="form-label">Option 3:</label>
                    <input type="text" className="form-control" id="opt3" name="Opt3" value={formData.Opt3} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="opt4" className="form-label">Option 4:</label>
                    <input type="text" className="form-control" id="opt4" name="Opt4" value={formData.Opt4} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="correctOpt" className="form-label">Correct Option:</label>
                    <input type="text" className="form-control" id="correctOpt" name="Correct_opt" value={formData.Correct_opt} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Add Question</button>
            </form>
        </div>
    );
}

export default AdminPage;
