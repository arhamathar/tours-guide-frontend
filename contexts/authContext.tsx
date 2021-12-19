import { createContext, useState } from 'react';

interface IAuth {
    token: string | null;
    email: string | null;
    name: string | null;
    login: () => void;
    logout: () => void;
}

interface IAuthContext {
    auth: IAuth;
    setAuth: (state: IAuth) => void;
}

const defaultAuth: IAuth = {
    token: null,
    email: null,
    name: null,
    login: () => {},
    logout: () => {},
};

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [auth, setAuth] = useState(defaultAuth);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
