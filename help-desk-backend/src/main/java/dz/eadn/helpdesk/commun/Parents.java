/**
 * 
 */
package dz.eadn.helpdesk.commun;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;

/**
 * @author MOHAMED RIADH BOUMENDJADS
 * 
 */
@MappedSuperclass
public abstract class Parents<T> implements Serializable {

	private static final long serialVersionUID = 1L;
	protected T id;

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
