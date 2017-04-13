// JavaScript Document

function contactSelected(selectedContact){
	showContactDetails(selectedContact);
	showDialog(selectedContact);
	showContactsList(filteredContacts);
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
		
		if(contactsList[i] == selectedContact) mediaIMG.className = 'media-object img-circle media-sellectedObject';
		else mediaIMG.className = 'media-object img-circle';
		mediaIMGDiv.appendChild(mediaIMG);
		mediaIMGDiv.className = 'media-left';

		var hr = document.createElement('hr');
		mediaDiv.appendChild(mediaIMGDiv);
		mediaDiv.appendChild(mediaBodyDiv);
		$('#contact-list').append(mediaDiv);
		$('#contact-list').append(hr);
	}
}

function showContactDetails(selectedContactt){
	$('#top-panel').empty();
	var mediaDiv = document.createElement('div');
		mediaDiv.className = 'media';

		var mediaHeading = document.createElement('h3');
		mediaHeading.className = 'media-heading';
		var node = document.createTextNode(selectedContactt.fullName());
		mediaHeading.appendChild(node);

		var mediaBodyDiv = document.createElement('div');
		mediaBodyDiv.className = 'media-body';

		var node = document.createTextNode(selectedContactt.jobTitle);
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
			var wraper = document.createElement('div');
			wraper.className = ' rightAlignment';
			wraper.appendChild(mediaBodyDiv);
			wraper.appendChild(mediaIMGDiv);
			mediaDiv.appendChild(wraper);
		}
		$('#bottom-panel').append(mediaDiv);
		var dateP = document.createElement('p');
		var dateNode = document.createTextNode(messages[i].date.toDateString());
		dateP.appendChild(dateNode);
		$('#bottom-panel').append(dateP);
		$('#bottom-panel').animate({ scrollTop: $('#bottom-panel').height() }, 1000);

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
