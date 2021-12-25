/* eslint-disable @typescript-eslint/no-unused-vars */
import React ,{useRef} from 'react';
import FormElement from './FormElement';


import styles from "./styles.module.css";
import '../../assets/styles/form.scss';
import { FormElementType, FormProps } from '../../types/form';

function Form({ containerClass, id, title, formElements, submitValue, handleSubmit }: FormProps) {
//  let signRef= useRef({});
// let sigPad = {};
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
        
        <div className="form-element">
          <button className="default--button">{submitValue}</button>
          {/* <div id='
          signArea'>
            <SignatureCanvas  penColor='white'
             canvasProps={{width: 250, height: 100, className: 'sigCanvas'}} />,
  
             {document.getElementById('react-container')}
          </div> */}
          
          
          
          
        </div>
      </form>
      
    </div>
  );
}

export default Form;
