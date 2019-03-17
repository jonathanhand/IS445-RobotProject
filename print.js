const output = document.getElementById('output')

export function print(msg) {
  output.innerHTML += `<h3>${msg}</h3>`
}
