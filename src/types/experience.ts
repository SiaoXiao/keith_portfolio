export type Tech = string | { name: string; url?: string };

export interface IExperience {
  id: string;
  companyName: string;
  role: string;
  start: string;           // YYYY/MM
  end?: string | null;     // YYYY/MM | null = 在職
  highlights?: string[];   // 你做了什麼（條列）
  tech?: Tech[];           // 使用技術（字串或 {name,url}）
}
