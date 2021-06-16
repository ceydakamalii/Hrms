import axios from '../axios/axios';
export default class WorkTimeService {
    getWorkTime() {
        return axios.get("/worktime/getAll")
    }
}

