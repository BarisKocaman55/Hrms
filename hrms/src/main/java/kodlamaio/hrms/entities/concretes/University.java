package kodlamaio.hrms.entities.concretes;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import com.fasterxml.jackson.annotation.JsonBackReference;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "university")
public class University {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "uni_name")
	private String uniName;
	
	@Column(name = "department")
	private String department;
	
	@Min(1980)
	@Max(2021)
	@Column(name = "education_start_date")
	private int educationStartDate;
	
	@Min(1980)
	@Max(2021)
	@Column(name = "education_finish_date")
	private int educationFinishDate;
	
	@Column(name = "graduate_status")
	private boolean graduateStatus;
	
	@ManyToOne()
	@JoinColumn(name = "cv_id")
	@JsonBackReference
	private CvFile cvFile;
}
