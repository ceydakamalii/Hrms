package kodlamaio.hrms.core.cloudinary;

import org.springframework.web.multipart.MultipartFile;

import kodlamaio.hrms.core.utilities.results.DataResult;

public interface CloudinaryService {
	//MultipartFile javada bir tip dosya yüklemek için kullanılır.
	DataResult<?> save(MultipartFile file);

}
