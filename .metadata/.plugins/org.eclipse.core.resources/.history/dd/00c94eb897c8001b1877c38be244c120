package kodlamaio.hrms.entities.dtos;

import java.sql.Date;

import org.springframework.format.annotation.DateTimeFormat;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResumeAddDto {
	
	@JsonProperty(access = Access.READ_ONLY)
	private int id;
	private int candidateId;
	private String githubLink;
	private String linkedLink;
	private String photo;
	private String description;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date createdDate;
	//@DateTimeFormat(pattern = "yyyy-MM-dd")
	//private Date updatedDate;
	

}
