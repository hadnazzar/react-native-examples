import { initialize, setListener, pushData } from './firebase';

// const mockMessages = [
//   {
//     incoming: true,
//     message: 'Hi Melih'
//   },
//   {
//     incoming: false,
//     message: 'Hello chatbot how are you?'
//   },
//   {
//     incoming: true,
//     message: 'I am fine thanks. When we will start make cryptocurrency app?'
//   },
//   {
//     incoming: false,
//     message: 'Soon...'
//   },
// ]


// export const getMockData = () => (
//   new Promise(resolve => setTimeout(
//     () => resolve(mockMessages), 1000)
//   )
// )


//Firebase
export const initApi = () => initialize();

export const getMessages = (updaterFn) => setListener('messages', updaterFn);

export const postMessage = (message) => {
  if (Boolean(message)) {
    pushData('messages', {
      incoming: false,
      message
    })
  }
}