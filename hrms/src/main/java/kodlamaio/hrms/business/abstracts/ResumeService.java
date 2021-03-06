package kodlamaio.hrms.business.abstracts;

import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.entities.concretes.Resume;
import kodlamaio.hrms.entities.dtos.ResumeAddDto;
import kodlamaio.hrms.entities.dtos.ResumeGetDto;


import java.util.List;

import org.springframework.web.multipart.MultipartFile;
public interface ResumeService {

	Result add(ResumeAddDto resumeDto);
	
	DataResult<List<ResumeGetDto>> getAll();
	
	DataResult<List<ResumeGetDto>> findAllByCandidateId(int candidateId);
	
	Result saveImage(MultipartFile file, int resumeId);
	
	DataResult<Resume> getById(int id);
}