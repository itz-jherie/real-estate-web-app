import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'ad1a7855aamsh71627e581416c9dp1fa3d2jsn80844fd766a9'
        }
    });
    return data;
}