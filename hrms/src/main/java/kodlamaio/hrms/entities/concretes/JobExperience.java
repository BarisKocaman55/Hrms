package kodlamaio.hrms.entities.concretes;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;

import kodlamaio.hrms.entities.abstracts.JobCvEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "job_experience")
public class JobExperience implements JobCvEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "company_name")
	private String company_name;
	
	@Column(name = "position_name")
	private String position_name;
	
	@Min(1980)
	@Max(2030)
	@NotBlank
	@NotNull
	@Column(name = "work_start_date")
	private int workStartDate;
	
	@Min(1980)
	@Max(2030)
	@Column(name = "work_finish_date")
	private int workFinishDate;
	
	@Column(name = "experience")
	private int experience;
	
	
	@ManyToOne()
	@JoinColumn(name = "cv_id", nullable=false, insertable = false, updatable = false)
	@JsonBackReference
	@JsonIgnore()
	private CvFile cvFile;
	
	public int getExperience() {
		return this.workFinishDate - this.workStartDate;
	}
}
