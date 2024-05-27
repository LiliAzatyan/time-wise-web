import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendarAlt, faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import SettingsDropdown from '../Settings/setings.jsx';
import NotificationModal from '../Settings/NotificationModal.jsx';
import CalendarModal from '../Settings/CalendarModal.jsx';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleNotificationToggle = () => {
        setIsNotificationOpen(!isNotificationOpen);
    };

    const handleCalendarToggle = () => {
        setIsCalendarOpen(!isCalendarOpen);
    };

    const handleDaySelect = (selectedDay) => {
        console.log('Selected Day:', selectedDay);
    };

    const handleSearchFocus = () => {
        setIsSearchFocused(true);
    };

    const handleSearchBlur = () => {
        setIsSearchFocused(false);
    };

    const currentDate = new Date();
    const dayName = currentDate.toLocaleDateString(undefined, { weekday: 'long' });
    const monthOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true };

    return (
        <nav style={{
            backgroundColor: 'white',
            color: '#333',
            padding: '1rem',
            position: 'relative',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: '0.5rem',
                borderRadius: '8px',
                transform: isHovered ? 'scale(1.01)' : 'none',
                transition: 'transform 0.3s ease-in-out',
                borderLeft: '1px solid rgba(0, 0, 0, 0.1)',
                borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '-5px -5px 15px rgba(0, 0, 0, 0.1)',
            }}
                 onMouseEnter={() => setIsHovered(true)}
                 onMouseLeave={() => setIsHovered(false)}
            >
                <div style={{ marginRight: '10px' }}>
                    <div style={{ color: '#68B37A', fontWeight: '900', fontSize: '18px', lineHeight: '22px' }}>
                        {dayName}
                    </div>
                    <div>{currentDate.toLocaleDateString(undefined, monthOptions)} {currentDate.toLocaleTimeString(undefined, timeOptions)}</div>
                </div>

                <div style={{
                    width: '411px',
                    height: '44px',
                    border: `1px solid ${isSearchFocused ? '#68B37A' : '#D1D3D1'}`,
                    borderRadius: '8px',
                    position: 'relative',
                }}>
                    <input
                        type="text"
                        placeholder="Search..."
                        style={{
                            width: '100%',
                            height: '100%',
                            padding: '0.5rem',
                            outline: 'none',
                            paddingLeft: '40px',
                            border: 'none',
                            borderRadius: '8px',
                        }}
                        onFocus={handleSearchFocus}
                        onBlur={handleSearchBlur}
                    />
                    <FontAwesomeIcon icon={faSearch} style={{ color: 'rgb(104, 179, 122)', position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
                    <FontAwesomeIcon icon={faCalendarAlt} style={{ color: '#333', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={handleCalendarToggle} />
                </div>

                <div style={{ position: 'relative', marginRight: '10px' }}>
                    <FontAwesomeIcon icon={faBell} style={{ color: '#333', cursor: 'pointer' }} onClick={handleNotificationToggle} />
                    <div style={{ position: 'absolute', top: '0', right: '0', backgroundColor: 'red', width: '10px', height: '10px', borderRadius: '50%', display: 'none' }}></div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                    <div style={{ marginRight: '10px' }}>Username</div>
                    <div
                        style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            marginRight: '10px',
                            backgroundImage: 'url(user-picture.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundColor: "gray"
                        }}
                    ></div>
                    <FontAwesomeIcon icon={faChevronDown} style={{ color: '#333', cursor: 'pointer' }} onClick={handleDropdownToggle} />
                    {isDropdownOpen && <SettingsDropdown />}
                </div>
            </div>
            <NotificationModal isOpen={isNotificationOpen} onClose={handleNotificationToggle} iconPosition="right" />
            <CalendarModal isOpen={isCalendarOpen} onClose={handleCalendarToggle} onSelectDay={handleDaySelect} />
        </nav>
    );
}

export default Navbar;
