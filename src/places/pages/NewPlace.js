import React from 'react'
import './NewPlaces.css'
import Input from './../../shared/components/FormElements/Input';
export const NewPlace = () => {
  return <form className="place-form">
    <Input element="input" type="text" label="New Place"/>
  </form>
}
