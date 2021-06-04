package kodlamaio.hrms.business.abstracts;

import java.util.List;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.dtos.JobExperienceDto;

public interface JobExperienceService {

	Result add(JobExperienceDto jobExpeerienceDto);
	DataResult<List<JobExperienceDto>> getAll();
	DataResult<List<JobExperienceDto>> findAllByResumeIdOrderByEndedDateDesc(int id);
	
}