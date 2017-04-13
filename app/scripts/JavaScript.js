



// JavaScript Document



function Account(username, password, firstName, lastName, email, picture, contacts) {
	this.username = username;
	this.password = password;
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.picture = picture;
	this.contacts = contacts;
	
	this.fullName = function(){return firstName + " " + lastName}
}

function MailBox() {
	this.messages = [];
}

function Contact(firstName, lastName, email, picture, dialog) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.picture = picture;
	this.fullName = function(){return firstName + " " + lastName}
	this.mailBox = dialog;
}

function AddressBook() {
	this.contacts = [];
}

function Message(date, from, to, message){
	this.date = date;
	this.from = from;
	this.to = to;
	this.message = message;
}

function demoAccount(){
	var mbMarie = new MailBox();
	var mbMaria = new MailBox();
	var mbGhazal = new MailBox();
	var marie = new Contact("Marie","Fonkou","fonkou.m@husky.neu.edu","images/Marie.jpg",mbMarie);
	var ghazal = new Contact("Ghazal","Shambayati","shambayati.g@husky.neu.edu","images/ghazal.jpg",mbGhazal);
	var maria = new Contact("Maria","Kochetygova","kochetygova.m@husky.neu.edu","images/maria.jpg",mbMaria);
	var con = new AddressBook();
	con.contacts.push(marie);
	con.contacts.push(maria);
	con.contacts.push(ghazal);

	var account = new Account("a.hariri","1234","Ahmad","Hariri","hariri.a@husky.neu.edu","images/Ahmad.jpg",con);
	
	var message1 = new Message(new Date(),account,marie,"Hello Marie");
	var message2 = new Message(new Date(),marie,account,"Hi Ahmad, How are you?");
	var message3 = new Message(new Date(),account,marie,"I am good Thank you");
	
	var message4 = new Message(new Date(),account,maria,"Hello there");
	var message5 = new Message(new Date(),maria,account,"Hi Ahmad, whats up?");
	var message6 = new Message(new Date(),account,maria,"How are you");
	
	var message7 = new Message(new Date(),account,ghazal,"Hi");

	
	mbMarie.messages.push(message1);
	mbMarie.messages.push(message2);
	mbMarie.messages.push(message3);
	
	mbMaria.messages.push(message4);
	mbMaria.messages.push(message5);
	mbMaria.messages.push(message6);
	
	mbGhazal.messages.push(message7);

	return account;
}

function contactSelected(selectedContact){	
	showContactDetails(selectedContact);
	showDialog(selectedContact);
//	showContactDetails(filteredContacts[selectedContact]);
//	showDialog(aBook.contacts[selectedContact]);
}

function contactSelectedInPanel(selectedContact){	
	showDialogPanel(selectedContact);
}

function showContactsList(contactsList){
	$('#contact-list').empty();
	for(var i in contactsList){
		var mediaDiv = document.createElement('div');
		mediaDiv.className = 'media';
		mediaDiv.id = i + 'contact';
		//var action = "divSelected(" + i + "contact)";
		var action = "divSelected('" + i + "contact')";
		mediaDiv.setAttribute("onClick", action);
		
		var mediaHeading = document.createElement('h4');
		mediaHeading.className = 'media-heading';
		var node = document.createTextNode(contactsList[i].fullName());
		mediaHeading.appendChild(node);
		
		var messageSnip = contactsList[i].mailBox.messages[contactsList[i].mailBox.messages.length-1].message;
		if (messageSnip.length>15) messageSnip = messageSnip.substr(0, 15) + ' ...';
		var mediaBodyDiv = document.createElement('div');
		mediaBodyDiv.className = 'media-body';
		
		var node = document.createTextNode(messageSnip);
		mediaBodyDiv.appendChild(mediaHeading);
		mediaBodyDiv.appendChild(node);
		
		var mediaIMGDiv = document.createElement('div');
		var mediaIMG = document.createElement('img');
		
		mediaIMG.src = contactsList[i].picture;
		mediaIMG.className = 'media-object img-circle';
		mediaIMGDiv.appendChild(mediaIMG);
		mediaIMGDiv.className = 'media-left';
		
		var hr = document.createElement('hr');
		mediaDiv.appendChild(mediaIMGDiv);
		mediaDiv.appendChild(mediaBodyDiv);
		$('#contact-list').append(mediaDiv);
		$('#contact-list').append(hr);
	}
}

function showContactsPanel(contactsList){
	$('#contactsPanel').empty();
	for(var i in contactsList){
		var mediaDiv = document.createElement('div');
		mediaDiv.className = 'media';
		mediaDiv.id = i + 'contact';
		//var action = "divSelected(" + i + "contact)";
		var action = "divSelectedInPanel('" + i + "contact')";
		mediaDiv.setAttribute("onClick", action);
		
		var mediaHeading = document.createElement('h4');
		mediaHeading.className = 'media-heading';
		var node = document.createTextNode(contactsList[i].fullName());
		mediaHeading.appendChild(node);
		
		var messageSnip = contactsList[i].mailBox.messages[contactsList[i].mailBox.messages.length-1].message;
		if (messageSnip.length>15) messageSnip = messageSnip.substr(0, 15) + ' ...';
		var mediaBodyDiv = document.createElement('div');
		mediaBodyDiv.className = 'media-body';
		
		var node = document.createTextNode(messageSnip);
		mediaBodyDiv.appendChild(mediaHeading);
		mediaBodyDiv.appendChild(node);
		
		var mediaIMGDiv = document.createElement('div');
		var mediaIMG = document.createElement('img');
		
		mediaIMG.src = contactsList[i].picture;
		mediaIMG.className = 'media-object img-circle';
		mediaIMGDiv.appendChild(mediaIMG);
		mediaIMGDiv.className = 'media-left';
		
		var hr = document.createElement('hr');
		mediaDiv.appendChild(mediaIMGDiv);
		mediaDiv.appendChild(mediaBodyDiv);
		$('#contactsPanel').append(mediaDiv);
		$('#contactsPanel').append(hr);
	}
}

function showContactDetails(selectedContactt){
	$('#top-panel').empty();
	var mediaDiv = document.createElement('div');
		mediaDiv.className = 'media';
		
		var mediaHeading = document.createElement('h3');
		mediaHeading.className = 'media-heading';
		var node = document.createTextNode('- ' + selectedContactt.fullName());
		mediaHeading.appendChild(node);
		
		var mediaBodyDiv = document.createElement('div');
		mediaBodyDiv.className = 'media-body';
		
		var node = document.createTextNode(selectedContactt.email);
		mediaBodyDiv.appendChild(mediaHeading);
		mediaBodyDiv.appendChild(node);
		
		var mediaIMGDiv = document.createElement('div');
		var mediaIMG = document.createElement('img');
		
		mediaIMG.src = selectedContactt.picture;
		mediaIMG.className = 'media-object img-circle';
		mediaIMGDiv.appendChild(mediaIMG);
		mediaIMGDiv.className = 'media-left';
		
		mediaDiv.appendChild(mediaIMGDiv);
		mediaDiv.appendChild(mediaBodyDiv);
		$('#top-panel').append(mediaDiv);
}

function showDialog(selectedContact){
	$('#bottom-panel').empty();
	var messages = selectedContact.mailBox.messages;
	for(var i in selectedContact.mailBox.messages){
		var mediaDiv = document.createElement('div');
		mediaDiv.className = 'media';
		var mediaBodyDiv = document.createElement('div');
		mediaBodyDiv.className = 'media-body';
		var node = document.createTextNode(messages[i].message);
		mediaBodyDiv.appendChild(node);
		
		
		var mediaIMGDiv = document.createElement('div');

		var mediaIMG = document.createElement('img');
		
		mediaIMG.src = messages[i].from.picture;
		mediaIMG.className = 'media-object img-circle';
		mediaIMGDiv.appendChild(mediaIMG);
		
		
		if(messages[i].from == account){
			mediaIMGDiv.className = 'media-left media-middle';
			mediaBodyDiv.className += ' leftMessage';
			mediaDiv.appendChild(mediaIMGDiv);
			mediaDiv.appendChild(mediaBodyDiv);
		}
		else {
			mediaIMGDiv.className = 'media-right media-middle';
			mediaBodyDiv.className += ' rightMessage';
			mediaDiv.className += ' rightAlignment';
			var wraper = document.createElement('div');
			wraper.appendChild(mediaBodyDiv);
			wraper.appendChild(mediaIMGDiv);
			mediaDiv.appendChild(wraper);
		}
		$('#bottom-panel').append(mediaDiv);
		var dateP = document.createElement('p');
		var dateNode = document.createTextNode(messages[i].date.toDateString());
		dateP.appendChild(dateNode);
		$('#bottom-panel').append(dateP);
		
	}
}

function showDialogPanel(selectedContact){
	$('#miniDialog').empty();
	var messages = selectedContact.mailBox.messages;
	for(var i in selectedContact.mailBox.messages){
		var mediaDiv = document.createElement('div');
		mediaDiv.className = 'media';
		var mediaBodyDiv = document.createElement('div');
		mediaBodyDiv.className = 'media-body';
		var node = document.createTextNode(messages[i].message);
		mediaBodyDiv.appendChild(node);
		
		
		var mediaIMGDiv = document.createElement('div');

		var mediaIMG = document.createElement('img');
		
		mediaIMG.src = messages[i].from.picture;
		mediaIMG.className = 'media-object img-circle';
		mediaIMGDiv.appendChild(mediaIMG);
		
		
		if(messages[i].from == account){
			mediaIMGDiv.className = 'media-left media-middle';
			mediaBodyDiv.className += ' leftMessage';
			mediaDiv.appendChild(mediaIMGDiv);
			mediaDiv.appendChild(mediaBodyDiv);
		}
		else {
			mediaIMGDiv.className = 'media-right media-middle';
			mediaBodyDiv.className += ' rightMessage';
			mediaDiv.className += ' rightAlignment';
			var wraper = document.createElement('div');
			wraper.appendChild(mediaBodyDiv);
			wraper.appendChild(mediaIMGDiv);
			mediaDiv.appendChild(wraper);
		}
		$('#miniDialog').append(mediaDiv);
		var dateP = document.createElement('p');
		var dateNode = document.createTextNode(messages[i].date.toDateString());
		dateP.appendChild(dateNode);
		$('#miniDialog').append(dateP);
	}
}

function searchContacts(contact){
	var key = $('#searchTF').val();
	var regExp = new RegExp(key,'i');
	return regExp.test(contact.fullName());
}

function deleteContact(){
	filteredContacts.splice(selectedContactIndex, 1);
	selectedContactIndex = 0;
	selectedContact = filteredContacts[0];
	showContactsList(filteredContacts);
	showContactDetails(selectedContact);
	showDialog(selectedContact);
}

function divSelected(contactIndex){
	selectedContactIndex = parseInt(contactIndex);
	selectedContact = filteredContacts[selectedContactIndex];
	contactSelected(selectedContact);
}

function divSelectedInPanel(contactIndex){
	selectedContactIndex2 = parseInt(contactIndex);
	selectedContact2 = filteredContacts[selectedContactIndex2];
	showDialogPanel(selectedContact2);
	$('#dialogPanel').slideDown();
}

$(document).ready(function() {
	showContactsList(account.contacts.contacts);
	showContactDetails(account.contacts.contacts[0]);
	showDialog(aBook.contacts[0]);
	
	$("#sendMessageTF").keydown(function(event){
		if(event.which == 13) sendBtnClicked(); 
	});
								 
	$("#sendBtn").click(function (){sendBtnClicked()});
		
	function sendBtnClicked(){
		if($("#sendMessageTF").val() != ''){
			var message = new Message(new Date(),account,selectedContact,$("#sendMessageTF").val());
			selectedContact.mailBox.messages.push(message);
			showDialog(selectedContact);
			$("#sendMessageTF").val('');
			showContactsList(filteredContacts);
		}
	}
	
	$("#messagesToggle").click(function (){
		showContactsPanel(filteredContacts);
		$("#contactsPanel").slideToggle();
		$('#dialogPanel').slideUp();
	});
	
//	$("#contact-list .media").click(function(){
//		//alert(this.id);
//		selectedContactIndex = parseInt(this.id);
//		selectedContact = filteredContacts[selectedContactIndex];
//		contactSelected(selectedContact);
//	});

//	$("#contactsPanel .media").click(function(){
//		//alert(this.id);
//		selectedContactIndex = parseInt(this.id);
//		selectedContact = filteredContacts[selectedContactIndex];
//		contactSelected(selectedContact);
//	});
	
	
	$("#search-contacts").keyup(function(){
		//alert(account.contacts.contacts.filter(searchContacts));
		filteredContacts = account.contacts.contacts.filter(searchContacts);
		showContactsList(filteredContacts);
    });

});
*/


function getCreditcard(){
var pattern= new RegExp("[0-9]{13,16}");
var letters=document.getElementById('textbox_id').value

if(pattern.test(letters)){

var lastFour = letters.substr(letters.length - 4);
document.getElementById('lastFour').innerHTML=lastFour;

ClearFields();
}


}
function ClearFields() {

     document.getElementById("textbox_id").value = "";
     document.getElementById("credit_card_postal_code").value = "";
     document.getElementById("cvv").value = "";
}
