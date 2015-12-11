
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

// SECTION 2: SHIFTS
// Mark
// Shift 1: Monday 9am-10am

var shift1 = [
  document.getElementsByClassName("monday am9"),
  document.getElementsByClassName("monday am10")
]
shift1[0][0].style.backgroundColor = "green";
shift1[1][0].style.backgroundColor = "green";

function changeColor1() {
  if (shift1[0][0].style.backgroundColor == "green") {
    shift1[0][0].style.backgroundColor = "red"
    shift1[1][0].style.backgroundColor = "red"
  } else {
    shift1[0][0].style.backgroundColor = "green"
    shift1[1][0].style.backgroundColor = "green"
  }
};

shift1[0][0].addEventListener("click", changeColor1);
shift1[1][0].addEventListener("click", changeColor1);

// Shift 2: Tuesday 11am

var shift2 = document.getElementsByClassName("tuesday am11");
shift2[0].style.backgroundColor = "green";

function changeColor2() {
  if (shift2[0].style.backgroundColor == "green") {
    shift2[0].style.backgroundColor = "red"
  } else {
    shift2[0].style.backgroundColor = "green"
  }
};

shift2[0].addEventListener("click", changeColor2);

// Shift 3: Thursday 12pm

var shift3 = document.getElementsByClassName("thursday pm12");
shift3[0].style.backgroundColor = "green";

function changeColor3() {
  if (shift3[0].style.backgroundColor == "green") {
    shift3[0].style.backgroundColor = "red"
  } else {
    shift3[0].style.backgroundColor = "green"
  }
};

shift3[0].addEventListener("click", changeColor3);

// Amy
// Shift 4: Monday 9am

var shift4 = [
  document.getElementsByClassName("monday am9"),
  document.getElementsByClassName("monday am10")
]
shift4[0][1].style.backgroundColor = "green";
shift4[1][1].style.backgroundColor = "green";

function changeColor4() {
  if (shift4[0][1].style.backgroundColor == "green") {
    shift4[0][1].style.backgroundColor = "red"
    shift4[1][1].style.backgroundColor = "red"
  } else {
    shift4[0][1].style.backgroundColor = "green"
    shift4[1][1].style.backgroundColor = "green"
  }
};

shift4[0][1].addEventListener("click", changeColor4);
shift4[1][1].addEventListener("click", changeColor4);

// Shift 5: Tuesday 11am

var shift5 = document.getElementsByClassName("tuesday am11");
shift5[1].style.backgroundColor = "green";

function changeColor5() {
  if (shift5[1].style.backgroundColor == "green") {
    shift5[1].style.backgroundColor = "red"
  } else {
    shift5[1].style.backgroundColor = "green"
  }
};

shift5[1].addEventListener("click", changeColor5);

// Shift 6: Thursday 12pm

var shift6 = document.getElementsByClassName("thursday pm12");
shift6[1].style.backgroundColor = "green";

function changeColor6() {
  if (shift6[1].style.backgroundColor == "green") {
    shift6[1].style.backgroundColor = "red"
  } else {
    shift6[1].style.backgroundColor = "green"
  }
};

shift6[1].addEventListener("click", changeColor6);


// SECTION 3: CREATING NEW TABS

function createNewTabFn(){
    console.log("createNewTabFn was called since this is displaying!");
    // Ask for the name
    var userEnteredName = prompt("Employee's Name");

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

    newTable.appendChild(trRow1);
    newTable.appendChild(trRow2);
    newTable.appendChild(trRow3);
    newTable.appendChild(trRow4);

    div.appendChild(newTable);
    document.body.appendChild(div);

    // Make the tabs work
    init();
};

var tabButton = document.getElementById("newTab");
tabButton.addEventListener("click", createNewTabFn);
