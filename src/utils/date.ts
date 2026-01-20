/**
 * @description
 * 解析多種年月格式為可比較的數字 (YYYYMM)，失敗回傳 null。
 * 支援：2025-07 / 2025/7 / 2025.07 / 2025年07月
 */
export const parseYearMonthNumber = (raw?: string | null): number | null => {
  if (!raw) return null
  const s = String(raw).trim()
  const m = s.match(/(\d{4})\D+(\d{1,2})/)
  if (!m) return null
  const y = Number(m[1])
  const mo = Number(m[2])
  if (!y || !mo || mo < 1 || mo > 12) return null
  return y * 100 + mo
}

/**
 * @description
 * 僅處理 YYYY/MM 這種格式，直接轉成可比較的數字 (YYYYMM)。
 * 若格式不符，回傳結果可能是 NaN（保留原本行為）。
 */
export const toYearMonthNumberStrict = (value: string): number => {
  const [y, m] = value.split('/')
  return Number(y) * 100 + Number(m)
}

/**
 * @description
 * 顯示用：把各種格式統一成 YYYY/MM；解析失敗則原樣返回。
 */
export const formatYearMonth = (raw: string): string => {
  const n = parseYearMonthNumber(raw)
  if (n == null) return raw
  const y = Math.floor(n / 100)
  const m = String(n % 100).padStart(2, '0')
  return `${y}/${m}`
}

/**
 * @description
 * 顯示期間文字：end 有值則 "start - end"，否則 "start - 迄今"。
 */
export const formatDateRange = (start: string, end?: string | null): string => {
  return end && end.length ? `${start} - ${end}` : `${start} - 迄今`
}
