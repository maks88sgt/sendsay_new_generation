import {Resizable} from 're-resizable';
import React from 'react';
import {Field, Form} from 'react-final-form';
import {
  composeValidators, JSONValidator, requiredValidator,
} from '@utils/fieldValidators';
import loader from '@icons/loader.svg';
import {ConsoleRequestField} from '../consoleFields/ConsoleRequestField';
import {ConsoleResponseField} from '../consoleFields/ConsoleResponseField';
import dots from '@icons/dots.svg';
import format from '@icons/format.svg';
import {StyledButton} from '@shared/styledComponents/styledComponents';
import {JSONformater} from '@utils/JSONformater';

export type ConsolePageConsolePropsType = {
    isFetching: boolean;
    request: null | string;
    response: null | string;
    requestSuccess: boolean;
    sendRequest: (request: string) => void;
}

export type FormValuesType={
    request: string;
    response:string;
}

export const ConsoleBody = (props: ConsolePageConsolePropsType) => {
  const {
    isFetching, request, response, requestSuccess, sendRequest,
  } = props;

  const sendLabel = isFetching ? <img src={loader} alt='Loader'/> : 'Send';

  // @ts-ignore
    return (
    <Form onSubmit={(values: FormValuesType) => sendRequest(JSONformater(values.request))}
      initialValues={{request}}
      render={({
                   // @ts-ignore
        handleSubmit, form, values,
      }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className={'consoleBody'}>
              <Resizable
                className={'consoleBody_leftPart'}
                defaultSize={{
                  width: '50%',
                  height: '',
                }}
                maxWidth="100%"
                minWidth="1"
              >
                <Field name="request"
                  component={ConsoleRequestField as any}
                  initialValue={request as any}
                  validate={composeValidators(requiredValidator, JSONValidator)}>

                </Field>
              </Resizable>
              <div className={'consoleBody_rightPart_separator'}><img src={dots} alt={'separator'}/></div>
              <div className={'consoleBody_rightPart'}>
                <Field name="response"
                  initialValue={response as string}
                  component={ConsoleResponseField as any}>
                  {({input, meta}) => {
                    return <ConsoleResponseField response={response}
                      requestSuccess={requestSuccess} input={input}
                      meta={meta}/>;
                  }}
                </Field>
              </div>
            </div>
            <div className={'consoleFooter'}>
              <StyledButton>
                {sendLabel}
              </StyledButton>
              <span className={'consoleFooter_formatter'} onClick={() => {
                  //@ts-ignore
                form.reset({request: JSONformater(values.request), response: response});
              }}><img src={format} alt={'format'}/>Reformat</span>
            </div>
          </form>);
      }}/>);
};

