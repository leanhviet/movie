import React, { useState } from 'react';

const Select = ({dataSelect}: any) => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-40">
      <select
        placeholder='123'
        id="select"
        className="block dark:bg-[#383838] bg-[#f0f0f0] w-full text-ellipsis border-none py-2 px-3 border rounded-md shadow-sm focus:ring focus:ring-indigo-300 focus:border-indigo-300"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {
          dataSelect.map((item, index)=>(<option key={`SELECT_ITEM:${index}`} value={item.value}>{item.name}</option>))
        }
      </select>
    </div>
  );
};

export default Select;
