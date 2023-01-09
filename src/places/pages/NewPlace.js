import React, { useCallback } from "react";
import "./NewPlaces.css";
import Input from "./../../shared/components/FormElements/Input";
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from "./../../util/validators";
export const NewPlace = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {}, []);
  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

  return (
    <form className="place-form">
      <Input
      id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        onInput={titleInputHandler}
        errorText="please enter a valid title here"
      />
      <Input
      id="description"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(5)]}
        onInput={descriptionInputHandler}
        errorText="please enter a valid description (at least 5 characters). "
      />
    </form>
  );
};
