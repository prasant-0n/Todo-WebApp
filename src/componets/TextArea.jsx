import React, { useState } from 'react';
import { Tabs, Tab, Paper, Typography } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import { List, ListItem, ListItemText, TextField, Checkbox, IconButton, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const TodoTabs = ({ title, todos, setTodos }) => {
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

    const [tabValue, setTabValue] = useState('your-todo');

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{ padding: 2, maxWidth: 600, margin: '0 auto' }}>
            <Paper elevation={3}>
                <TabContext value={tabValue}>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <Tabs
                            value={tabValue}
                            onChange={handleTabChange}
                            aria-label="Todo tabs"
                            centered
                        >
                            <Tab label="Your Todo" value="your-todo" />
                            <Tab label="Active Todo" value="active-todo" />
                            <Tab label="Completed Todo" value="completed-todo" />
                        </Tabs>
                    </Box>
                    <Box sx={{ padding: 2 }}>
                        <TabPanel value="your-todo">
                            <Paper elevation={3} sx={{ padding: 2 }}>
                                <Typography variant="body1">
                                    {/* Your Todo content goes here. */}
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
                                                                style={{ width: '15em' }}

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
                                </Typography>
                            </Paper>
                        </TabPanel>
                        <TabPanel value="active-todo">
                            <Paper elevation={3} sx={{ padding: 2 }}>
                                <Typography variant="body1">
                                    <List>
                                        {todos.filter(todo => !todo.isComplete).map((todo) => (
                                            <ListItem key={todo.id}>
                                                <Box display="flex" alignItems="center" width="100%">
                                                    {editId === todo.id ? (
                                                        <>
                                                            <TextField
                                                                value={editedTitle}
                                                                onChange={(e) => setEditedTitle(e.target.value)}
                                                                autoFocus
                                                                variant='standard'
                                                                style={{ width: '15em' }}

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
                                        ))}
                                    </List>
                                </Typography>
                            </Paper>
                        </TabPanel>
                        <TabPanel value="completed-todo">
                            <Paper elevation={3} sx={{ padding: 2 }}>
                                <Typography variant="body1">
                                    <List>
                                        {todos.filter(todo => todo.isComplete).map((todo) => (
                                            <ListItem key={todo.id}>
                                                <Box display="flex" alignItems="center" width="100%">
                                                    {editId === todo.id ? (
                                                        <>
                                                            <TextField
                                                                value={editedTitle}
                                                                onChange={(e) => setEditedTitle(e.target.value)}
                                                                autoFocus
                                                                variant='standard'
                                                                style={{ width: '15em' }}

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
                                        ))}
                                    </List>
                                </Typography>
                            </Paper>
                        </TabPanel>
                    </Box>
                </TabContext>
            </Paper>
        </Box>
    );
};

export default TodoTabs;
