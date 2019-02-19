package dz.eadn.helpdesk.business.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import dz.eadn.helpdesk.business.data.entities.Profession;

public interface ProfessionDao extends JpaRepository<Profession, Integer> {

}
