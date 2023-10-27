import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TextField, Button, Paper, Box } from '@mui/material';
import Header from './Header';

const Form = ({ input, setInput, todos, setTodos }) => {

    const onFormSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, { id: uuidv4(), title: input, isComplete: false }]);
        setInput("");
    };

    const onInputChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <Box sx={{ padding: 2, maxWidth: 600, margin: '0 auto' }}>
            <Header />
            <Paper elevation={3} className='form-paper' style={{ textAlign: 'center', padding: '20px', maxWidth: '160%' }}>
                <form className='form' onSubmit={onFormSubmit}>
                    <TextField
                        label="Type your to-do list..."
                        variant="standard"
                        value={input}
                        onChange={onInputChange}
                        style={{ width: '20em' }}
                    />
                    <Button className='btn' type='submit' variant="contained" color="primary" style={{ marginTop: '11px', marginLeft: "12px" }}>
                        Enter
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default Form;
