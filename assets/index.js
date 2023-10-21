function gerenciadorNumero() {

  const min = Math.ceil(document.querySelector(".input-min").value)
  const max = Math.floor(document.querySelector(".input-max").value)
  const meuParagrafo = document.getElementById('paragrafo')

  if (min >= max) {
    meuParagrafo.innerHTML = "O valor minimo não pode ser MENOR que o valor máximo"
  }
  else {
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    meuParagrafo.innerHTML = ` Número sorteado é: ${result} ` 
  }
}
