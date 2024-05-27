import React from 'react';
const NotificationModal = ({ isOpen, onClose, iconPosition }) => {
    const modalStyle = {
        position: 'fixed',
        bottom: isOpen ? '60px' : '-100%',
        right: iconPosition === 'right' ? '0' : 'auto',
        left: iconPosition === 'right' ? 'auto' : '0',
        width: '300px',
        zIndex: 999,
        transition: 'bottom 0.3s ease',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const borderAnimation = {
        animation: 'borderAnimation 2s infinite',
    };

    return (
        <div style={modalStyle}>
            <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                ...borderAnimation,
            }}>
                <h2>Notifications</h2>
                <p>There are no notifications.</p>
            </div>
        </div>
    );
}

export default NotificationModal;

