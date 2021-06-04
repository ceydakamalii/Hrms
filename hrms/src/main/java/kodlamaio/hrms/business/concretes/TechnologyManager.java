package kodlamaio.hrms.business.concretes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kodlamaio.hrms.business.abstracts.TechnologyService;
import kodlamaio.hrms.core.dtoConverter.DtoConverterService;
import kodlamaio.hrms.core.utilities.results.DataResult;
import kodlamaio.hrms.core.utilities.results.Result;
import kodlamaio.hrms.core.utilities.results.SuccessDataResult;
import kodlamaio.hrms.core.utilities.results.SuccessResult;
import kodlamaio.hrms.dataAccess.abstracts.TechnologyDao;
import kodlamaio.hrms.entities.concretes.Technology;
import kodlamaio.hrms.entities.dtos.TechnologyDto;

import java.util.List;

@Service
public class TechnologyManager implements TechnologyService{

	private TechnologyDao technologyDao;
	private DtoConverterService dtoConverterService;
	
	@Autowired
	public TechnologyManager(TechnologyDao technologyDao,DtoConverterService dtoConverterService) {
		super();
		this.technologyDao = technologyDao;
		this.dtoConverterService=dtoConverterService;
	}

	@Override
	public Result add(TechnologyDto technologyDto) {
		technologyDao.save((Technology) dtoConverterService.dtoClassConverter(technologyDto, Technology.class));
		return new SuccessResult("Teknoloji Başarıyla Eklendi");
	}

	@Override
	public DataResult<List<TechnologyDto>> getAll() {
		return new SuccessDataResult<List<TechnologyDto>>(dtoConverterService.dtoConverter(technologyDao.findAll(), TechnologyDto.class),"Teknolojiler Başarıyla Listelendi");
	}

	
	

}
