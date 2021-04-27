import React from 'react';
import { AppAlert } from './pages/alerts/Alert';
import { AppRouter } from './routes/router';

function App() {
    return (
        <>
            <AppAlert />
            <AppRouter />
        </>
    );
}

export default App;
