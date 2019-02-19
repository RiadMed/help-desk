package dz.eadn.helpdesk.business.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import dz.eadn.helpdesk.business.data.entities.Partener;

public interface PartenerDao extends JpaRepository<Partener, Long> {

}
