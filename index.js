function scuberGreetingForFeet(ride){
  if ( ride >= 2501) {
    return 'No can do.';
     } if ( ride >= 2001) {
     return `I will gladly take your thirty bucks.`;
     }if (ride <= 400 ) {
     return `This one is on me!`;
     } else if ( 400 >= ride <= 2000 ) {
     return `That will be twenty bucks.`;
     }
}

function ternaryCheckCity(city){
 return city == 'NYC'? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip){
  switch (tip) {
  case 'generous':
    return 'Thank you so much.'
  case 'not as generous':
    return 'Thank you.'
  case 'thanks for everything':
     return 'Bye.' }
}