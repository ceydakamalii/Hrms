package kodlamaio.hrms.business.concretes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import kodlamaio.hrms.business.abstracts.ResumeService;
import kodlamaio.hrms.core.cloudinary.CloudinaryService;
import kodlamaio.hrms.core.dtoConverter.DtoConverterService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.ResumeDao;
import kodlamaio.hrms.entities.concretes.Resume;
import kodlamaio.hrms.entities.dtos.ResumeAddDto;

import kodlamaio.hrms.entities.dtos.ResumeGetDto;

import java.util.List;
import java.util.Map;
@Service
public class ResumeManager implements ResumeService {

	private ResumeDao resumeDao;
	private CloudinaryService cloudinaryService;
	private DtoConverterService dtoConverterService;
	 
	
	@Autowired
	public ResumeManager(ResumeDao resumeDao, CloudinaryService cloudinaryService,DtoConverterService dtoConverterService) {
		super();
		this.resumeDao = resumeDao;
		this.cloudinaryService = cloudinaryService;
		this.dtoConverterService=dtoConverterService;
				
	}


	@Override
	public Result add(ResumeAddDto resumeAddDto) {
		resumeDao.save((Resume) dtoConverterService.dtoClassConverter(resumeAddDto, Resume.class));
		return new SuccessResult("Cv eklendi.");
		
	}


	@Override
	public DataResult<List<ResumeGetDto>> getAll() {
		return new SuccessDataResult<List<ResumeGetDto>>
		(dtoConverterService.dtoConverter
				(resumeDao.findAll(), ResumeGetDto.class)
				,"Data Listelendi");
	}

	@Override
	public Result saveImage(MultipartFile file, int resumeId) {
		Map<String, String> uploader = (Map<String, String>) cloudinaryService.save(file).getData(); 
		String imageUrl= uploader.get("url");//upload edilen dosyanın urlsini almak için yapıyoruz.
		Resume Cv = resumeDao.getOne(resumeId);
		Cv.setPhoto(imageUrl);
		resumeDao.save(Cv);
		return new SuccessResult("Kayıt Başarılı");
		
	}


	@Override
	public DataResult<List<ResumeGetDto>> findAllByCandidateId(int candidateId) {
		return new SuccessDataResult<List<ResumeGetDto>>
		(dtoConverterService.dtoConverter
				(resumeDao.findAllByCandidateId(candidateId), ResumeGetDto.class)
				,"Data Listelendi");
	}


	@Override
	public DataResult<Resume> getById(int id) {
		return new SuccessDataResult<Resume>(resumeDao.getById(id), "Data Listelendi");
		
	}
	
	
}
