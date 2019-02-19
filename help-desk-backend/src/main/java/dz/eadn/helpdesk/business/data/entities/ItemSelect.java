package dz.eadn.helpdesk.business.data.entities;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class ItemSelect {
	@Getter
	@Setter
	private Long value;
	@Getter
	@Setter
	private String label;

	@Override
	public String toString() {
		return "ItemSelect [value=" + value + ", label=" + label + "]";
	}

}
