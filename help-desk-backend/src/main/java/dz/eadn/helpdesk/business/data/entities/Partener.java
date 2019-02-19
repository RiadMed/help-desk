package dz.eadn.helpdesk.business.data.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import dz.eadn.helpdesk.business.utils.DBSchemaConstants;
import dz.eadn.helpdesk.commun.Parents;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
@AllArgsConstructor
@Table(name = "partener", schema = DBSchemaConstants.APPS_DB_SCHEMA)
public class Partener extends Parents<Long> implements Serializable {

	private static final long serialVersionUID = 1L;

	@Setter
	@Column(name = "label")
	private String label;

	@Getter
	@Setter
	@Column(name = "last_name")
	private String lastName;

	private Profession profession;

	private List<Affectation> affectations = new ArrayList<>();

	public Partener() {
		super();
	}

	public Partener(String label, String lastName) {
		super();
		this.label = label;
		this.lastName = lastName;
	}

	@ManyToOne(optional = false)
	@JoinColumn(name = "profession_id", nullable = true)
	@JsonBackReference
	public Profession getProfession() {
		return profession;
	}

	public void setProfession(Profession profession) {
		this.profession = profession;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "partener")
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
		result = prime * result + ((label == null) ? 0 : label.hashCode());
		result = prime * result + ((lastName == null) ? 0 : lastName.hashCode());
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
		Partener other = (Partener) obj;
		if (label == null) {
			if (other.label != null)
				return false;
		} else if (!label.equals(other.label))
			return false;
		if (lastName == null) {
			if (other.lastName != null)
				return false;
		} else if (!lastName.equals(other.lastName))
			return false;
		return true;
	}

	@Override
	public String getLabel() {
		return this.label;
	}

}
