package kodlamaio.hrms.entities.concretes;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="candidate_users")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@EqualsAndHashCode(callSuper=false)
public class Candidate extends User{
	
	@NotBlank(message="İsim alanı boş bırakılamaz !")
	@Size(min = 3, message = "İsim alanında en az 3 karakter kullanmanız gerekiyor") 
	@Column(name="name")
	private String name;
	
		
	@NotBlank(message="Soyisim Alanı Boş bırakılamaz ! ")
	@Column(name="surname")
	private String surname;
	
	@NotBlank(message="TC Kimlik Numarası Alanı Boş Bırakılamaz !") 
	@Size(min = 11, max=11, message = "TC kimlik no 11 karakterden oluşur !")
	@Column(name="national_identity")
	private String nationalIdentity;
	
	@NotBlank(message="Doğum yılı boş bırakılamaz, doğum yılı 4 karakterden olusmalıdır.")
	@Column(name="birth_year")
	private String birth_year;
	
	
	
	

}
