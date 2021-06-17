package kodlamaio.hrms.business.concretes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.EmployerService;
import kodlamaio.hrms.business.abstracts.FieldService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.dataAccess.abstracts.EmployerDao;
import kodlamaio.hrms.entities.concretes.Employer;
import java.util.List;

@Service
public class EmployerManager implements EmployerService {

	private FieldService<Employer> controllerService;
	private EmployerDao employerDao;
	
	@Autowired
	public EmployerManager(FieldService<Employer> controllerService,EmployerDao employerDao) {
		super();
		this.controllerService = controllerService;
		this.employerDao=employerDao;
	}

	@Override
	public DataResult<List<Employer>> getAll() {
		return controllerService.getAll();
	}

	@Override
	public Result add(Employer employer) {
		return this.controllerService.verifyData(employer);
	}

	@Override
    public DataResult<Employer> getById(int id) {

        return new SuccessDataResult<Employer>(employerDao.getById(id),"Data Listelendi.");

    }
	
	

}
