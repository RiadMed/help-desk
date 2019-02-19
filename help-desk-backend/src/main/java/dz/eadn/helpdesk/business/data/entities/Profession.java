package dz.eadn.helpdesk.business.data.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import dz.eadn.helpdesk.business.utils.DBSchemaConstants;
import dz.eadn.helpdesk.commun.Parents;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@Entity
@ToString
@Table(name = "profession", schema = DBSchemaConstants.APPS_DB_SCHEMA)
public class Profession extends Parents<Integer> implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "label")
	private String label;
	private List<Partener> parteners = new ArrayList<>();

	public Profession() {
		super();
	}

	public Profession(String label) {
		super();
		this.label = label;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "profession")
	@JsonManagedReference
	public List<Partener> getParteners() {
		return parteners;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + ((label == null) ? 0 : label.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!super.equals(obj))
			return false;
		if (getClass() != obj.getClass())
			return false;
		Profession other = (Profession) obj;
		if (label == null) {
			if (other.label != null)
				return false;
		} else if (!label.equals(other.label))
			return false;
		return true;
	}

}
