// JavaScript Document

var account = demoAccount();
var filteredContacts = account.contacts.contacts;
var selectedContact = filteredContacts[0];
var selectedContactIndex = 0;
var aBook = account.contacts;

var selectedContact2 = filteredContacts[0];
var selectedContactIndex2 = 0;


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

function Contact(firstName, lastName, email, picture, dialog, jobTitle) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.email = email;
	this.picture = picture;
	this.fullName = function(){return firstName + " " + lastName}
	this.mailBox = dialog;
	this.jobTitle = jobTitle;
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
	var marie = new Contact("Marie","Fonkou","fonkou.m@husky.neu.edu","images/Marie.jpg",mbMarie,'Waitress');
	var ghazal = new Contact("Ghazal","Shambayati","shambayati.g@husky.neu.edu","images/ghazal.jpg",mbGhazal,'Bartender');
	var maria = new Contact("Maria","Kochetygova","kochetygova.m@husky.neu.edu","images/maria.jpg",mbMaria,'Cook');
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