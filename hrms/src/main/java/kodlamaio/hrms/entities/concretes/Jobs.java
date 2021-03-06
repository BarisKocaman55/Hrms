package kodlamaio.hrms.entities.concretes;

import kodlamaio.hrms.entities.abstracts.JobsEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Job")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler", "job_posting"})
public class Jobs implements JobsEntity{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="job_title")
	private String jobTitle;
	
	
	@OneToMany(mappedBy = "job")
	private List<JobPosting> jobPosting;
}
