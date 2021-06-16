package kodlamaio.hrms.business.abstracts;

import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.DataResult;
import java.util.List;
public interface FieldService<T> {

	Result verifyData(T data);
	
	DataResult<List<T>> getAll();
	
	
	
}
