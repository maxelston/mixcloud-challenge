import styled from 'styled-components';

export const NotificationContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1;
    width: 100%;
    top: 72px;

    @media only screen and (min-width: 768px) {
        right: 30px;
        width: auto;
    }
`;
