package kodlamaio.hrms.dataAccess.abstracts;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import kodlamaio.hrms.entities.concretes.JobExperience;

public interface JobExperienceDao extends JpaRepository<JobExperience, Integer>{
	
	@Query("From JobExperience c where cv_id =:id ORDER BY experience DESC")
	List<JobExperience> getJobExperienceOrderByYear(int id);
}
