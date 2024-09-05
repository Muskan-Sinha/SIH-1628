import React, { useState } from 'react';
const ResumeBuilder = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        objective: '',
        education: [
            { institution: '', degree: '', fieldOfStudy: '', startYear: '', endYear: '' }
        ],
        experience: [
            { company: '', role: '', startYear: '', endYear: '', responsibilities: '' }
        ],
        skills: [],
        hobbies: [],
        certifications: []
    });
    const handleChange = (e, section, index, field) => {
        if (section === 'education' || section === 'experience') {
            const updatedSection = [...formData[section]];
            updatedSection[index][field] = e.target.value;
            setFormData({ ...formData, [section]: updatedSection });
        } else {
            setFormData({ ...formData, [field]: e.target.value });
        }
    };
    const addField = (section) => {
        if (section === 'education') {
            setFormData({
                ...formData,
                education: [...formData.education, { institution: '', degree: '', fieldOfStudy: '', startYear: '', endYear: '' }]
            });
        } else if (section === 'experience') {
            setFormData({
                ...formData,
                experience: [...formData.experience, { company: '', role: '', startYear: '', endYear: '', responsibilities: '' }]
            });
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Resume data:', formData);
    };
    return (
        <div className="max-w-xl mt-32 mx-auto p-6 bg-white shadow rounded">
            <h2 className="text-2xl font-bold mb-4">Resume Builder</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) => handleChange(e, null, null, 'fullName')}
                        className="border p-2 mb-3 w-full"
                    />
                    <input
                        type="text"
                        placeholder="Gender"
                        value={formData.fullName}
                        onChange={(e) => handleChange(e, null, null, 'fullName')}
                        className="border p-2 mb-3 w-full"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => handleChange(e, null, null, 'email')}
                        className="border p-2 mb-3 w-full"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => handleChange(e, null, null, 'phone')}
                        className="border p-2 mb-3 w-full"
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        value={formData.address}
                        onChange={(e) => handleChange(e, null, null, 'address')}
                        className="border p-2 mb-3 w-full"
                    />
                    <textarea
                        placeholder="Objective"
                        value={formData.objective}
                        onChange={(e) => handleChange(e, null, null, 'objective')}
                        className="border p-2 mb-3 w-full"
                    />
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Education</h3>
                    {formData.education.map((edu, index) => (
                        <div key={index} className="mb-4">
                            <input
                                type="text"
                                placeholder="Institution"
                                value={edu.institution}
                                onChange={(e) => handleChange(e, 'education', index, 'institution')}
                                className="border p-2 mb-2 w-full"
                            />
                            <input
                                type="text"
                                placeholder="Degree"
                                value={edu.degree}
                                onChange={(e) => handleChange(e, 'education', index, 'degree')}
                                className="border p-2 mb-2 w-full"
                            />
                            <input
                                type="text"
                                placeholder="Field of Study"
                                value={edu.fieldOfStudy}
                                onChange={(e) => handleChange(e, 'education', index, 'fieldOfStudy')}
                                className="border p-2 mb-2 w-full"
                            />
                            <input
                                type="text"
                                placeholder="Start Year"
                                value={edu.startYear}
                                onChange={(e) => handleChange(e, 'education', index, 'startYear')}
                                className="border p-2 mb-2 w-full"
                            />
                            <input
                                type="text"
                                placeholder="End Year"
                                value={edu.endYear}
                                onChange={(e) => handleChange(e, 'education', index, 'endYear')}
                                className="border p-2 mb-2 w-full"
                            />
                        </div>
                    ))}
                    <button type="button" onClick={() => addField('education')} className="text-blue-500 mb-4">
                        + Add More Education
                    </button>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Experience</h3>
                    {formData.experience.map((exp, index) => (
                        <div key={index} className="mb-4">
                            <input
                                type="text"
                                placeholder="Company"
                                value={exp.company}
                                onChange={(e) => handleChange(e, 'experience', index, 'company')}
                                className="border p-2 mb-2 w-full"
                            />
                            <input
                                type="text"
                                placeholder="Role"
                                value={exp.role}
                                onChange={(e) => handleChange(e, 'experience', index, 'role')}
                                className="border p-2 mb-2 w-full"
                            />
                            <input
                                type="text"
                                placeholder="Start Year"
                                value={exp.startYear}
                                onChange={(e) => handleChange(e, 'experience', index, 'startYear')}
                                className="border p-2 mb-2 w-full"
                            />
                            <input
                                type="text"
                                placeholder="End Year"
                                value={exp.endYear}
                                onChange={(e) => handleChange(e, 'experience', index, 'endYear')}
                                className="border p-2 mb-2 w-full"
                            />
                            <textarea
                                placeholder="Responsibilities"
                                value={exp.responsibilities}
                                onChange={(e) => handleChange(e, 'experience', index, 'responsibilities')}
                                className="border p-2 mb-2 w-full"
                            />
                        </div>
                    ))}
                    <button type="button" onClick={() => addField('experience')} className="text-blue-500 mb-4">
                        + Add More Experience
                    </button>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Skills</h3>
                    <input
                        type="text"
                        placeholder="Skills (comma-separated)"
                        value={formData.skills.join(', ')}
                        onChange={(e) => setFormData({ ...formData, skills: e.target.value.split(', ') })}
                        className="border p-2 mb-3 w-full"
                    />
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Hobbies</h3>
                    <input
                        type="text"
                        placeholder="Hobbies (comma-separated)"
                        value={formData.hobbies.join(', ')}
                        onChange={(e) => setFormData({ ...formData, hobbies: e.target.value.split(', ') })}
                        className="border p-2 mb-3 w-full"
                    />
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Certifications</h3>
                    <input
                        type="text"
                        placeholder="Certifications (comma-separated)"
                        value={formData.certifications.join(', ')}
                        onChange={(e) => setFormData({ ...formData, certifications: e.target.value.split(', ') })}
                        className="border p-2 mb-3 w-full"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#4b7a73] text-white p-3 rounded w-full mt-4">Build Resume
                </button>
            </form>
        </div>
    );
};

export default ResumeBuilder;