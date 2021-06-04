package kodlamaio.hrms.entities.concretes;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="employer_users")
@EqualsAndHashCode(callSuper=false)
@PrimaryKeyJoinColumn(name="user_id")
public class Employer extends User{
	
	@NotBlank(message="Şirket ismi alanı boş bırakılamaz !")
	@Column(name="company_name")
	private String companyName;
	
	@NotBlank(message="Web Sitesi Alanı Boş Bırakılamaz !")
	@Column(name="web_address")
	private String webAddress;
	
	
	@NotBlank(message="Telefon Numarası Alanı Boş Bırakılamaz !")
	@Column(name="phone_number")
	private String phoneNumber;
	
	@JsonIgnore
	@Column(name="user_confirm")
	private boolean userConfirm;

}
