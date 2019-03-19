package dz.eadn.helpdesk.business.data.entities;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import dz.eadn.helpdesk.business.utils.DBSchemaConstants;
import dz.eadn.helpdesk.commun.Parents;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
@AllArgsConstructor
@Table(name = "affectation", schema = DBSchemaConstants.APPS_DB_SCHEMA)
public class Affectation extends Parents<Long> implements Serializable {

	private static final long serialVersionUID = 1L;

	@Setter
	@Column(name = "label")
	private String label;

	@Getter
	@Setter
	@Column(name = "date")
	private LocalDate date;

	private List<AffectationDetails> affectationDetailsList = new ArrayList<>();

	private Partener partener;

	public Affectation() {
		super();
	}

	@OneToMany(mappedBy = "affectation")
	public List<AffectationDetails> getAffectationDetailsList() {
		return affectationDetailsList;
	}

	public void setAffectationDetailsList(List<AffectationDetails> affectationDetailsList) {
		this.affectationDetailsList = affectationDetailsList;
	}

	@ManyToOne
	@JoinColumn(name = "partener_id", nullable = false)
	public Partener getPartener() {
		return partener;
	}

	public void setPartener(Partener partener) {
		this.partener = partener;
	}

	@Override
	public String getLabel() {
		return this.label;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + ((date == null) ? 0 : date.hashCode());
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
		Affectation other = (Affectation) obj;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (label == null) {
			if (other.label != null)
				return false;
		} else if (!label.equals(other.label))
			return false;
		return true;
	}

}
