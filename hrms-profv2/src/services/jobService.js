import axios from "axios"

export default class JobService {
    getJobDetails() {
        return axios.get("http://localhost:8080/api/jobs/getAllJobDetails");
    }
}