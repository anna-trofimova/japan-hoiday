'use strict';

function main(){
  var ENTRY_POINT = '/';
  var layoutInstance = null;
  var navbarInstance = null;
  var footerInstance = null;
  var links = [
    {name: 'Home',
     url: '/'},
     {name:'Holidays',
      url:'/holidays'}
  ];
  var rootElement = document.querySelector('#root');

  generateLayout();
  generateNavbar();
  generateFooter();
  addListenersToNavbar();
  activateRouter();

  function generateLayout(){
    layoutInstance = new Layout(rootElement);
    layoutInstance.generate();
    //добавляет элементы из innerHTML
  }
   function generateNavbar() {
     navbarInstance = new Navbar(layoutInstance.header, links)
     navbarInstance.generate();
   }
   function generateFooter(){
    footerInstance = new Footer(layoutInstance.footer, links)
    footerInstance.generate()
   }

   function activateRouter(){
    routerInstance.buildDom(ENTRY_POINT, layoutInstance.main)
   }
    function addListenersToNavbar(){
      var anchors = document.querySelectorAll('nav a');
      anchors.forEach(function(anchor){
        anchor.addEventListener('click', changePage);
      })
    }
    function changePage(event){
      var url = event.target.attributes.url.value;
      routerInstance.buildDom(url, layoutInstance.main);
    }
  };

window.addEventListener('load', main);