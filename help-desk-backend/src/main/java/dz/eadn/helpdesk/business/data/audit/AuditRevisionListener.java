package dz.eadn.helpdesk.business.data.audit;

import org.hibernate.envers.RevisionListener;

/**
 * @author BOUMENDJAS Med Riadh
 */
public class AuditRevisionListener implements RevisionListener {

	private String userId = "admin";

	@Override
	public void newRevision(Object revisionEntity) {
		final AuditRevisionEntity revision = (AuditRevisionEntity) revisionEntity;
		AuditRevisionEntity auditRevisionEntity = (AuditRevisionEntity) revisionEntity;
			
		auditRevisionEntity.setUsername(userId);
		revision.setUsername(userId);
	}

}
