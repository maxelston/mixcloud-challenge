import React from 'react';
import styled from 'styled-components';
import DummyPNG from './dummy.png';

const Dummy = styled.img`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
`;

export default function DummyInterface() {
    return (
        <div>
            <Dummy src={DummyPNG} alt="dummy" />
        </div>
    );
}
