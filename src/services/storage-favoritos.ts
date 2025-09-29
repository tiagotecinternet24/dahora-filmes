// src/services/storage-favoritos.ts

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Filme } from "../types";

// Criando uma identificação para a área de favoritos no dispositivo
const STORAGE_FAVORITOS = "filmes_favoritos";

/**
 * Lê a lista de favoritos do Async Storage
 * Retorna um array vazio em caso de erro ou chave inexistente
 */
export async function carregar(): Promise<Filme[]> {
  try {
    // Lê a string salva no storage (pode vir null)
    const favoritosArmazenados = await AsyncStorage.getItem(STORAGE_FAVORITOS);

    // Havendo favoritosArmazenados (como string), retorna convertido para objeto.
    // Senão, retorna um array vazio
    return favoritosArmazenados ? JSON.parse(favoritosArmazenados) : [];
  } catch (error) {
    console.error("Erro ao ler storage:" + error);
    return [];
  }
}

/**
 * Grava a lista de favoritos no Async Storage
 */
export async function salvarLista(lista: Filme[]): Promise<void> {
  try {
    // Salva a lista de filmes no storage em formato de string
    await AsyncStorage.setItem(STORAGE_FAVORITOS, JSON.stringify(lista));
  } catch (error) {
    console.error("Erro ao salvar a lista no storage: " + error);
  }
}

/**
 * Salvar um filme na lista de favoritos (e no próprio storage)
 * Retorna true se salvou com sucesso, false se o filme já estava nos favoritos
 */
export async function salvarFilmeFavorito(filme: Filme): Promise<boolean> {
  const favoritos = await carregar();

  /* Verifica se um filme já existe com o mesmo id na lista/storage
   de favoritos. A função some() retorna true se encontrar pelo menos
   1 item que satisfaça a condição. */
  if (favoritos.some((filmeExistente) => filmeExistente.id === filme.id)) {
    // Já existe? Não precisamos salvar de novo
    // Por isso, retornamos false para indicar que o filme NÃO FOI adicionado
    return false;
  }

  // Se chegou até aqui, é porque esse filme ainda não tinha sido salvo.
  // Portanto, adicionamos à lista de favoritos
  favoritos.push(filme);

  // Salva a lista atualizada no storage
  await salvarLista(favoritos);

  // Retorna true sinalizando que o filme foi salvo
  return true;
}

/**
 * Chama a função carregar e retorna a lista de favoritos (filmes)
 */
export async function buscarFavoritos(): Promise<Filme[]> {
  return carregar();
}

/** Excluir um filme específico pelo seu id */
export async function removerFilmeFavorito(id: number): Promise<void> {
  // Carregando a lista de favoritos já existentes no storage
  const favoritos = await carregar();

  /* Filtrando a lista de favoritos já existente, avaliando
  qual filme deve ser "descartado/removido". Com isso, geramos uma nova
  lista atualizada SEM o filme que deve ser removido. */
  const listaAtualizada = favoritos.filter(
    (filmeExistente) => filmeExistente.id !== id
  );

  // Pegamos a nova lista atualizada, e enviamos para o salvarLista gravar no storage
  // Na prática, sobrescrevemos a lista anterior
  await salvarLista(listaAtualizada);
}

/** Remover completamente do storage os favoritos salvos */
export async function apagarTodosFavoritos(): Promise<void> {
  try {
    await AsyncStorage.removeItem(STORAGE_FAVORITOS);
  } catch (error) {
    console.error("Erro ao apagar todos os favoritos: " + error);
  }
}
