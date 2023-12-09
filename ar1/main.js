function select3() {
  const open = document.getElementById("conversor");
  open.style.width = "100%";
}
function select() {
  const open = document.getElementById("conversor");
  open.style.width = "100%";
}

function calcular() {
  const display = document.getElementById("display").value;
  const more = document.getElementById("more");
  const res = document.getElementById("res");
  const x = display * 60;
  const y = x / 50;
  const m = y.toFixed(0);
  const i = 250 - m;
  const v = i / 5;
  const z = v.toFixed(0);

if(m >= 250){
  res.style.color = 'red'
  res.innerHTML = 'Suas Faltas Utrapasarão o limite'
  more.innerHTML =''
}
else{
  res.style.color = 'white'
  res.innerHTML = 'suas faltas são <br>' + m
  more.innerHTML = 'Você pode faltar mais <br>' + z +' dias'
}

}

function Select() {

  const display = document.getElementById("display").value;
  const more = document.getElementById("more");
  const res = document.getElementById("res");
  const x = display * 60;
  const y = x / 60;
  const m = y.toFixed(0);
  const i = 300 - m;
  const v = i / 6;
  const z = v.toFixed(0);

  if(m >= 250){
    res.style.color = 'red'
    res.innerHTML = 'Suas Faltas Utrapasarão o limite'
    more.innerHTML =''
  }
  else{
    res.style.color = 'white'
    res.innerHTML = 'suas faltas são <br>' + m
    more.innerHTML = 'Você pode faltar mais <br>' + z +' dias'
  }
  
}
