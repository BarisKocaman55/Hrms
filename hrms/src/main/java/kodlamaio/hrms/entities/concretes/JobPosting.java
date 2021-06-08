package kodlamaio.hrms.entities.concretes;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import kodlamaio.hrms.entities.abstracts.JobPostingEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "job_posting")
public class JobPosting implements JobPostingEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "job_description", nullable=false)
	private String jobDescription;
	
	@Column(name = "min_sallary", nullable=true)
	private int minSallary;
	
	@Column(name = "max_sallary", nullable=true)
	private int maxSallary;
	
	@Column(name = "available_pos", nullable=false)
	private int availablePos;
	
	@Column(name = "publish_date", nullable=false)
	private Date publishDate;
	
	@Column(name = "is_active", nullable=false)
	private boolean isActive;
	
	@ManyToOne()
	@JoinColumn(name = "id", nullable=false, insertable = false, updatable = false)
	@JsonBackReference
	private Jobs job;
	
	@ManyToOne()
	@JoinColumn(name = "id", nullable=false, insertable = false, updatable = false)
	@JsonBackReference
	private City city;
	
	@ManyToOne()
	@JoinColumn(name = "id", nullable=false, insertable = false, updatable = false)
	@JsonBackReference
	private Employer employer;
}
