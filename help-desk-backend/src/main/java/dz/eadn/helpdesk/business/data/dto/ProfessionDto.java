package dz.eadn.helpdesk.business.data.dto;

import java.io.Serializable;

import dz.eadn.helpdesk.commun.ParentDto;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ProfessionDto extends ParentDto<Integer> implements Serializable{

	private static final long serialVersionUID = 1L;

	@Setter
	private String label;

	@Override
	public String getLabel() {
		return label;
	}

}
