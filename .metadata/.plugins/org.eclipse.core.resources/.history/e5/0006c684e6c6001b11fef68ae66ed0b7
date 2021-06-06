package kodlamaio.hrms.entities.dtos;

import java.sql.Date;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class JobPostingAddDto {
	
	@JsonIgnore
	private int id;
	private int employerId;
	private int jobPositionId;
	@Min(value = 1, message = "Aktif iş ilanı sayısı")
	private int openPositionNumber;
	private int minSalary;
	private int maxSalary;
	private int cityId;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date createdDate;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date closedDate;
	@NotBlank(message = "İş ilanı açıklamasını boş bırakamazsınız.")
	private String description;
	private boolean isActive;

}
