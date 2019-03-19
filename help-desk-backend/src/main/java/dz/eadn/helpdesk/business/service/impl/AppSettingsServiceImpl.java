package dz.eadn.helpdesk.business.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dz.eadn.helpdesk.business.dao.AppSettingsDao;
import dz.eadn.helpdesk.business.data.dto.AppSettingsDto;
import dz.eadn.helpdesk.business.data.entities.AppSettings;
import dz.eadn.helpdesk.business.service.AppSettingsService;
import dz.eadn.helpdesk.commun.GenericServiceImpl;

@Service
@Transactional
public class AppSettingsServiceImpl extends GenericServiceImpl<AppSettingsDao, AppSettings, AppSettingsDto, Integer>
		implements AppSettingsService {

	private static final long serialVersionUID = 1L;

}
