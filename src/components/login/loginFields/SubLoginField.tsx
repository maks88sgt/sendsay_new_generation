import React from 'react';
import {FieldProps} from './FieldPropType';

export const SubLoginField = (props: FieldProps) => {
  const {input} = props;

  return (<div className='formField'>
    <label>Login<span>Optional</span></label>
    <input {...input} type="text" placeholder="Sublogin"/>
  </div>);
};
