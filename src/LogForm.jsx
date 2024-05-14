import React, { useState } from 'react';
import axios from 'axios';

const LogForm = () => {
  const [formData, setFormData] = useState({
    level: '',
    logMessage: '',
    source: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/logs', formData);
      // Optionally, you can handle success or show a message to the user
      console.log('Log data sent successfully:', formData);
      // Reset form fields
      setFormData({
        level: '',
        logMessage: '',
        source: ''
      });
    } catch (error) {
      // Handle error, show error message to the user
      console.error('Error sending log data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label htmlFor="level" className="block text-gray-700 text-sm font-bold mb-2">Level</label>
        <input
          type="text"
          id="level"
          name="level"
          value={formData.level}
          onChange={handleChange}
          placeholder="Enter level..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="logMessage" className="block text-gray-700 text-sm font-bold mb-2">Log Message</label>
        <textarea
          id="logMessage"
          name="logMessage"
          value={formData.logMessage}
          onChange={handleChange}
          placeholder="Enter log message..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <div className="mb-6">
        <label htmlFor="source" className="block text-gray-700 text-sm font-bold mb-2">Source</label>
        <input
          type="text"
          id="source"
          name="source"
          value={formData.source}
          onChange={handleChange}
          placeholder="Enter source..."
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default LogForm;
