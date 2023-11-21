import React from 'react';
import styled from 'styled-components';
import './App.css';
import './fonts/DMSans-Medium.ttf';
import DummyInterface from './components/DummyInterface';
import Notifications from './components/Notifications';
import useApi from './hooks/useApi';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function App() {
    const API_URL = 'https://api.mixcloud.com/spartacus/following?limit=10';
    const { data, loading } = useApi(API_URL);
    if (loading) return;

    return (
        <>
            <Notifications notifications={data.data} />
            <Container>
                <DummyInterface />
            </Container>
        </>
    );
}

export default App;
