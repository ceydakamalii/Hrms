import axios from '../axios/axios';
export default class ResumService {
    getResumes() {
        return axios.get("/resumes/getall")
    }
    getById(id){
        return axios.get("/resumes/getById?id="+id)
    }
}