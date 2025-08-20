// components/FoundPerson/FoundPerson.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PhotoIcon } from '@heroicons/react/24/outline';

const FoundPerson = () => {
  const [formData, setFormData] = useState({
    // Found Person Information
    fullName: '',
    approximateAge: '',
    gender: '',
    
    // Physical Description
    height: '',
    weight: '',
    eyeColor: '',
    hairColor: '',
    distinguishingFeatures: '',
    
    // Found Information
    foundDate: '',
    foundTime: '',
    foundLocation: '',
    currentCondition: '',
    currentLocation: '',
    
    // Clothing and Belongings
    clothingDescription: '',
    belongings: '',
    
    // Your Information
    yourName: '',
    yourPhone: '',
    yourEmail: '',
    yourRelationship: ''
  });
  
  const [photo, setPhoto] = useState(null);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    if (!formData.foundDate) newErrors.foundDate = 'Found date is required';
    if (!formData.foundLocation) newErrors.foundLocation = 'Found location is required';
    if (!formData.currentLocation) newErrors.currentLocation = 'Current location is required';
    if (!formData.yourName) newErrors.yourName = 'Your name is required';
    if (!formData.yourPhone) newErrors.yourPhone = 'Your phone number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Found person report submitted:', formData);
      
      alert('Found person report submitted successfully!');
      navigate('/');
    } catch (error) {
      alert('Failed to submit report. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Post Found Person</h1>
          <p className="mt-2 text-lg text-gray-600">
            Help reunite someone with their family by providing information about the person you found
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Photo Upload Section */}
          <div className="px-6 py-6 bg-green-50 border-b">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Photo (if available)</h2>
            <div className="flex items-center justify-center">
              <div className="w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                {photo ? (
                  <img
                    src={URL.createObjectURL(photo)}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-center">
                    <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="mt-2 text-sm text-gray-600">
                      <label className="relative cursor-pointer">
                        <span>Upload photo</span>
                        <input
                          type="file"
                          className="sr-only"
                          accept="image/*"
                          onChange={handlePhotoChange}
                        />
                        </label>
                      </div>
                    </div>
                )}
              </div>
            </div>
          </div>

          <div className="px-6 py-6 space-y-8">
            {/* Found Person Information */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Person Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name (if known)
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Approximate Age
                  </label>
                  <input
                    type="number"
                    name="approximateAge"
                    value={formData.approximateAge}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Physical Description */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Physical Description</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Height (approx.)
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="cm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Weight (approx.)
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="kg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Eye Color
                  </label>
                  <input
                    type="text"
                    name="eyeColor"
                    value={formData.eyeColor}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Hair Color
                  </label>
                  <input
                    type="text"
                    name="hairColor"
                    value={formData.hairColor}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Distinguishing Features
                  </label>
                  <textarea
                    name="distinguishingFeatures"
                    value={formData.distinguishingFeatures}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Scars, tattoos, birthmarks, disabilities, etc."
                  />
                </div>
              </div>
            </div>

            {/* Found Information */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Found Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Found Date *
                  </label>
                  <input
                    type="date"
                    name="foundDate"
                    value={formData.foundDate}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      errors.foundDate ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.foundDate && <p className="mt-1 text-sm text-red-600">{errors.foundDate}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Found Time
                  </label>
                  <input
                    type="time"
                    name="foundTime"
                    value={formData.foundTime}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Found Location *
                  </label>
                  <textarea
                    name="foundLocation"
                    value={formData.foundLocation}
                    onChange={handleChange}
                    rows={2}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      errors.foundLocation ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Exact location where the person was found"
                  />
                  {errors.foundLocation && <p className="mt-1 text-sm text-red-600">{errors.foundLocation}</p>}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Condition
                  </label>
                  <textarea
                    name="currentCondition"
                    value={formData.currentCondition}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Physical and mental condition, injuries, etc."
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Location *
                  </label>
                  <textarea
                    name="currentLocation"
                    value={formData.currentLocation}
                    onChange={handleChange}
                    rows={2}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      errors.currentLocation ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Where the person is currently located"
                  />
                  {errors.currentLocation && <p className="mt-1 text-sm text-red-600">{errors.currentLocation}</p>}
                </div>
              </div>
            </div>

            {/* Clothing and Belongings */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Clothing & Belongings</h2>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Clothing Description
                  </label>
                  <textarea
                    name="clothingDescription"
                    value={formData.clothingDescription}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Describe what the person was wearing"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Belongings
                  </label>
                  <textarea
                    name="belongings"
                    value={formData.belongings}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Items found with the person (wallet, phone, bags, etc.)"
                  />
                </div>
              </div>
            </div>

            {/* Your Information */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Your Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    name="yourName"
                    value={formData.yourName}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      errors.yourName ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.yourName && <p className="mt-1 text-sm text-red-600">{errors.yourName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="yourPhone"
                    value={formData.yourPhone}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      errors.yourPhone ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.yourPhone && <p className="mt-1 text-sm text-red-600">{errors.yourPhone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    name="yourEmail"
                    value={formData.yourEmail}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Relationship to Person
                  </label>
                  <input
                    type="text"
                    name="yourRelationship"
                    value={formData.yourRelationship}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="How you know/came across this person"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="px-6 py-4 bg-gray-50 border-t">
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className={`px-6 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Submitting...' : 'Submit Found Person'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FoundPerson;