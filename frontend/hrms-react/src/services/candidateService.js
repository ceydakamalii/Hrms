import axios from '../axios/axios';
export default class CandidateService {
    getCandidates() {
        return axios.get("/candidates/getall")
    }
}