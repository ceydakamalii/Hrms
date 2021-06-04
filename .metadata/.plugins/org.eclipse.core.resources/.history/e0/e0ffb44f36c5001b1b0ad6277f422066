package kodlamaio.hrms.entities.concretes;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="staff_users")
@EqualsAndHashCode(callSuper=false)
@PrimaryKeyJoinColumn(name="user_id")
public class StaffUser extends User{
	
	@NotBlank(message = "İsim alanını boş bırakmayınız, isminizi giriniz !")
	@Column(name="name")
	private String name;
	
	@NotBlank(message = "Soyisim alanını boş bırakmayınız, soyisiminizi giriniz !")
	@Column(name="surname")
	private String userName;
	
	

}
