import axios from '../axios/axios';
export default class CityService {
    getCities() {
        return axios.get("/cities/getall")
    }
}