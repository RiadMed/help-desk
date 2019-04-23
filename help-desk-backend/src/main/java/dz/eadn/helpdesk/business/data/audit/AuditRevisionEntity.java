package dz.eadn.helpdesk.business.data.audit;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.hibernate.envers.Audited;
import org.hibernate.envers.DefaultRevisionEntity;
import org.hibernate.envers.RevisionEntity;

import dz.eadn.helpdesk.business.utils.DBSchemaConstants;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

/**
 * @author BOUMENDJAS Med Riadh
 */
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@Table(name = "audit_revision", schema = DBSchemaConstants.AUDIT_DB_SCHEMA)
@RevisionEntity(AuditRevisionListener.class)
public class AuditRevisionEntity extends DefaultRevisionEntity {

	private static final long serialVersionUID = 1L;

	@NotBlank
	@Column(name = "username")
	private String username;

}
