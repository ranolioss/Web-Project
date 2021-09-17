document.getElementById('kashanpic').src="kashan/1.jpg";
(function() {  
    var i = 0;
    var pics = [ "kashan/2.jpg", "kashan/3.jpg","kashan/4.jpg", "kashan/5.jpg","kashan/6.jpg","kashan/8.jpg", "kashan/9.jpg","kashan/10.jpg", "kashan/11.jpg", "kashan/12.jpg","kashan/16.jpg"]; 
    var p = document.getElementById('kashanpic');  
    function change() {
        p.src = pics[i]; 
        i = (i + 1) % pics.length; 
    }
    setInterval(change, 2000);
})();  
