import { useState } from 'react';

const useAuth = () => {
    const initialState = {
        name: null,
        email: null,
        token: null,
    };
    const [user, setUser] = useState(initialState);
    const login = (name: string, email: string, token: string) => {
        localStorage.setItem(
            'userData',
            JSON.stringify({ name, email, token }),
        );
    };

    const logout = () => {
        setUser((prev) => ({ ...prev, ...initialState }));
        localStorage.removeItem('userData');
    };

    return { user, login, logout };
};

export default useAuth;
