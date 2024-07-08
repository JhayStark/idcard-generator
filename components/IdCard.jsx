import Image from 'next/image';
import React from 'react';
import QRCode from 'react-qr-code';

const IdCard = ({
  firstName,
  lastName,
  location,
  dateOfIssuance,
  dateOfExpiry,
  idNumber,
  reference,
}) => {
  return (
    <>
      <div
        className='w-[550px] h-[300px] bg-white px-[19px]   flex flex-row justify-between py-5  '
        ref={reference}
      >
        <div className='flex flex-col gap-4'>
          <div className='flex flex-row items-center justify-between gap-[57px]'>
            <div className='flex flex-col gap-1'>
              <p className='font-bold text-black'>First Name</p>
              <p className='font-bold text-[#D37E25]'>
                {firstName || 'Enter first name'}
              </p>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='font-bold text-black '>Last Name</p>
              <p className='font-bold text-[#D37E25]'>
                {lastName || 'Enter last name'}
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='font-bold text-black '>Location</p>
            <p className='font-bold text-[#D37E25]'>
              {location || 'Enter location'}
            </p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='font-bold text-black '>Date of Issuance</p>
            <p className='font-bold text-[#D37E25]'>
              {dateOfIssuance || 'Enter Date of Issuance'}
            </p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='font-bold text-black '>Date of Expiry</p>
            <p className='font-bold text-[#D37E25]'>
              {dateOfExpiry || 'Enter Date of Expiry'}
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-between h-full '>
          <p className='font-bold text-black'>
            ID :{' '}
            <span className='text-[#D37E25]'>{idNumber || 'Enter ID'}</span>
          </p>
          <QRCode
            title='GeeksForGeeks'
            value={idNumber}
            bgColor='#00467A'
            fgColor='white'
            size={120}
          />
          <Image width={90} height={18} alt='logo' src='/aml-logo.png' />
        </div>
      </div>
    </>
  );
};

export default IdCard;
