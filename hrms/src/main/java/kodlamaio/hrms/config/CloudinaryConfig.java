package kodlamaio.hrms.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;

import kodlamaio.hrms.core.cloudinary.CloudinaryManager;
import kodlamaio.hrms.core.cloudinary.CloudinaryService;



@Configuration //burada yapılan ayarları cloudinaryide kullanmamızı sağlıyor
public class CloudinaryConfig {
	
	@Value("${cld.access-key}")
	String apiKey;
	
	@Value("${cld.secret-key}")
	String apiSecretKey;
	
	@Bean
	public Cloudinary cloudinaryUser() {
		return new Cloudinary(ObjectUtils.asMap(
				"cloud_name","dnpv3ub8x",
				"api_key",apiKey,
				"api_secret", apiSecretKey));
	}
	@Bean
    public CloudinaryService cloudinaryService(){
        return new CloudinaryManager(cloudinaryUser());
    }

}
