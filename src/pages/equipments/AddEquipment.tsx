import React, { useState, FormEvent, useContext } from 'react';
import Form from '../../components/form/Form';
import validator from 'validator';
import { FormElementType } from '../../types/form';
import EquipmentContext from '../../contexts/EquipmentContext';
import { ADD_EQUIPMENT } from '../../state/actions/equipmentActions';
import { paramCase } from 'change-case';
import '../../assets/styles/add-equipment.scss';
import WorkerContext from '../../contexts/WorkerContext';

const AddEquipment = () => {
  const [name, setName] = useState('');
  const [fullQuantity, setFullQuantity] = useState(0);

  const { dispatch } = useContext(EquipmentContext);
  const { state: workerState } = useContext(WorkerContext);

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
      labelValue: 'Full Quantity',
      type: 'number',
      id: 'full-quantity',
      placeholder: 'Enter Full Quantity',
      state: fullQuantity,
      setState: setFullQuantity,
      handleBlur: (e, setError) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        if (!validator.isNumeric(e.target.value)) {
          setError('Invalid Quantity');
        } else setError('');
      },
    },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const equipment = {
      name,
      fullQuantity,
      currentQuantity: 0,
      id: paramCase(name),
      insertedBy: workerState.name,
    };
    dispatch({ type: ADD_EQUIPMENT, payload: { equipment } });
  };

  return (
    <Form
      containerClass="add-equipment-container"
      id="add-equipment-form"
      title="Add Equipment"
      formElements={formElements}
      submitValue="Add Equipment"
      handleSubmit={handleSubmit}
    />
  );
};

export default AddEquipment;
