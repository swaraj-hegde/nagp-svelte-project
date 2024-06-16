import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchTasks = async() => {
    try {
        const response = await axios.get(`${API_URL}/todos`);
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};

export const fetchUser = async(userId) => {
    try {
        const response = await axios.get(`${API_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw error;
    }
};