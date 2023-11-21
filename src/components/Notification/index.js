// Notification.js
import React, { useState, useEffect } from 'react';
import {
    NotificationWrapper,
    Content,
    Close,
    Image,
    MediumText,
    SmallText,
    Message
} from './Notification.styles';
import Live from './live.js';
import CloseIcon from './close.js';

const Notification = ({ notification, onRemove }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(false);
        }, 5000);
    }, [onRemove]);

    const handleAnimationEnd = () => {
        if (!isVisible) {
            onRemove();
        }
    };
    return (
        <NotificationWrapper
            hide={!isVisible}
            onAnimationEnd={handleAnimationEnd}
        >
            <a
                href={`/live/${notification.username}/`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Content>
                    <Image
                        src={notification.pictures.thumbnail}
                        alt="Description"
                    />
                    <Message>
                        <MediumText>{notification.username}</MediumText>
                        <SmallText>Has gone live - watch now!</SmallText>
                    </Message>
                    <Live />
                </Content>
            </a>
            <Close onClick={() => setIsVisible(false)}>
                <CloseIcon />
            </Close>
        </NotificationWrapper>
    );
};

export default Notification;
