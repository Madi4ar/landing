import React, { useState } from 'react';
import axios from 'axios';

const WaitlistForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    name: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await axios.post(
        'https://backend.bizdin.ai/auth/profile/waitlist/',
        formData
      );
      if (response.status === 201) {
        setSuccessMessage('You have successfully sent your data!');
        alert('You have successfully sent your data');
        setFormData({ email: '', phone: '', name: '' });
      }
    } catch (error) {
      setErrorMessage('An error occurred when sending data. Try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between w-full">
        <div className="mb-5 w-full">
          <label
            className="w-full block text-sm font-medium mb-3"
            htmlFor="name">
            Your name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded text-black"
            required
          />
        </div>
        <div className="mb-5 w-full">
          <label
            className="w-full block text-sm font-medium mb-3"
            htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded text-black"
            required
          />
        </div>
        <div className="mb-5 w-full">
          <label
            className="w-full block text-sm font-medium mb-3"
            htmlFor="phone">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded text-black"
            required
          />
        </div>
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        {successMessage && (
          <p className="text-green-500 text-sm">{successMessage}</p>
        )}
        <button
          type="submit"
          className={`w-full py-2 px-4 text-white rounded ${
            isSubmitting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'
          }`}
          disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default WaitlistForm;
