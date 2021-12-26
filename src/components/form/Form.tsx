/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React ,{useRef,useState} from 'react';
import FormElement from './FormElement';

import SignaturePad from "react-signature-canvas";

import styles from "./styles.module.css";
import '../../assets/styles/form.scss';
import { FormElementType, FormProps } from '../../types/form';

function Form({ containerClass, id, title, formElements, submitValue, handleSubmit }: FormProps) {
  const [signature,setSignature]=useState("");
  // const [signatureList,setSignatureList]=useState([]);
 // eslint-disable-next-line prefer-const
//  let signRef=useRef({});
 // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
 const signCanvas = React.useRef() as React.MutableRefObject<any>;
 async function  clear(){
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  await signCanvas.current.clear();
}
async function  save(){
 
 const tool=await signCanvas.current.toDataURL();
 const toolStr=JSON.stringify({signature:tool.toString()});
 setSignature(toolStr);
//  const workerList=signatureList
//  const obj={key:name,signature:tool}
// workerList.push()
//  setSignatureList()
 console.log(toolStr);
 
 
  
}
  return (
    <div className={containerClass}>
      <form id={id} className="form" onSubmit={handleSubmit}>
        <h2>{title}</h2>
        {formElements.map(({ labelValue, type, id, placeholder, state, setState, handleBlur }: FormElementType, i) =>
          <FormElement
            labelValue={labelValue}
            type={type}
            id={id}
            placeholder={placeholder}
            key={`${i}`}
            state={state}
            setState={setState}
            handleBlur={handleBlur}
          />
        )}
        <div className='signDiv'>
  <p><small>Sign Here To Had Signature:</small></p>
        {<SignaturePad
        
  ref={signCanvas}
  
          penColor='black'
           backgroundColor="white"
          // canvasProps={{width: 250, height: 100,className:"signPad" }}
          />}
          <br/>
         <button onClick={clear}>Clear</button>
         
{signature!==""?<div className='showUrl'><p><code>{signature}</code></p></div>
:""};
  </div>
        <div className="form-element">
          <button onClick={save} className="default--button">{submitValue}</button>
         
          
          
          
        </div>
      </form>
      
    </div>
  );
}

export default Form;
