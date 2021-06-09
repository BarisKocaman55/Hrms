Create Table Users (
 	id integer Not NUll GENERATED ALWAYS AS IDENTITY (start with 1 increment by 1),
	email VARCHAR(25) NOT NULL,
	password VARCHAR(20) NOT NULL,
	password_again VARCHAR(20) NOT NULL,
	PRIMARY KEY(id)
);

Create Table System_personal(
	id integer Not NUll generated always as identity (start with 1 increment by 1),
	personal_id integer NOT NULL,
    	national_id VARCHAR(10) UNIQUE not NULL,
	user_id integer not null,
    	PRIMARY KEY (id)
) inherits(users);

Create Table Employer_Verification(
	id integer Not NUll GENERATED ALWAYS AS IDENTITY (start with 1 increment by 1),
	verification_code varchar(5) Not NULL,
	verification_status Boolean Not Null,
	Primary key(id)
);

Create Table Employee_Verification(
	id integer Not NUll GENERATED ALWAYS AS IDENTITY (start with 1 increment by 1),
	verification_code varchar(5) Not NULL,
	verification_status Boolean Not Null,
	Primary key(id)
);

Create Table Employer(
	id integer Not NUll GENERATED ALWAYS AS IDENTITY (start with 1 increment by 1),
	employer_id VARCHAR(20) NOT NULL,
    	company_name character varying(50) NOT NULL,
    	company_website character varying(100) NOT NULL,
    	company_phone character varying(10) NOT NULL,
	password VARCHAR(20) NOT NULL,
	password_again VARCHAR(20) NOT NULL,
	verification_id integer NOT NULL,
    	PRIMARY KEY (id),
	FOREIGN KEY (verification_id) REFERENCES Employer_Verification(id)
) 

Create Table Employee(
	id integer Not Null Generated Always As IDENTITY (start with 1 increment by 1),
	employee_id Varchar(20) Not Null,
	first_name Varchar(20) Not Null,
	last_name Varchar(20) Not Null,
	national_id Varchar(11) Unique Not Null,
	password VARCHAR(20) NOT NULL,
	password_again VARCHAR(20) NOT NULL,
	birt_year Date Not Null,
	varification_id integer not Null,
	primary key(id),
	foreign key (varification_id) references Employee_Verification(id)
) 

Create Table Candidate(
	id integer Not Null Generated Always As IDENTITY (start with 1 increment by 1),
	first_name Varchar(20) Not Null,
	last_name Varchar(20) Not Null,
	password VARCHAR(20) NOT NULL,
	password_again VARCHAR(20) NOT NULL,
	Primary Key (id)
)

Create Table City(
	id integer NOT NULL GENERATED ALWAYS AS IDENTITY (start with 1 increment by 1),
	name VARCHAR(25) NOT NULL,
	code VARCHAR(2) NOT NULL,
	PRIMARY KEY(id)
);

Create Table Job(
	id integer Not NUll GENERATED ALWAYS AS IDENTITY (start with 1 increment by 1),
	job_title Varchar(20) NOT NULL,
	PRIMARY KEY(id)
);


CREATE Table job_posting(
	id integer NOT NULL GENERATED ALWAYS AS IDENTITY (start with 1 increment by 1),
	job_description VARCHAR(100) NOT NULL,
	min_sallary integer Check(min_sallary >= 0),
	max_sallary integer Check(max_sallary >= 0),
	available_pos integer Check(available_pos >= 0),
	publish_date Date Not NULL,
	is_active BOOLEAN NOT NULL,
	city_id integer,
	employer_id integer,
	job_id integer,
	PRIMARY KEY(id),
	FOREIGN KEY (city_id) REFERENCES city(id),
	FOREIGN KEY (employer_id) REFERENCES employer(id),
	FOREIGN KEY (job_id) REFERENCES job(id)
);


Create Table languages(
	id integer NOT NULL GENERATED ALWAYS AS IDENTITY (start with 1 increment by 1),
	name Varchar(20) Not null,
	status integer Not null Check(status > 0 and status < 6),
	primary key (id)
);


Create Table University(
	id integer NOT NULL GENERATED ALWAYS AS IDENTITY (start with 1 increment by 1),
	uni_name Varchar(25) Not Null,
	department Varchar(25) Not Null,
	education_start_date integer not null Check(education_start_date > 1980 and education_start_date < 2022),
	education_finish_date integer Check(education_finish_date > 1980 and education_finish_date < 2030),
	graduate_status boolean Not Null,
	primary key (id)
);


Create Table job_experience(
	id integer NOT NULL GENERATED ALWAYS AS IDENTITY (start with 1 increment by 1),
	company_name Varchar(25),
	position_name Varchar(25),
	work_start_date integer Check(work_start_date > 1980 and work_start_date < 2022),
	work_finish_date integer Check(work_finish_date > 1980 and work_finish_date < 2022),
	experience integer Default 0,
	primary key (id)
);


Create Table cv_file(
	cv_id integer Not Null Generated Always as Identity (start with 1 increment by 1),
	github Varchar(25),
	linkedln Varchar(25),
	cover_letter Varchar(400),
	candidate_id integer Not Null,
	university_id integer,
	language_id integer,
	job_id integer,
	Primary Key (cv_id),
	Foreign key (candidate_id) References Candidate(id),
	Foreign key (university_id) References University (id),
	Foreign key (language_id) References Languages(id),
	Foreign key (job_id) References job_experience(id)
);


INSERT INTO public.employer_verification(
	verification_code, verification_status)
	VALUES ('1234', True);
	
INSERT INTO public.employer_verification(
	verification_code, verification_status)
	VALUES ('5234', False);

INSERT INTO public.employee_verification(
	verification_code, verification_status)
	VALUES ('1234', True);
	
INSERT INTO public.employee_verification(
	verification_code, verification_status)
	VALUES ('5234', False);

INSERT INTO public.employer(
	email, password, password_again, employer_id, company_name, company_website, company_phone, verification_id)
	VALUES ('dasddas@gmail.com', '76764', '76764', '65823', 'dasddas', 'dasddas.com', '054437672', 2);
	
INSERT INTO public.employer(
	email, password, password_again, employer_id, company_name, company_website, company_phone, verification_id)
	VALUES ('kocaman@gmail.com', '31233', '31233', '41541', 'kocaman', 'kocaman.com', '05443412', 1);
	
INSERT INTO public.employee(
	email, password, password_again, employee_id, first_name, last_name, national_id, birt_year, varification_id)
	VALUES ('user@gmail.com', '12345', '12345', '3123', 'Baris', 'Kocaman', '12345678911', '1999-07-02', 1);

INSERT INTO public.employee(
	email, password, password_again, employee_id, first_name, last_name, national_id, birt_year, varification_id)
	VALUES ('user1@gmail.com', '4324', '4324', '34124', 'Elifsu', 'Kocaman', '12345678966', '1992-03-21', 1);	
	
	
INSERT INTO public.employee(
	email, password, password_again, employee_id, first_name, last_name, national_id, birt_year, varification_id)
	VALUES ('use2r@gmail.com', '12345fsdf', '12345fsdf', '211331', 'Esra', 'Kocaman', '12345678933', '1968-03-24', 2);
	
	
INSERT INTO public.city(
	name, code)
	VALUES ('İstanbul', '34');
	
INSERT INTO public.city(
	name, code)
	VALUES ('Ankara', '06');
	
INSERT INTO public.city(
	name, code)
	VALUES ('Samsun', '55');
	
INSERT INTO public.job(
	job_title)
	VALUES ('.Net Developer');

INSERT INTO public.job(
	job_title)
	VALUES ('Java Developer');

INSERT INTO public.job(
	job_title)
	VALUES ('ML Developer');
	
INSERT INTO public.job_posting(
	job_description, min_sallary, max_sallary, available_pos, publish_date, is_active, city_id, employer_id, job_id)
	VALUES ('dasdasda', 5500, 7500, 5, '2021-03-03', True, 1, 1, 2);
	
INSERT INTO public.job_posting(
	job_description, min_sallary, max_sallary, available_pos, publish_date, is_active, city_id, employer_id, job_id)
	VALUES ('dasdas', 5000, 8000, 3, '2021-05-05', True, 2, 1, 1);
	
INSERT INTO public.job_posting(
	job_description, min_sallary, max_sallary, available_pos, publish_date, is_active, city_id, employer_id, job_id)
	VALUES ('dgdfgdf', 6000, 9000, 7, '2021-07-07', True, 3, 2, 3);
	
INSERT INTO public.languages(
	name, status)
	VALUES ('English', 4);

INSERT INTO public.languages(
	name, status)
	VALUES ('German', 2);
	
INSERT INTO public.languages(
	name, status)
	VALUES ('Turkish', 5);
	
INSERT INTO public.university(
	uni_name, department, education_start_date, education_finish_date, graduate_status)
	VALUES ('Başkent University', 'CE', 2017, 2021, True);
	
INSERT INTO public.university(
	uni_name, department, education_start_date, education_finish_date, graduate_status)
	VALUES ('Odtü', 'CE', 2021, 2023, False);
	
INSERT INTO public.job_experience(
	company_name, position_name, work_start_date, work_finish_date, experience)
	VALUES ('Kuartis', 'ML Developer', 2019, 2020, 1);

INSERT INTO public.job_experience(
	company_name, position_name, work_start_date, work_finish_date, experience)
	VALUES ('SmartMessage', '.Net Developer', 2020, 2021, 1);

INSERT INTO public.candidate(
	email, password, password_again, first_name, last_name)
	VALUES ('den@gmail.com', '123', '123', 'dasda', 'dadasd');

INSERT INTO public.cv_file(
	github, linkedln, cover_letter, candidate_id, university_id, language_id, job_id)
	VALUES ('baris.git', 'baris.linkedln', 'dadasdasdasdas', 1, 1, 1, 1);

#------Sql Code for Inner Join more than one table
select candidate.id, candidate.first_name, candidate.last_name, cv_file.github, university.uni_name, university.department
from candidate inner join
cv_file on cv_file.candidate_id = candidate.id
inner join university 
on university.cv_id = cv_file.cv_id;
	