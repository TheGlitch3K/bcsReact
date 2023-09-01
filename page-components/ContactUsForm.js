import { FormDateField, FormSelectionField, FormTextAreaFormField, FormTextFormField, FormTimeField, } from '@elements/Input';
import { NotificationType, luggageOptions, vehiclesOptions } from '@utility/constants';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Button, Form,Spin } from 'antd';
import { DangerText } from '@elements/Common';
import { BookingService, ContactUsService } from '@utility/services';
import { Spinner } from '@elements/Spiner';
import { Notification } from './Notification';



const ContactUsSchema = yup.object().shape({
    name: yup.string().required('*name is required'),
    email: yup.string().email().required('*email is required'),
    phone_no: yup.string().required('*phone no is required'),
    message: yup.string()
})

export function ContactUsForm({onClose}) {
    const [loading, setLoading] = useState(false)
    const {
        control,
        handleSubmit,reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(ContactUsSchema),
    })

    const submit = async (formData) => {
        setLoading(true)
        try {
          await ContactUsService.contactUs(formData)
          Notification("Your Form has been submited!", NotificationType.success)
        } catch (error){
            Notification("Something went wrong!", NotificationType.error)
        console.log("error", error)
        } finally {
          setLoading(false)
          reset({})
          onClose && onClose()
        }
      }

    return (
        <Form layout="vertical ">
            <div className="row">
                <Form.Item className='col-12 px-1'>
                    <FormTextFormField
                        control={control}
                        label="Name"
                        name="name"
                        errors={errors?.name}
                        defaultValue="" />
                </Form.Item>
                <Form.Item className='col-12 px-1'>
                <FormTextFormField
                        control={control}
                        label="Email"
                        name="email"
                        errors={errors?.email}
                        defaultValue="" />
                </Form.Item>
                <Form.Item className='col-12 px-1'>
                    <FormTextFormField
                        control={control}
                        label="Phone No"
                        name="phone_no"
                        errors={errors?.phone_no}
                        defaultValue="" />
                </Form.Item>
                <Form.Item className='col-12 px-1'>
                    <FormTextAreaFormField
                        control={control}
                        label="Message"
                        name="message"
                        errors={errors?.message}
                        defaultValue="" />
                </Form.Item>
                <button type="submit" onClick={handleSubmit(submit)} className="btn submit_btn"> Submit {loading ? <Spinner /> : <i className="fa-solid fa-arrow-right-long ms-1"></i>}</button>
            </div>
        </Form>
    )
}