package dz.eadn.helpdesk.business.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dz.eadn.helpdesk.business.dao.SoftwareDao;
import dz.eadn.helpdesk.business.data.dto.SoftwareDto;
import dz.eadn.helpdesk.business.data.entities.Software;
import dz.eadn.helpdesk.business.service.SoftwareService;
import dz.eadn.helpdesk.commun.GenericServiceImpl;

@Service
@Transactional
public class SoftwareServiceImpl extends GenericServiceImpl<SoftwareDao, Software, SoftwareDto, Long>
		implements SoftwareService {
	
	private static final long serialVersionUID = 1L;

}
