package dz.eadn.helpdesk.web.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import dz.eadn.helpdesk.business.data.entities.Menu;
import dz.eadn.helpdesk.business.data.dto.MenuDto;
import dz.eadn.helpdesk.business.data.entities.AppUser;
import dz.eadn.helpdesk.business.service.MenuService;
import dz.eadn.helpdesk.business.service.UserService;
import dz.eadn.helpdesk.commun.GenericRestController;
import dz.eadn.helpdesk.web.utils.RequestConstants;

@RestController
@CrossOrigin("*")
@RequestMapping(RequestConstants.MENU_REQUEST_MAPPING_ROOT)
@PreAuthorize("hasAuthority('ADMIN')")
public class MenuController extends GenericRestController<MenuService, MenuDto, Integer> {

	@Autowired
	private UserService userService;

	private static final long serialVersionUID = 1L;

	@GetMapping(value = "/user_menu/{username}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody List<Menu> findMenuByUser(@PathVariable(value = "username") String username) {
		if (username != null && !username.equals("")) {
			AppUser user = userService.findByUsername(username);
			return user.getMenusList();
		}
		return new ArrayList<>();
	}

}
