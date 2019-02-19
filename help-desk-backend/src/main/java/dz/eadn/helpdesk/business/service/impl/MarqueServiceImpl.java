package dz.eadn.helpdesk.business.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dz.eadn.helpdesk.business.dao.MarqueDao;
import dz.eadn.helpdesk.business.data.dto.MarqueDto;
import dz.eadn.helpdesk.business.data.entities.Marque;
import dz.eadn.helpdesk.business.service.MarqueService;
import dz.eadn.helpdesk.commun.GenericServiceImpl;

@Service
@Transactional
public class MarqueServiceImpl extends GenericServiceImpl<MarqueDao, Marque, MarqueDto, Integer>
		implements MarqueService {

	private static final long serialVersionUID = 1L;

}
