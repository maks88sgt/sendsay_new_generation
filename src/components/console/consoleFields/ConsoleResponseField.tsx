import React from 'react';
import {FieldInputProps, FieldMetaState} from 'react-final-form';

export type ConsoleResponseFieldPropsType = {
    requestSuccess: boolean;
    response: string | null;
    input: FieldInputProps<string>;
    meta: FieldMetaState<any>;
}

export const ConsoleResponseField = (props: ConsoleResponseFieldPropsType): JSX.Element => {
  const {
    requestSuccess, response, input, meta,
  } = props;

  const errorColor: React.CSSProperties = {};
  const errorBorder: React.CSSProperties = {};
  if ((meta.error && meta.touched) || (response && !requestSuccess)) {
    errorColor.color = 'red';
    errorBorder.borderColor = 'red';
  }

  return (<>
    <span style={errorColor} className={'consoleBody_rightPart_label'}>Response</span>
    <textarea {...input} readOnly={true} style={errorBorder} className={'consoleBody_rightPart_textarea'}/>
  </>);
};