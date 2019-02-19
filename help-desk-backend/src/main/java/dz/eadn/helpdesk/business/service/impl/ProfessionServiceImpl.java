package dz.eadn.helpdesk.business.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dz.eadn.helpdesk.business.dao.ProfessionDao;
import dz.eadn.helpdesk.business.data.dto.ProfessionDto;
import dz.eadn.helpdesk.business.data.entities.Profession;
import dz.eadn.helpdesk.business.service.ProfessionService;
import dz.eadn.helpdesk.commun.GenericServiceImpl;

@Service
@Transactional
public class ProfessionServiceImpl extends GenericServiceImpl<ProfessionDao, Profession, ProfessionDto, Integer>
		implements ProfessionService {

	private static final long serialVersionUID = 1L;

}
