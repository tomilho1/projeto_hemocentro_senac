let doadores = []
let doadores_nomes = new Map()

function cadastrar(nome, idade, peso, tipo, data) {
  doadores.push([nome.toString(), idade.toString(), peso.toString(),
                 tipo.toString(), data.toString()])
  doadores_nomes.set(nome.toString(), doadores.length - 1)
}

cadastrar("Tom", 18, 50, "O", "23/02/2020")
cadastrar("Tuca", 22, 71, "B", "13/01/2022")
cadastrar("Luana", 31, 65, "O", "07/08/2019")
cadastrar("Renan", 37, 82, "A", "04/03/2023")
cadastrar("Alana", 28, 68, "B", "17/11/2018")

function listar (id) {
  if (id == undefined) {
    for (let i = 0; i < doadores.length; i++) {
      console.log("-------------------------------")
      console.log(`Ficha ${i}`)
      console.log("-------------------------------")
      console.log(`Nome: ${doadores[i][0]}`)
      console.log(`Idade: ${doadores[i][1]}`)
      console.log(`Peso: ${doadores[i][2]}kg`)
      console.log(`Tipo: ${doadores[i][3]}`)
      console.log(`Última doação: ${doadores[i][4]}`)
    }
  console.log("-------------------------------")
  return
  }
  console.log(`Ficha ${id}`)
  console.log("-------------------------------")
  console.log(`Nome: ${doadores[id][0]}`)
  console.log(`Idade: ${doadores[id][1]}`)
  console.log(`Peso: ${doadores[id][2]}kg`)
  console.log(`Tipo: ${doadores[id][3]}`)
  console.log(`Última doação: ${doadores[id][4]}`)      
}

function compararData (data1, data2) {
  if (data2.trim().slice(6,10) < data1.trim().slice(6,10)) {return false}
  else if (data2.trim().slice(6,10) > data1.trim().slice(6,10)) {return true}
  
  if (data2.trim().slice(3,5) < data1.trim().slice(3,5)) {return false}
  else if (data2.trim().slice(3,5) > data1.trim().slice(3,5)) {return true}
  
  if (data2.trim().slice(1,3) < data1.trim().slice(1,3)) {return false}
  else return true
}

function buscaTipo (sangTipo) {
  let count = 0
  for (let i = 0; i < doadores.length; i++) {
    if (doadores[i][3] == `${sangTipo}`) {
      console.log("-------------------------------")
      listar(i)
      count++
    }
  }
  if (count === 0){
    console.log("Nenhuma ficha encontrada.")
  }
  else {
    console.log("-------------------------------")
  }
}

function buscaData(fdata) {
  let count = 0
  for (let i = 0; i < doadores.length; i++) {
    if (compararData(doadores[i][4], fdata.toString())) {
      console.log("-------------------------------")
      listar(i)
      count++
    }
  }
  if (count === 0){
    console.log("Nenhuma ficha encontrada.")
  }
  else {
    console.log("-------------------------------")
  }
}

listar(doadores_nomes.get("Tuca"))
