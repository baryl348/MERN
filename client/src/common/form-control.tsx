import React from 'react'
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from 'redux-form';

type FormControlsParamsType = {
    meta: WrappedFieldMetaProps
}

const FormControl: React.FC<FormControlsParamsType> = ({ meta: { touched, error }, children }) => {
    const hasError = touched && error;
    return (
        <div >
            <div>
                {children}
            </div>
            {hasError && <span><div ></div><div>{error}</div></span>}
        </div>
    )
}
export const Input: React.FC<WrappedFieldProps> = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}
export function createField<formKeysType extends string>(placeholder: string, name: formKeysType,
    validators: Array<any>, component: React.FC<WrappedFieldProps>, type: string, props = {},) {
    return <Field placeholder={placeholder} name={name}
        validate={validators}
        component={component}
        type={type}
        {...props}
    />
}