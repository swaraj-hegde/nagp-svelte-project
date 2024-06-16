import { writable } from 'svelte/store';
import { fetchUser } from './api';

const initialUser = {
    isAuthenticated: false,
    user: { name: '', email: '' }
};

const userStore = writable(initialUser);

const login = (user) => {
    userStore.set({
        isAuthenticated: true,
        user
    });
};

const logout = () => {
    userStore.set(initialUser);
};

const loadUser = async(userId) => {
    try {
        const user = await fetchUser(userId);
        userStore.set({
            isAuthenticated: true,
            user
        });
    } catch (error) {
        console.error('Failed to load user:', error);
    }
};

export { userStore, login, logout, loadUser };