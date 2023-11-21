import React, { useState, useEffect } from 'react';
import { NotificationContainer } from './Notifications.styles';
import Notification from '../Notification';

function Notifications({ notifications: initialNotifications }) {
    const [notifications, setNotifications] = useState(initialNotifications);
    const [visibleNotifications, setVisibleNotifications] = useState([]);

    useEffect(() => {
        setVisibleNotifications(notifications.slice(0, 3));
    }, [notifications]);

    const removeNotification = (key) => {
        setNotifications((prevNotifications) =>
            prevNotifications.filter((notification) => notification.key !== key)
        );
    };

    return (
        <NotificationContainer>
            {visibleNotifications &&
                visibleNotifications.map((notification) => (
                    <Notification
                        key={notification?.key}
                        notification={notification}
                        onRemove={() => removeNotification(notification?.key)}
                    />
                ))}
        </NotificationContainer>
    );
}

export default Notifications;
