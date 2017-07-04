function saveOnClick(){
	// var firebaseRef = firebase.database().ref("Admin");
	// //firebaseRef.child("Admin").set("Root");
	// firebaseRef.child("name/fname").set("Root");
	// firebaseRef.child("name/lname").set("Firename");

	var  email = document.getElementById('email');
	var  password = document.getElementById('password');
	var  address = document.getElementById('address');
	insertData(email.value,password.value,address.value);
}

window.onload=function(){
	showData();
}

function showData(){
	var firebaseRef = firebase.database().ref("User");
	firebaseRef.once('value').then(function(dataSnapshot){
		//console.log(dataSnapshot.val());
		dataSnapshot.forEach(function(childSnapshort){
			var childKey = childSnapshort.key;
			var childData = childSnapshort.val();
			//console.log(childData);
			console.log(childKey);
			});
	});
}

function insertData(email,password,address){
	var firebaseRef = firebase.database().ref("User");
	firebaseRef.push({
		email:email,
		password:password,
		address:address
	});
	console.log("Insert Success");
	showData();
}

function delOnClick(){
	var firebaseRef = firebase.database().ref("User/User2");
	firebaseRef.remove().then(function(){
		console.log("Remove succeeded");
		showData();	
	}).catch(function(error){
		console.log("Remove failed : "+error.message);
	})
}

function updateData(){
	var firebaseRef = firebase.database().ref("User/User1");
	firebaseRef.update({address:'Saraburi',email:'saraburi@gmail.com'});
	console.log("Success!!!!!!!");
	showData();	
}