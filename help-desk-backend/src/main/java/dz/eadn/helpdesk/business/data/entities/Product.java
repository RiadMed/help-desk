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
@Table(name = "product", schema = DBSchemaConstants.APPS_DB_SCHEMA)
public class Product extends Parents<Long> implements Serializable {

	private static final long serialVersionUID = 1L;

	@Getter
	@Setter
	@Column(name = "label")
	private String label;

	@Getter
	@Setter
	@Column(name = "quantity")
	private Integer quantity;

	@Getter
	@Setter
	@Column(name = "date")
	private LocalDate date;

	@Getter
	@Setter
	@Column(name = "icon")
	private String icon;

	@Getter
	@Setter
	@Column(name = "is_software")
	private Boolean isSoftware;

	private Marque marque;

	public Product() {
		super();
	}

	@ManyToOne
	@JoinColumn(name = "marque_id")
	public Marque getMarque() {
		return marque;
	}

	public void setMarque(Marque marque) {
		this.marque = marque;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + ((date == null) ? 0 : date.hashCode());
		result = prime * result + ((icon == null) ? 0 : icon.hashCode());
		result = prime * result + ((isSoftware == null) ? 0 : isSoftware.hashCode());
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
		Product other = (Product) obj;
		if (date == null) {
			if (other.date != null)
				return false;
		} else if (!date.equals(other.date))
			return false;
		if (icon == null) {
			if (other.icon != null)
				return false;
		} else if (!icon.equals(other.icon))
			return false;
		if (isSoftware == null) {
			if (other.isSoftware != null)
				return false;
		} else if (!isSoftware.equals(other.isSoftware))
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

	public Product(String label, Integer quantity, LocalDate date, String icon, Boolean isSoftware) {
		super();
		this.label = label;
		this.quantity = quantity;
		this.date = date;
		this.icon = icon;
		this.isSoftware = isSoftware;
	}

}
