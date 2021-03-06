package kodlamaio.hrms.entities.dtos;

import java.sql.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobExperienceDto {
	
	@JsonIgnore
	private int id;
	private int resumeId;
	private String companyName;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date startedDate;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date endedDate;
	private int jobPositionId;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date createdDate;
	

}
