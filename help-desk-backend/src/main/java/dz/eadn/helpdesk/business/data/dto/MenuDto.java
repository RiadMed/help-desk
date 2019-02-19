package dz.eadn.helpdesk.business.data.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import dz.eadn.helpdesk.business.data.entities.AppUser;
import dz.eadn.helpdesk.commun.ParentDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@AllArgsConstructor
@NoArgsConstructor
public class MenuDto extends ParentDto<Integer> implements Serializable {

	private static final long serialVersionUID = 1L;

	@Setter
	private String label;

	@Getter
	@Setter
	private String routers;

	@Getter
	@Setter
	private String urls;

	@Getter
	@Setter
	private String icon;

	@Getter
	@Setter
	private String color;

	@Getter
	@Setter
	private boolean parents;

	@Getter
	@Setter
	private List<AppUser> appUsersList = new ArrayList<>();

	@Getter
	@Setter
	private MenuDto menu;
//	
//	@Getter
//	@Setter
//	private List<MenuDto> childs = new ArrayList<>();

	@Override
	public String getLabel() {
		return label;
	}

}
