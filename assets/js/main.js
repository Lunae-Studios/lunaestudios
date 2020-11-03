//Preloader Starts
         // Main function
         function preloaderLoad() {
           console.log("Lol");
           document.getElementById("preloader").style.display = "";
         };
         
         // On Load event
         window.onload = function() {
           preloaderLoad();
         };
         
         // Clear the preloader
         setTimeout(() => {
           console.log("End");
           document.getElementById("preloader").style.display = "none";
         }, 6000 /* Change time here */);
         //Preloader Ends