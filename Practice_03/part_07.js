function registerUpp(text) {
  let string01 = text.split('')
  let string02 = []

  for (let i = 0; i < string01.length; i++) {
    string02.push(string01[i].charAt(0).toUpperCase() + string01[i].slice(1));
  }
  return string02.join('');
}
  console.log(registerUpp ("i love js"));
