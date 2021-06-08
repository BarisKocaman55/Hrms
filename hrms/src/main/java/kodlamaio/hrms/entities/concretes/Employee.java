package kodlamaio.hrms.entities.concretes;

import java.sql.Date;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.sun.istack.NotNull;

import kodlamaio.hrms.entities.abstracts.EmployeeEntity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@PrimaryKeyJoinColumn(name = "id")
@AllArgsConstructor
@NoArgsConstructor
public class Employee implements EmployeeEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "employee_id")
	private int employeeId;
	
	@Email
	@NotBlank
	@NotNull
	@Column(name = "email")
	private String email;
	
	@NotBlank
	@NotNull
	@Column(name = "password")
	private String password;
	
	@NotBlank
	@NotNull
	@Column(name = "password_again")
	private String passwordAgain;
	
	@Column(name = "birth_year")
	private Date birth_year;
	
	@Column(name = "first_name")
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;
	
	@Column(name = "national_id")
	private String nationalId;
	
	@Column(name = "varification_id")
	private int verification_id;
}
