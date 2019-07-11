'use strict'

function LandingPage (parentElement){
  this.parentElement = parentElement;
  this.elements = null;
  
}


LandingPage.prototype.generate = function(){
  this.elements = `
  <header class = "title">
  <h1>JAPAN</h1>
  </header>
  <section>
   <article class="block box">
   <img src="./image/sleepy.gif" height="200" width="200">
   <h3>TO TAKE A POWER NAP AT WORK GETS MORE AND MORE COMMON</h3>
   <p>Japanese people are working more than any other country in the world and the working days are long. Since a couple of years back, some employers are letting their employees take a power nap at work, to recharge and get more energy. It’s pretty interesting, and overall I would say that power naps are very common in Japan, and you will constantly see people taking power naps on trains.</p>
   </article>

   <article class="block box">
   <img src="./image/mb samurai.gif" height="250" width="250">
   <h3>SAMURAI</h3>
   <p>Ancient warriors of Japan were known as Samurai. They were very skilled fighters and swordsmen. Their main weapon was the Katana, a sharp sword with a slight curve to it.</p>
   </article>

   <article class="block box">
  
   <img src="./image/noodlenw3.gif" height="150" width="100">
   
    <h3>TO SLURP UP THE NOODLES IS CONSIDERED POLITE</h3>
    <p>If you go to a noodle restaurant in Japan, (which you should) don’t be afraid to slurp up the noodles. On the contrary, this is considered polite.
    According to Japanese customary, it’s polite to slurp up the noodles since it shows the cook that you appreciate the food and at the same time, it enhances the flavors.</p>
   </article>
  </section>
  `;
  this.render();
}

LandingPage.prototype.render = function(){
  this.parentElement.innerHTML = this.elements;
}