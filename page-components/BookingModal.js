import { Modal } from 'antd'
import React from 'react'
import { BookingForm } from './BookingForm'

export const BookingModal = ({ open = true, onClose }) => {
    return (
        <Modal width={800} bodyStyle={{ padding: 0 }} footer={null} open={open} onCancel={onClose}><div className="common_container">
            <div className="Pop_up_form">
                <BookingForm onClose={onClose}/>
            </div>
        </div>
        </Modal>
    )
}

