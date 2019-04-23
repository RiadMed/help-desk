package dz.eadn.helpdesk.commun;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.expression.ParseException;
import org.springframework.transaction.annotation.Transactional;

public class GenericServiceImpl<S extends JpaRepository<O, T>, O extends Parents<T>, D extends ParentDto<T>, T extends Serializable & Comparable<T>>
		implements GenericService<O, D, T> {

	private static final long serialVersionUID = 1L;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	protected S dao;

	@Override
	@Transactional
	public List<D> findAll() {
		return dao.findAll().stream().map(entity -> convertToDto(entity)).collect(Collectors.toList());
	}

	@Override
	public List<D> findAll(Sort sort) {
		return dao.findAll(sort).stream().map(entity -> convertToDto(entity)).collect(Collectors.toList());
	}

	@Override
	public List<D> findAll(Pageable pageable) {
		return dao.findAll(pageable).stream().map(entity -> convertToDto(entity)).collect(Collectors.toList());
	}

	@Override
	public List<D> findAllByExample(D example) {
		Example<D> ex = Example.of(example);
		return dao.findAll((Sort) ex).stream().map(entity -> convertToDto(entity))
				.collect(Collectors.toList());
	}

	@Override
	@Transactional
	public D save(D dto) {
		O entity = convertToEntity(dto);
		O newEntity = dao.saveAndFlush(entity);
		return convertToDto(newEntity);
	}

	@Override
	public void deleteById(T id) {
		dao.deleteById(id);
	}

	@Override
	public D getOne(T id) {
		return convertToDto(dao.getOne(id));
	}

	@Override
	public Long count() {
		return dao.count();
	}

	@Override
	public Iterable<D> saveAll(Iterable<D> iterable) {
		if (iterable != null) {
			iterable.forEach(x -> save(x));
			return iterable;
		}
		return null;
	}

	@Override
	public void delete(D dto) {
		dao.delete(convertToEntity(dto));
	}

	@Override
	public void deleteAll(Iterable<D> iterable) {
		if (iterable != null)
			iterable.forEach(x -> deleteById(x.getId()));
	}

	@SuppressWarnings("unchecked")
	protected D convertToDto(O entity) {
		D dto = modelMapper.map(entity,
				(Class<D>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[2]);
		return dto;
	}

	@SuppressWarnings({ "unchecked" })
	protected O convertToEntity(D dto) throws ParseException {
		O entity = modelMapper.map(dto,
				(Class<O>) ((ParameterizedType) getClass().getGenericSuperclass()).getActualTypeArguments()[1]);
		return entity;
	}

}
