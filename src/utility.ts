export function Render(htmlString: string) {
  const root = document.getElementById("root");
  if (!!root) {
    root.innerHTML = htmlString;
  } else {
    console.error("App not found");
  }
}
