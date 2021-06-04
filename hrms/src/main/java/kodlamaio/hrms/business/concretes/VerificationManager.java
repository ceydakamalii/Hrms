package kodlamaio.hrms.business.concretes;

import java.sql.Date;
import java.time.LocalDate;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.VerificationService;
import kodlamaio.hrms.core.utilities.results.ErrorResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.UserDao;
import kodlamaio.hrms.dataAccess.abstracts.VerificationDao;
import kodlamaio.hrms.entities.concretes.User;
import kodlamaio.hrms.entities.concretes.Verification;

@Service
public class VerificationManager implements VerificationService {

	private VerificationDao verificationDao;
	private UserDao userDao;
	
	@Autowired
	public VerificationManager(VerificationDao verificationDao ,UserDao userDao) {
		super();
		this.verificationDao = verificationDao;
		this.userDao = userDao;
	}

	@Override
	public String createVerifyCode(User user) {
		String vCode = UUID.randomUUID().toString();
		Verification Code = new Verification();
		LocalDate e = (LocalDate.now());
		Code.setUserId(user);
		Code.setCreatedDate(Date.valueOf(e));
		Code.setVerifyCode(UUID.randomUUID().toString());
		this.verificationDao.save(Code);
		return vCode;
	}

	@Override
	public void sendMail(String mail) {
		
		System.out.println("Doğrulama Maili Gönderildi : " + mail);
	}

	@Override
	public Result verifyUser(String code) {
		
		if (!this.verificationDao.existsByVerifyCode(code)) {
			return new ErrorResult("Hatalı Doğrulama İşlemi");
		}
		Verification newVerifyCode = verificationDao.getByVerifyCode(code);
		if (this.verificationDao.getOne(newVerifyCode.getId()).isConfirmed()) {
			return new ErrorResult("Doğrulama işlemi daha önce yapıldı");
		}
		LocalDate e = (LocalDate.now());
		newVerifyCode.setConfirmed(true);
		newVerifyCode.setConfirmedDate(Date.valueOf(e));
		verificationDao.save(newVerifyCode);
		User verifyUser = new User();
		verifyUser = userDao.getOne(newVerifyCode.getUserId().getId());
		verifyUser.setVerify(true);
		userDao.save(verifyUser);
		return new SuccessResult("Doğrulama Başarılı");	
		
			
	}

	
		

}
