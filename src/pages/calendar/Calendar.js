import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, { useState } from "react";
import { memo } from "react";
import moment from 'moment';
import './style.css';

const localizer = momentLocalizer(moment);

const TimePlanner = () => {
    const [tasks, setTasks] = useState([]);
    const [selectedDate, setSelectedDate] = useState(moment());

    const handleDateChange = date => {
        setSelectedDate(moment(date));
        const tasksForDate = tasks.filter(task => moment(task.start).isSame(date, 'day'));
        setTasksForDate(tasksForDate);
    };

    const setTasksForDate = tasksForDate => {
        setTasks(tasksForDate);
    };

    return (
        <div className="time-planner-container">
            <div className="task-list">
                <h2><span className="beautiful-task">Tasks</span><span className="line"></span></h2>
                <div className="task-list-header">
                    <div className="calendars">
                        <div className="headers">
                            <div className="dayx">{selectedDate.format("ddd")}</div>
                            <div className="dates">{selectedDate.format("D")}</div>
                            <div className="months">{selectedDate.format("MMMM")}</div>
                        </div>
                    </div>
                </div>
                <ul>
                    {tasks.length > 0 ? (
                        tasks.map(task => (
                            <li key={task.id}>
                                <span className="task-date">{moment(task.start).format("MMMM Do, YYYY")}</span>
                                <span className="task-title">{task.title}</span>
                            </li>
                        ))
                    ) : (
                        <li className="free-day">Enjoy your free day!</li>
                    )}
                </ul>
            </div>
            <div className="calendar-container" style={{ height: '700px' }}>
                <Calendar
                    localizer={localizer}
                    events={tasks}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: '100%' }}
                    selectable={true}
                    onSelectSlot={(slotInfo) => handleDateChange(slotInfo.start)}
                    onSelectEvent={(event) => console.log('Selected event:', event)}
                    dayPropGetter={(date) => {
                        if (moment(date).isSame(selectedDate, 'day')) {
                            return {
                                className: 'custom-day today',
                            };
                        }
                        return {
                            className: 'custom-day hover-effect',
                        };
                    }}
                />
                {moment().isSame(selectedDate, 'day') && <div className="today-indicator"></div>}
            </div>
        </div>
    );
}

export default memo(TimePlanner);
