import React from "react";

import "./PlaceForm.css";
import Input from "./../../shared/components/FormElements/Input";
import Button from './../../shared/components/FormElements/Button/Button';
import { useForm } from './../../shared/hooks/form-hook';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "./../../util/validators";



export const NewPlace = () => {
  const [formState, inputHandler]=useForm({
    title:{
      value:'',
      isValid: false
    },
    address: {
      value: '',
      isValid: false
    }
  },
  false)
 

  const placeSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs)
  }
  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        errorText="please enter a valid title here"
      />
      <Input
        id="description"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_MINLENGTH(5)]}
        onInput={inputHandler}
        errorText="please enter a valid description (at least 5 characters). "
      />
      <Input
        id="address"
        element="input"
        type="text"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={inputHandler}
        errorText="please enter a valid Address here"
      />
      <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
    </form>
  );
};
