// import './index.css';
import './App.css';
import React, { useState } from 'react';
import ReactJson from 'react-json-view';
import formSchemaData from './components/sample.json';
import Form from './components/Form';
import Darkmode_btn  from './components/Darkmode_btn';
import { DarkModeProvider } from './Darkmodecontext';

function App() {
  const [formSchema, setFormSchema] = useState(formSchemaData);
  const handleEdit = (edit) => {
    console.log("Edited JSON:", edit.updated_src);
    setFormSchema(edit.updated_src); 
  };

  const handleAdd = (add) => {
    console.log("Added JSON:", add.updated_src);
    setFormSchema(add.updated_src); 
  };

  const handleDelete = (del) => {
    console.log("Deleted JSON:", del.updated_src);
    setFormSchema(del.updated_src); 
  };

  return (
    <DarkModeProvider>

    <div className="App dark:bg-slate-600 h-screen">
      <h1 className='heading text-2xl font-bold ml-[30rem] mb-[-1rem]'>JSON Data to form converter</h1>
 <Darkmode_btn ></Darkmode_btn>
      <div className="content flex gap-7">
      <div className="  dark:bg-slate-400 editor_box border-2 border-black border-solid h h-[35rem] w-[25rem] overflow-y-scroll mt-10 ml-20">
        <ReactJson
          // theme="monokai" 
          className="dark:text-white"
          src={formSchema} 
          onEdit={handleEdit} 
          onAdd={handleAdd}  
          onDelete={handleDelete} 
          enableClipboard={true}  
          displayDataTypes={false} 
        /> 
      </div>
 
 <Form formSchema={formSchema}></Form>
 </div>
    </div>
    </DarkModeProvider>

  );
}

export default App;
