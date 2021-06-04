package kodlamaio.hrms.entities.dtos;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobPostingDto {
	private String employerCompanyName;
	private String jobPositionPosition;
	private int minSalary;
	private int maxSalary;
	private int openPositionNumber;
	private Date createdDate;
	private Date closedDate;
	private String description;
	private String cityName;
	private boolean isActive;
	
	
}