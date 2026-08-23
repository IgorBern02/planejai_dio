export function formatDate(
  date: Date | string | number,
  locale = "pt-BR",
): string {
  const d = new Date(date);
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(d);
}
