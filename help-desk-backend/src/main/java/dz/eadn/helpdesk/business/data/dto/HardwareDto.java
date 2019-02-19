package dz.eadn.helpdesk.business.data.dto;

import java.io.Serializable;
import java.time.LocalDate;

import dz.eadn.helpdesk.commun.ParentDto;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
public class HardwareDto extends ParentDto<Long> implements Serializable {

	private static final long serialVersionUID = 1L;

	@Setter
	private String label;

	@Getter
	@Setter
	private Integer amount;

	@Getter
	@Setter
	private LocalDate acquisitionDate;

	@Getter
	@Setter
	private String icon;

	@Getter
	@Setter
	private Integer marqueId;

	@Getter
	@Setter
	private String marqueLabel;

	@Override
	public String getLabel() {
		return label;
	}

}
