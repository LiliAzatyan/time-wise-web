import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import Modal from 'react-modal';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarModal = ({ isOpen, onClose, onSelectDay }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        onSelectDay(date);
    };

    const handleConfirm = () => {
        onClose();
    };

    return (
        <>
            <style>
                {`
                    .custom-datepicker .react-datepicker__header {
                        background-color: #68B37A;
                        color: white;
                    }

                    .custom-datepicker .react-datepicker__day--selected,
                    .custom-datepicker .react-datepicker__day--keyboard-selected {
                        background-color: #68B37A !important;
                        color: white !important;
                    }

                    .custom-datepicker .react-datepicker__day--today {
                        font-weight: bold;
                        color: #68B37A;
                    }

                    .custom-datepicker .react-datepicker__day:hover {
                        background-color: #68B37A;
                        color: white;
                    }

                    .custom-datepicker .react-datepicker__day {
                        border-radius: 50%;
                    }
                `}
            </style>
            <Modal
                isOpen={isOpen}
                onRequestClose={onClose}
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -90%)',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
                        maxWidth: '400px',
                        overflow: 'hidden',
                    }
                }}
            >

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '20px'
                }}>
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        inline
                        calendarClassName="custom-datepicker"
                    />
                </div>
                <button onClick={handleConfirm} style={{
                    display: 'block',
                    margin: '0 auto',
                    backgroundColor: '#68B37A',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '16px'
                }}>
                    Confirm
                </button>
            </Modal>
        </>
    );
};

export default CalendarModal;
