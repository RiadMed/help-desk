package dz.eadn.helpdesk.business.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dz.eadn.helpdesk.business.dao.AffectationDetailsDao;
import dz.eadn.helpdesk.business.data.dto.AffectationDetailsDto;
import dz.eadn.helpdesk.business.data.entities.AffectationDetails;
import dz.eadn.helpdesk.business.service.AffectationDetailsService;
import dz.eadn.helpdesk.commun.GenericServiceImpl;

@Service
@Transactional
public class AffectationDetailsServiceImpl extends GenericServiceImpl<AffectationDetailsDao, AffectationDetails, AffectationDetailsDto, Long>
implements AffectationDetailsService {

	private static final long serialVersionUID = 1L;

}
