package dz.eadn.helpdesk.business.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import dz.eadn.helpdesk.business.data.entities.Roles;


public interface RolesDao extends JpaRepository<Roles, Integer> {
	
	public Roles findByLabel(String label);
}
