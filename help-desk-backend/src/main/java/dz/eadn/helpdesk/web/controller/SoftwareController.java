package dz.eadn.helpdesk.web.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dz.eadn.helpdesk.business.data.dto.SoftwareDto;
import dz.eadn.helpdesk.business.service.SoftwareService;
import dz.eadn.helpdesk.commun.GenericRestController;
import dz.eadn.helpdesk.web.utils.RequestConstants;

@RestController
@CrossOrigin("*")
@RequestMapping(RequestConstants.SOFTWARE_REQUEST_MAPPING_ROOT)
public class SoftwareController extends GenericRestController<SoftwareService, SoftwareDto, Long> {

	private static final long serialVersionUID = 1L;

}
