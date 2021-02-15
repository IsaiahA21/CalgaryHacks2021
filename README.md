# CalgaryHacks2021
Feb 14, 2021
by Rebecca Reid and Isaiah Asaolu
for CalgaryHacks 2021

# Sidenote:

chat doesn't work, as it's supported by socket.io. https://socket.io/get-started/chat

# To run locally:

Run

npm install express@4
and

npm install socket.io
then,

node chatWithBot.js
Then it should work!

# Script
(RESTART SERVER)
Rebecca: Hello, I'm Rebecca

Isaiah: and I'm Isaiah - and we're Team 18 - Lizardmen. We're in tier 1, we chose topic 2, and we're attemtping the UX and machine learning bounties.

Rebecca: Our project is Unicomm. Unicomm is meant to connect students and professors more easily online! The topic was to help students with working at home, while still being useful in the long term.

Isaiah: Students can chat with an ai help bot that can either provide them relevant material, or it can help write precise questions to the prof. The bot is meant to constantly improve with feedback and the questions asked by students using machine learning.
(SWITCH)
On the assignment page, the prof can upload assignments for the students. 
(Click some of the buttons)
(BREAK)
On the extra materials page, the prof can upload bonus/supplementary materials for students. (click some buttons)
Eventually, our goal would be to automatically link uploaded documents to our AI bot so it can access them, and present them to students when needed.

Rebecca: The ask questions page is the main part of our app. Here is an example interaction with the bot, where it provides material relevant to the assignment.
The AI is not fully implemented, but we have some functionality. When I type a question,
(type question)
the chat bot would show the proper documents on the left hand panel. If I type prof
(type prof)
the bot prepares an example with X's filled based on chat history. The student could also click the fields to fill them in, and can send the message.
For the student chat, we would have separate chatrooms for each question, but that isn't impeleneted yet. Here is an example chat between students and the professor.

Isaiah: The professor page is like the student page, but the professor and student can share a whiteboard like this: 
(draw)
(LONG BREAK)
The meeting page displays the professors availability. We haven't implemented booking yet, though.

Rebecca: Further steps we could make on the project would be
Adding better bot interactions,
adding the machine learning algorithm to the bot
integrating the assingments with the bot,
adding an eraser to the whiteboard.
adding voice support to the professor page
and adding meeting scheduling.

Isaiah: Overall, we hope that the project is a good representation of our solution for online learning. We hope you enjoyed our project! Thanks for wathcing.
