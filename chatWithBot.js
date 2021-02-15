var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var chatHistory = [];

//css?
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/chatWithBot.html');
});

http.listen(2999, () => {
    console.log('listening on *:2999');
});

io.on('connection', (socket) => {
    var connectMessage = new Date().toUTCString() + ' | System: User connected: ';
    console.log(connectMessage);
    //io.emit('chat history', chatHistory);

    socket.on('chat message', (msg) => {
        var messageToWrite = msg;
        console.log("final message emitted: " + messageToWrite);
        chatHistory.unshift(messageToWrite);
        let here = '<span style="color:blue;"> here </span>';
        if (msg.includes("uestion")) {
            // console.log("found possible emoji");
            if (msg.includes("1")) {
                chatHistory.unshift("For question 1," + here + "are some materials."
                    + "<br>Describe your problem to narrow the results."
                    + "<br>Type 'Prof' to draft a message to the prof");
            }
            else if (msg.includes("2")) {
                chatHistory.unshift("For question 2, " + here + " are some materials."
                    + "<br>Describe your problem to narrow the results."
                    + "<br>Type 'Prof' to draft a message to the prof");
            }
            else if (msg.includes("3")) {
                chatHistory.unshift("For question 3, " + here + " are some materials."
                    + "<br>Describe your problem to narrow the results."
                    + "<br>Type 'Prof' to draft a message to the prof");
            }
            else {
                chatHistory.unshift("Please state the question number ");
            }
        }
        if (msg.includes("prof")) {
            chatHistory.unshift("Suggested message to prof. Once the message is completed," +
                "it will be sent to the prof." +
                "<br>Assignment: XXX" +
                "<br>Timestamp: " + new Date().toUTCString() +
                "<br>Assignment Question: XXX" +
                "<br> Steps already completed: XXX" +
                "<br>Question: " +
                '<br><br><b><span style="color:blue;"> Send </span></b>');
        }
        if (msg.includes("send")) {
            chatHistory.unshift("The following message sent to prof." +
                "<br>Assignment: 1" +
                "<br>Timestamp: " + new Date().toUTCString() +
                "<br>Assignment Question: 2" +
                "<br> Steps already completed: Took the sq.root of both sides. Divided by 2" +
                "<br>Questio I can't figure out how to combine the 2^3 and the 2^4");
        }
        io.emit('chat history', chatHistory);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected:');
    });
});