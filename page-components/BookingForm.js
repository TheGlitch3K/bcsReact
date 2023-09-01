import { FormDateField, FormSelectionField, FormTextFormField, FormTimeField, } from '@elements/Input';
import { NotificationType, luggageOptions, vehiclesOptions } from '@utility/constants';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Form } from 'antd';
import { DangerText } from '@elements/Common';
import { PlaceInputBox } from '@elements/PlaceInput';
import { BookingService } from '@utility/services';
import { Spinner } from '@elements/Spiner';
import { HeaderText } from '@elements/Common';
import { getStripe } from '../lib/getStripe'
import { Notification } from './Notification';


const BookingSchema = yup.object().shape({
    first_name: yup.string().required('first name is required'),
    last_name: yup.string().required('last name is required'),
    email: yup.string().email().required('email is required'),
    phone_number: yup.string().required('phone number is required'),
    ride_date: yup.string().required('pickup date is required'),
    pickup_time: yup.string().required('pickup time is required'),
    number_of_passengers: yup.string().required('passengers is required'),
    pickup_location: yup.string().required('pickup location is required'),
    dropoff_location: yup.string().required('dropoff location is required'),
    luggage: yup.string().required('luggage is required'),
    vehicle_type: yup.string().required('vehicle type is required'),
})

export function BookingForm({onClose}) {
    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [cost, setCost] = useState("")
    
    const {
        control,
        handleSubmit, watch, setValue,reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(BookingSchema),
    })
    const pickup_location = watch("pickup_location");
    const dropoff_location = watch("dropoff_location");
    const vehicle_type = watch("vehicle_type");



      const calculateCost = async() => {
        try {
            const cost =   await BookingService.calculateCost({pickup_location,dropoff_location,vehicle_type})
            setCost(Number(cost.cost))
            setError("")
           } catch (error){
            setCost("")
            setError(error.error)
           }
      }

       useEffect(() => {
        if(pickup_location && dropoff_location && vehicle_type) {
          calculateCost()
        }
      },[pickup_location,dropoff_location,vehicle_type])

      const handleCheckout = async(formData) => {
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout({
          lineItems: [
            {
              price: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
              quantity: 1,
            },
          ],
          successUrl:"http://localhost:3000/booking/",
          mode: 'subscription',
          customerEmail: 'customer@email.com',
        })
      }

      const submit = async (formData) => {
        handleCheckout()
        if(error) {
          Notification(error,NotificationType.danger)
          return
        }
        setLoading(true)
        try {
          await BookingService.bookRide(formData)
          Notification("Your booking has been confirmed!",NotificationType.success)
        } catch (error){
        console.log("error", error)
        Notification("Something Went Wrong",NotificationType.error)
        } finally {
          setLoading(false)
        //   reset({})
          onClose && onClose()
        }
      }

    return (
        <Form layout="vertical ">
            <div className="row">
            <Form.Item className='col-md-6 col-sm-12 px-1'>
                    <FormTextFormField
                        control={control}
                        label="First Name"
                        name="first_name"
                        errors={errors?.first_name}
                        defaultValue="" />
                </Form.Item>
                <Form.Item className='col-md-6 col-sm-12 px-1'>
                    <FormTextFormField
                        control={control}
                        label="Last Name"
                        name="last_name"
                        errors={errors?.last_name}
                        defaultValue="" />
                </Form.Item><Form.Item className='col-md-6 col-sm-12 px-1'>
                    <FormTextFormField
                        control={control}
                        label="Email"
                        name="email"
                        errors={errors?.email}
                        defaultValue="" />
                </Form.Item><Form.Item className='col-md-6 col-sm-12 px-1'>
                    <FormTextFormField
                        control={control}
                        label="Phone No"
                        name="phone_number"
                        errors={errors?.phone_number}
                        defaultValue="" />
                </Form.Item>
                <Form.Item className='col-md-6 col-sm-12 px-1'>
                    <FormDateField
                        control={control}
                        label="Pickup date"
                        name="ride_date"
                        errors={errors?.ride_date}
                        defaultValue="" />
                </Form.Item>
                <Form.Item className='col-md-6 col-sm-12 px-1'>
                    <FormTimeField
                        control={control}
                        label="Pickup Time"
                        name="pickup_time"
                        errors={errors?.pickup_time}
                        defaultValue="" />
                </Form.Item>
                <Form.Item className='col-md-6 col-sm-12 px-1'>
                    <label className="form-label">Pickup Location</label>
                    <PlaceInputBox name="pickup_location" defaultValue={pickup_location} onChange={(value) => setValue("pickup_location", value)} />
                    {errors && <DangerText className="danger">{errors?.pickup_location?.message}</DangerText>}
                </Form.Item>
                <Form.Item className='col-md-6 col-sm-12 px-1'>
                    <label htmlFor="dropoff_location" className="form-label">Dropoff Location</label>
                    <PlaceInputBox name="dropoff_location" defaultValue={dropoff_location} onChange={(value) => setValue("dropoff_location", value)} />
                    {errors && <DangerText className="danger">{errors?.dropoff_location?.message}</DangerText>}
                </Form.Item>
                <Form.Item className='col-md-6 col-sm-12 px-1'>
                    <FormTextFormField
                        control={control}
                        label="Number of Passengers"
                        name="number_of_passengers"
                        errors={errors?.number_of_passengers}
                        defaultValue="" />
                </Form.Item>
                <Form.Item className='col-md-6 col-sm-12 px-1'>
                    <FormSelectionField
                        control={control}
                        label="Luggage"
                        name="luggage"
                        options={luggageOptions}
                        errors={errors?.luggage}
                        defaultValue="" />
                </Form.Item>
                <Form.Item className='col-md-6 col-sm-12 px-1'>
                    <FormSelectionField
                        control={control}
                        label="Vehicle type"
                        name="vehicle_type"
                        options={vehiclesOptions}
                        errors={errors?.vehicle_type}
                        defaultValue="" />
                </Form.Item>
                <Form.Item className='col-md-6 col-sm-12 px-1 align-items-end d-flex'>
                    <div className='d-flex flex-column align-items-end'>
                    {cost && <HeaderText>Cost: {cost.toFixed(2)}</HeaderText>}
                    {error && <DangerText>{error?.message}</DangerText>}
                    </div>
                </Form.Item>
                <button type="submit" onClick={handleSubmit(submit)} className="btn submit_btn"> Submit {loading ? <Spinner /> : <i className="fa-solid fa-arrow-right-long ms-1"></i>}</button>
            </div>
        </Form>
    )
}