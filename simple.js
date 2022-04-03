function changeColor(){
    // document.body.style.backgroundColor = '#089';
    var hex = "";
    var x,y,z; 
    const allChar = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    const img = ['poke1.png','poke2.png','poke3.png','poke4.png','poke5.png','poke6.png','poke7.png','poke8.png','poke9.png','poke10.png','poke11.png'];
    x = allChar[Math.floor(Math.random()*16)];
    y = allChar[Math.floor(Math.random()*16)];
    z = allChar[Math.floor(Math.random()*16)];
    
    hex += '#' + x + y + z ;

    document.body.style.backgroundColor = hex ;

    document.getElementById('hex-value').innerHTML = hex;

     var pokemon = img[Math.floor(Math.random()*11)];

    document.getElementById('pokemon').src = pokemon ;
    
    

}