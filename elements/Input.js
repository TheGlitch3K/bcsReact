import { DatePicker, Form, Select, TimePicker } from "antd"
import { Controller } from "react-hook-form"
import { AppInput,AppTextArea,AppCheckBox, DangerText } from "./Common"
import styled from "styled-components"
import { useRef,useEffect } from "react"
import { DateUtility } from "@utility/date"


const AntInputColumn = styled(Form.Item)`
margin-bottom:0;
.ant-picker {
    background: #1c171a
}
.ant-select-selector{
    background-color: #171315 !important;
    border: 1px solid #2B292A !important;
}
.ant-input {
    background-color: #171315 !important;
    border: 1px solid #2B292A !important;
    border-radius: 2px !important;
}
.ant-picker {
    background-color: #171315 !important;
    border: 1px solid #2B292A !important;   
}
label {
    color:white;
}
.ant-picker {
    width:100%
}
.ant-select-selection-item {
    color:white;
}
textarea {
    color:white;
}
  
`
export function FormTimeField({
    control,
    name,
    defaultValue = "",
    placeholder,
    required,
    errors,
    label,
    type,
    hint,
    ...rest
}) {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue}
            render={(props) => (
                <AntInputColumn
                    label={label}
                    tooltip={{ icon: required ? <>*</> : <></> }}
                    rules={[{ required, message: errors?.message }]}
                >
                    <TimePicker
                        status={errors && "error"}
                        value={props.field.value}
                        onChange={(dayJS) => props.field.onChange(dayJS)}
                        format="HH:mm"
                        {...rest}
                    />
                    {errors && <DangerText className="danger">{errors?.message || hint}</DangerText>}
                </AntInputColumn>
            )}
        />
    )
}

export function FormDateField({
    control,
    name,
    defaultValue = "",
    placeholder,
    required,
    errors,
    label,
    type,
    hint,
    disabledDate,
    ...rest
}) {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue}
            render={(props) => (
                <AntInputColumn
                    label={label}
                    tooltip={{ icon: required ? <>*</> : <></> }}
                    rules={[{ required, message: errors?.message }]}
                >
                    <DatePicker
                        status={errors && "error"}
                        value={props.field.value}
                        onChange={(dayJS) => props.field.onChange(dayJS)}
                        {...rest}
                    />
                    {errors && <DangerText className="danger">{errors?.message || hint}</DangerText>}
                </AntInputColumn>
            )}
        />
    )
}

export function FormSelectionField({
    control, name, placeholder, required, errors, children, onChange, showSearch, onSearch,
    label, type, hint, options, mode, defaultValue, ...rest
}) {
    return (
        <Controller
            control={control}
            name={name}
            // defaultValue={defaultValue || []}
            render={props => (
                <AntInputColumn
                    label={label}
                    tooltip={{ icon: required ? <DangerText clas>*</DangerText> : <></> }}
                    rules={[{ required, message: errors?.message, icon: required ? <>*</>:<></> }]}
                >
                    <div className="d-flex"> <Select
                        placeholder={placeholder}
                        mode={mode || "single"}
                        showSearch={showSearch}
                        filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                        onSelect={(data) => {
                            props.field.onChange(data)
                            if (onChange && onChange) {
                                onChange(data)
                            }
                        }}
                        onSearch={onSearch}
                        // suffixIcon={<CaretDown size={22} color="#345893" />}
                        {...props.field}
                        {...rest}
                        options={options}
                        showArrow
                    />
                        <>{children}</>
                    </div>
                    {errors && <DangerText clas>{errors?.message || hint}</DangerText>}

                </AntInputColumn>
            )}
        />
    )
}


export function FormTextFormField({
    control,
    name,
    defaultValue = "",
    placeholder,
    required,
    errors,label,ref,
    ...rest
}) {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue}
            render={props => (
                <AntInputColumn 
                label={label}
                tooltip={{ title: 'Tooltip with customize icon', icon: required ? <>*</>:<></> }}                      
                rules={[{ required: required, message: errors?.message }]}
                >
                <AppInput
                    status={errors && "error"}
                    placeholder={placeholder}
                    value={props.field.value}
                    onChange={e => props.field.onChange(e.target.value)}
                    {...rest}
                />
                                    {errors && <DangerText clas>{errors?.message || hint}</DangerText>}
                </AntInputColumn>
            )}
        />
    )
}

export function FormTextAreaFormField({
    control,
    name,label,
    defaultValue,required,error,
    placeholder,
    ...rest
}) {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={defaultValue}
            render={props => (
                <AntInputColumn 
                label={label}
                tooltip={{ title: 'Tooltip with customize icon', icon: required ? <>*</>:<></> }}                      
                rules={[{ required, message: error?.message }]}
                >
                <AppTextArea
                    placeholder={placeholder}
                    value={props.field.value}
                    onChange={e => props.field.onChange(e.target.value)}
                    {...rest}
                />
                </AntInputColumn>
            )}
        />
    )
}


export const CheckboxFormField = ({
    required,error,label,text,disabled,hint,
    control,name,width,defaultValue,fieldProps,fieldClass,...rest
}) => (
    <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={props => (
            <AntInputColumn 
                label={label}
                tooltip={{ title: 'Tooltip with customize icon', icon: <>*</> }}                      
                rules={[{ required: required, message: error?.message }]}
                >

                <AppCheckBox
                    className="mr-2"
                    name={name}
                    value={props.field.value}
                    label={text}
                    disabled={disabled}
                    onChange={e => props.field.onChange(e.target.value)}
                    {...rest}
                />
                {hint && <DangerText clas>{hint}</DangerText>}
            </AntInputColumn>
        )}
    >
    </Controller>
);
