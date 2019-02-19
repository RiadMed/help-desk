package dz.eadn.helpdesk.business.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import dz.eadn.helpdesk.business.data.entities.AppUser;


public interface UserDao extends JpaRepository<AppUser, Long> {

	public AppUser findByUsername(String username);
}
