package kodlamaio.hrms.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import kodlamaio.hrms.entities.concretes.Technology;
@Repository
public interface TechnologyDao extends JpaRepository<Technology, Integer> {

}
