package dz.eadn.helpdesk.business.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dz.eadn.helpdesk.business.dao.AffectationDao;
import dz.eadn.helpdesk.business.data.dto.AffectationDto;
import dz.eadn.helpdesk.business.data.entities.Affectation;
import dz.eadn.helpdesk.business.service.AffectationService;
import dz.eadn.helpdesk.commun.GenericServiceImpl;

@Service
@Transactional	
public class AffectationServiceImpl extends GenericServiceImpl<AffectationDao, Affectation, AffectationDto, Long>
		implements AffectationService {

	private static final long serialVersionUID = 1L;
}
