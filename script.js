// PG2: Entering employee availability + see all

// SECTION 1: TABS - This code is mostly from an online tutorial

var tabLinks = new Array();
var contentDivs = new Array();
    
function init() {
      // Grab the tab links and content divs from the page
      var tabListItems = document.getElementById('tabs').childNodes;
      for ( var i = 0; i < tabListItems.length; i++ ) {
        if ( tabListItems[i].nodeName == "LI" ) {
          var tabLink = getFirstChildWithTagName( tabListItems[i], 'A' );
          var id = getHash( tabLink.getAttribute('href') );
          tabLinks[id] = tabLink;
          contentDivs[id] = document.getElementById( id );
        }
      }

      // Assign onclick events to the tab links, and
      // highlight the first tab
      var i = 0;

      for ( var id in tabLinks ) {
        tabLinks[id].onclick = showTab;
        tabLinks[id].onfocus = function() { this.blur() };
        if ( i == 0 ) tabLinks[id].className = 'selected';
        i++;
      }

      // Hide all content divs except the first
      var i = 0;

      for ( var id in contentDivs ) {
        if ( i != 0 ) contentDivs[id].className = 'tabContent hide';
        i++;
      }
    }

function showTab() {
      var selectedId = getHash( this.getAttribute('href') );

      // Highlight the selected tab, and dim all others.
      // Also show the selected content div, and hide all others.
      for ( var id in contentDivs ) {
        if ( id == selectedId ) {
          tabLinks[id].className = 'selected';
          contentDivs[id].className = 'tabContent';
        } else {
          tabLinks[id].className = '';
          contentDivs[id].className = 'tabContent hide';
        }
      }

      // Stop the browser following the link
      return false;
    }

function getFirstChildWithTagName( element, tagName ) {
      for ( var i = 0; i < element.childNodes.length; i++ ) {
        if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
      }
    }

function getHash( url ) {
      var hashPos = url.lastIndexOf ( '#' );
      return url.substring( hashPos + 1 );
    }


// SECTION 2: CREATING NEW TABS

// Shift array (output from Sara's page)
var myShifts = [
  ["monday am8",
   "monday am9",
   "monday am10",
   "monday am11",
   "monday pm12"],
  ["tuesday am11",
   "tuesday pm12",
   "tuesday pm1",
   "tuesday pm2",
   "tuesday pm3",
   "tuesday pm4",
   "tuesday pm5"],
  ["wednesday am8",
   "wednesday am9",
   "wednesday am10",
   "wednesday am11",
   "wednesday pm12"],
  ["thursday pm1",
   "thursday pm2",
   "thursday pm3",
   "thursday pm4",
   "thursday pm5"],
  ["friday am11",
   "friday pm12",
   "friday pm1",
   "friday pm2",
   "friday pm3"]
];

// Crazy long function to actually create the new tabs!

function createNewTabFn(userEnteredName){

    init();

    // Ask for the name
    // var userEnteredName = prompt("Employee's Name");

    // Add the tab list item to the list of tabs
    var ul = document.getElementById("tabs");
    var li = document.createElement("li");
    var aTag = document.createElement("a");
    aTag.href = "#" + userEnteredName;
    aTag.innerHTML = userEnteredName;

    li.appendChild(aTag);
    ul.appendChild(li);

    // div
    var div = document.createElement("div");
    div.className = "tabContent";
    div.id = userEnteredName;

    // table
    var newTable = document.createElement("table");
    newTable.className = "calendarGrid";

    // header row
    var trRow1 = document.createElement("tr");
    trRow1.id = "row1";
    // header row items
    var th1 = document.createElement("th");
    th1.className = "timelabel daylabel";
    var th2 = document.createElement("th");
    th2.className = "monday daylabel";
    th2.innerHTML = "Monday";
    var th3 = document.createElement("th");
    th3.className = "tuesday daylabel";
    th3.innerHTML = "Tuesday";
    var th4 = document.createElement("th");
    th4.className = "wednesday daylabel";
    th4.innerHTML = "Wednesday";
    var th5 = document.createElement("th");
    th5.className = "thursday daylabel";
    th5.innerHTML = "Thursday";
    var th6 = document.createElement("th");
    th6.className = "friday daylabel";
    th6.innerHTML = "Friday";
    
    // time row
    var trRow2 = document.createElement("tr");
    trRow2.id = "row2";
    // time row items
    var td1 = document.createElement("td");
    td1.className = "timelabel am8";
    td1.innerHTML = "8am";
    var td2 = document.createElement("td");
    td2.className = "monday am8";
    var td3 = document.createElement("td");
    td3.className = "tuesday am8";
    var td4 = document.createElement("td");
    td4.className = "wednesday am8";
    var td5 = document.createElement("td");
    td5.className = "thursday am8";
    var td6 = document.createElement("td");
    td6.className = "friday am8";

    // time row
    var trRow3 = document.createElement("tr");
    trRow3.id = "row3";
    // time row items
    var td7 = document.createElement("td");
    td7.className = "timelabel am9";
    td7.innerHTML = "9am";
    var td8 = document.createElement("td");
    td8.className = "monday am9";
    var td9 = document.createElement("td");
    td9.className = "tuesday am9";
    var td10 = document.createElement("td");
    td10.className = "wednesday am9";
    var td11 = document.createElement("td");
    td11.className = "thursday am9";
    var td12 = document.createElement("td");
    td12.className = "friday am9";

    // time row
    var trRow4 = document.createElement("tr");
    trRow4.id = "row4";
    // time row items
    var td13 = document.createElement("td");
    td13.className = "timelabel am10";
    td13.innerHTML = "10am";
    var td14 = document.createElement("td");
    td14.className = "monday am10";
    var td15 = document.createElement("td");
    td15.className = "tuesday am10";
    var td16 = document.createElement("td");
    td16.className = "wednesday am10";
    var td17 = document.createElement("td");
    td17.className = "thursday am10";
    var td18 = document.createElement("td");
    td18.className = "friday am10";

    // time row
    var trRow5 = document.createElement("tr");
    trRow5.id = "row5";
    // time row items
    var td19 = document.createElement("td");
    td19.className = "timelabel am11";
    td19.innerHTML = "11am";
    var td20 = document.createElement("td");
    td20.className = "monday am11";
    var td21 = document.createElement("td");
    td21.className = "tuesday am11";
    var td22 = document.createElement("td");
    td22.className = "wednesday am11";
    var td23 = document.createElement("td");
    td23.className = "thursday am11";
    var td24 = document.createElement("td");
    td24.className = "friday am11";

    // time row
    var trRow6 = document.createElement("tr");
    trRow6.id = "row6";
    // time row items
    var td25 = document.createElement("td");
    td25.className = "timelabel pm12";
    td25.innerHTML = "12pm";
    var td26 = document.createElement("td");
    td26.className = "monday pm12";
    var td27 = document.createElement("td");
    td27.className = "tuesday pm12";
    var td28 = document.createElement("td");
    td28.className = "wednesday pm12";
    var td29 = document.createElement("td");
    td29.className = "thursday pm12";
    var td30 = document.createElement("td");
    td30.className = "friday pm12";

    // time row
    var trRow7 = document.createElement("tr");
    trRow7.id = "row7";
    // time row items
    var td31 = document.createElement("td");
    td31.className = "timelabel pm1";
    td31.innerHTML = "1pm";
    var td32 = document.createElement("td");
    td32.className = "monday pm1";
    var td33 = document.createElement("td");
    td33.className = "tuesday pm1";
    var td34 = document.createElement("td");
    td34.className = "wednesday pm1";
    var td35 = document.createElement("td");
    td35.className = "thursday pm1";
    var td36 = document.createElement("td");
    td36.className = "friday pm1";

    // time row
    var trRow8 = document.createElement("tr");
    trRow8.id = "row8";
    // time row items
    var td37 = document.createElement("td");
    td37.className = "timelabel pm2";
    td37.innerHTML = "2pm";
    var td38 = document.createElement("td");
    td38.className = "monday pm2";
    var td39 = document.createElement("td");
    td39.className = "tuesday pm2";
    var td40 = document.createElement("td");
    td40.className = "wednesday pm2";
    var td41 = document.createElement("td");
    td41.className = "thursday pm2";
    var td42 = document.createElement("td");
    td42.className = "friday pm2";

    // time row
    var trRow9 = document.createElement("tr");
    trRow9.id = "row9";
    // time row items
    var td43 = document.createElement("td");
    td43.className = "timelabel pm3";
    td43.innerHTML = "3pm";
    var td44 = document.createElement("td");
    td44.className = "monday pm3";
    var td45 = document.createElement("td");
    td45.className = "tuesday pm3";
    var td46 = document.createElement("td");
    td46.className = "wednesday pm3";
    var td47 = document.createElement("td");
    td47.className = "thursday pm3";
    var td48 = document.createElement("td");
    td48.className = "friday pm3";

    // time row
    var trRow10 = document.createElement("tr");
    trRow10.id = "row10";
    // time row items
    var td49 = document.createElement("td");
    td49.className = "timelabel pm4";
    td49.innerHTML = "4pm";
    var td50 = document.createElement("td");
    td50.className = "monday pm4";
    var td51 = document.createElement("td");
    td51.className = "tuesday pm4";
    var td52 = document.createElement("td");
    td52.className = "wednesday pm4";
    var td53 = document.createElement("td");
    td53.className = "thursday pm4";
    var td54 = document.createElement("td");
    td54.className = "friday pm4";

    // time row
    var trRow11 = document.createElement("tr");
    trRow11.id = "row11";
    // time row items
    var td55 = document.createElement("td");
    td55.className = "timelabel pm5";
    td55.innerHTML = "5pm";
    var td56 = document.createElement("td");
    td56.className = "monday pm5";
    var td57 = document.createElement("td");
    td57.className = "tuesday pm5";
    var td58 = document.createElement("td");
    td58.className = "wednesday pm5";
    var td59 = document.createElement("td");
    td59.className = "thursday pm5";
    var td60 = document.createElement("td");
    td60.className = "friday pm5";

    // add it all to the body
    trRow1.appendChild(th1);
    trRow1.appendChild(th2);
    trRow1.appendChild(th3);
    trRow1.appendChild(th4);
    trRow1.appendChild(th5);
    trRow1.appendChild(th6);

    trRow2.appendChild(td1);
    trRow2.appendChild(td2);
    trRow2.appendChild(td3);
    trRow2.appendChild(td4);
    trRow2.appendChild(td5);
    trRow2.appendChild(td6);

    trRow3.appendChild(td7);
    trRow3.appendChild(td8);
    trRow3.appendChild(td9);
    trRow3.appendChild(td10);
    trRow3.appendChild(td11);
    trRow3.appendChild(td12);

    trRow4.appendChild(td13);
    trRow4.appendChild(td14);
    trRow4.appendChild(td15);
    trRow4.appendChild(td16);
    trRow4.appendChild(td17);
    trRow4.appendChild(td18);

    trRow5.appendChild(td19);
    trRow5.appendChild(td20);
    trRow5.appendChild(td21);
    trRow5.appendChild(td22);
    trRow5.appendChild(td23);
    trRow5.appendChild(td24);

    trRow6.appendChild(td25);
    trRow6.appendChild(td26);
    trRow6.appendChild(td27);
    trRow6.appendChild(td28);
    trRow6.appendChild(td29);
    trRow6.appendChild(td30);

    trRow7.appendChild(td31);
    trRow7.appendChild(td32);
    trRow7.appendChild(td33);
    trRow7.appendChild(td34);
    trRow7.appendChild(td35);
    trRow7.appendChild(td36);

    trRow8.appendChild(td37);
    trRow8.appendChild(td38);
    trRow8.appendChild(td39);
    trRow8.appendChild(td40);
    trRow8.appendChild(td41);
    trRow8.appendChild(td42);

    trRow9.appendChild(td43);
    trRow9.appendChild(td44);
    trRow9.appendChild(td45);
    trRow9.appendChild(td46);
    trRow9.appendChild(td47);
    trRow9.appendChild(td48);

    trRow10.appendChild(td49);
    trRow10.appendChild(td50);
    trRow10.appendChild(td51);
    trRow10.appendChild(td52);
    trRow10.appendChild(td53);
    trRow10.appendChild(td54);

    trRow11.appendChild(td55);
    trRow11.appendChild(td56);
    trRow11.appendChild(td57);
    trRow11.appendChild(td58);
    trRow11.appendChild(td59);
    trRow11.appendChild(td60);

    newTable.appendChild(trRow1);
    newTable.appendChild(trRow2);
    newTable.appendChild(trRow3);
    newTable.appendChild(trRow4);
    newTable.appendChild(trRow5);
    newTable.appendChild(trRow6);
    newTable.appendChild(trRow7);
    newTable.appendChild(trRow8);
    newTable.appendChild(trRow9);
    newTable.appendChild(trRow10);
    newTable.appendChild(trRow11);

    div.appendChild(newTable);
    var tables = document.getElementById("tables");
    tables.appendChild(div);

    // Make the tabs work
    init();

};


// Function to add the shifts
var counter = 0;

function dynamAddShifts(myShiftArray, fnName) {
  for (i = 0; i < myShiftArray.length; i++) {
    for (j = 0; j < myShiftArray[i].length; j++) {
      var shortCut = document.getElementsByClassName(myShiftArray[i][j])[counter];

      // Save the values of i, j, and counter at time of creation
      shortCut.setAttribute("data-i", i);
      shortCut.setAttribute("data-j", j);
      shortCut.setAttribute("data-counter", counter);

      // Set original color of the shifts
      shortCut.setAttribute("data-status", "available");

      // Have color toggle with click
      shortCut.addEventListener("click", fnName.bind(shortCut));
    }
  }
  counter++;
};

function toggleColorWithClick() {
    // Get the attributes of the td clicked
    var i = this.getAttribute("data-i")
    var j = this.getAttribute("data-j")
    var whichTab = this.getAttribute("data-counter")
    var newShortCut = document.getElementsByClassName(myShifts[i][j])[whichTab];

    // If available, make not, if not, make available
    if (this.getAttribute("data-status") == "available") {
        for (k = 0; k < myShifts[i].length; k++) {
            var newShortCut2 = document.getElementsByClassName(myShifts[i][k])[whichTab];
            newShortCut2.setAttribute("data-status", "notAvailable");
        }
    } else {
        for (k = 0; k < myShifts[i].length; k++) {
            var newShortCut2 = document.getElementsByClassName(myShifts[i][k])[whichTab];
            newShortCut2.setAttribute("data-status", "available");
    }
  }
}; 

// "Create New Tab" button
var tabButton = document.getElementById("newTab");
tabButton.addEventListener("click", tabButtonFn);

function tabButtonFn() {
    var userEnteredName = prompt("Employee's Name");
    createNewTabFn(userEnteredName);
    dynamAddShifts(myShifts,toggleColorWithClick);
};

// SECTION 3: ALL TAB

function showWhosAvailable() {
    // Get the attributes of the td clicked
    var i = this.getAttribute("data-i")
    var j = this.getAttribute("data-j")
    var whichTab = this.getAttribute("data-counter")
    var whatTime = this.getAttribute("class");

    for (a = 0; a < counter-1; a++) {
        var newShortCut3 = document.getElementsByClassName(myShifts[i][j])[a];
        if (newShortCut3.getAttribute("data-status") == "available") {

            // get the Employee name out of the tab title
            var newShortCut4 = document.getElementsByClassName("tabContent")[a]
            var employeeName = newShortCut4.getAttribute("id");

            // get the form to put the names in
            var modalList = document.getElementById("nameList");

            // create needed elements
            var modalListItemLabel = document.createElement("label");
            var modalListItemInput = document.createElement("input");
            var modalListItemText = document.createTextNode("    " + employeeName);
            var modalListItemBreak = document.createElement("br");

            // set attributes of the <input> tag
            modalListItemInput.type = "radio";
            modalListItemInput.value = employeeName;
            modalListItemInput.name = "employeeOption";
            modalListItemInput.setAttribute("data-whatTime", whatTime);

            // Add the <input> and the text node onto the label
            modalListItemLabel.appendChild(modalListItemInput);
            modalListItemLabel.appendChild(modalListItemText);

            // Add the label (and a line break) to the form
            modalList.appendChild(modalListItemLabel);
            modalList.appendChild(modalListItemBreak);
            // for some reason this breaks it (and position seems to matter):
            // modalList.innerHTML = "Available Employees: ";
        }
    }
    // open the modal
    overlayOpen();
};

function overlayOpen() {
    var el = document.getElementById("overlay");
    el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

function overlayClose() {
    var el = document.getElementById("overlay");
    el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
    var modalList = document.getElementById("nameList");
    while (modalList.hasChildNodes()) {
        modalList.removeChild(modalList.firstChild);
    }
}

var allButton = document.getElementById("seeAll");
allButton.addEventListener("click", function() {
    createNewTabFn("ALL");
    dynamAddShifts(myShifts,showWhosAvailable);
    var hideTabButton = document.getElementById("newTab");
    hideTabButton.style.visibility = "hidden";
});


var modalButton = document.getElementById("acceptSelection");
modalButton.addEventListener("click", function() {
    var radios = document.getElementsByName("employeeOption");
    for (b = 0; b < radios.length; b++) {
        if (radios[b].checked) {
            var selectedTime = radios[b].getAttribute("data-whatTime")
            var newShortCut5 = document.getElementsByClassName(selectedTime)[counter-1];
            newShortCut5.innerHTML = radios[b].value;
        }
    }
    // also close the modal
    overlayClose();
});


