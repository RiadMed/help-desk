package dz.eadn.helpdesk.web.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dz.eadn.helpdesk.business.data.dto.AffectationDetailsDto;
import dz.eadn.helpdesk.business.service.AffectationDetailsService;
import dz.eadn.helpdesk.commun.GenericRestController;
import dz.eadn.helpdesk.web.utils.RequestConstants;

@RestController
@CrossOrigin("*")
@RequestMapping(RequestConstants.AFFECTATION_DETAILS_USERS_REQUEST_MAPPING_ROOT)
public class AffectationDetailsController extends GenericRestController<AffectationDetailsService, AffectationDetailsDto, Long>{

	private static final long serialVersionUID = 1L;

}
