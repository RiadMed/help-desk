package dz.eadn.helpdesk.business.service;

import java.util.List;

import dz.eadn.helpdesk.business.data.entities.Roles;

public interface RolesService {

	public Roles findByLabel(String label);
	
	List<Roles> findAll();

	Roles save(Roles entity);

	void deleteById(Integer id);

	Roles getOne(Integer id);

	Long count();
}
