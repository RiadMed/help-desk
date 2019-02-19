package dz.eadn.helpdesk.web.controller;

import java.io.Serializable;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import dz.eadn.helpdesk.business.data.entities.AppUser;
import dz.eadn.helpdesk.business.service.UserService;
import dz.eadn.helpdesk.web.utils.RequestConstants;

@RestController
@CrossOrigin("*")
@RequestMapping(RequestConstants.USERS_REQUEST_MAPPING_ROOT)
public class UserController implements Serializable {

	@Autowired
	private UserService service;
	
	private static final long serialVersionUID = 1L;

	@PostMapping(value = "/register", produces = { MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody AppUser create(@RequestBody AppUser entity) {
		if (entity != null) {
			if (!entity.getPassword().equals(entity.getConfirmPassword())) {
				throw new RuntimeException("Veuillez cconfermer le mot de pass.");
			}
			AppUser user = service.findByUsername(entity.getUsername());
			if (user != null)
				throw new RuntimeException("cet utilisateur existe déja.");
			return service.saveUser(entity);
		}
		return null;
	}

	@RequestMapping(value = "/find/{username}", method = RequestMethod.GET, produces = {
			MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody AppUser findByUsername(@PathVariable(value = "username") String username) {
		if (username != null) {
			return service.findByUsername(username);
		}
		return null;
	}

}
