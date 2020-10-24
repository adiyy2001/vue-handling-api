import httpClient from './HttpClient';

const END_POINT = "/users";

const getUsers = (title = null, status = null) => httpClient.get(END_POINT);

export {
    getUsers
}