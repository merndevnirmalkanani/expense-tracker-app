const ADMIN_TOKEN = "Admin012auth3456Access";
const USER_TOKEN = "User987auth6543NoAccess";

export const loginAdmin = () => {
    localStorage.setItem(ADMIN_TOKEN, 'AdminLogin');
}

export const logoutAdmin = () => {
    localStorage.removeItem(ADMIN_TOKEN);
}

export const loginUser = () => {
    localStorage.setItem(USER_TOKEN, 'UserLogin');
}

export const logoutUser = () => {
    localStorage.removeItem(USER_TOKEN);
}

export const isLogin = () => {
    if (localStorage.getItem(USER_TOKEN)) {
        return {
            isAdmin:"false"
        };
    } else if(localStorage.getItem(ADMIN_TOKEN)) {
        return {
            isAdmin:"true"
        }
    }

    return false;
}