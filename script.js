function updateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    const clockElement = document.getElementById('clock');
    clockElement.innerHTML = `${time}<br>${date}`;
  }
  
setInterval(updateTime, 1000);
  updateTime();


  function changeFont() { 
    var fonts = [ 'Arial', 'Times New Roman', 'Courier New', 'Georgia', 'Verdana', 'Comic Sans MS'];
    var randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    document.getElementById('clock').style.fontFamily = randomFont;
  }
  function changeColor() {
    var colors = ['#D4E7C5', '#DCBFFF', '#FFDFDF', '#A0E9FF', '#BFB29E', '#F3FDE8' , "F3CCFF" , "CDFCF6"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById('main').style.backgroundColor = randomColor;
  }

