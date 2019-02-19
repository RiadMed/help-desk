package dz.eadn.helpdesk.business.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dz.eadn.helpdesk.business.dao.MarqueFamilyDao;
import dz.eadn.helpdesk.business.data.dto.MarqueFamilyDto;
import dz.eadn.helpdesk.business.data.entities.MarqueFamily;
import dz.eadn.helpdesk.business.service.MarqueFamilyService;
import dz.eadn.helpdesk.commun.GenericServiceImpl;

@Service
@Transactional
public class MarqueFamilyServiceImpl extends GenericServiceImpl<MarqueFamilyDao, MarqueFamily, MarqueFamilyDto, Integer>
		implements MarqueFamilyService {

	private static final long serialVersionUID = 1L;

}
