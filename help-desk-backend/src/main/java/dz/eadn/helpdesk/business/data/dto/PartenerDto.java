package dz.eadn.helpdesk.business.data.dto;

import dz.eadn.helpdesk.commun.ParentDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@AllArgsConstructor
@NoArgsConstructor
public class PartenerDto extends ParentDto<Long> {

	private static final long serialVersionUID = 1L;

	@Setter
	private String label;

	@Getter
	@Setter
	private String lastName;

	@Getter
	@Setter
	private Integer professionId;

	@Getter
	@Setter
	private String professionLabel;

	@Override
	public String getLabel() {
		return label;
	}

}
