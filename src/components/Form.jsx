import React, { useState } from 'react';

const Form = ({ formSchema }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the field value based on its name attribute
    }));
  };

  return (
    <div className="form mt-[1rem] flex gap-[8rem]">
      <div className="form-content border-2 border-solid border-black w-[20rem] mt-[2rem] padding-[1rem] dark:bg-slate-400">
      <h1 className=' font-bold text-3xl pl-[7rem] pt-[2rem] ml-[1rem] dark:text-white'>Form</h1>
      <form className='mt-[2rem] ml-[2rem] '>
        {formSchema && formSchema.length > 0 ? (
          formSchema.map((el, index) => (
            <div key={index}>
              <label>{el.label}:</label>
              {el.type === 'text' || el.type === 'email' ? (
                <input 
                  className='border-black border-2 mb-[2rem] ml-[1rem] rounded pl-[1rem]'
                  type={el.type}
                  placeholder={el.placeholder}
                  name={el.name}
                  required={el.required}
                  value={formData[el.name] || ''} // Bind the value to state
                  onChange={handleChange} // Attach onChange handler
                />
              ) : el.type === 'select' ? (
                <select
                  className='border-black border-2 mb-[2rem] ml-[1rem] rounded pl-[1rem] w-[12rem]'
                  name={el.name}
                  required={el.required}
                  value={formData[el.name] || ''} // Bind the value to state
                  onChange={handleChange} // Attach onChange handler
                >
                  <option value="">Select an option</option>
                  {el.options.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <p>Unsupported field type: {el.type}</p>
              )}
            </div>
          ))
        ) : (
          <p>No form schema available.</p>
        )}
        <button className='mt-[3rem] ml-[5rem] w-[6rem] border-2 border-black rounded-md '>Submit</button>
      </form>
      </div>
      <div className="data-content mt-[2rem] dark:text-white">
      <h1 className='text-2xl font-bold '>Form Data:</h1>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Form;