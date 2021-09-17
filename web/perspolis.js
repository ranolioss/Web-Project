document.getElementById('perspolispic').src="perspolis/8.jpg";
(function() {  
    var i = 0;
    var pics = [ "perspolis/1.jpg", "perspolis/2.jpg","perspolis/3.png", "perspolis/4.jpg","perspolis/5.jpg","perspolis/6.jpg", "perspolis/7.jpg","perspolis/9.jpg", "perspolis/10.jpg", "perspolis/11.jpg"];
    var p = document.getElementById('perspolispic');  
    function change() {
        p.src = pics[i]; 
        i = (i + 1) % pics.length; 
    }
    setInterval(change, 2000);
})();  
