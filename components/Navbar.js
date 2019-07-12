'use strict'
function Navbar(parentElement, links, style){
  this.parentElement = parentElement;
  this.links = links;
  this.style = style;
  this.elements = null;
}

Navbar.prototype.generate = function(){
  //generar dinamicamente los elementos 
  this.elements = `<nav class="nav">
                     <img class="logo" src="./image/flag.svg" height="42" width="42">
                      <ul class="nav-ul">`;
  this.links.forEach((link) => {
    this.elements += `
     <li>
      <a href="#0" url=${link.url}>${link.name}</a>
    `
    
  });                    
  this.elements += `</ul>
                     </nav>
 `;
  this.render();
}

Navbar.prototype.render = function(){
  //add elements to dom
  this.parentElement.innerHTML = this.elements;
}