package kodlamaio.hrms.business.abstracts;

import java.util.List;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.JobExperience;

public interface JobExperienceService {
	public DataResult<List<JobExperience>> getAll();
	public Result add(JobExperience jobExperience);
	public DataResult<List<JobExperience>> getJobExperienceOrderByYear(int id);
	
}
