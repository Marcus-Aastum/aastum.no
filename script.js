fileName = document.getElementById("navbar").getAttribute("w3-include-html");

//Make XMLHttpRequest with the attribute value
xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() {

   //If the request is successful, load the new HTML. Else throw 404 error and try again
   if (this.readyState == 4) {
      if (this.status == 200) {document.getElementById("navbar").innerHTML = this.responseText;}
      if (this.status == 404) {document.getElementById("navbar").innerHTML = "Error 404";}

   /* Remove the attribute and invoke the function again*/
   document.getElementById("navbar").removeAttribute("w3-include-html");
   addHTML();
   }
}
xmlHttp.open("GET", fileName, true);
xmlHttp.send();