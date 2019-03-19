package dz.eadn.helpdesk.business.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.history.RevisionRepository;

import dz.eadn.helpdesk.business.data.entities.Marque;

public interface MarqueDao extends RevisionRepository<Marque, Integer, Integer>, JpaRepository<Marque, Integer> {

}
