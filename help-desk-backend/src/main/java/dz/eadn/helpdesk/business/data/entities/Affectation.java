package dz.eadn.helpdesk.business.data.entities;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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

	@Getter
	@Setter
	@Column(name = "active")
	private Boolean active;

	@Getter
	@Setter
	@Column(name = "validation_date")
	private LocalDate validationDate;

	@Getter
	@Setter
	@Column(name = "key")
	private String key;

	@Getter
	@Setter
	@Column(name = "serial_number")
	private String serialNumber;

	private Partener partener;

	private Software software;

	private Hardware hardware;

	public Affectation() {
		super();
	}

	@ManyToOne
	@JoinColumn(name = "partener_id", nullable = false)
	public Partener getPartener() {
		return partener;
	}

	public void setPartener(Partener partener) {
		this.partener = partener;
	}

	@ManyToOne
	@JoinColumn(name = "software_id")
	public Software getSoftware() {
		return software;
	}

	public void setSoftware(Software software) {
		this.software = software;
	}

	@ManyToOne
	@JoinColumn(name = "hardware_id")
	public Hardware getHardware() {
		return hardware;
	}

	public void setHardware(Hardware hardware) {
		this.hardware = hardware;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + ((active == null) ? 0 : active.hashCode());
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + ((hardware == null) ? 0 : hardware.hashCode());
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
		if (active == null) {
			if (other.active != null)
				return false;
		} else if (!active.equals(other.active))
			return false;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (hardware == null) {
			if (other.hardware != null)
				return false;
		} else if (!hardware.equals(other.hardware))
			return false;
		return true;
	}

	@Override
	public String getLabel() {
		return this.label;
	}

}
