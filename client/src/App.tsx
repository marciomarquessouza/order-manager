import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { TextInput } from './components/TextInput';

function App() {
    return (
        <main className="m-12">
            <Typography variant="h5" color="secondary" align="center">
                Order Manager Client
            </Typography>
            <TextInput onChange={() => undefined} value="" label="Test" variant="outlined" />
        </main>
    );
}

export default App;
