//array to store messages.
var messages = [];

//message Type lookup object. Similar to enum.
var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

//Seed data. 
var data = [
    {
        type: messageType.out,
        user: 'Nikolai',
        message: 'Hey Nikolai, do you have lunch plans?'
    },
    {
        type: messageType.in,
        user: 'Joe',
        message: 'Hi Nikolai! No, how about Taco Bell?'
    },
    {
        type: messageType.out,
        user: 'Nikolai',
        message: "Ok, let's go!"
    }
];

//Message constructor function.
function Message(type, user, message) {
    this.type = type;
    this.user = user;
    this.message = message;
};

//Function to create and return an element for the supplied messages.
function createMessageElement(message) {
    //Create text element for the message
    var messageText = document.createTextNode(message.user + ': ' + message.message);


    //Create the element and add the message text.
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    //Add a class using the message type.
    messageEl.className = message.type;

    return messageEl;
}

//Button click event handler to add a new message.
function addMessageHandler(event) {
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');

    //Determine message type and set the variables accordingly.
    switch (event.target.id) {
        case 'send-button':
            user = 'Nikolai';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Joe';
            type = messageType.in;
            break;
            
        default:
            user = 'unknown';
            type = messageType.unknown;
            break;
    }

    //Create new message.
    if (messageInput.value != '') {
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        //Create message element.
        var el = createMessageElement(message);

        //Add the message element to the DOM.
        messagesContainerEl.appendChild(el);

        //Reset input.
        messageInput.value = '';
    }
}

//Load seed data from array above.
function loadSeedData() {
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var message = new Message(item.type, item.user, item.message);
        messages.push(message);
    }

    //Load view with pre-loaded messages
    var messagesContainerEl = document.getElementById('message-container');
    for (var i = 0; i < messages.length; i++) {
        var message = messages[i];
        var el = createMessageElement(message)

        messagesContainerEl.appendChild(el);
    }
}

var init = function() {
    //Wire event handlers
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    //Load send data from data array above.
    loadSeedData();
}

init();


