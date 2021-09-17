document.getElementById('Tehranpic').src="Tehran/1.jpg";
(function() {  
    var i = 0;
    var pics = [ "Tehran/2.jpg", "Tehran/3.png","Tehran/4.jpg", "Tehran/5.jpg","Tehran/6.jpg","Tehran/7.jpg", "Tehran/8.jpg","Tehran/9.jpg", "Tehran/10.jpg", "Tehran/11.jpg","Tehran/12.jpg","Tehran/13.jpg","Tehran/14.jpg"];
    var p = document.getElementById('Tehranpic');  
    function change() {
        p.src = pics[i]; 
        i = (i + 1) % pics.length; 
    }
    setInterval(change, 2000);
})();  
