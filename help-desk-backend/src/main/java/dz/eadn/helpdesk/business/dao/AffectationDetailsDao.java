package dz.eadn.helpdesk.business.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.history.RevisionRepository;

import dz.eadn.helpdesk.business.data.entities.AffectationDetails;

public interface AffectationDetailsDao
		extends RevisionRepository<AffectationDetails, Long, Long>, JpaRepository<AffectationDetails, Long> {

}
