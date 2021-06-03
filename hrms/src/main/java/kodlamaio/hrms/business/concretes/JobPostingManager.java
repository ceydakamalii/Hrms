package kodlamaio.hrms.business.concretes;

import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.JobPostingService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.JobPostingDao;
import kodlamaio.hrms.entities.concretes.JobPosting;
import kodlamaio.hrms.entities.dtos.JobPostingDto;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;

@Service
public class JobPostingManager implements JobPostingService {

	
	private JobPostingDao jobPostingDao;
	private ModelMapper modelMapper;
	public JobPostingManager(JobPostingDao jobPostingDao, ModelMapper modelMapper) {
		super();
		this.jobPostingDao = jobPostingDao;
		this.modelMapper = modelMapper;
	}
	
	private List<JobPostingDto> dtoConverter(List<JobPosting> jobPosting){
		List<JobPostingDto> jPDto = new ArrayList <JobPostingDto>();
		jobPosting.forEach(x -> {
			JobPostingDto dto = this.modelMapper.map(x, JobPostingDto.class);
			dto.setEmployerCompanyName(x.getEmployer().getCompanyName());
			jPDto.add(dto);
		});
		
		return jPDto;
		
		
	}
	
	@Override
	public Result add(JobPosting jobPosting) {
		this.jobPostingDao.save(jobPosting);
		return new SuccessResult("İş İlanı Eklendi");
	}
	@Override
	public Result delete(JobPosting jobPosting) {
		this.jobPostingDao.delete(jobPosting);
		return new SuccessResult("Silme işlemi Tamamlandı");
	}
	@Override
	public DataResult<List<JobPostingDto>> findByIsActive() {
		return new SuccessDataResult<List<JobPostingDto>>
		(this.dtoConverter(this.jobPostingDao.findByIsActive(true)),"Data Listelendi");
	}
	@Override
	public DataResult<List<JobPostingDto>> findByIsActiveOrderByClosedDate() {
		return new SuccessDataResult<List<JobPostingDto>>
		(this.dtoConverter(this.jobPostingDao.findByIsActiveOrderByClosedDate(true)),"Data Listelendi");
	}
	@Override
	public DataResult<List<JobPostingDto>> findByIsActiveAndEmployer_CompanyName(String companyName) {
		return new SuccessDataResult<List<JobPostingDto>>
		(this.dtoConverter(this.jobPostingDao.findByIsActiveAndEmployer_CompanyName(true, companyName)),"Data Listelendi");
	}
	
	
	
}

