package kodlamaio.hrms.core.helpers;

import java.util.List;

import kodlamaio.hrms.dataAccess.abstracts.EducationDao;
import kodlamaio.hrms.dataAccess.abstracts.JobExperienceDao;
import kodlamaio.hrms.dataAccess.abstracts.LanguageDao;
import kodlamaio.hrms.dataAccess.abstracts.TechnologyDao;
import kodlamaio.hrms.entities.concretes.Education;
import kodlamaio.hrms.entities.concretes.JobExperience;
import kodlamaio.hrms.entities.concretes.Language;
import kodlamaio.hrms.entities.concretes.Resume;
import kodlamaio.hrms.entities.concretes.Technology;

public class ResumeHelper {

	private EducationDao educationDao;
	private TechnologyDao technologyDao;
	private LanguageDao languageDao;
	private JobExperienceDao jobExperienceDao;

	public ResumeHelper(EducationDao educationDao, TechnologyDao technologyDao, LanguageDao languageDao,
			JobExperienceDao jobExperienceDao) {
		super();
		this.educationDao = educationDao;
		this.technologyDao = technologyDao;
		this.languageDao = languageDao;
		this.jobExperienceDao = jobExperienceDao;
	}

	public void setAllResumeId(List<Education> edu, List<Language> lang, List<Technology> tech, List<JobExperience> exp,
			Resume resume) {
		setResumeEId(edu, resume);
		setResumeLId(lang, resume);
		setResumeTId(tech, resume);
		setResumeJId(exp, resume);
	}

	private void setResumeEId(List<Education> mapResume, Resume resumee) {
		if (mapResume == null) {

		} else {
			for (Education data : mapResume) {
				data.setResume(resumee);
				this.educationDao.save(data);
			}
		}

	}

	private void setResumeLId(List<Language> mapResume, Resume resumee) {
		if (mapResume == null) {

		} else {

			for (Language data : mapResume) {
				data.setResume(resumee);
				this.languageDao.save(data);
			}
		}
	}

	private void setResumeTId(List<Technology> mapResume, Resume resumee) {
		if (mapResume == null) {

		} else {

			for (Technology data : mapResume) {
				data.setResume(resumee);
				this.technologyDao.save(data);
			}
		}
	}

	private void setResumeJId(List<JobExperience> mapResume, Resume resumee) {
		if (mapResume == null) {

		} else {

			for (JobExperience data : mapResume) {
				data.setResume(resumee);
				this.jobExperienceDao.save(data);
			}
		}

	}

}
