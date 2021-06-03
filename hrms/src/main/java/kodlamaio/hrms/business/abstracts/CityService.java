package kodlamaio.hrms.business.abstracts;

import kodlamaio.hrms.entities.concretes.City;
import java.util.List;
import kodlamaio.hrms.core.utilities.results.DataResult;
public interface CityService {
	

	DataResult<List<City>> getAll();

}
