import axios from "axios";

const api = axios.create({
// lembrar de atualizar o id com o comando "ipconfig" no painel de controle
    baseURL: "http://10.3.60.117:3000"
})


export default api;