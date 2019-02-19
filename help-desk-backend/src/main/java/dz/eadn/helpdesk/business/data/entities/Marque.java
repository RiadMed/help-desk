package dz.eadn.helpdesk.business.data.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import dz.eadn.helpdesk.business.utils.DBSchemaConstants;
import dz.eadn.helpdesk.commun.Parents;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity
@ToString
@Table(name = "marque", schema = DBSchemaConstants.APPS_DB_SCHEMA)
public class Marque extends Parents<Integer> implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "label")
	private String label;

	private MarqueFamily marqueFamily;

	public Marque() {
		super();
	}

	public Marque(String label) {
		super();
		this.label = label;
	}

	@ManyToOne
	@JoinColumn(name = "marque_family_id")
	public MarqueFamily getMarqueFamily() {
		return marqueFamily;
	}

	public void setMarqueFamily(MarqueFamily marqueFamily) {
		this.marqueFamily = marqueFamily;
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
		Marque other = (Marque) obj;
		if (label == null) {
			if (other.label != null)
				return false;
		} else if (!label.equals(other.label))
			return false;
		return true;
	}

}