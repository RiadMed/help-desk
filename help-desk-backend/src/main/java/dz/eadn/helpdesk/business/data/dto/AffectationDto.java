package dz.eadn.helpdesk.business.data.dto;

import java.io.Serializable;
import java.time.LocalDate;

import javax.validation.constraints.Future;

import dz.eadn.helpdesk.commun.ParentDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@AllArgsConstructor
@NoArgsConstructor
public class AffectationDto extends ParentDto<Long> implements Serializable {

	private static final long serialVersionUID = 1L;

	@Setter
	private String label;

	@Getter
	@Setter
	private LocalDate date;

	@Getter
	@Setter
	private Boolean active;

	@Future
	@Getter
	@Setter
	private LocalDate validationDate;

	@Getter
	@Setter
	private String key;

	@Getter
	@Setter
	private String serialNumber;

	@Getter
	@Setter
	private Long partenerId;

	@Getter
	@Setter
	private String partenerLabel;

	@Getter
	@Setter
	private String partenerLastName;

	@Getter
	@Setter
	private Long softwareId;

	@Getter
	@Setter
	private String softwareLabel;

	@Getter
	@Setter
	private Integer softwareAmount;

	@Getter
	@Setter
	private Long hardwareId;

	@Getter
	@Setter
	private String hardwareSerialNumber;

	@Getter
	@Setter
	private String hardwareLabel;

	@Getter
	@Setter
	private Integer hardwareAmount;

	@Override
	public String getLabel() {
		return label;
	}

}
