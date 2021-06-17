package kodlamaio.hrms.entities.dtos;

import java.sql.Date;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobPostingDto {

    @JsonProperty(access = Access.READ_ONLY)
	private int id;
    private int employerId;
	private String employerCompanyName;
	private String jobPositionPosition;
	private int openPositionNumber;
	private Date createdDate;
	private Date closedDate;
	private String description;
	private int minSalary;
	private int maxSalary;
	private String cityName;
	private String workPlaceName;
	private String workTimeName;
	private boolean isActive;
	
	
}