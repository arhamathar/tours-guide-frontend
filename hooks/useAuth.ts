import { useState, useEffect, useCallback } from 'react';

const useAuth = () => {
    const initialState = {
        name: null,
        email: null,
        token: null,
    };

    const [user, setUser] = useState(initialState);

    const login = useCallback((name: string, email: string, token: string) => {
        localStorage.setItem(
            'userData',
            JSON.stringify({ name, email, token }),
        );
    }, []);

    const logout = () => {
        setUser((prev) => ({ ...prev, ...initialState }));
        localStorage.removeItem('userData');
    };

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('userData') || '');
        if (storedData && storedData.token) {
            login(storedData.userId, storedData.token, storedData.expiration);
        }
    }, [login]);

    return { user, login, logout };
};

export default useAuth;
