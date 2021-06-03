package kodlamaio.hrms.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import kodlamaio.hrms.entities.concretes.Verification;
@Repository
public interface VerificationDao  extends JpaRepository<Verification, Integer>{
	
	Verification findByVerifyCodeEquals(String verifyCode);
	boolean findByVerifyCode(String Code);

}
