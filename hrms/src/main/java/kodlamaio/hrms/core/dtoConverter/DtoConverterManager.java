package kodlamaio.hrms.core.dtoConverter;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class DtoConverterManager implements DtoConverterService {
private ModelMapper modelMapper;
	
	@Autowired
	public DtoConverterManager(ModelMapper modelMapper) {
		super();
		this.modelMapper = modelMapper;
	}

	@Override  //verdiğimiz listeyi parametre olarak verdiğimiz classın yapısına çevirerek getirir.
	public <S, T> List<T> dtoConverter(List<S> s, Class<T> targetClass){
		return s.stream().map(element -> modelMapper.map(element, targetClass)).collect(Collectors.toList());
		
	}
	
	@Override    //<T>-> Şuanki sınıf yani çevrilcek sınıf, source ise son hali sınıfın. 
	public <T> Object dtoClassConverter(Object source,Class<T> baseClass) { // Sınıf Döndürcek.
		return modelMapper.map(source,baseClass);
		
	}

}
