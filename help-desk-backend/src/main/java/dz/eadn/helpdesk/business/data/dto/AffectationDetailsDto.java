package dz.eadn.helpdesk.business.data.dto;

import java.io.Serializable;
import java.time.LocalDate;

import dz.eadn.helpdesk.commun.ParentDto;
import lombok.Getter;
import lombok.Setter;

public class AffectationDetailsDto  extends ParentDto<Long> implements Serializable {

	private static final long serialVersionUID = 1L;

	
	@Setter
	private String label;

	@Getter
	@Setter
	private LocalDate date;

	@Getter
	@Setter
	private Boolean active;
	
	@Getter
	@Setter
	private String key;

	@Getter
	@Setter
	private String serialNumber;
	
	@Getter
	@Setter
	private LocalDate validationDate;
	
	@Getter
	@Setter
	private Long productId;

	@Getter
	@Setter
	private String productLabel;
	
	@Getter
	@Setter
	private Integer productQuantity;

	@Override
	public String getLabel() {
		return label;
	}



}
