import axios from '../axios/axios';
export default class JobPostingService {
    getJobPostings() {
        return axios.get("/jobPostings/getActive")
    }

    getByCity_Name(cityName){
        return axios.get("jobPostings/get/City/jobPosting")
    }

    addJobPosting(values){
        return axios.post("/jobPostings/add",values)
    }

    getByJobPostingId(id){
        return axios.get("/jobPostings/getById?id="+id)
    }
}