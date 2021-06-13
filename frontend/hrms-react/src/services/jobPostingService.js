import axios from '../axios/axios';
export default class JobPostingService {
    getJobPostings() {
        return axios.get("/jobPostings/getActive")
    }

    getByCity_Name(cityName){
        return axios.get("jobPostings/get/City/jobPosting")
    }
}