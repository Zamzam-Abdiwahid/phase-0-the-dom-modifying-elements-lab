// Write your code here!

let mainElement = document.getElementById('main');
mainElement.remove();

let newHeader = document.createElement('h1');


newHeader.id = 'victory';

newHeader.textContent = 'YOUR-NAME is the champion'; 
document.body.appendChild(newHeader);
