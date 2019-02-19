package dz.eadn.helpdesk.business.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dz.eadn.helpdesk.business.dao.PartenerDao;
import dz.eadn.helpdesk.business.data.dto.PartenerDto;
import dz.eadn.helpdesk.business.data.entities.Partener;
import dz.eadn.helpdesk.business.service.PartenerService;
import dz.eadn.helpdesk.commun.GenericServiceImpl;

@Service
@Transactional
public class PartenerServiceImpl extends GenericServiceImpl<PartenerDao, Partener, PartenerDto, Long>
		implements PartenerService {

	private static final long serialVersionUID = 1L;
}
