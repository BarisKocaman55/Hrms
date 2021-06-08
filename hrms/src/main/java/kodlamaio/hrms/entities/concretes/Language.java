package kodlamaio.hrms.entities.concretes;

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
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.sun.istack.NotNull;

import javax.persistence.CascadeType;
import javax.persistence.Column;

import kodlamaio.hrms.entities.abstracts.LanguageEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "languages")
public class Language implements LanguageEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@NotBlank
	@NotNull
	@Column(name = "name")
	private String name;
	
	@Min(1)
	@Max(5)
	@NotBlank
	@NotNull
	@Column(name = "status")
	private int status;
	
	@ManyToOne()
	@JoinColumn(name = "cv_id")
	@JsonBackReference
	private CvFile cvFile;
	
}
