package kodlamaio.hrms.dataAccess.abstracts;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import kodlamaio.hrms.entities.concretes.Candidate;
import kodlamaio.hrms.entities.dtos.CandidateWithCvFileDto;
import kodlamaio.hrms.entities.dtos.CandidateWithCvGraduate;

public interface CandidateDao extends JpaRepository<Candidate, Integer> {
	Candidate getById(int id);
	Candidate getByFirstNameAndLastName(String firstName, String lastName);
	
//	@Query("Select new kodlamaio.kodlamaio.hrms.entities.dtos.CandidateWithCvFileDto Candidate.id, Candidate.firstName, Candidate.lastName, CvFile.github, University.uniName, University.department From Candidate Inner Join CvFile on CvFile.candidateId = Candidate.id Inner Join University on University.cv_id" = cvFile.id")
//	@Query("Select new kodlamaio.kodlamaio.hrms.entities.dtos.CandidateWithCvFileDto(Candidate.id, Candidate.firstName, Candidate.lastName, CvFile.github, University.uniName, University.department) From Candidate Inner Join CvFile On CvFile.candidateId =: Candidate.id Inner Join University On University.cv_id =: cvFile.id")
//	List<CandidateWithCvFileDto> getCandidateWithCvDetails();
	
	
//	@Query("Select new kodlamaio.hrms.entities.dtos.CandidateWithCvFileDto(p.id, p.firstName, p.lastName, c.university, c.department) From CvFile c Inner Join c.candidate p")
//	List<CandidateWithCvFileDto> getCandidateWithCvDetails();
//	
//	@Query("Select new kodlamaio.hrms.entities.dtos.CandidateWithCvGraduate(p.id, p.firstName, p.lastName, c.university, c.department, c.educationFinishDate, c.graduateStatus) From CvFile c Inner Join c.candidate p Order By c.educationFinishDate Asc")
//	List<CandidateWithCvGraduate> getCandidateCvOrderByGraduateYear();
	
//	@Query("Select new kodlamaio.hrms.entities.dtos.CandidateWithCvFileDto(p.id, p.firstName, p.lastName, c.university, c.department) From University c Inner Join c.university p")
//	List<CandidateWithCvFileDto> getCandidateWithCvDetails();
}
