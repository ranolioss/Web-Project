document.getElementById('Neyshaporpic').src="Neyshapor/13.jpg";
(function() {  
    var i = 0;
    var pics = [ "Neyshapor/1.jpg", "Neyshapor/2.jpg","Neyshapor/3.jpg", "Neyshapor/4.jpg","Neyshapor/5.jpg","Neyshapor/6.jpg", "Neyshapor/7.jpg","Neyshapor/9.jpg", "Neyshapor/10.jpg", "Neyshapor/11.jpg","Neyshapor/14.jpg"];
    var p = document.getElementById('Neyshaporpic');  
    function change() {
        p.src = pics[i]; 
        i = (i + 1) % pics.length; 
    }
    setInterval(change, 2000);
})();  
