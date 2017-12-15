var intialDataLoaded= true;
// set the default as true when first created
var dataRef = new Firebase('https://nerd-culture.firebaseio.com/');
var edit=0;
$(document).ready(function(){
  $("#list").append("<li>"+snapshot.val().name+" says: "+msg+"</li>")

  $("#post").on("click",function(event){
    event.preventDefault();
    console.log("working")
    var inputInfo = $('#messageInp').val()
    // take input value

    $('#messageInp').val('')
    // create a sectionfor messages data in your db
    var messagesReference = dataRef.child('message');
    // use the set method to save data to the messages
    dataRef.push({
      // add message to api
      message: inputInfo,
      name: "Sasuke_Uchiha"
      // setInterval(function(){ delete(inputInfo); }, 3000);
      // username
    })

// setinterval function() and a number in millsecond
    $("#list li").remove();

    //Retrieve data children and append them to message board
    dataRef.on('child_added', function(snapshot) {
      // used when retrieving a list of items from the database
      // results.forEach(function(child){
      //   console.log(results)
      //   console.log(child.val().message);

      console.log(snapshot)
      if (intialDataLoaded){
        var msg = snapshot.val().message;
        // if first time load show all the snaps
        console.log(msg)
        $("#list").append("<li>"+snapshot.val().name+" says: "+msg+"</li>")
        // TODO: reload the database
      }else{
        dataRef.once("value", function(snapshot){
          // if not the initalDataLoaded only do the newest value
          intialDataLoaded= false;
        })
      }
    })
  // the previous value of the span with the value entered in the input t
  })//end click event

})//end submit
