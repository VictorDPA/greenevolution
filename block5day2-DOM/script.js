const prin = document.getElementById("elementoOndeVoceEsta");
prin.parentNode.style.color = "red";

document.getElementById("primeiroFilhoDoFilho").innerText = "Sei lá.";

const pai = document.getElementById("pai");
const irmaoDoPrin = document.createElement("section");
irmaoDoPrin.id = "irmaoElementoOndeVoceEsta"
pai.appendChild(irmaoDoPrin);

const filhoDoPrin = document.createElement("section");
filhoDoPrin.id = "filhoElementoOndeVoceEsta";
prin.appendChild(filhoDoPrin);

const filhoDoFilho = document.getElementById("primeiroFilhoDoFilho");
const netoPrin = document.createElement("section");
netoPrin.id = "primeiroNetoDoFilho";
filhoDoFilho.appendChild(netoPrin)

// console.log(document.getElementById("primeiroNetoDoFilho").parentNode.parentNode.parentNode.lastElementChild.previousElementSibling.previousElementSibling);

// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

function removedor (pai, filho, valor){
  String=valor
  let lista = document.querySelectorAll(valor);
  let alvo = [];
    for (i=0; i<lista.length;i+=1){
      alvo = lista[i];
      if (alvo===filho){
        pai.removeChild(alvo)
      }
    }
}


criadorId (pai, irmaoDoPrin, "section", "irmaoElementoOndeVoceEsta");
// removedor (pai, quartoEUltimoFilho, "section");
// removedor (pai, terceiroFilho, "section");
// removedor (prin, segundoEUltimoFilhoDoFilho, "section");
// removedor (filhoDoFilho, netoPrin, "section");
// removedor (prin, filhoDoPrin, "section");
// removedor (pai, irmaoDoPrin, "section");