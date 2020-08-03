let today = new Date();
let time = today.getHours();

//if time 23 - 5
//alert(time[0]);
alert(time);
switch (time) {
  case time < 23 $$  time > 5  :
    alert( 'Доброї ночі' );
    break;
  case time < 11 $$  time > 5:
    alert( 'Доброго ранку' );
    break;
  case time < 17 $$  time > 11:
    alert( "Доброго дня" );
    break;
  case time < 23 $$  time > 17:
      alert( "Доброго дня" );
      break;
}