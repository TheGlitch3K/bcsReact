import { useEffect, useState } from "react";
import { Input, List } from "antd";

import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import styled from "styled-components";
import { FormSelectionField } from "./Input";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMemo } from "react";

const searchSchema = yup.object().shape({
    searchPlace: yup.string().required('Pickup Date is required'),
})


export const PlaceInputBox = ({ name, defaultValue, onChange }) => {
    const {
        placePredictions,
        getPlacePredictions,
        isPlacePredictionsLoading,
    } = useGoogle({
        apiKey: process.env.GOOGLE_MAPS_API_KEY,
    });

    const {
        control,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(searchSchema),
    })

    const placeList = useMemo(()=>{
        return placePredictions?.map(item => {
            return {
                value:item.description,
                label:item.description
            }
        })
    },[placePredictions])

    const onSelect = (data) => {
        onChange(data)
    }

    useEffect(() => {
        setValue("searchPlace",defaultValue)
    }, [defaultValue])

    return (
            <FormSelectionField 
            control={control} 
            name="searchPlace" 
            options={placeList} 
            showSearch 
            loading={isPlacePredictionsLoading}
            onSearch={(val) => {getPlacePredictions({ input:val });setValue("searchPlace",val)}}
            onSelect={onSelect}
            />
    );
};