package dz.eadn.helpdesk.business.data.dto;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import dz.eadn.helpdesk.commun.ParentDto;
import lombok.Getter;
import lombok.Setter;

public class MarqueDto extends ParentDto<Integer> implements Serializable {

	@Setter
	private String label;

	@Getter
	@Setter
	private Integer marqueFamilyId;

	@Getter
	@Setter
	@JsonProperty(access = Access.READ_ONLY)
	private String marqueFamilyLabel;

	private static final long serialVersionUID = 1L;

	@Override
	public String getLabel() {
		return label;
	}

}
