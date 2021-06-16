import axios from '../axios/axios';
export default class WorkPlaceService {
    getWorkPlace() {
        return axios.get("/workplace/getAll")
    }
}
