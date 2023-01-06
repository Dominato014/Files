const messages = document.getElementById("messages");
const message = document.getElementById("message");
const send = document.getElementById("send");

function addMessage(text, type) {
  // Create message element
  const el = document.createElement("div");
  el.classList.add("message", type);

  // Add avatar element
  const avatar = document.createElement("div");
  avatar.classList.add("avatar");
  const avatarIcon = document.createElement("i");
  avatarIcon.classList.add("fas", "fa-user");
  avatar.appendChild(avatarIcon);
  el.appendChild(avatar);

  // Add content element
  const content = document.createElement("div");
  content.classList.add("content");
  const contentParagraph = document.createElement("p");
  contentParagraph.textContent = text;
  content.appendChild(contentParagraph);
  el.appendChild(content);

  // Add message to messages container
  messages.appendChild(el);

  // Scroll messages to bottom
  messages.scrollTop = messages.scrollHeight;
}

send.addEventListener("click", () => {
  const text = message.value;
  if (text === "") {
    return;
  }
  message.value = "";
  addMessage(text, "sent");
});

addMessage("Hello!", "received");
addMessage("Hi there!", "sent");
addMessage("How are you doing?", "received");
addMessage("I'm doing well, thank you!", "sent");
