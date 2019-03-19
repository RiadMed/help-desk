package dz.eadn.helpdesk.business.data.entities;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
@Table(name = "software", schema = DBSchemaConstants.APPS_DB_SCHEMA)
public class Software extends Parents<Long> implements Serializable {

	private static final long serialVersionUID = 1L;

	@Getter
	@Setter
	@Column(name = "label")
	private String label;

	@Getter
	@Setter
	@Column(name = "amount")
	private Integer amount;

	@Getter
	@Setter
	@Column(name = "acquisition_date")
	private LocalDate acquisitionDate;

	@Getter
	@Setter
	@Column(name = "validate_date")
	private LocalDate validateDate;
	
	@Getter
	@Setter
	@Column(name = "icon")
	private String icon;


	private Marque marque;
	private List<Affectation> affectations = new ArrayList<>();

	public Software() {
		super();
	}

	public Software(String label, Integer amount, LocalDate acquisitionDate, LocalDate validateDate, String key) {
		super();
		this.label = label;
		this.amount = amount;
		this.acquisitionDate = acquisitionDate;
		this.validateDate = validateDate;
	}

	@ManyToOne
	@JoinColumn(name = "marque_id")
	public Marque getMarque() {
		return marque;
	}

	public void setMarque(Marque marque) {
		this.marque = marque;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "software", cascade = CascadeType.ALL)
	public List<Affectation> getAffectations() {
		return affectations;
	}

	public void setAffectations(List<Affectation> affectations) {
		this.affectations = affectations;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + ((acquisitionDate == null) ? 0 : acquisitionDate.hashCode());
		result = prime * result + ((amount == null) ? 0 : amount.hashCode());
		result = prime * result + ((label == null) ? 0 : label.hashCode());
		result = prime * result + ((validateDate == null) ? 0 : validateDate.hashCode());
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
		Software other = (Software) obj;
		if (acquisitionDate == null) {
			if (other.acquisitionDate != null)
				return false;
		} else if (!acquisitionDate.equals(other.acquisitionDate))
			return false;
		if (amount == null) {
			if (other.amount != null)
				return false;
		} else if (!amount.equals(other.amount))
			return false;
		if (label == null) {
			if (other.label != null)
				return false;
		} else if (!label.equals(other.label))
			return false;
		if (validateDate == null) {
			if (other.validateDate != null)
				return false;
		} else if (!validateDate.equals(other.validateDate))
			return false;
		return true;
	}

}