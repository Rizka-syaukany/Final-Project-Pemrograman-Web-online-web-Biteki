const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const icons = {
    isClicked: '<img src="../assets/chatbox/question_answer_black_24dp.svg" width="30" />',
    isNotClicked: '<img src="../assets/chatbox/question_answer_black_24dp.svg" width="30" />'
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);