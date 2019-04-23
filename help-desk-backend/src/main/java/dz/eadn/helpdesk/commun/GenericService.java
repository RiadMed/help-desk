package dz.eadn.helpdesk.commun;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

public interface GenericService<O extends Parents<T>, D extends ParentDto<T>, T extends Serializable & Comparable<T>>
		extends Serializable {

	public List<D> findAll();

	public List<D> findAll(Sort sort);

	public List<D> findAll(Pageable pageable);

	public D save(D dto);

	public Iterable<D> saveAll(Iterable<D> iterable);

	public void deleteById(T id);

	public void delete(D dto);

	public void deleteAll(Iterable<D> iterable);

	public D getOne(T id);

	public Long count();

	public List<D> findAllByExample(D example);
}
