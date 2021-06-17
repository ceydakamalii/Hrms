import axios from '../axios/axios';

export default class CandidateService {
    getCandidates() {
        return axios.get("/candidates/getall")
    }
    addCandidate(values){
        return axios.post("/candidates/add",values)
    }
 
}