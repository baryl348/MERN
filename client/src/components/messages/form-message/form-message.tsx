import { Field, Form, Formik } from 'formik'
import React from 'react'
import style from './formMessasge.module.scss'


const MessageForm = () => {
    return (<div className={style.container} >
        <Formik initialValues={{ textMessage: '' }} onSubmit={(values) => {
            setTimeout(() => {
                console.log(JSON.stringify(values, null, 2));

            }, 400);
        }}>
            {({ isSubmitting }) => (
                <div>
                    <Form>
                        <Field name='textMessage' placeholder='Введите сообщение' component='input' />
                        <button type='submit' disabled={isSubmitting}> Отправить </button>
                    </Form>
                </div>
            )}
        </Formik>
    </div>)
}
export default MessageForm