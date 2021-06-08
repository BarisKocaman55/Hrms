package kodlamaio.hrms.entities.concretes;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import kodlamaio.hrms.entities.abstracts.EmployerEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@PrimaryKeyJoinColumn(name = "id")
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "employer")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "job_Posting"})
public class Employer implements EmployerEntity { 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "password_again")
	private String password_again;
	
	@Column(name = "employer_id")
	private String employerId;
	
	@Column(name = "company_name")
	private String companyName;
	
	@Column(name = "company_website")
	private String companyWebsite;
	
	@Column(name = "company_phone")
	private String companyPhone;
	
	@Column(name = "verification_id")
	private int verification_id;
	
	@OneToMany(mappedBy="employer", fetch = FetchType.LAZY)
	private List<JobPosting> jobPosting;
}
