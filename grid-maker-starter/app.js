document.addEventListener('DOMContentLoaded', function(){
  // Add code here
  let colnum = 0;
  let rowNum = 0;
  let colors = ['#ff0000', '#00ff00', '#0000ff','#3a3406', '#c9c5d2', '#ad034f','#35450f', '#fb16e4', '#62f19b'];
  let random_color =  () =>{
  return  colors[Math.floor(Math.random() * colors.length)];}
  let audio = new Audio('zapsplat_nature_water_movement_swish_001_24446.mp3');
  const board = document.getElementById('board');
  // column builder
  colnum = prompt("How many Columns?")
  colnum = Number(colnum);
  rowNum = prompt("How many Rows?");
  rowNum = Number(rowNum);
  for (j=0;j<rowNum;j++){
    const newRow = document.createElement('div');
    newRow.setAttribute('class','row');
    board.appendChild(newRow);

    for(i=0;i<colnum;i++){
      const panel = document.createElement('div');
      panel.setAttribute('class','col');
      newRow.appendChild(panel);
      panel.addEventListener('click',()=>{
      panel.style.background = random_color();
      audio.play();
      });
    }
  }
});
