package dz.eadn.helpdesk.business.data.dto;

import java.io.Serializable;

import dz.eadn.helpdesk.commun.ParentDto;
import lombok.Setter;

public class MarqueFamilyDto extends ParentDto<Integer> implements Serializable {

	private static final long serialVersionUID = 1L;

	@Setter
	private String label;

	@Override
	public String getLabel() {
		return label;
	}

}
