package dz.eadn.helpdesk.web.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import dz.eadn.helpdesk.business.data.dto.PartenerDto;
import dz.eadn.helpdesk.business.service.PartenerService;
import dz.eadn.helpdesk.commun.GenericRestController;
import dz.eadn.helpdesk.web.utils.RequestConstants;

@RestController
@CrossOrigin("*")
@RequestMapping(RequestConstants.PARTENER_REQUEST_MAPPING_ROOT)
public class PartenerController extends GenericRestController<PartenerService, PartenerDto, Long> {

	private static final long serialVersionUID = 1L;

	@PostMapping(name = "/test")
	public @ResponseBody PartenerDto createPartener(@RequestBody PartenerDto entity) {
		if (entity != null) {
			entity.setProfessionId(1);
			entity.setProfessionLabel("Help Desk");
			listAll.add(entity);
			return service.save(entity);
		}
		return null;
	}

}
