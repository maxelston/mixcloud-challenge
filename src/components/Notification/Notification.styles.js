import styled, { css } from 'styled-components';

export const NotificationWrapper = styled.div`
    background-color: #fff;
    color: rgb(49, 49, 49);
    margin: 8px;
    border-radius: 4px;
    animation: fadein 0.25s;
    display: flex;
    opacity: 1;
    box-shadow:
        0px 3px 6px 0px rgba(0, 0, 0, 0.2),
        0px 0px 2px 0px rgba(0, 0, 0, 0.3),
        0px 1px 8px 0px rgba(0, 0, 0, 0.05);

    ${({ hide }) =>
        hide &&
        css`
            animation: fadeout 0.25s;
            opacity: 0;
            margin-top: -70px;
        `}

    @keyframes fadein {
        from {
            margin-top: 70px;
            opacity: 0;
        }
        to {
            margin-top: 10px;
            opacity: 1;
        }
    }

    @keyframes fadeout {
        from {
            margin-top: 10px;
            opacity: 1;
        }
        to {
            margin-top: -70px;
            opacity: 0;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    padding: 9px 0px 9px 8px;
    cursor: pointer;

    > * {
        margin-right: 8px;
    }
`;

export const Close = styled.div`
    display: flex;
    align-items: center;
    padding: 9px 8px 9px 8px;
    cursor: pointer;
`;

export const Image = styled.img`
    width: 44px;
    height: 44px;
    border-radius: 50%;
`;

export const MediumText = styled.p`
    color: var(--brand-low-blue, #1e2337);
    font-feature-settings:
        'clig' off,
        'liga' off;
    font-family: DM Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22.4px;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const SmallText = styled.p`
    color: var(--base-70, #636674);
    font-feature-settings:
        'clig' off,
        'liga' off;
    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 19.6px;
    margin: 0;
`;

export const Message = styled.div`
    width: 188px;
`;
