package dz.eadn.helpdesk.commun;

import java.io.Serializable;

import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.EqualsBuilder;

public abstract class ParentDto<T extends Serializable & Comparable<T>>
		implements Serializable, Comparable<ParentDto<T>> {

	protected T id;

	public T getId() {
		return this.id;
	}

	public void setId(T id) {
		this.id = id;
	}

	private static final long serialVersionUID = 1L;

	public String getIdentifiantName() {
		return "id";
	}

	@SuppressWarnings("unchecked")
	public boolean equals(Object obj) {
		if (obj == null)
			return false;
		if (obj == this)
			return true;
		if (!obj.getClass().equals(this.getClass()))
			return false;
		return new EqualsBuilder().append(this.getId(), ((ParentDto<T>) obj).getId()).isEquals();
	}

	public int hashCode() {
		return new HashCodeBuilder(31, 17).append(id).toHashCode();
	}

	@SuppressWarnings("null")
	@Override
	public int compareTo(ParentDto<T> o) {
		if (o == null && o.getId() == null)
			return -1;
		if (this.getId() == null)
			return 1;
		return this.getId().compareTo(o.getId());
	}

	public abstract String getLabel();

	public void setLabel(String label) {

	}

}
