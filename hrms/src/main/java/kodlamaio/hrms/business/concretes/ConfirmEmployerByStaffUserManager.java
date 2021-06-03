package kodlamaio.hrms.business.concretes;

import java.sql.Date;
import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.ConfirmEmployerByStaffUserService;
import kodlamaio.hrms.core.utilities.results.ErrorResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.ConfirmEmployerDao;
import kodlamaio.hrms.dataAccess.abstracts.EmployerDao;
import kodlamaio.hrms.entities.concretes.ConfirmEmployerByStaffUser;
import kodlamaio.hrms.entities.concretes.Employer;

@Service
public class ConfirmEmployerByStaffUserManager implements ConfirmEmployerByStaffUserService {
	
	private ConfirmEmployerDao confirmEmployerDao;
	private EmployerDao employerDao;
	
	@Autowired
	public ConfirmEmployerByStaffUserManager(ConfirmEmployerDao confirmEmployerDao, EmployerDao employerDao) {
		super();
		this.confirmEmployerDao = confirmEmployerDao;
		this.employerDao = employerDao;
	}


	@Override
	public void createConfirmEmployer(Employer employer) {
		ConfirmEmployerByStaffUser cUser = new ConfirmEmployerByStaffUser();
		cUser.setEmployer(employer);
		cUser.setStaffUser(1);
		this.confirmEmployerDao.save(cUser);
		
	}

	@Override
	public Result confirmUser(String companyName) {
		if (!employerDao.existsByCompanyName(companyName)) {
			return new ErrorResult("Şirket Kaydı Bulunamadı");
		}
		
		if (employerDao.findByCompanyNameEquals(companyName).isUserConfirm()) {
			return new ErrorResult("Daha önce onaylanmış Şirket");
		}
		
		Employer employer = new Employer();
		ConfirmEmployerByStaffUser cUser = new ConfirmEmployerByStaffUser();
		employer = employerDao.findByCompanyNameEquals(companyName);
		employer.setUserConfirm(true);
		employerDao.save(employer);
		cUser = confirmEmployerDao.findByEmployerId(employer.getId());
		cUser.setConfirmed(true);
		LocalDate e = (LocalDate.now());
		cUser.setConfirmedDate(Date.valueOf(e));
		confirmEmployerDao.save(cUser);
		return new SuccessResult("Doğrulama Başarılı");
	}

}
