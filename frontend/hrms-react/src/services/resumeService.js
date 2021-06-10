import axios from '../axios/axios';
export default class ResumService {
    getResumes() {
        return axios.get("/resumes/getall")
    }
}