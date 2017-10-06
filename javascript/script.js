
// Initialize Firebase

 var config = {
    apiKey: "AIzaSyACK3W0dw-gWphggchhhIf87G51ixYnjVM",
    authDomain: "trainapp-d0f7c.firebaseapp.com",
    databaseURL: "https://trainapp-d0f7c.firebaseio.com",
    projectId: "trainapp-d0f7c",
    storageBucket: "trainapp-d0f7c.appspot.com",
    messagingSenderId: "155195860273"
  };
  firebase.initializeApp(config);
    // var database = firebase.database();

    // var ref = database.ref();

  console.log("hello")
$("train-form-sumbit").on("click", function(event) {
  event.preventDefault();
        // add moment to time
  var name = $("#nameInput").val().trim();
  var destination = $("#destinationInput").val().trim();
  var time = monent($("#timeInput").val().trim(), "HH:mm").format("x");
  var frequency = $("#frequencyImput").val().trim();
  // what else do i need to add here?
  console.log(time)
  return false;



    ref.push({
    dBname:name,
    dBdestination:destination,
    dBtime:time,
    dBfrequency:frequency,
    dBnextArrival:nextArrival,
    dBminutesAway:minutesAway
    
   
    });
      // console.log(train)

  });

  ref.push({
    dBname:name,
    dBdestination:destination,
    dBtime:time,
    dBfrequency:frequency,
    dBnextArrival:nextArrival,
    dBminutesAway:minutesAway
    
   
    });
      // console.log(train)

database.ref().on("child_added", function(snapshot) {

var postName = $("<td id='train-name'>");
var postdestination = $("<td id='train-destination'>");
var postFrequency = $("<td id='train-frequency'>");
var postNextArrival = $("<td> id='train-nextArrival'");
var postMinutesAway = $("<td id='tarain-minutesAway'>");
var postTIme = $("<td id ='tain-time'>")

postName.text(snapshot.val().dBname);
postdestination.text(snapshot.val().dBdestination);
// add moment to time
postTime.text(snapshot.val().dBtime);
postFrequency.text(snapshot.val().dBfrequency);
postMinutesAway.text(snapshot.val().dBminutesAway);
postNextArrival.text(snapshot.val().dBnextArrival);

$("#table-body").append(postName, postdestination, postTime, postFrequency,postMinutesAway, postNextArrival);
console.log("#table-body");

});









