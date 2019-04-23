package dz.eadn.helpdesk.business.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import dz.eadn.helpdesk.business.data.entities.Product;

public interface ProductDao extends JpaRepository<Product, Long> {

	public List<Product> findByIsSoftware(Boolean isSoftware);
}
