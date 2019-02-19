package dz.eadn.helpdesk.commun;

import java.io.Serializable;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import dz.eadn.helpdesk.business.data.entities.ItemSelect;

public class GenericRestController<S extends GenericService<?, O, T>, O extends ParentDto<T>, T extends Serializable & Comparable<T>>
		implements Serializable {

	private static final long serialVersionUID = 1L;

	@Autowired
	protected S service;

	protected List<O> listAll;

	@GetMapping(produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<O> list() {
		listAll = service.findAll();
		return listAll;
	}

	@PostMapping(produces = { MediaType.APPLICATION_JSON_VALUE }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody O create(@RequestBody O entity) {
		if (entity != null) {
			listAll.add(entity);
			return service.save(entity);
		}
		return null;
	}

	@PostMapping(value = "/all", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<O> createAll(@RequestBody List<O> list) {
		return (List<O>) service.saveAll(list);
	}

	@PutMapping(value = "/{id}")
	public @ResponseBody O update(@PathVariable(value = "id") T id, @RequestBody O entity) {
		if (entity.getId() == id)
			return service.save(entity);
		return null;
	}

	@DeleteMapping
	public void deleteEntity(@RequestBody O entity) {
		service.delete(entity);
	}

	@DeleteMapping(value = "/{id}")
	public void delete(@PathVariable(value = "id") T id) {
		service.deleteById(id);
	}

	@DeleteMapping(value = "/all")
	public void deleteAll(@RequestBody List<O> list) {
		service.deleteAll(list);
	}

	@GetMapping(value = "/{id}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public O get(@PathVariable(value = "id") T id) {
		if (listAll != null) {
			return listAll.stream().filter(x -> x.getId() == id).findAny().orElse(null);
		}
		return service.getOne(id);
	}

	@GetMapping(value = "/count", produces = { MediaType.APPLICATION_JSON_VALUE })
	public Long count() {
		return service.count();
	}

	@GetMapping(value = "/items", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<ItemSelect> getItemList() {
		if (listAll == null)
			listAll = service.findAll();
		return listAll.stream().map(item -> new ItemSelect(new Long(item + ""), item.getLabel()))
				.collect(Collectors.toList());
	}

	public List<O> getListAll() {
		return listAll;
	}

	public void setListAll(List<O> listAll) {
		this.listAll = listAll;
	}

	public S getService() {
		return service;
	}

	public void setService(S service) {
		this.service = service;
	}

}
