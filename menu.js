function myFunction() {

    var element = document.getElementsByClassName("nav");
    for (var i=0 ;i<element.length; i++){
    if(element[i].classList.contains("small"))
        element[i].classList.remove("small");
    else
        element[i].classList.add("small");
}
  }