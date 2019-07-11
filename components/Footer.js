'use strict'
function Footer(parentElement, links, style){
  this.parentElement = parentElement;
  this.links = links;
  this.style = style;
  this.elements = null;
}

Footer.prototype.generate = function(){
  //generar dinamicamente los elementos 
  this.elements = `
    <p>(c) 2019 Anna Trofimova. All rights reserved.</p>
 `;
  this.render();
}

Footer.prototype.render = function(){
  //add elements to dom
  this.parentElement.innerHTML = this.elements;
}