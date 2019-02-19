package dz.eadn.helpdesk.web.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dz.eadn.helpdesk.business.data.dto.MarqueDto;
import dz.eadn.helpdesk.business.service.MarqueService;
import dz.eadn.helpdesk.commun.GenericRestController;
import dz.eadn.helpdesk.web.utils.RequestConstants;

@RestController
@CrossOrigin("*")
@RequestMapping(RequestConstants.MARQUE_REQUEST_MAPPING_ROOT)
public class MarqueController extends GenericRestController<MarqueService, MarqueDto, Integer> {

	private static final long serialVersionUID = 1L;

}
	