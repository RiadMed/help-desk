package dz.eadn.helpdesk.web.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import dz.eadn.helpdesk.business.data.dto.ProductDto;
import dz.eadn.helpdesk.business.service.ProductService;
import dz.eadn.helpdesk.commun.GenericRestController;
import dz.eadn.helpdesk.web.utils.RequestConstants;

@RestController
@CrossOrigin("*")
@RequestMapping(RequestConstants.PRODUCT_REQUEST_MAPPING_ROOT)
public class ProductController extends GenericRestController<ProductService, ProductDto, Long> {

	private static final long serialVersionUID = 1L;

	@GetMapping(value = "/type/{soft}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<ProductDto> sorterList(@PathVariable(value = "soft") int type) {
		listAll = service.findByIsSoftware(type == 1);
		return listAll;
	}

}
