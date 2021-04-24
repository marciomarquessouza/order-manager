import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function App() {
    return (
        <main className="m-12">
            <Typography variant="h5" color="secondary" align="center">
                Order Manager Client
            </Typography>
            <Button variant="contained" color="primary">
                Primary
            </Button>
        </main>
    );
}

export default App;
