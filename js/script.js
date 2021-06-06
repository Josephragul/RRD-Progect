

const tabs = document.querySelectorAll("[data-tab-target]")
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.tabTarget)
        
        tabContents.forEach(tabContent => tabContent.classList.remove('active'))
      
        target.classList.add('active')
    })
})




     
         window.addEventListener("scroll", function(){
             const header = document.querySelector('header');
             header.classList.toggle("sticky", window.scrollY > 0);
         })
      
      
         // Add active class to the current button (highlight it)
         var header = document.querySelector("header");
         var btns = header.getElementsByClassName("btn");
         for (var i = 0; i < btns.length; i++) {
           btns[i].addEventListener("click", function() {
           var current = document.getElementsByClassName("active");
           current[0].className = current[0].className.replace(" active", "");
           this.className += " active";
           });
         }
         
         
     
      
         function myFunction() {
           var x = document.getElementById("myLinks");
           if (x.style.display === "block") {
             x.style.display = "none";
           } else {
             x.style.display = "block";
           }
         }
      