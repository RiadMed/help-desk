package dz.eadn.helpdesk.web.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import dz.eadn.helpdesk.business.data.dto.AffectationDto;
import dz.eadn.helpdesk.business.data.dto.HardwareDto;
import dz.eadn.helpdesk.business.data.dto.SoftwareDto;
import dz.eadn.helpdesk.business.service.AffectationService;
import dz.eadn.helpdesk.business.service.HardwareService;
import dz.eadn.helpdesk.business.service.SoftwareService;
import dz.eadn.helpdesk.commun.GenericRestController;
import dz.eadn.helpdesk.web.utils.RequestConstants;

@RestController
@CrossOrigin("*")
@RequestMapping(RequestConstants.AFFECTATION_USERS_REQUEST_MAPPING_ROOT)
public class AffectationController extends GenericRestController<AffectationService, AffectationDto, Long> {

	private static final long serialVersionUID = 1L;

	@Autowired
	private SoftwareService softwareService;

	@Autowired
	private HardwareService hardwareService;

	@PostMapping(value = "/Affect", produces = { MediaType.APPLICATION_JSON_VALUE }, consumes = {
			MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody AffectationDto createAffectation(@RequestBody AffectationDto entity) {
		if (entity != null) {
			listAll.add(entity);
			if (entity.getSoftwareId() != null) {
				SoftwareDto soft = softwareService.getOne(entity.getSoftwareId());
				soft.setAmount(entity.getSoftwareAmount());
				softwareService.save(soft);
			}

			if (entity.getHardwareId() != null) {
				HardwareDto hard = hardwareService.getOne(entity.getHardwareId());
				hard.setAmount(entity.getHardwareAmount());
				hardwareService.save(hard);
			}
			return service.save(entity);
		}
		return null;
	}

}
