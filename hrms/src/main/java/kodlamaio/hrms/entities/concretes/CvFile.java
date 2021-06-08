package kodlamaio.hrms.entities.concretes;


import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import kodlamaio.hrms.entities.abstracts.CvFileEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "cv_file")
@JsonIgnoreProperties(ignoreUnknown=true)
public class CvFile implements CvFileEntity{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "cv_id")
	private int cvId;
	
	@Column(name = "github")
	private String github;
	
	@Column(name = "linkedln")
	private String linkedln;
	
	@Column(name = "cover_letter")
	private String coverLetter;
	
	@JsonIgnore
	@OneToMany(mappedBy = "cvFile")
	private List<Language> language;
	
	@JsonIgnore
	@OneToMany(mappedBy = "cvFile")
	private List<University> university;
	
	@JsonIgnore
	@OneToMany(mappedBy = "cvFile")
	private List<JobExperience> jobExperience;
	
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "candidateId")
	@JsonBackReference
	private Candidate candidate;
}
