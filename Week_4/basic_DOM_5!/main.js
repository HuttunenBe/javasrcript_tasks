const button = document.getElementById ('button')
const paragraph = document.getElementById ('colorChanger')
const input = document.getElementById ('colorInput')

function random(max){
  return Math.floor(Math.random()*max)

}
function background(){
  const randomColor = 'rgb(' + random(256)+ ',' +random(256) + ',' + random(256) + ')'
  document.body.style.backgroundColor=randomColor
}


button.addEventListener('click', background)

