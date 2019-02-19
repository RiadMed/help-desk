package dz.eadn.helpdesk.web.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dz.eadn.helpdesk.business.data.dto.HardwareDto;
import dz.eadn.helpdesk.business.service.HardwareService;
import dz.eadn.helpdesk.commun.GenericRestController;
import dz.eadn.helpdesk.web.utils.RequestConstants;

@RestController
@CrossOrigin("*")
@RequestMapping(RequestConstants.HARDWARE_REQUEST_MAPPING_ROOT)
public class HardwareController extends GenericRestController<HardwareService, HardwareDto, Long> {

	private static final long serialVersionUID = 1L;

}
