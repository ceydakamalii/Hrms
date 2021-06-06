package kodlamaio.hrms.business.abstracts;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Resume;
import kodlamaio.hrms.entities.dtos.ResumeAddDto;
import kodlamaio.hrms.entities.dtos.ResumeDto;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;
public interface ResumeService {

	Result add(ResumeAddDto resumeAddDto);
	
	DataResult<List<ResumeDto>> getAll();
	
	DataResult<List<Resume>> findAllByCandidateId(int candidateId);
	
	Result saveImage(MultipartFile file, int resumeId);
}