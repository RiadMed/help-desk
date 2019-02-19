package dz.eadn.helpdesk.business.service;

import java.util.List;

import dz.eadn.helpdesk.business.data.entities.AppUser;
import dz.eadn.helpdesk.business.data.entities.Roles;

public interface UserService {

	public AppUser findByUsername(String username);

	public AppUser saveUser(AppUser user);

	public Roles saveRoles(Roles role);

	public void addRoleToUser(String username, String roleLabel);

	List<AppUser> findAll();

	AppUser save(AppUser entity);

	void deleteById(Long id);

	AppUser getOne(Long id);

	Long count();
}
