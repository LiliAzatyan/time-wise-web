import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt, FaClock, FaBell, FaFlag, FaFolder, FaUserPlus } from 'react-icons/fa';

export default function AddTaskForm({ onAddTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isTitleFocused, setIsTitleFocused] = useState(false);
    const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [reminderTime, setReminderTime] = useState(null);
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [isTimePickerOpen, setIsTimePickerOpen] = useState(false);
    const [isReminderPickerOpen, setIsReminderPickerOpen] = useState(false);
    const [priority, setPriority] = useState('none');
    const [isPriorityPickerOpen, setIsPriorityPickerOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('Select Category');
    const [isCategoryPickerOpen, setIsCategoryPickerOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isInvitePickerOpen, setIsInvitePickerOpen] = useState(false);
    const [invitedUsers, setInvitedUsers] = useState([]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleTitleFocus = () => {
        setIsTitleFocused(true);
    };

    const handleTitleBlur = () => {
        setIsTitleFocused(false);
    };

    const handleDescriptionFocus = () => {
        setIsDescriptionFocused(true);
    };

    const handleDescriptionBlur = () => {
        setIsDescriptionFocused(false);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setIsDatePickerOpen(false);
    };

    const handleTimeChange = (time) => {
        setSelectedTime(time);
        setIsTimePickerOpen(false);
    };

    const handleReminderChange = (time) => {
        setReminderTime(time);
        setIsReminderPickerOpen(false);
    };

    const handlePriorityChange = (priority) => {
        setPriority(priority);
        setIsPriorityPickerOpen(false);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setIsCategoryPickerOpen(false);
    };

    const handleInviteChange = (user) => {
        setInvitedUsers((prevUsers) => [...prevUsers, user]);
        setIsInvitePickerOpen(false);
    };

    const handleSave = () => {
        setIsLoading(true);

        const newTask = {
            title,
            description,
            date: selectedDate,
            time: selectedTime,
            reminder: reminderTime,
            priority,
            category: selectedCategory,
            invitedUsers,
        };

        onAddTask(newTask);

        setIsLoading(false);

        // Reset form fields
        setTitle('');
        setDescription('');
        setSelectedDate(null);
        setSelectedTime(null);
        setReminderTime(null);
        setPriority('none');
        setSelectedCategory('Select Category');
        setInvitedUsers([]);
    };

    const inputStyles = {
        display: 'block',
        width: '100%',
        height: '44px',
        padding: '10px',
        margin: '10px 0',
        boxSizing: 'border-box',
        border: '1px solid #D1D3D1',
        borderRadius: '8px',
        outline: 'none',
    };

    const buttonContainerStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10px',
    };

    const buttonStyles = {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
        margin: '0 10px',
        borderRadius: '8px',
        cursor: 'pointer',
        border: '1px solid #D1D3D1',
        backgroundColor: '#ffffff',
        color: '#000000',
    };

    const iconStyles = {
        marginRight: '8px',
    };

    const selectedButtonStyles = (color) => ({
        backgroundColor: color,
        color: '#ffffff',
    });

    const priorityColors = {
        none: '#D1D3D1',
        low: '#4C649E',
        medium: '#FCC858',
        high: '#FF8B7B',
    };

    const priorityOptions = [
        { label: 'None', value: 'none', color: '#D1D3D1' },
        { label: 'Low Priority', value: 'low', color: '#4C649E' },
        { label: 'Medium Priority', value: 'medium', color: '#FCC858' },
        { label: 'High Priority', value: 'high', color: '#FF8B7B' },
    ];

    const categoryOptions = ['Work', 'Educational', 'Personal'];

    const inviteOptions = ['User1', 'User2', 'User3'];

    return (
        <div>
            <div style={{textAlign: 'center', marginBottom: '20px'}}>Add New Task</div>
            <input
                type="text"
                name="title"
                value={title}
                onChange={handleTitleChange}
                placeholder="Enter task title"
                style={{...inputStyles, borderColor: isTitleFocused ? '#68B37A' : '#D1D3D1'}}
                onFocus={handleTitleFocus}
                onBlur={handleTitleBlur}
            />
            <label style={{color: isDescriptionFocused ? '#68B37A' : '#000000'}}></label>
            <textarea
                name="description"
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Enter task description"
                style={{...inputStyles, height: '100px', borderColor: isDescriptionFocused ? '#68B37A' : '#D1D3D1'}}
                onFocus={handleDescriptionFocus}
                onBlur={handleDescriptionBlur}
            />
            <div style={buttonContainerStyles}>
                <div style={{position: 'relative'}}>
                    <button
                        type="button"
                        onClick={() => setIsDatePickerOpen(true)}
                        style={{
                            ...buttonStyles,
                            borderColor: selectedDate ? '#68B37A' : '#D1D3D1',
                            ...(selectedDate ? selectedButtonStyles('#68B37A') : {}),
                        }}
                    >
                        <FaCalendarAlt style={iconStyles}/>
                        {selectedDate ? selectedDate.toLocaleDateString() : 'Select Date'}
                    </button>
                    {isDatePickerOpen && (
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                            onClickOutside={() => setIsDatePickerOpen(false)}
                            dateFormat="MM/dd/yyyy"
                            inline
                        />
                    )}
                </div>
                <div style={{position: 'relative'}}>
                    <button
                        type="button"
                        onClick={() => setIsTimePickerOpen(true)}
                        style={{
                            ...buttonStyles,
                            borderColor: selectedTime ? '#68B37A' : '#D1D3D1',
                            ...(selectedTime ? selectedButtonStyles('#68B37A') : {}),
                        }}
                    >
                        <FaClock style={iconStyles}/>
                        {selectedTime ? selectedTime.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                        }) : 'Set Time'}
                    </button>
                    {isTimePickerOpen && (
                        <DatePicker
                            selected={selectedTime}
                            onChange={handleTimeChange}
                            onClickOutside={() => setIsTimePickerOpen(false)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            inline
                        />
                    )}
                </div>
                <div style={{position: 'relative'}}>
                    <button
                        type="button"
                        onClick={() => setIsReminderPickerOpen(true)}
                        style={{
                            ...buttonStyles,
                            borderColor: reminderTime ? '#68B37A' : '#D1D3D1',
                            ...(reminderTime ? selectedButtonStyles('#68B37A') : {}),
                        }}
                    >
                        <FaBell style={iconStyles}/>
                        {reminderTime ? reminderTime.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                        }) : 'Set Reminder'}
                    </button>
                    {isReminderPickerOpen && (
                        <DatePicker
                            selected={reminderTime}
                            onChange={handleReminderChange}
                            onClickOutside={() => setIsReminderPickerOpen(false)}
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Time"
                            dateFormat="h:mm aa"
                            inline
                        />
                    )}
                </div>
            </div>
            <div style={buttonContainerStyles}>
                <div style={{position: 'relative'}}>
                    <button
                        type="button"
                        onClick={() => setIsPriorityPickerOpen(true)}
                        style={{
                            ...buttonStyles,
                            borderColor: priorityColors[priority],
                            ...(priority !== 'none' ? selectedButtonStyles(priorityColors[priority]) : {}),
                        }}
                    >
                        <FaFlag style={iconStyles}/>
                        {priorityOptions.find((option) => option.value === priority).label}
                    </button>
                    {isPriorityPickerOpen && (
                        <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: '0',
                            backgroundColor: '#fff',
                            border: '1px solid #D1D3D1',
                            borderRadius: '8px',
                            zIndex: 1
                        }}>
                            {priorityOptions.map((option) => (
                                <div
                                    key={option.value}
                                    onClick={() => handlePriorityChange(option.value)}
                                    style={{
                                        padding: '10px',
                                        cursor: 'pointer',
                                        backgroundColor: priorityColors[option.value],
                                        color: '#fff'
                                    }}
                                >
                                    {option.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div style={{position: 'relative'}}>
                    <button
                        type="button"
                        onClick={() => setIsCategoryPickerOpen(true)}
                        style={{
                            ...buttonStyles,
                            borderColor: selectedCategory !== 'Select Category' ? '#68B37A' : '#D1D3D1',
                            ...(selectedCategory !== 'Select Category' ? selectedButtonStyles('#68B37A') : {}),
                        }}
                    >
                        <FaFolder style={iconStyles}/>
                        {selectedCategory}
                    </button>
                    {isCategoryPickerOpen && (
                        <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: '0',
                            backgroundColor: '#fff',
                            border: '1px solid #D1D3D1',
                            borderRadius: '8px',
                            zIndex: 1
                        }}>
                            {categoryOptions.map((category) => (
                                <div
                                    key={category}
                                    onClick={() => handleCategoryChange(category)}
                                    style={{
                                        padding: '10px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {category}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div style={{position: 'relative'}}>
                    <button
                        type="button"
                        onClick={() => setIsInvitePickerOpen(true)}
                        style={{
                            ...buttonStyles,
                            borderColor: invitedUsers.length > 0 ? '#68B37A' : '#D1D3D1',
                            ...(invitedUsers.length > 0 ? selectedButtonStyles('#68B37A') : {}),
                        }}
                    >
                        <FaUserPlus style={iconStyles}/>
                        {invitedUsers.length > 0 ? `${invitedUsers.length} Users` : 'Invite Users'}
                    </button>
                    {isInvitePickerOpen && (
                        <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: '0',
                            backgroundColor: '#fff',
                            border: '1px solid #D1D3D1',
                            borderRadius: '8px',
                            zIndex: 1
                        }}>
                            {inviteOptions.map((user) => (
                                <div
                                    key={user}
                                    onClick={() => handleInviteChange(user)}
                                    style={{
                                        padding: '10px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {user}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div style={{textAlign: 'center', marginTop: '20px'}}>
                <button
                    type="button"
                    onClick={handleSave}
                    style={{
                        ...buttonStyles,
                        backgroundColor: '#68B37A',
                        color: '#fff',
                        borderColor: '#68B37A',
                        width: '100%'
                    }}
                >
                    {isLoading ? 'Saving...' : 'Save Task'}
                </button>
            </div>
        </div>
    );
}
