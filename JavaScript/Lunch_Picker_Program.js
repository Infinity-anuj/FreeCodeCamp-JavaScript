const lunches = [];

function addLunchToEnd(arrr, str) {
  arrr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arrr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  if (arr.length <= 0) {
    console.log("No lunches to remove.");
  } else {
    let lastElement = arr.pop();
    console.log(`${lastElement} removed from the end of the lunch menu.`);
    return arr;
  }
}

function removeFirstLunch(arr)
{
  if(arr.length <= 0 )
  {
    console.log("No lunches to remove." );
  }
  else
  {
    let removeFirst = arr.shift();
    console.log(`${removeFirst} removed from the start of the lunch menu.`);
    
  }
  return arr;
}

function getRandomLunch(arr)
{
  if(arr.length <= 0 )
  {
    console.log("No lunches available.");
  }
  else
  {
    let randomElement = Math.floor(Math.random() * arr.length);
    console.log(`Randomly selected lunch: ${arr[randomElement]}`);
  }
}

function showLunchMenu(arr)
{
  if(arr.length <= 0)
  {
    console.log("The menu is empty.");
  }
  else{
    console.log(`Menu items: ${arr.join(", ")}`);
  }
}


console.log(lunches);
console.log(showLunchMenu(lunches));