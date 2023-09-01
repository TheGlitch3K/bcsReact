import UserService from '@utility/services/user';
import React,{ createContext,useState,useContext,useEffect,useMemo } from 'react'
import { useRouter } from 'next/router'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated,setIsAuthenticated] = useState(true);
    const [user,setUser] = useState(null);
    const [isAdmin,setIsAdmin] = useState(false);
    const [loading,setLoading] = useState(true);

    const setData = () => {
            const authenticated = UserService.isAuthenticated()
            setIsAuthenticated(UserService.isAuthenticated());
            if (authenticated) {
                setIsAdmin(UserService.isAdmin());
                const user = UserService.getUserInfo();
                setUser(user);
            }
    }

    useEffect(() => {
        const loadToken = async () => {
            setData();
            setLoading(false)
        }
        loadToken()
    },[])

    const login = () => {
        setData();
    }

    const logout = () => {
        UserService.logout();
        setIsAuthenticated(false);
        setIsAdmin(false);
    }

    return (
        <AuthContext.Provider value={{
            loading,
            user,
            isAuthenticated,
            isAdmin,
            login,
            logout,
        }}>
            <>
                {children}
            </>
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

export const ProtectRoute = (Component) => () => {
    const { isAuthenticated,loading,logout } = useAuth();
    const { replace } = useRouter()

    if (loading || (!isAuthenticated && window.location.pathname !== '/')) {
        return null;
    }
    if (!isAuthenticated) {
        logout();
        replace('/login');
        return null;
    }
        return (
                <Component />
        )
};

export const ProtectedTab = ({ tab,children }) => {
    return children;
};