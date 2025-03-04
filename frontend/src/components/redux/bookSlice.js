import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Axios from 'axios';

const initialState = { 
        loading: false,
        data: [],
        error: '' 
}

const apiUrl = import.meta.env.VITE_API_URL;
export const fetchBooks = createAsyncThunk('books/fetchBooks', async (token) => {
    const response = await Axios.get(`${apiUrl}/api/books`,{
        headers: {
            Authorization: `Bearer ${token}`, // Include the Bearer token
        },
    });
    
    return response.data;
});

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers:{
        addBook(state, action) {
            state.data=[...state.data,action.payload]
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.loading = true
                state.data = []
                state.error = ''
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload.data
                state.error = ''
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.loading = false
                state.data = []
                state.error = action.error.message;
            });
    },
});

export default booksSlice.reducer
export const {addBook}=booksSlice.actions
