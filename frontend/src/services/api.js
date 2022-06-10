import axios from 'axios';

const token = localStorage.getItem('x-access-token');
console.log(token)
export const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {'Content-Type': 'application/json', 'x-access-token': token}

});
   
export const UseApi = ()  => ({

    // Login 
    logIn: async (email, password) => {

        const response = await api.post("user/login", { email, password });
        console.log(response) 
        return response.data;                
    },
    logOut: async () => {
        const response = await api.post("user/logout");
        return response.data;
    },
    // Validar token
    validToken: async (token) => {
        const response = await api.post("user/validate", { token });
        return response.data;        
    },
    // buscar usuario pelo id
    UserGetById: async (id) => {
        const response = await api.get("user/" + id);
        return response.data;        
    }

});

export async function createApi(data) {
    const response = await api.post("user/", data)
        
    return response.data;
}


