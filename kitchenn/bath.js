//--------------------------------------------
// TODO: Replace with your app's Firebase project configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYx-O8RpNwEY_UeRaPnTeeCJ3DfIoheS0",
    authDomain: "ck-iot-htmp.firebaseapp.com",
    projectId: "ck-iot-htmp",
    storageBucket: "ck-iot-htmp.appspot.com",
    messagingSenderId: "593322691388",
    appId: "1:593322691388:web:5384713bfd4bdaf18fec39",
    measurementId: "G-DSK3ZPYSJM"
  };
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();


//Den 01
var btnOn1 = document.getElementById("btnOnId_01");
var btnOff1 = document.getElementById("btnOffId_01");

var btnOn2 = document.getElementById("btnOnId_02");
var btnOff2 = document.getElementById("btnOffId_02");






btnOn1.onclick = function() {
    document.getElementById("denId_01").src = "./img/light_bulb.png"
    database.ref("/kitchen").update({
        "led01": "1",
    });
}
btnOn2.onclick = function() {
    document.getElementById("denId_02").src = "./img/light_bulb.png"
    database.ref("/kitchen").update({
        "led02": "1",
    });
}




btnOff1.onclick = function() {
    document.getElementById("denId_01").src = "./img/light_bulb_off.png"
    database.ref("/kitchen").update({
        "led01": "0"
    });
}
btnOff2.onclick = function() {
    document.getElementById("denId_02").src = "./img/light_bulb_off.png"
    database.ref("/kitchen").update({
        "led02": "0"
    });
}








database.ref("/kitchen/temp").on("value", function(snapshot) {
    if (snapshot.exists()) {
        var temp = snapshot.val();
        document.getElementById("nhietdo").innerHTML = temp;
    } else
        console.log("No data available!")
});

database.ref("/kitchen/humi").on("value", function(snapshot) {
    if (snapshot.exists()) {
        var humi = snapshot.val();
        document.getElementById("doam").innerHTML = humi;
    } else
        console.log("No data available!")
});



//auto update ImgDen
database.ref("/kitchen/led01").on("value", function(snapshot1) {
    if (snapshot1.exists()) {
        var ss1 = snapshot1.val();
        if (ss1 == 1)
            document.getElementById("denId_01").src = "./img/light_bulb.png"
        else
            document.getElementById("denId_01").src = "./img/light_bulb_off.png"
    } else
        console.log("No data available!")
});

database.ref("/kitchen/led02").on("value", function(snapshot2) {
    if (snapshot2.exists()) {
        var ss2 = snapshot2.val();
        if (ss2 == 1)
            document.getElementById("denId_02").src = "./img/light_bulb.png"
        else
            document.getElementById("denId_02").src = "./img/light_bulb_off.png"
    } else
        console.log("No data available!")
});


database.ref("/kitchen/led03").on("value", function(snapshot3) {
    if (snapshot3.exists()) {
        var ss3 = snapshot3.val();
        if (ss3 == 1)
            document.getElementById("denId_03").src = "./img/light_bulb.png"
        else
            document.getElementById("denId_03").src = "./img/light_bulb_off.png"
    } else
        console.log("No data available!")
});

//test: get once.
database.ref("/kitchen").get().then((snapshot) => {
    if (snapshot.exists())
        console.log(snapshot.val())
    else
        console.log("no data available!")
})



database.ref("/room2/humi").on("value", function(snapshot) {
    if (snapshot.exists()) {
        var humi2 = snapshot.val();
        document.getElementById("doam2").innerHTML = humi2;
    } else
        console.log("No data available!")
});


database.ref("/room2/temp").on("value", function(snapshot) {
    if (snapshot.exists()) {
        var temp = snapshot.val();
        document.getElementById("nhietdo2").innerHTML = temp;
    } else
        console.log("No data available!")
});


database.ref("/room2/led01").on("value", function(snapshot4) {
    if (snapshot4.exists()) {
        var ss4 = snapshot1.val();
        if (ss4 == 1)
            document.getElementById("denId_04").src = "./img/light_bulb.png"
        else
            document.getElementById("denId_04").src = "./img/light_bulb_off.png"
    } else
        console.log("No data available!")
});

database.ref("/room2/led02").on("value", function(snapshot5) {
    if (snapshot5.exists()) {
        var ss5 = snapshot2.val();
        if (ss5 == 1)
            document.getElementById("denId_05").src = "./img/light_bulb.png"
        else
            document.getElementById("denId_05").src = "./img/light_bulb_off.png"
    } else
        console.log("No data available!")
});


database.ref("/room2/led03").on("value", function(snapshot6) {
    if (snapshot6.exists()) {
        var ss6 = snapshot3.val();
        if (ss6 == 1)
            document.getElementById("denId_06").src = "./img/light_bulb.png"
        else
            document.getElementById("denId_06").src = "./img/light_bulb_off.png"
    } else
        console.log("No data available!")
});




//test: get once.
database.ref("/room2").get().then((snapshot) => {
    if (snapshot.exists())
        console.log(snapshot.val())
    else
        console.log("no data available!")
})