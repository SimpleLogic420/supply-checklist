/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FormEvent, useContext, useState } from 'react';
import Form from '../../components/form/Form';
import { FormElementType } from '../../types/form';
import validator from 'validator';
import WorkerContext from '../../contexts/WorkerContext';
import { ADD_WORKER } from '../../state/actions/actions';
import '../../assets/styles/add-worker.scss';
import { useNavigate } from 'react-router';
// import SignatureCanvas from 'react-signature-canvas';
import SignaturePad from "react-signature-canvas";
import { Link } from 'react-router-dom';

const AddWorker = () => {
  const [name, setName] = useState('');
  const [workPlace, setWorkPlace] = useState('');
  const [date, setDate] = useState('');
  const { dispatch } = useContext(WorkerContext);
  const [signature,setSignature]=useState("");
  // const [signatureList,setSignatureList]=useState([]);
 // eslint-disable-next-line prefer-const
//  let signRef=useRef({});
 // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
 const signCanvas = React.useRef() as React.MutableRefObject<any>
  const navigate = useNavigate();
   


  // const handleClear = () => {
  //   // event.preventDefault();
  //   const workerInfo = {
  //     name,
  //     workPlace,
  //     date,
  //   };
  //   dispatch({ type: ADD_WORKER, payload: { worker: workerInfo } });
  //   navigate('/equipments');
  // };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const workerInfo = {
      name,
      workPlace,
      date,
    };
    dispatch({ type: ADD_WORKER, payload: { worker: workerInfo } });
    navigate('/equipments');
  };

  const formElements: FormElementType[] = [
    {
      labelValue: 'Name',
      type: 'text',
      id: 'name',
      placeholder: 'Enter Name',
      state: name,
      setState: setName,
      handleBlur: (e, setError) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        if (!validator.isAlpha(e.target.value)) {
          setError('Invalid name');
        } else setError('');
      },
    },
    {
      labelValue: 'Work Place',
      type: 'text',
      id: 'work-place',
      placeholder: 'Enter Work Place',
      state: workPlace,
      setState: setWorkPlace,
      handleBlur: (e, setError) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        if (!validator.isAlpha(e.target.value)) {
          setError('Invalid Work Place');
        } else setError('');
      },
    },
    {
      labelValue: 'Date',
      type: 'text',
      id: 'date',
      placeholder: 'Enter Date',
      state: date,
      setState: setDate,
      handleBlur: (e, setError) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        if (!e.target.value) {
          setError('Invalid Date');
        } else setError('');
      },
    },
  ];
  async function  clear(){
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    await signCanvas.current.clear();
  }
  async function  save(){
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
   const tool=await signCanvas.current.toDataURL();
   const toolStr=JSON.stringify({worker:name,signature:tool.toString()});
   setSignature(toolStr);
  //  const workerList=signatureList
  //  const obj={key:name,signature:tool}
// workerList.push()
  //  setSignatureList()
   console.log(toolStr);
   
   
    
  }
  return (
    <div><Form
    containerClass="add-worker-container"
    id="Worker-login-form"
    title="Worker Login"
    formElements={formElements}
    submitValue="Worker Login"
    handleSubmit={handleSubmit}
    
  />
  {/* <div className='signDiv'>
  <p><small>Sign Here To Had Signature:</small></p>
        {<SignaturePad
        
  ref={signCanvas}
  
          penColor='black'
           backgroundColor="white"
          // canvasProps={{width: 250, height: 100,className:"signPad" }}
          />}
          <br/>
         <button onClick={clear}>Clear</button>
         <button onClick={save}>Save</button>
{signature!==""?<div className='showUrl'><p><code>{signature}</code></p></div>
:""};
  </div> */}
  
  </div>
    
  );
};

export default AddWorker;
