import { getElement, getElementValue } from '../utils';

export const handleSubmit = socket => () => {
  const messageInput = getElement('#message-content');

  const from = getElementValue('#username').value;
  const to = getElementValue('#message-to').value;
  const content = messageInput.value;
  const type = getElementValue('#message-type').value;
  const date = Date.now();

  if (content) {
    const message = {
      from,
      to,
      content,
      type,
      date,
    };

    socket.emit('message', message);
    messageInput.value = '';
    messageInput.focus();
  }
};
