package kodlamaio.hrms.dataAccess.abstracts;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import kodlamaio.hrms.entities.concretes.JobPosting;

@Repository
public interface JobPostingDao extends JpaRepository<JobPosting, Integer> {
	
	List<JobPosting> findByIsActive(boolean status);
	List<JobPosting> findByIsActiveOrderByClosedDate(boolean status);
	List<JobPosting> findByIsActiveAndEmployer_CompanyName(boolean status, String companyName);
	List<JobPosting> findByCity_Name(String name);
	JobPosting getById(int id);
	//tıklanan şehre göre iş ilanlarını listeleme işi

}
