package kodlamaio.hrms.api.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.hrms.business.abstracts.JobPostingService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.JobPosting;
import kodlamaio.hrms.entities.dtos.JobPostingDto;
@RestController
@RequestMapping("api/jobPostings")
public class JobPostingController {

	private JobPostingService jobPostingService;

	@Autowired
	public JobPostingController(JobPostingService jobPostingService) {
		super();
		this.jobPostingService = jobPostingService;
	}
	
	
	@GetMapping("/getActive")
	DataResult<List<JobPostingDto>> findByIsActive(){
		return this.jobPostingService.findByIsActive();
	}
	
	
	@PostMapping("/add")
	Result add(@RequestBody JobPosting jobPosting) {
		return this.jobPostingService.add(jobPosting);
	}
	
	
	@GetMapping("/getActive/OrderByEndDate")
	DataResult<List<JobPostingDto>> findByIsActiveOrderByClosedDate(){
		return this.jobPostingService.findByIsActiveOrderByClosedDate();
	}
	
	@GetMapping("/get/CompanyName")
	DataResult<List<JobPostingDto>> findByIsActiveAndEmployer_CompanyName(String companyName){
		return this.jobPostingService.findByIsActiveAndEmployer_CompanyName(companyName);
		
	}
}