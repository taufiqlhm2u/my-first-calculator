  // function to enter values and display them 
   function insertValue(value){
      document.getElementById("display").value += value;
    }
    // function to clear input
    function clearDisplay(){
      document.getElementById("display").value = "";
    }
    // function calculate
    function calculate(){
      const display = document.getElementById("display");
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "ERROR";
      }
    }