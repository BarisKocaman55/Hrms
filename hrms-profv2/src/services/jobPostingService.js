import axios from "axios"

export default class JobPostingService {
    getJobPosting() {
        return axios.get("http://localhost:8080/api/jobPosting/getAll");
    }

    getJobDetails() {
        return axios.get("http://localhost:8080/api/jobs/getAllJobDetails");
    }

    addJob() {
        return axios.post("http://localhost:8080/api/jobs/addJobs");
    }
}