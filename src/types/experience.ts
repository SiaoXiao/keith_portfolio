export type Tech = string | { name: string; url?: string };

export interface IExperience {
  id: string;
  companyName: string;
  role: string;
  start: string;
  end?: string | null;
  highlights?: string[];
  tech?: Tech[];
}
