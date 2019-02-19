package dz.eadn.helpdesk.business.service;

import java.util.List;

import dz.eadn.helpdesk.business.data.dto.MenuDto;
import dz.eadn.helpdesk.business.data.entities.Menu;
import dz.eadn.helpdesk.commun.GenericService;

public interface MenuService extends GenericService<Menu, MenuDto, Integer> {

	public List<Menu> findMenuByUser(Long id);

}
