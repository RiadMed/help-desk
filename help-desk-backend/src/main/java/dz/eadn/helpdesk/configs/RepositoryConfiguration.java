package dz.eadn.helpdesk.configs;

import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.envers.repository.support.EnversRevisionRepositoryFactoryBean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import dz.eadn.helpdesk.business.data.audit.AuditorAwareImpl;


/**
 * @author BOUMENDJAS Med Riadh
 */
@Configuration
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
@EnableJpaRepositories(repositoryFactoryBeanClass = EnversRevisionRepositoryFactoryBean.class, basePackages = "dz.eadn.helpdesk")
public class RepositoryConfiguration {

	@Bean
	@ConditionalOnBean
	AuditorAware<String> auditorAware() {
		return new AuditorAwareImpl();
	}
}
