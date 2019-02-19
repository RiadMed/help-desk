package dz.eadn.helpdesk.web.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dz.eadn.helpdesk.business.data.dto.ProfessionDto;
import dz.eadn.helpdesk.business.service.ProfessionService;
import dz.eadn.helpdesk.commun.GenericRestController;
import dz.eadn.helpdesk.web.utils.RequestConstants;

@RestController
@CrossOrigin("*")
@RequestMapping(RequestConstants.PROFESSION_REQUEST_MAPPING_ROOT)
public class ProfessionController extends GenericRestController<ProfessionService, ProfessionDto, Integer> {

	private static final long serialVersionUID = 1L;

}
