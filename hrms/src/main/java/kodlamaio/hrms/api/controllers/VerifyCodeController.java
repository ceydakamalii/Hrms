package kodlamaio.hrms.api.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kodlamaio.hrms.business.abstracts.VerificationService;
import kodlamaio.hrms.core.utilities.results.Result;

@RestController
@RequestMapping("/valid")
public class VerifyCodeController {

	private VerificationService verificationService;
	
	@Autowired
	public VerifyCodeController(VerificationService verificationService) {
		super();
		this.verificationService = verificationService;
	}


	@PutMapping("/{verifyCode}")
	public Result update(@PathVariable("verifyCode") String verifyCode) {
		return verificationService.verifyUser(verifyCode);
	}
	
	
}