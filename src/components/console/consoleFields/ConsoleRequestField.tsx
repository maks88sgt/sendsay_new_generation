import React from 'react';
import {FieldProps} from '../../login/loginFields/FieldPropType';

export const ConsoleRequestField = (props: FieldProps): JSX.Element => {
  const {input, meta} = props;

  const errorColor: React.CSSProperties = {};
  const errorBorder: React.CSSProperties = {};
  if (meta.error && meta.touched) {
    errorColor.color = 'red';
    errorBorder.borderColor = 'red';
  }

  return (<>
    <span style={errorColor} className={'consoleBody_leftPart_label'}>Request</span>
    <textarea {...input} className={'consoleBody_leftPart_textarea'}/>
  </>);
};