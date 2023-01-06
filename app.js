const app = {
  // Initialize the app
  init() {
    // Get references to DOM elements
    this.app = document.getElementById('app');
    this.form = document.getElementById('message-form');
    this.input = document.getElementById('message-input');
    this.conversation = document.getElementById('conversation');

    // Set up event listeners
    this.form.addEventListener('submit', this.sendMessage.bind(this));
  },

  // Send a message
  sendMessage(event) {
    // Prevent form submission
    event.preventDefault();

    // Get the message text
    const text = this.input.value;

    // Clear the input field
    this.input.value = '';

    // Create a message element
    const message = document.createElement('div');
    message.classList.add('message', 'sent');
    message.innerHTML = `
      <div class="avatar">
        <i class="fas fa-user"></i>
      </div>
      <div class="text">${text}</div>
    `;

    // Add the message to the conversation
    this.conversation.appendChild(message);

    // Scroll the conversation to the bottom
    this.conversation.scrollTop = this.conversation.scrollHeight;
  },
};

// Start the app
app.init();
