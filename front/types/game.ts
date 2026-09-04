export interface Game {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  cover: string | null;
  releaseDate: string | null;
  developer: string | null;
  publisher: string | null;
  banner: string | null;
  createdAt: string;
  updatedAt: string;
}