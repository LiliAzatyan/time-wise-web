import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, { useState } from "react";
import { memo } from "react";
import moment from 'moment';
import './time.css';

const localizer = momentLocalizer(moment);

const TimePlanner = () => {
    const [tasks,] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [clickedDate, setClickedDate] = useState(null);

    const handleDateClick = (date) => {
        setSelectedDate(date);
        setClickedDate(date);
    };

    const today = new Date();

    return (
        <div>
            <div className="navbar">
                Calendar
            </div>

            <div className="content-container">
                <div className="tasks-container">
                    <h2>Tasks</h2>
                    {selectedDate && tasks.filter(task =>
                        moment(task.start).isSame(selectedDate, 'day')
                    ).length === 0 ? (
                        <p>No tasks scheduled for this day.</p>
                    ) : (
                        <ul>
                            {tasks.filter(task =>
                                moment(task.start).isSame(selectedDate, 'day')
                            ).map(task => (
                                <li key={task.id} className={moment(task.start).isSame(clickedDate, 'day') ? 'selected' : ''}>{task.title}</li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="calendar-container">
                    <div className="calendar-container" style={{ height: '690px' }}>
                        <Calendar
                            localizer={localizer}
                            events={tasks}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: '100%' }}
                            selectable={true}
                            onSelectSlot={(slotInfo) => handleDateClick(slotInfo.start)}
                            dayPropGetter={(date) => {
                                if (moment(date).isSame(today, 'day')) {
                                    return {
                                        className: 'custom-day today hover-effect',
                                    };
                                }
                                return {
                                    className: 'custom-day hover-effect',
                                };
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(TimePlanner);
