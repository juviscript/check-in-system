import httpClient from "../httpCommon";

const getAll = () => {
    return httpClient.get('check-in/entries/all');
}

export default { getAll }