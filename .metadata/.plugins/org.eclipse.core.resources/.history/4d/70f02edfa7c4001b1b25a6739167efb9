package kodlamaio.hrms.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import kodlamaio.hrms.entities.concretes.ConfirmEmployerByStaffUser;
@Repository
public interface ConfirmEmployerDao extends JpaRepository<ConfirmEmployerByStaffUser, Integer> {
	
	ConfirmEmployerByStaffUser findByEmployer_UserId(int id);
	boolean  findByEmployer_UserIdEquals(int id);

}
