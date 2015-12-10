//var template = "<div>something</div>"
//$(table).append("<tr><td></td></tr>")
//$("#targetDiv").html(template)

//$("td").click(function(){
//  console.log(this)
//})
//var Mark = {
    //monday:{am8:"red", am9:"red", am10: "green"}
//}

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


// MARK
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

// AMY
// Shift 4: Monday 9am

var shift4 = [
  document.getElementsByClassName("tuesday am8"),
  document.getElementsByClassName("tuesday am9")
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

var shift5 = document.getElementsByClassName("wednesday pm12");
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

var shift6 = document.getElementsByClassName("friday am10");
shift6[1].style.backgroundColor = "green";

function changeColor6() {
  if (shift6[1].style.backgroundColor == "green") {
    shift6[1].style.backgroundColor = "red"
  } else {
    shift6[1].style.backgroundColor = "green"
  }
};

shift6[1].addEventListener("click", changeColor6);


// LET's TRY A NEW WAY: creating the tables dynamically

var template = "
  <table class="calendarGrid">
    <tr id="row1">
      <th class="timelabel daylabel"></th>
      <th class="monday daylabel">Monday</th>
      <th class="tuesday daylabel">Tuesday</th>
      <th class="wednesday daylabel">Wednesday</th>
      <th class="thursday daylabel">Thursday</th>
      <th class="friday daylabel">Friday</th>
    </tr>
    <tr id="row2">
      <td class="timelabel am8">8am</td>
      <td class="monday am8"></td>
      <td class="tuesday am8"></td>
      <td class="wednesday am8"></td>
      <td class="thursday am8"></td>
      <td class="friday am8"></td>
    </tr>
    <tr id="row3">
      <td class="timelabel am9">9am</td>
      <td class="monday am9"></td>
      <td class="tuesday am9"></td>
      <td class="wednesday am9"></td>
      <td class="thursday am9"></td>
      <td class="friday am9"></td>
    </tr>
    <tr id="row4">
      <td class="timelabel am10">10am</td>
      <td class="monday am10"></td>
      <td class="tuesday am10"></td>
      <td class="wednesday am10"></td>
      <td class="thursday am10"></td>
      <td class="friday am10"></td>
    </tr>
    <tr id="row5">
      <td class="timelabel am11">11am</td>
      <td class="monday am11"></td>
      <td class="tuesday am11"></td>
      <td class="wednesday am11"></td>
      <td class="thursday am11"></td>
      <td class="friday am11"></td>
    </tr>
    <tr id="row6">
      <td class="timelabel pm12">12pm</td>
      <td class="monday pm12"></td>
      <td class="tuesday pm12"></td>
      <td class="wednesday pm12"></td>
      <td class="thursday pm12"></td>
      <td class="friday pm12"></td>
    </tr>
  </table>
"

function createNewTabFn(){
  var ul = document.getElementById("tabs");
  var li = "<li><a href="#myNewTab">My New Tab</a></li>"
  ul.append.li

}

var tabButton = document.getElementById("newTab");
tabButton.addEventListener("click", createNewTabFn);
