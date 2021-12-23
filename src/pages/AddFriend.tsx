import React, { FormEvent, useContext, useState } from 'react';
import FriendContext from '../contexts/FriendContext';
import Form from "../components/form/Form";
import { ADD_FRIEND } from '../actions/actions';
import { FormElementType } from '../types/form';

const AddFriend = () => {
  const { dispatch } = useContext(FriendContext);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const formElements: FormElementType[] = [
    {
      labelValue: "Name",
      type: "text",
      id: "name",
      placeholder: "Enter name",
      state: name,
      setState: setName,
      handleBlur: () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        // if (!validator.isAlpha(e.target.value)) {
        //   setError('Invalid name');
        // } else setError('');
      }
    },
    {
      labelValue: "Age",
      type: "number",
      id: "age",
      placeholder: "Enter age",
      state: age,
      setState: setAge,
      handleBlur: () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        // if (!validator.isAlpha(e.target.value)) {
        //   setError('Invalid name');
        // } else setError('');
      }
    },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch({
      type: ADD_FRIEND,
      payload: {
        friend: {
          name: name,
          age: Number(age),
          id: Math.random().toString(),
        },
      },
    });
  };

  return (
    <Form
      containerClass="add-friend-container"
      id="add-friend-form"
      title="Add Friend"
      formElements={formElements}
      submitValue="Add Friend"
      handleSubmit={handleSubmit}
    />
  );
};

export default AddFriend;