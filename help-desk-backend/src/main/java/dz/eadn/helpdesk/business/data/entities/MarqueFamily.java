package dz.eadn.helpdesk.business.data.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import dz.eadn.helpdesk.business.utils.DBSchemaConstants;
import dz.eadn.helpdesk.commun.Parents;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "marque_family", schema = DBSchemaConstants.APPS_DB_SCHEMA)
public class MarqueFamily extends Parents<Integer> implements Serializable {

	private static final long serialVersionUID = 1L;

	@Getter
	@Setter
	@Column(name = "label")
	private String label;

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
		MarqueFamily other = (MarqueFamily) obj;
		if (label == null) {
			if (other.label != null)
				return false;
		} else if (!label.equals(other.label))
			return false;
		return true;
	}

}
