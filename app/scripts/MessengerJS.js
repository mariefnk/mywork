// JavaScript Document

function contactSelectedInPanel(selectedContact){
	showDialogPanel(selectedContact);
}

function showContactsPanel(contactsList){
	$('#contactsPanel').empty();
	for(var i in contactsList){
		var mediaDiv = document.createElement('div');
		mediaDiv.className = 'media';
		mediaDiv.id = i + 'contact';
		var action = "divSelectedInPanel('" + i + "contact')";
		mediaDiv.setAttribute("onClick", action);

		var mediaHeading = document.createElement('h5');
		mediaHeading.className = 'media-heading';
		var node = document.createTextNode(contactsList[i].fullName());
		mediaHeading.appendChild(node);

		var messageSnip = contactsList[i].mailBox.messages[contactsList[i].mailBox.messages.length-1].message;
		if (messageSnip.length>15) messageSnip = messageSnip.substr(0, 15) + ' ...';
		var mediaBodyDiv = document.createElement('div');
		mediaBodyDiv.className = 'media-body';

		node = document.createTextNode(messageSnip);
		mediaBodyDiv.appendChild(mediaHeading);
		mediaBodyDiv.appendChild(node);

		var mediaIMGDiv = document.createElement('div');
		var mediaIMG = document.createElement('img');

		mediaIMG.src = contactsList[i].picture;		
		if(contactsList[i] == selectedContact2) mediaIMG.className = 'media-object img-circle media-sellectedObject';
		else mediaIMG.className = 'media-object img-circle';
		
		mediaIMGDiv.appendChild(mediaIMG);
		mediaIMGDiv.className = 'media-left';

		//var hr = document.createElement('hr');
		mediaDiv.appendChild(mediaIMGDiv);
		mediaDiv.appendChild(mediaBodyDiv);
		$('#contactsPanel').append(mediaDiv);
		//$('#contactsPanel').append(hr);
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
			var wraper = document.createElement('div');
			wraper.className = ' rightAlignment';
			wraper.appendChild(mediaBodyDiv);
			wraper.appendChild(mediaIMGDiv);
			mediaDiv.appendChild(wraper);
		}
		$('#miniDialog').append(mediaDiv);
		var dateP = document.createElement('p');
		var dateNode = document.createTextNode(messages[i].date.toDateString());
		dateP.appendChild(dateNode);
		$('#miniDialog').append(dateP);
		$('#miniDialog').animate({ scrollTop: $('#miniDialog').height() }, 1000);
	}
}

function divSelectedInPanel(contactIndex){
	selectedContactIndex2 = parseInt(contactIndex);
	selectedContact2 = filteredContacts[selectedContactIndex2];
	showDialogPanel(selectedContact2);
	showContactsPanel(filteredContacts);
	$('#dialogPanel').slideDown();
}

function sendBtnClickedMini(){
	if($("#sendMessageTF-Mini").val() != ''){
		var message = new Message(new Date(),account,selectedContact2,$("#sendMessageTF-Mini").val());
		selectedContact2.mailBox.messages.push(message);
		showDialogPanel(selectedContact2);
		$("#sendMessageTF-Mini").val('');
		showContactsPanel(filteredContacts);
	}
}

function buildMessenger(){
	var massengerDiv = document.createElement('div');
	massengerDiv.id = 'massenger';
	var messagesPanelDiv = document.createElement('div');
	messagesPanelDiv.id = 'messagesPanel';
	var messagesToggleDiv = document.createElement('div');
	messagesToggleDiv.id = 'messagesToggle';
	
	var messagesHeader = document.createElement('h5');
	var node = document.createTextNode('Messages');
	var iconSpan = document.createElement('span');
	iconSpan.id = 'toggleIcon';
	iconSpan.className = 'glyphicon glyphicon-circle-arrow-up';
	var contactsPanelDiv = document.createElement('div');
	contactsPanelDiv.id = 'contactsPanel';
	contactsPanelDiv.className = 'collapse';
	
	var dialogPanelDiv = document.createElement('div');
	dialogPanelDiv.id = 'dialogPanel';
	dialogPanelDiv.className = 'collapse';
	
	var miniDialogTitleDiv = document.createElement('div');
	miniDialogTitleDiv.id = 'miniDialogTitle';
	
	var dialogHeader = document.createElement('h5');
	var node2 = document.createTextNode('Dialog');
	var iconSpan2 = document.createElement('span');
	iconSpan2.id = 'toggleIcon2';
	iconSpan2.className = 'glyphicon glyphicon-circle-arrow-down';
	
	var miniDialogDiv = document.createElement('div');
	miniDialogDiv.id ='miniDialog';
	
	var sendPanelMiniDiv = document.createElement('div');
	sendPanelMiniDiv.id ='send-panel-mini';
	
	var sendMessageTFMiniInput = document.createElement('input');
	sendMessageTFMiniInput.id = 'sendMessageTF-Mini';
	sendMessageTFMiniInput.type = 'text';
	sendMessageTFMiniInput.className = 'form-control';
	sendMessageTFMiniInput.setAttribute('placeholder','Write your messege here ..')
	
	var sendBtnMiniInput = document.createElement('button');
	sendBtnMiniInput.id = 'sendBtn-Mini';
	sendBtnMiniInput.type = 'button';
	sendBtnMiniInput.className = 'btn btn-primary';
	var node3 = document.createTextNode('Send');
	
	var messengerCSS = document.createElement('link');
	messengerCSS.setAttribute("rel", "stylesheet");
	messengerCSS.setAttribute("href", "/styles/MassengerStyles.css");
	
	massengerDiv.appendChild(messagesPanelDiv);
	massengerDiv.appendChild(dialogPanelDiv);
	
	messagesPanelDiv.appendChild(messagesToggleDiv);
	messagesPanelDiv.appendChild(contactsPanelDiv);
	
	messagesToggleDiv.appendChild(messagesHeader);
	messagesHeader.appendChild(node);
	messagesHeader.appendChild(iconSpan);
	
	dialogPanelDiv.appendChild(miniDialogTitleDiv);
	dialogPanelDiv.appendChild(miniDialogDiv);
	dialogPanelDiv.appendChild(sendPanelMiniDiv);
	
	miniDialogTitleDiv.appendChild(dialogHeader);
	dialogHeader.appendChild(node2);
	dialogHeader.appendChild(iconSpan2);
	
	sendBtnMiniInput.appendChild(node3);
	sendPanelMiniDiv.appendChild(sendMessageTFMiniInput);
	sendPanelMiniDiv.appendChild(sendBtnMiniInput);
	
	$('footer').append(massengerDiv);
	$('head').append(messengerCSS);
}

function messagesToggleClicked(){
	$('#toggleIcon').toggleClass('glyphicon-circle-arrow-up').toggleClass('glyphicon-circle-arrow-down');
	showContactsPanel(filteredContacts);
	$("#contactsPanel").slideToggle();
	//$('#dialogPanel').slideUp();
}

$(document).ready(function() {
	buildMessenger();
	$("#messagesToggle").click(function (){messagesToggleClicked()});
	
	$("#sendMessageTF-Mini").keydown(function(event){
		if(event.which == 13) sendBtnClickedMini();
	});

	$("#sendBtn-Mini").click(function (){sendBtnClickedMini()});
	
	$('#miniDialogTitle').click(function (){
		$('#dialogPanel').slideUp();
	});
});