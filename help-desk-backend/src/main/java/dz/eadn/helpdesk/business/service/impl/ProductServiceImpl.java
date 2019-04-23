package dz.eadn.helpdesk.business.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dz.eadn.helpdesk.business.dao.ProductDao;
import dz.eadn.helpdesk.business.data.dto.ProductDto;
import dz.eadn.helpdesk.business.data.entities.Product;
import dz.eadn.helpdesk.business.service.ProductService;
import dz.eadn.helpdesk.commun.GenericServiceImpl;

@Service
@Transactional
public class ProductServiceImpl extends GenericServiceImpl<ProductDao, Product, ProductDto, Long>
		implements ProductService {

	private static final long serialVersionUID = 1L;

	@Override
	public List<ProductDto> findByIsSoftware(Boolean isSoftware) {
		return  dao.findByIsSoftware(isSoftware).stream().map(entity -> convertToDto(entity)).collect(Collectors.toList());
	}

}
