package dz.eadn.helpdesk.business.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import dz.eadn.helpdesk.business.dao.RolesDao;
import dz.eadn.helpdesk.business.data.entities.Roles;
import dz.eadn.helpdesk.business.service.RolesService;

@Service
@Transactional
public class RolesServiceImpl implements RolesService {

	@Autowired
	private RolesDao dao;
	
	@Override
	public Roles findByLabel(String label) {
		return dao.findByLabel(label);
	}

	@Override
	public List<Roles> findAll() {
		return dao.findAll();
	}

	@Override
	public Roles save(Roles entity) {
		return dao.save(entity);
	}

	@Override
	public void deleteById(Integer id) {
		dao.deleteById(id);
	}

	@Override
	public Roles getOne(Integer id) {
		return dao.getOne(id);
	}

	@Override
	public Long count() {
		return dao.count();
	}
}
