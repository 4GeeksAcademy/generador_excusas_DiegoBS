const who = ['The dog ','My grandma ','The mailman ','My bird ','A dinosaur ','A cat ','A little kid ','Batman ', 'A giant robot ','An alien ','The devil ','The entire population of Madagascar ','A chinese old lady ','Elon Musk ','Bad Bunny ','Mickey Mouse ','The Lich King ','Jehovah witnesses '];
const action = ['ate ', 'peed ', 'crushed ', 'broke ','stole ','destroyed with a laser ','cut in half ','reduced to atoms ','exploded with a bomb ','sold ', 'made me question the meaning of ','turned into a sheep ','made me make a realistic miniature of ','convinced me to plot against ','dragonpunched '];
const what = ['my homework ', 'my phone ', 'the car ', 'my house ','the road ','my neighbourhood ','my existance ','everything ','the Canary Islands ','a cliff ','Mordor ','my computer ','the moon ','the sun '];
const when = ['before the class.', 'when I was sleeping.', 'while I was exercising.', 'during my lunch.', 'while I was praying.','while I was taking a shower.','while deactivating a bomb.','while producing a new album.','while filming a documentary about penguins.','while I was practising JavaScript'];



function generateExcuse() {
  let arrayWho = who[Math.floor(Math.random() * who.length)];
  let arrayAction = action[Math.floor(Math.random() * action.length)];
  let arrayWhat = what[Math.floor(Math.random() * what.length)];
  let arrayWhen = when[Math.floor(Math.random() * when.length)];

  return ""+arrayWho+""+arrayAction+""+arrayWhat+""+arrayWhen+"";
  }

function callExcuse(){
  const excuse = generateExcuse();
  document.getElementById("excuse").innerText = excuse;
}

window.onload = function () {
  callExcuse();
  
};

