package kodlamaio.hrms.dataAccess.abstracts;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import kodlamaio.hrms.entities.concretes.Education;
@Repository
public interface EducationDao extends JpaRepository<Education, Integer>{
	
	List<Education> findAllByResumeIdOrderByStartedDateDesc(int id);

}
