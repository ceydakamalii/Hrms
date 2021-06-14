import axios from '../axios/axios';

export default class CandidateService {
    getCandidates() {
        return axios.get("/candidates/getall")
    }
    addCandidate(candidate){
        return axios.post("http://localhost:8080/api/candidates/add",candidate)
        
    }
}