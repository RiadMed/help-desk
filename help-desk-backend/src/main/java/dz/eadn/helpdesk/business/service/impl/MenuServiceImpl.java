package dz.eadn.helpdesk.business.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dz.eadn.helpdesk.business.dao.MenuDao;
import dz.eadn.helpdesk.business.data.dto.MenuDto;
import dz.eadn.helpdesk.business.data.entities.Menu;
import dz.eadn.helpdesk.business.service.MenuService;
import dz.eadn.helpdesk.commun.GenericServiceImpl;

@Service
@Transactional
public class MenuServiceImpl extends GenericServiceImpl<MenuDao, Menu,MenuDto, Integer> implements MenuService {

	private static final long serialVersionUID = 1L;

	@Override
	public List<Menu> findMenuByUser(Long id) {
		return dao.findMenuByUser(id);
	}

}
