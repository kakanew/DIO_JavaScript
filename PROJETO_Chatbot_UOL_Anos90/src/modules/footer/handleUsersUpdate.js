import { getElement } from '../utils';

export const handleUsersUpdate = users => {
  const usersSelect = getElement('#message-to');
  const options = users
    .map(({ username }) => '<option value="${username}">${username}</option>')
    .concat('<option value="Todos">Todos</option');

  usersSelect.innerHTML = options;
};