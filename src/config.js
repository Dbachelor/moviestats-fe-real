const PROTOCOL = navigator.protocol;
const HOST = navigator.host;
// console.log(PROTOCOL,HOST);
export const API_PATH = `http://127.0.0.1:4000`;
export const URL_PATH = `${PROTOCOL}//${HOST}`;
export const header = {
     "Content-Type":"application/json",
     "Accept":"application/json"
}
