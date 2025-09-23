// src/services/api.ts
import axios from "axios";

/* expo-constants fornece informações sobre o app enquanto ele "roda" (tempo de execução). Informações como: versão, build, variáveis de ambiente definidas no app.config.ts (em extra) */
import Constants from "expo-constants";

/* O ? para garantir que não dê erro caso alguma das propriedades
abaixo esteja indefinida (undefined). O 'as string' no final é para 
o TS lidar com o valor considerando que é uma string */
const apiKey = Constants?.expoConfig?.extra?.apiKey as string;

/* Configurando o Axios para usar a API TheMovieDB
- Definimos qual é o endpoint de acesso à API (baseURL)
- Definimos a forma de autenticação com a API (params.api_key) */
export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: apiKey, // Aqui, passamos a nossa chave do TheMovieDB
  },
});
