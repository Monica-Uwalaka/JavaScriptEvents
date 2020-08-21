
var form = document.getElementById("form");
var submit_button = document.getElementById("submit_button");
var list = document.getElementById("list")
var firstName = document.getElementById("first_name");
var lastName = document.getElementById("last_name");



/*
//form submission
form.addEventListener("submit", printSubmitObject);

function printSubmitObject(e){
    console.log("help");
    console.log(e.target);
    e.preventDefault();  
}
*/



//keyboard events 
keys = {all: "q", copy: "k",paste: "g"}



var firstName = document.getElementById("first_name");
document.addEventListener("keydown", printProperties);

function printProperties(e){

    let key= e.key;    
    if (e.ctrlKey && key){
        switch(key){
            case keys.all:
                console.log("user press ctrl+a");
                break;

            case keys.copy:
                console.log("user press ctrl+c");
                break;
            
            case keys.paste:
                console.log("user press ctrl+v")
                break;
            
            default:
                console.log("none")


        }
        
    }
    //console.log(event.key);
    //console.log(event.keyCode);
}


/*
//adding multiple events 
submit_button.addEventListener("click", printDetail);
submit_button.addEventListener("mouseover", buttonFocus);
submit_button.addEventListener("mouseout", undo);


function printDetail(e){
  console.log("you clicked the submit button");
  e.preventDefault();

}

function buttonFocus(e){
    var btn = e.target;
    btn.style.backgroundColor = "#9999ff";
}

function undo(e){
    var btn = e.target;
    btn.style.backgroundColor =  "aliceblue";
}
*/

/*
//event delagation
submit_button.addEventListener("click", addName);
list.addEventListener("click", crossout);

function addName(e){
   var fullName = firstName.value + " " + lastName.value;
   var listItem = document.createElement("li");
   listItem.innerText = fullName;
   list.appendChild(listItem);
   firstName.value = "";
   lastName.value = "";
   e.preventDefault();  
    
  }

  function crossout(e){
      var target = e.target;
      if(target.matches("li")){
          target.style.textDecoration = "line-through";
      }
  }
  */




