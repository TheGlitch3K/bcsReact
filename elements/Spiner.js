import { Spin } from 'antd'
import React from 'react'
import  styled  from 'styled-components'

const Loader = styled(Spin)`
.ant-spin-dot-item {
    background-color:white !important;
}
`
export const Spinner = () => {
  return (
    <Loader />
  )
}