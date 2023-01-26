import React, { useState, useContext } from "react";
import Input from "./../../shared/components/FormElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "./../../util/validators";
import { useForm } from "./../../shared/hooks/form-hook";
import Button from "./../../shared/components/FormElements/Button/Button";
import { AuthContext } from './../../shared/context/auth-context';

export const UserAuth = () => {
  const auth = useContext(AuthContext)
  const [isLogin, setIsLogin] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLogin) {
      setFormData(
        { ...formState.inputs,
            name: undefined },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLogin(!isLogin);
  };
  const userSignIn = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };
  return (
    <>
      <form className="place-form" onSubmit={userSignIn}>
        {!isLogin && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter your name"
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          element="input"
          type="email"
          label="E-mail"
          validators={[VALIDATOR_EMAIL()]}
          onInput={inputHandler}
          errorText="Please enter a valid email"
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          onInput={inputHandler}
          errorText="Please enter a valid password"
        />
        <Button
          type="submit"
          onClick={userSignIn}
          disabled={!formState.isValid}
        >
          {isLogin ? "Login" : "SIGNUP"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLogin ? "SIGNUP" : "LOGIN"}
      </Button>
    </>
  );
};
