//usr.script
// javascript:(function()%7Bvar%20xhr%20%3D%20new%20XMLHttpRequest()%3Bxhr.open('GET'%2C%20'https%3A%2F%2Fraw.githubusercontent.com%2FTH3-PH0B14%2Fbookmarklet%2Fmain%2Fusrscript%2Fscript.js'%2C%20true)%3Bxhr.onreadystatechange%20%3D%20function()%20%7Bif%20(xhr.readyState%20%3D%3D%3D%204%20%26%26%20xhr.status%20%3D%3D%3D%20200)%20%7Bvar%20script%20%3D%20document.createElement('script')%3Bscript.innerHTML%20%3D%20xhr.responseText%3Bdocument.body.appendChild(script)%3B%7D%7D%3Bxhr.send()%3B%7D)()

//website history
javascript:(function() {
  var url = prompt('Enter the website URL:');
  if (url) {
    var newWindow = window.open('about:blank', '_blank', 'width=800,height=600');
    var newDocument = newWindow.document;
    newDocument.open();
    newDocument.write('<html><body style="margin: 0; overflow: hidden;"><iframe src="' + url + '" style="border: none; width: 100%; height: 100%;"></iframe></body></html>');
    newDocument.close();
  }
})();


//spin 360
javascript:(function() {
  var style = document.createElement('style');
  style.innerHTML = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    html, body {
      animation: spin 5s infinite linear;
    }
  `;
  document.head.appendChild(style);
})();


//history flooder idea from schoolcheats
javascript:(function() {
  var num = prompt("How many times do you want this page to show up in your history?");
  if (!num || isNaN(num) || num < 1) {
    alert("Invalid input. Please enter a positive number.");
    return;
  }

  var x = window.location.href;

  for (var i = 1; i <= num; i++) {
    history.pushState(0, 0, i === num ? x : i.toString());
    alert("Flooding Successful!\n" + window.location.href + "\nThis page is now in your history " + num + (num === 1 ? " time." : " times."));
  }
})();

//history flooder cool
javascript:(function() {
  var numInput = document.createElement('input');
  numInput.type = 'number';
  numInput.min = 1;
  numInput.placeholder = 'Enter the number of times to flood';

  var floodButton = document.createElement('button');
  floodButton.textContent = 'Flood';
  floodButton.style.marginTop = '5px';

  var closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.style.marginTop = '5px';

  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '50%';
  container.style.left = '50%';
  container.style.transform = 'translate(-50%, -50%)';
  container.style.padding = '20px';
  container.style.background = 'white';
  container.style.border = '1px solid #ccc';
  container.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
  container.style.zIndex = '9999';

  container.appendChild(numInput);
  container.appendChild(floodButton);
  container.appendChild(closeButton);

  document.body.appendChild(container);

  function floodHistory() {
    var num = parseInt(numInput.value);
    if (isNaN(num) || num < 1) {
      alert('Invalid input. Please enter a positive number.');
      return;
    }

    var x = window.location.href;
    var done = false;

    for (var i = 1; i <= num; i++) {
      history.pushState(0, 0, i === num ? x : i.toString());
      if (i === num) {
        done = true;
      }
    }

    if (done) {
      alert('Flooding Successful!\n' + window.location.href + '\nThis page is now in your history ' + num + (num === 1 ? ' time.' : ' times.'));
    }

    document.body.removeChild(container);
  }

  floodButton.addEventListener('click', floodHistory);
  closeButton.addEventListener('click', function() {
    document.body.removeChild(container);
  });
})();


//replace all images
javascript:(function() {
  var newImageUrl = prompt('Enter the new image URL:');
  if (newImageUrl) {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
      images[i].src = newImageUrl;
    }
  }
})();


//fart onclick
javascript:(function() {
  var audio = new Audio('https://www.soundjay.com/human/fart-01.mp3');
  document.addEventListener('click', function() {
    audio.play();
  });
})();

//fart on mouse move
javascript:(function() {
  var audio = new Audio('https://www.soundjay.com/human/fart-01.mp3');
  document.addEventListener('mousemove', function() {
    audio.play();
  });
})();

//text to speech
javascript:(function() {  var selectedText = window.getSelection().toString();  if (selectedText !== '') {    var popup = window.open('', '_blank', 'width=400,height=300,resizable=no');    popup.document.write('<h2>Text-to-Speech Options</h2>');    popup.document.write('<label for="rate">Speech Rate:</label>');    popup.document.write('<input type="number" id="rate" min="0.1" max="10" step="0.1" value="1"><br>');    popup.document.write('<label for="pitch">Speech Pitch:</label>');    popup.document.write('<input type="number" id="pitch" min="0.1" max="2" step="0.1" value="1"><br>');    popup.document.write('<button id="play">Play</button>');    popup.document.write('<button id="pause">Pause</button>');        popup.document.getElementById('play').addEventListener('click', function() {      var rate = parseFloat(popup.document.getElementById('rate').value);      var pitch = parseFloat(popup.document.getElementById('pitch').value);            var speech = new SpeechSynthesisUtterance(selectedText);      speech.lang = 'en-US';      speech.rate = rate;      speech.pitch = pitch;      speechSynthesis.speak(speech);    });        popup.document.getElementById('pause').addEventListener('click', function() {      speechSynthesis.pause();    });  } else {    alert('No text is highlighted! \n Highlight text before using');  }})();

//highlighter tool
javascript:(function() {
  var selection = window.getSelection();
  if (selection.toString().length === 0) {
    alert("No text is currently highlighted.\n\nTo use this tool:\n1. Select the text you want to highlight.\n2. Click on the bookmarklet again.");
  } else {
    var color = prompt("Enter a color (e.g., red, #FF0000):");
    if (color) {
      var range = selection.getRangeAt(0);
      var highlightedText = range.extractContents();
      var span = document.createElement("span");
      span.style.backgroundColor = color;
      span.appendChild(highlightedText);
      range.insertNode(span);
    }
  }
})();

//yohoho hackes
javascript:(function() {  var menuDiv = document.createElement("div");  menuDiv.style.position = "fixed";  menuDiv.style.top = "50%";  menuDiv.style.left = "50%";  menuDiv.style.transform = "translate(-50%, -50%)";  menuDiv.style.padding = "20px";  menuDiv.style.backgroundColor = "#fff";  menuDiv.style.border = "1px solid #ccc";  menuDiv.style.zIndex = "9999";  var setCoinCountBtn = document.createElement("button");  setCoinCountBtn.innerHTML = "Set Coin Count";  setCoinCountBtn.addEventListener("click", function() {    var coinCount = prompt("What would you like to set your coin count to?");    if (coinCount && !isNaN(coinCount)) {      localStorage.setItem("coinsOwned", coinCount);      document.getElementById("homepage-booty").innerHTML = coinCount;      document.getElementById("skin-popup-booty").innerHTML = coinCount;      alert("Coins set! Reloading...");      location.reload();    } else {      alert("Oops! Something went wrong. Please enter a valid number for the coin count.");    }  });  menuDiv.appendChild(setCoinCountBtn);  var setXPBtn = document.createElement("button");  setXPBtn.innerHTML = "Set XP";  setXPBtn.addEventListener("click", function() {    var xp = prompt("What would you like to set your XP to?");    if (xp && !isNaN(xp)) {      xp = Math.min(Math.max(parseInt(xp), 0), 13500);      localStorage.setItem("playerXP", xp);      alert("XP set! Reloading...");      location.reload();    } else {      alert("Oops! Something went wrong. Please enter a valid number for the XP.");    }  });  menuDiv.appendChild(setXPBtn);  var setCharacterBtn = document.createElement("button");  setCharacterBtn.innerHTML = "Select Character";  setCharacterBtn.addEventListener("click", function() {    var character = prompt("Which character would you like to become? Please pick a number between 1 and 35!");    if (character && !isNaN(character)) {      character = Math.min(Math.max(parseInt(character), 1), 35);      localStorage.setItem("playerSkin", character);      alert("Character selected! Reloading...");      location.reload();    } else {      alert("Oops! Something went wrong. Please enter a valid number for the character.");    }  });  menuDiv.appendChild(setCharacterBtn);  var setPetBtn = document.createElement("button");  setPetBtn.innerHTML = "Select Pet";  setPetBtn.addEventListener("click", function() {    var pet = prompt("Which pet would you like to become? Please pick a number between 1 and 7!");    if (pet && !isNaN(pet)) {      pet = Math.min(Math.max(parseInt(pet), 1), 7);      localStorage.setItem("playerPet", pet);      alert("Pet selected! Reloading...");      location.reload();    } else {      alert("Oops! Something went wrong. Please enter a valid number for the pet.");    }  });  menuDiv.appendChild(setPetBtn);  var setPetLevelBtn = document.createElement("button");  setPetLevelBtn.innerHTML = "Select Pet Level";  setPetLevelBtn.addEventListener("click", function() {    var petLevel = prompt("What level would you like your pet to be? Please pick a number between 1 and 14!");    if (petLevel && !isNaN(petLevel)) {      petLevel = Math.min(Math.max(parseInt(petLevel), 1), 14);      localStorage.setItem("playerPetLevel", petLevel);      alert("Pet level selected! Reloading...");      location.reload();    } else {      alert("Oops! Something went wrong. Please enter a valid number for the pet level.");    }  });  menuDiv.appendChild(setPetLevelBtn);  var setIslandBtn = document.createElement("button");  setIslandBtn.innerHTML = "Select Island";  setIslandBtn.addEventListener("click", function() {    var island = prompt("Which island would you like to travel to?\n1 = Tortuga\n2 = Beach\n3 = Easter\n4 = Wreck\n5 = Aztec\n6 = Volcano\n7 = Village");    if (island == "1") {      localStorage.setItem("playerXP", 0);      alert("Island set to Tortuga. Reloading...");      location.reload();    } else if (island == "2") {      localStorage.setItem("playerXP", 140);      alert("Island set to Beach. Reloading...");      location.reload();    } else if (island == "3") {      localStorage.setItem("playerXP", 700);      alert("Island set to Easter. Reloading...");      location.reload();    } else if (island == "4") {      localStorage.setItem("playerXP", 2100);      alert("Island set to Wreck. Reloading...");      location.reload();    } else if (island == "5") {      localStorage.setItem("playerXP", 4400);      alert("Island set to Aztec. Reloading...");      location.reload();    } else if (island == "6") {      localStorage.setItem("playerXP", 7600);      alert("Island set to Volcano. Reloading...");      location.reload();    } else if (island == "7") {      localStorage.setItem("playerXP", 13500);      alert("Island set to Village. Reloading...");      location.reload();    } else {      alert("Oops! Something went wrong! Please enter a number between 1 and 7!");      location.reload();    }  });  menuDiv.appendChild(setIslandBtn);  document.body.appendChild(menuDiv);})();

