package dz.eadn.helpdesk.business.data.dto;

import java.io.Serializable;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import dz.eadn.helpdesk.commun.ParentDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto extends ParentDto<Long> implements Serializable {

	private static final long serialVersionUID = 1L;

	@Setter
	private String label;

	@Getter
	@Setter
	private Integer quantity;

	@Getter
	@Setter
	private LocalDate date;

	@Getter
	@Setter
	private String icon;

	@Getter
	@Setter
	private Boolean isSoftware;

	@Getter
	@Setter
	private Integer marqueId;

	@Getter
	@Setter
	@JsonProperty(access = Access.READ_ONLY)
	private String marqueLabel;

	@Override
	public String getLabel() {
		return label;
	}

}
