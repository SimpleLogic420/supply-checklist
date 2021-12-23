import React ,{FormEvent, useContext, useState} from 'react';
import Form from '../../components/form/Form';
import { FormElementType } from '../../types/form';
import validator from 'validator';
import WorkerContext from '../../contexts/WorkerContext';
import { ADD_WORKER } from '../../state/actions/actions';
import '../../assets/styles/add-worker.scss';

const AddWorker = () => {
  const [name, setName] = useState('');
  const [workPlace, setWorkPlace] = useState('');
  const [date, setDate] = useState('');
  const { dispatch } = useContext(WorkerContext);
  
  const handleSubmit = (e:FormEvent) => {
      e.preventDefault();
      const workerInfo={
          name,
          workPlace,
          date
      };
      dispatch({type:ADD_WORKER,payload:{worker:workerInfo}});
  };

  const formElements: FormElementType[] = [
    {
      labelValue: "Name",
      type: "text",
      id: "name",
      placeholder: "Enter Name",
      state: name,
      setState: setName,
      handleBlur: (e, setError) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        if (!validator.isAlpha(e.target.value)) {
          setError('Invalid name');
        } else setError('');
      }
    },
    {
      labelValue: "Work Place",
      type: "text",
      id: "work-place",
      placeholder: "Enter Work Place",
      state: workPlace,
      setState: setWorkPlace,
      handleBlur: (e, setError) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        if (!validator.isAlpha(e.target.value)) {
          setError('Invalid Work Place');
        } else setError('');
      }
    },
    {
      labelValue: "Date",
      type: "text",
      id: "date",
      placeholder: "Enter Date",
      state: date,
      setState: setDate,
      handleBlur: (e, setError) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        if (!e.target.value) {
          setError('Invalid Date');
        } else setError('');
      }
    }
  ];
  return (
    <Form
      containerClass="add-worker-container"
      id="Worker-login-form"
      title="Worker Login"
      formElements={formElements}
      submitValue="Worker Login"
      handleSubmit={handleSubmit}
    />
  );
};

export default AddWorker;
