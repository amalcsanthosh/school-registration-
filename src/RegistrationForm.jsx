import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    dateOfBirth: "",
    grade: "",
    email: "",
    phone: "",
    guardianName: "",
    guardianPhone: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.studentName) formErrors.studentName = "Student name is required";
    if (!formData.dateOfBirth) formErrors.dateOfBirth = "Date of Birth is required";
    if (!formData.grade) formErrors.grade = "Grade is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.phone) formErrors.phone = "Phone number is required";
    if (!formData.guardianName) formErrors.guardianName = "Guardian's name is required";
    if (!formData.guardianPhone) formErrors.guardianPhone = "Guardian's phone number is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      localStorage.setItem("registrationData", JSON.stringify(formData));
      alert("Form submitted and data saved successfully!");
      setFormData({
        studentName: "",
        dateOfBirth: "",
        grade: "",
        email: "",
        phone: "",
        guardianName: "",
        guardianPhone: "",
      });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  const handleCancel = () => {
    setFormData({
      studentName: "",
      dateOfBirth: "",
      grade: "",
      email: "",
      phone: "",
      guardianName: "",
      guardianPhone: "",
    });
    setErrors({});
  };

  return (
    <div className="registration-form-container">
      <h2> School Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Student Name:</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
          />
          {errors.studentName && <span>{errors.studentName}</span>}
        </div>

        <div className="form-group">
          <label>Date of Birth:</label>  {}
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
          {errors.dateOfBirth && <span>{errors.dateOfBirth}</span>}
        </div>
        
        <div className="form-group">
          <label>Courses:</label>
          <select name="grade" value={formData.grade} onChange={handleChange}>
            <option value="">Select Courses</option>
            <option value="Science">Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Computer science">Computer science</option>
            <option value="Humanities">Humanities</option>
          </select>
          {errors.grade && <span>{errors.grade}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span>{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>Guardian's Name:</label>
          <input
            type="text"
            name="guardianName"
            value={formData.guardianName}
            onChange={handleChange}
          />
          {errors.guardianName && <span>{errors.guardianName}</span>}
        </div>

        <div className="form-group">
          <label>Guardian's Phone:</label>
          <input
            type="text"
            name="guardianPhone"
            value={formData.guardianPhone}
            onChange={handleChange}
          />
          {errors.guardianPhone && <span>{errors.guardianPhone}</span>}
        </div>

        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="button" className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
