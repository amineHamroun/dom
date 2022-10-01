calcule = {};
    function calculatotale() {
      calcule.prix = document.getElementById("prix1").innerText;
      console.log(document.getElementById("prix1").innerText)
      calcule.quantite = document.getElementById("quantite1").value;
  const totale= Number(document.getElementById("prix1").innerText) *  Number(document.getElementById("quantite1").value)
  calcule.totale = totale;
  console.log(calcule.totale)
    }