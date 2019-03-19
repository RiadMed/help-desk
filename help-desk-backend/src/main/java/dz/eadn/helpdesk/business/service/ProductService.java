package dz.eadn.helpdesk.business.service;

import java.util.List;

import dz.eadn.helpdesk.business.data.dto.ProductDto;
import dz.eadn.helpdesk.business.data.entities.Product;
import dz.eadn.helpdesk.commun.GenericService;

public interface ProductService extends GenericService<Product, ProductDto, Long> {

	public List<ProductDto> findByIsSoftware(Boolean isSoftware);
	
}
