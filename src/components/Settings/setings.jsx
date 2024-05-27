import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog, faSignOutAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const iconColor = '#68B37A';

const SettingsDropdown = () => {
    return (
        <div style={{
            position: 'absolute',
            top: '100%',
            right: '0',
            width: '200px',
            backgroundColor: 'white',
            boxShadow: '0px 4px 8px rgba(104, 179, 122, 0.14)',
            borderRadius: '8px',
            zIndex: 1000,
            marginTop: '25px',
        }}>
            <ul style={{
                listStyle: 'none',
                padding: '10px',
                margin: '0',
            }}>
                <li style={{
                    padding: '10px 0',
                    borderBottom: '1px solid #ddd',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <span>
                        <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px', color: iconColor }} />
                        Profile
                    </span>
                    <FontAwesomeIcon icon={faChevronRight} style={{ color: iconColor }} />
                </li>
                <li style={{
                    padding: '10px 0',
                    borderBottom: '1px solid #ddd',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <span>
                        <FontAwesomeIcon icon={faCog} style={{ marginRight: '8px', color: iconColor }} />
                        Settings
                    </span>
                    <FontAwesomeIcon icon={faChevronRight} style={{ color: iconColor }} />
                </li>
                <li style={{
                    padding: '10px 0',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <span>
                        <FontAwesomeIcon icon={faSignOutAlt} style={{ marginRight: '8px', color: iconColor }} />
                        Logout
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default SettingsDropdown;
