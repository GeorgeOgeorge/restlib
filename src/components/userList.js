import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const BookList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="yearOfPublishing" />
            <TextField source="numberOfPages" />
            <TextField source="rating" />
            <TextField source="ibns.publisher" />
            <TextField source="author.name" />
            <TextField source="author.nationality" />
        </Datagrid>
    </List>
);