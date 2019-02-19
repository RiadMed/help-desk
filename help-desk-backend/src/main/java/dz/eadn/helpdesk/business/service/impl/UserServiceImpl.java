package dz.eadn.helpdesk.business.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dz.eadn.helpdesk.business.dao.UserDao;
import dz.eadn.helpdesk.business.data.entities.AppUser;
import dz.eadn.helpdesk.business.data.entities.Roles;
import dz.eadn.helpdesk.business.service.RolesService;
import dz.eadn.helpdesk.business.service.UserService;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao dao;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Autowired
	private RolesService rolesService;

	@Override
	public AppUser findByUsername(String username) {
		return dao.findByUsername(username);
	}

	@Override
	public AppUser saveUser(AppUser user) {
		String hashPwd = bCryptPasswordEncoder.encode(user.getPassword());
		user.setPassword(hashPwd);
		return dao.save(user);
	}

	@Override
	public Roles saveRoles(Roles role) {
		return rolesService.save(role);
	}

	@Override
	public void addRoleToUser(String username, String roleLabel) {
		Roles role = rolesService.findByLabel(roleLabel);
		AppUser user = dao.findByUsername(username);
		user.getAppRolesList().add(role);
	}

	@Override
	public List<AppUser> findAll() {
		return dao.findAll();
	}

	@Override
	public AppUser save(AppUser entity) {
		return dao.save(entity);
	}

	@Override
	public void deleteById(Long id) {
		dao.deleteById(id);
	}

	@Override
	public AppUser getOne(Long id) {
		return dao.getOne(id);
	}

	@Override
	public Long count() {
		return dao.count();
	}

}
