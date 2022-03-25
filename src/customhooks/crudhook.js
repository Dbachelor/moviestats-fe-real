
import { header, API_PATH, URL_PATH } from "../config";

export const uzeGet = (url, resource, header, setStateValue) => {
    fetch(`${url}${resource}`, {method : "GET", headers : header})//.then((response) => response.json())
    .then((resp) => resp.json())
      .then((myData) => {
        console.log(myData, '...__')
        setStateValue(myData);
        
      })
      .catch((err) => {
        console.log(err);
      });
}

export const usePatch = async (url, resource, data, id) => {
    const res = await fetch(`${url}/${resource}/${id}`, {method : "PATCH", headers : header, body : JSON.stringify(data)})
    return res.json();

}

export const useGetOne = async (url, resource, id, header) => {
    const res = await fetch(`${url}/${resource}/${id}`, {method : "GET", headers : header})
    let data = await res.json();
    //console.log(data);
    return  data;
}

export const uzeDelete = async (url, resource, id, header) => {
    const res = await fetch(`${url}/${resource}/${id}`, {method : "DELETE", headers : header})
    let data = await res.json();
    console.log(data);
    return await data;
}
//c419cb06-8478-477d-80a5-11e76aa3cb30
export const usePost = async (url, resource, data) => {

}
