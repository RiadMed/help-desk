/**
 * 
 */
package dz.eadn.helpdesk.commun;

import java.io.Serializable;
import java.time.Instant;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.Version;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.hibernate.envers.Audited;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import lombok.Getter;
import lombok.Setter;

/**
 * @author MOHAMED RIADH BOUMENDJADS
 * 
 */
@MappedSuperclass
@Audited
@EntityListeners(AuditingEntityListener.class)
public abstract class Parents<T> implements Serializable {

	private static final long serialVersionUID = 1L;
	protected T id;

	@Getter
	@Setter
	@CreatedBy
	private String createdBy;

	@Getter
	@Setter
	@CreatedDate
	private Instant createdDate;

	@Getter
	@Setter
	@LastModifiedBy
	private String lastModifiedBy;

	@Getter
	@Setter
	@LastModifiedDate
	private Instant lastModifiedDate;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false)
	public T getId() {
		return this.id;
	}

	public void setId(T id) {
		this.id = id;
	}

	public abstract String getLabel();

	@Override
	public boolean equals(Object obj) {
		if (obj == null)
			return false;
		if (obj == this)
			return true;
		if (!obj.getClass().equals(this.getClass()))
			return false;
		@SuppressWarnings("unchecked")
		Parents<T> parents = (Parents<T>) obj;
		return new EqualsBuilder().append(this.getId(), parents.getId()).isEquals();
	}

	@Override
	public int hashCode() {
		return new HashCodeBuilder(31, 17).append(id).toHashCode();
	}
}
