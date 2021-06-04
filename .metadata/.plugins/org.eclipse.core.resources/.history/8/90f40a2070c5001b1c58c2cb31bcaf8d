package kodlamaio.hrms.business.concretes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.JobExperienceService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.JobExperienceDao;
import kodlamaio.hrms.entities.concretes.JobExperience;
import java.util.List;

@Service
public class JobExperienceManager implements JobExperienceService {

	private JobExperienceDao jobExperienceDao;

	@Autowired
	public JobExperienceManager(JobExperienceDao jobExperienceDao) {
		super();
		this.jobExperienceDao = jobExperienceDao;
	}
	
	
	@Override
	public Result add(JobExperience jobExperience) {
		jobExperienceDao.save(jobExperience);
		return new SuccessResult("Başarıyla Eklendi");
	}

	@Override
	public DataResult<List<JobExperience>> getAll() {
		return new SuccessDataResult<List<JobExperience>>(jobExperienceDao.findAll(), "Başarıyla Listelendi");
	}

	
	
}
