package kodlamaio.hrms.entities.dtos;

import java.sql.Date;

import javax.validation.constraints.NotBlank;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TechnologyDto {
	
	@JsonIgnore
	private int id;
	private int resumeId;
	@NotBlank(message = "Açıklama alanı boş bırakılamaz.")
	private String description;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date createdDate;

}
