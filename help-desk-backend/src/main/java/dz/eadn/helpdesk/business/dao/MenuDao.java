package dz.eadn.helpdesk.business.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import dz.eadn.helpdesk.business.data.entities.Menu;

public interface MenuDao extends JpaRepository<Menu, Integer> {

	@Query(value = "select m.* from admin.menu m,admin.user_menu u where m.id = u.menu_id and u.user_id = :userId", nativeQuery = true)
	public List<Menu> findMenuByUser(@Param("userId") Long id);

}
