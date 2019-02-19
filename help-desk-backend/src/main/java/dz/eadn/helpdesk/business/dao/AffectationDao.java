package dz.eadn.helpdesk.business.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import dz.eadn.helpdesk.business.data.entities.Affectation;

public interface AffectationDao extends JpaRepository<Affectation, Long>{

}
