export function Render(htmlString: string) {
  const root = document.getElementById("root");
  if (!!root) {
    root.innerHTML = htmlString;
  } else {
    console.error("App not found");
  }
}
export function formattedData() {
  // Ottieni la data corrente
  const data = new Date();

  // Estrai e formatta i componenti della data
  const giorno = String(data.getDate()).padStart(2, "0");
  const mese = String(data.getMonth() + 1).padStart(2, "0"); // getMonth() è 0-indexed
  const ore = String(data.getHours()).padStart(2, "0");
  const minuti = String(data.getMinutes()).padStart(2, "0");

  // Combina i componenti in una stringa formattata
  return `${giorno}/${mese} ${ore}:${minuti}`;
}
let theme = true;
export function setTheme() {
  theme = !theme;
  console.log(theme);
  document.getElementById("root")!.style.backgroundColor = theme
    ? "#ffff"
    : "#242424";
  document.body.style.backgroundColor = theme ? "#ffffff" : "#242424";
  return theme;
}
