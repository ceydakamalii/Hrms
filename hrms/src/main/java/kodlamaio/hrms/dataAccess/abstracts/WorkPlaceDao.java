package kodlamaio.hrms.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import kodlamaio.hrms.entities.concretes.WorkPlace;

@Repository
public interface WorkPlaceDao extends JpaRepository<WorkPlace, Integer> {
	
	

}
