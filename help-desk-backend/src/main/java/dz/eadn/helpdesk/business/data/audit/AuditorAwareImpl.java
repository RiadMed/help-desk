package dz.eadn.helpdesk.business.data.audit;

import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.Optional;

/**
 * @author BOUMENDJAS Med Riadh.
 */
@Component
public class AuditorAwareImpl implements AuditorAware<String> {

	@Override
	public Optional<String> getCurrentAuditor() {
		String userId = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return Optional.of(userId);
	}

}
