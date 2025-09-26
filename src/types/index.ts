// src/types/index.ts
export type ParametrosBusca = {
  filme: string;
};

// Tipo para os dados de filme que vêm da API
export type Filme = {
  id: number;
  title: string;
  poster_path: string;
};

// Tipo para as props do componente CardFilme
export type CardFilmeProps = {
  filme: Filme;
};

export type ParametrosDetalhes = {
  id: string;
  filme: string;
};

// Tipo para os dados detalhados do filme da API
export type FilmeDetalhes = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string | null;
};
