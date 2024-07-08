import IdCard from '@/components/IdCard';
import React, { useRef, useState } from 'react';
import * as htmlToImage from 'html-to-image';

const Index = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [location, setLocation] = useState('');
  const [dateOfIssuance, setDateOfIssuance] = useState('');
  const [dateOfExpiry, setDateOfExpiry] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const idCardRef = useRef();

  const handleGenerate = () => {
    // Generate the ID card image as SVG
    htmlToImage
      .toSvg(idCardRef.current)
      .then(function (dataUrl) {
        alert('Id Card Generated Successfully');
        setImageUrl(dataUrl);
      })
      .catch(function (error) {
        alert('Error generating ID card');
        console.error('Error generating ID card:', error);
      });
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${firstName + lastName}.svg`;
    link.click();
  };

  return (
    <div className='flex flex-row bg-white shadow-md rounded-2xl'>
      <div className='flex flex-col gap-5 p-8 min-w-[30rem]'>
        <div className='flex flex-col justify-start gap-2'>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            className='p-2 border-2 rounded-lg focus:outline-none'
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div className='flex flex-col justify-start gap-2'>
          <label htmlFor='firstName'>Last Name</label>
          <input
            type='text'
            className='p-2 border-2 rounded-lg focus:outline-none'
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <div className='flex flex-col justify-start gap-2'>
          <label htmlFor='firstName'>ID Number</label>
          <input
            type='text'
            className='p-2 border-2 rounded-lg focus:outline-none'
            onChange={e => setIdNumber(e.target.value)}
          />
        </div>
        <div className='flex flex-col justify-start gap-2'>
          <label htmlFor='firstName'>Location</label>
          <input
            type='text'
            className='p-2 border-2 rounded-lg focus:outline-none'
            onChange={e => setLocation(e.target.value)}
          />
        </div>
        <div className='flex flex-col justify-start gap-2'>
          <label htmlFor='firstName'>Date of Issuance</label>
          <input
            type='text'
            className='p-2 border-2 rounded-lg focus:outline-none'
            onChange={e => setDateOfIssuance(e.target.value)}
          />
        </div>
        <div className='flex flex-col justify-start gap-2'>
          <label htmlFor='firstName'>Date of Expiry</label>
          <input
            type='text'
            className='p-2 border-2 rounded-lg focus:outline-none'
            onChange={e => setDateOfExpiry(e.target.value)}
          />
        </div>
      </div>
      <div className='flex flex-col p-8 border-l-2 min-w-[400px] justify-between '>
        <IdCard
          firstName={firstName}
          lastName={lastName}
          idNumber={idNumber}
          location={location}
          dateOfIssuance={dateOfIssuance}
          dateOfExpiry={dateOfExpiry}
          reference={idCardRef}
        />
        <div className='flex self-end gap-5'>
          <button
            onClick={handleGenerate}
            className='p-2 text-white bg-blue-500 rounded-lg hover:opacity-80'
          >
            Generate New ID Card
          </button>
          <button
            onClick={handleDownload}
            className='p-2 text-white bg-green-500 rounded-lg hover:opacity-80'
          >
            Download ID Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
