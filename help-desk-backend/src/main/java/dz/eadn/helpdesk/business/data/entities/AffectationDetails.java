package dz.eadn.helpdesk.business.data.entities;

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
@Table(name = "affectation_details", schema = DBSchemaConstants.APPS_DB_SCHEMA)
public class AffectationDetails extends Parents<Long>{

	private static final long serialVersionUID = 1L;

	@Setter
	@Column(name = "label")
	private String label;
	
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
	@Column(name = "date")
	private LocalDate date;
	
	@Getter
	@Setter
	@Column(name = "key")
	private String key;

	@Getter
	@Setter
	@Column(name = "serial_number")
	private String serialNumber;

	private Affectation affectation;
	
	private Product product;

	@ManyToOne
	@JoinColumn(name = "affectation_id")
	public Affectation getAffectation() {
		return affectation;
	}

	public void setAffectation(Affectation affectation) {
		this.affectation = affectation;
	}
	
	@ManyToOne
	@JoinColumn(name = "product_id")
	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	@Override
	public String getLabel() {
		return label;
	}

	
	
}
