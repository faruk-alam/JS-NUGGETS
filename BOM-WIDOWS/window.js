// the windows object is global
var count = 1;
var showCounter = () => console.log(count);
console.log(window.count)
window.showCounter();

// windows size- The window object has four properties related to the size of the window
// The innerWidth and innerHeight properties return the size of the page viewport inside the browser window.
// The outerWidth and outerHeight properties return the size of the browser window itself

const width = window.innerWidth;
document.documentElement.clientWidth
document.body.clientWidth;
console.log(width)
const height = window.innerHeight;
document.documentElement.clientWidth
document.body.clientWidth;
console.log(height)

//The window.open() method -accepts three arguments: the URL to load, the window target and a string of 
// window features.
let url = "https://www.programiz.com/"
let windowOpen = window.open(url);
window.open(url)

//Resize a window
// To resize a window you use the resizeTo() method of the window object

 url = "https://www.programiz.com/"
 windowOpen = window.open(url);
window.resizeTo(width,height);
// Move a window
// To move a window to a specified coordinate, you use the moveTo() method:
// window.moveTo(x, y)

url = "https://www.programiz.com/"
windowOpen = window.open(url);

