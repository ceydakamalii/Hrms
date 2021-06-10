import axios from '../axios/axios';
export default class JobPositionService {
    getJobPositions() {
        return axios.get("/jobs/getall")
    }
}