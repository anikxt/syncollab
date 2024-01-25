import { io } from 'socket.io-client';

export const initSocket = async () => {
  const options = {
    'force new connection': true,
    reconnectionAttempt: 'Infinity',
    timeout: 10000,
    transports: ['websocket'],
    withCredentials: true,
  };

  console.log(process.env.REACT_APP_BACKEND_URL, 'haha?');

  return io(process.env.REACT_APP_BACKEND_URL, options);
};
