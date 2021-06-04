package kodlamaio.hrms.business.concretes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.JobExperienceService;
import kodlamaio.hrms.core.dtoConverter.DtoConverterService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.JobExperienceDao;
import kodlamaio.hrms.entities.concretes.JobExperience;
import kodlamaio.hrms.entities.dtos.JobExperienceDto;

import java.util.List;

@Service
public class JobExperienceManager implements JobExperienceService {

	private JobExperienceDao jobExperienceDao;
	private DtoConverterService dtoConverterService;

	@Autowired
	public JobExperienceManager(JobExperienceDao jobExperienceDao,DtoConverterService dtoConverterService) {
		super();
		this.jobExperienceDao = jobExperienceDao;
		this.dtoConverterService=dtoConverterService;
	}
	
	
	@Override
	public Result add(JobExperienceDto jobExperienceDto) {
		jobExperienceDao.save((JobExperience) dtoConverterService.dtoClassConverter(jobExperienceDto, JobExperience.class));
		return new SuccessResult("Başarıyla Eklendi");
	}

	@Override
	public DataResult<List<JobExperienceDto>> getAll() {
		return new SuccessDataResult<List<JobExperienceDto>>(dtoConverterService.dtoConverter(jobExperienceDao.findAll(), JobExperienceDto.class),"iş deneyimleri listelendi.");
	}


	@Override
	public DataResult<List<JobExperienceDto>> findAllByResumeIdOrderByEndedDateDesc(int id) {
		List<JobExperience> jobExperiences= jobExperienceDao.findAllByResumeIdOrderByEndedDateDesc(id);
		return new SuccessDataResult<List<JobExperienceDto>>(dtoConverterService.dtoConverter(jobExperiences, JobExperienceDto.class),"iş deneyimleri başlangıç tarihine göre listelendi." );
		
	}

	
	
}
