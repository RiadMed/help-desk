package dz.eadn.helpdesk.business.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dz.eadn.helpdesk.business.dao.HardwareDao;
import dz.eadn.helpdesk.business.data.dto.HardwareDto;
import dz.eadn.helpdesk.business.data.entities.Hardware;
import dz.eadn.helpdesk.business.service.HardwareService;
import dz.eadn.helpdesk.commun.GenericServiceImpl;

@Service
@Transactional
public class HardwareServiceImpl extends GenericServiceImpl<HardwareDao, Hardware, HardwareDto, Long>
		implements HardwareService {

	private static final long serialVersionUID = 1L;

}
