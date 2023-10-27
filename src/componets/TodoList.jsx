import React, { useState } from 'react';
import { Paper, List, ListItem, ListItemText, TextField, Checkbox, IconButton, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const TodoList = ({ title, todos, setTodos }) => {
    const [editId, setEditId] = useState(null);
    const [editedTitle, setEditedTitle] = useState("");

    const handleEdit = (todoId) => {
        const todoToEdit = todos.find(todo => todo.id === todoId);
        if (todoToEdit) {
            setEditId(todoId);
            setEditedTitle(todoToEdit.title);
        }
    };

    const handleSaveEdit = (todoId) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === todoId) {
                return { ...todo, title: editedTitle };
            }
            return todo;
        });

        setTodos(updatedTodos);
        setEditId(null);
        setEditedTitle("");
    };

    const handleCancelEdit = () => {
        setEditId(null);
        setEditedTitle("");
    };

    const handleToggleComplete = (todoId) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === todoId) {
                return { ...todo, isComplete: !todo.isComplete };
            }
            return todo;
        });

        setTodos(updatedTodos);
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="10vh">
            <Paper elevation={3} className='list-paper' style={{ textAlign: 'center', padding: '20px', maxWidth: '40em' }}>
                {/* <h2>{title}</h2> */}
                <List>
                    {todos.map((todo) => (
                        <ListItem key={todo.id}>
                            <Box display="flex" alignItems="center" width="100%">
                                {editId === todo.id ? (
                                    <>
                                        <TextField
                                            value={editedTitle}
                                            onChange={(e) => setEditedTitle(e.target.value)}
                                            autoFocus
                                            variant='standard'
                                            style={{ width: '' }}

                                        />
                                        <IconButton edge="end" onClick={() => handleSaveEdit(todo.id)}>
                                            <SaveIcon />
                                        </IconButton>
                                        <IconButton edge="end" onClick={handleCancelEdit}>
                                            <CancelIcon />
                                        </IconButton>
                                    </>
                                ) : (
                                    <>
                                        <Checkbox
                                            checked={todo.isComplete}
                                            onChange={() => handleToggleComplete(todo.id)}
                                        />
                                        <ListItemText
                                            primary={todo.title}
                                            secondary={todo.isComplete ? 'Completed' : 'Active'}
                                        />
                                        <IconButton edge="end" onClick={() => handleEdit(todo.id)}>
                                            <EditIcon />
                                        </IconButton>
                                    </>
                                )}
                            </Box>
                        </ListItem>
                    )).reverse()} {/* Reverse the mapping to display items in the desired order */}
                </List>
            </Paper>
        </Box>
    );
};

export default TodoList;
