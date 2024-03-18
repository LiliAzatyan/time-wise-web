import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, { useState } from "react";
import { memo } from "react";
import moment from 'moment';
import './time.css';


const localizer = momentLocalizer(moment);


const TimePlanner = () => {
    const [tasks,] = useState([]);

    const [modalOpen, setModalOpen] = useState(false);

    const [selectedDate, setSelectedDate] = useState(null);


    const handleDateClick = (date) => {
        setSelectedDate(date);
        setModalOpen(true);
    };


    const closeModal = () => {
        setModalOpen(false);
    };


    const handleEventClick = (event) => {
        setSelectedDate(event.start);
        setModalOpen(true);
    };

    return (
        <div className="time-planner-container">
            {}
            {modalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h3>{moment(selectedDate).format('MMMM Do, YYYY')}</h3>
                        {selectedDate && tasks.filter(task =>
                            moment(task.start).isSame(selectedDate, 'day')
                        ).length === 0 ? (
                            <p>No tasks scheduled for this day.</p>
                        ) : (
                            <ul>
                                {tasks.filter(task =>
                                    moment(task.start).isSame(selectedDate, 'day')
                                ).map(task => (
                                    <li key={task.id}>{task.title}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            )}

            <div className="calendar-container">
                <Calendar
                    localizer={localizer}
                    events={tasks}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    selectable={true}
                    onSelectSlot={(slotInfo) => handleDateClick(slotInfo.start)}
                    onSelectEvent={handleEventClick}
                    dayPropGetter={(date) => ({
                        className: 'hover-effect',
                    })}
                />
            </div>
        </div>
    );
}
export default memo(TimePlanner);