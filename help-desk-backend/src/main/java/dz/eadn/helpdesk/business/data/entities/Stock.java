package dz.eadn.helpdesk.business.data.entities;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
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
@Table(name = "stock", schema = DBSchemaConstants.APPS_DB_SCHEMA)
public class Stock extends Parents<Long> implements Serializable {

	private static final long serialVersionUID = 1L;

	@Getter
	@Setter
	@Column(name = "label")
	private String label;

	@Getter
	@Setter
	@Column(name = "date_in")
	private LocalDate dateIn;

	@Getter
	@Setter
	@Column(name = "date_out")
	private LocalDate dateOut;

	@Getter
	@Setter
	@Column(name = "key")
	private Integer quantity;

	public Stock() {
		super();
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + ((dateIn == null) ? 0 : dateIn.hashCode());
		result = prime * result + ((dateOut == null) ? 0 : dateOut.hashCode());
		result = prime * result + ((label == null) ? 0 : label.hashCode());
		result = prime * result + ((quantity == null) ? 0 : quantity.hashCode());
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
		Stock other = (Stock) obj;
		if (dateIn == null) {
			if (other.dateIn != null)
				return false;
		} else if (!dateIn.equals(other.dateIn))
			return false;
		if (dateOut == null) {
			if (other.dateOut != null)
				return false;
		} else if (!dateOut.equals(other.dateOut))
			return false;
		if (label == null) {
			if (other.label != null)
				return false;
		} else if (!label.equals(other.label))
			return false;
		if (quantity == null) {
			if (other.quantity != null)
				return false;
		} else if (!quantity.equals(other.quantity))
			return false;
		return true;
	}

}
