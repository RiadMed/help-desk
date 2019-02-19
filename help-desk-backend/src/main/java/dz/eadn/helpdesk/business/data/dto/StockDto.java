package dz.eadn.helpdesk.business.data.dto;

import java.io.Serializable;
import java.time.LocalDate;

import dz.eadn.helpdesk.commun.ParentDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@AllArgsConstructor
@NoArgsConstructor
public class StockDto extends ParentDto<Long> implements Serializable{

	private static final long serialVersionUID = 1L;

	@Setter
	private String label;

	@Getter
	@Setter
	private LocalDate dateIn;

	@Getter
	@Setter
	private LocalDate dateOut;

	@Getter
	@Setter
	private Integer quantity;

	@Override
	public String getLabel() {
		return label;
	}

}
