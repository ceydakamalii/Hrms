import axios from '../axios/axios';
export default class JobPostingService {
    getJobPostings() {
        return axios.get("/jobPostings/getActive")
    }
}