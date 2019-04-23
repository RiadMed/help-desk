package dz.eadn.helpdesk.commun;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
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

	@GetMapping(value = "/sort/{sort}/{field}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<O> sorterList(@PathVariable(value = "sort") String sort, @PathVariable(value = "field") String field) {
		if (sort.equals("ASC"))
			listAll = service.findAll(Sort.by(Direction.ASC, field));
		else
			listAll = service.findAll(Sort.by(Direction.DESC, field));
		return listAll;
	}

	@GetMapping(value = "/lazy/{page}/{size}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<O> lazyList(@PathVariable(value = "page") Integer page, @PathVariable(value = "size") Integer size) {
		listAll = service.findAll(PageRequest.of(page, size));
		System.out.println("size : " + size + " -page : " + page);
		System.out.println(listAll.size());
		return listAll;
	}

	@GetMapping(value = "/sort_lazy/{page}/{size}/{sort}/{field}", produces = { MediaType.APPLICATION_JSON_VALUE })
	public List<O> LazySorterList(@PathVariable(value = "page") Integer page,
			@PathVariable(value = "size") Integer size, @PathVariable(value = "sort") String sort,
			@PathVariable(value = "field") String field) {
		System.out.println("size : " + size + " -page : " + page + " -sort : " + sort);
		System.out.println(service.findAll(PageRequest.of(page, size, Sort.by(Direction.ASC, field))).size());
		if (sort.equals("ASC"))
			listAll = service.findAll(PageRequest.of(page, size, Sort.by(Direction.ASC, field)));
		else
			listAll = service.findAll(PageRequest.of(page, size, Sort.by(Direction.DESC, field)));
		return listAll;
	}

	@PostMapping(produces = { MediaType.APPLICATION_JSON_VALUE }, consumes = { MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody O create(@RequestBody O entity) {
		if (nullCheck(entity)) {
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
		if (nullCheck(entity.getId()))
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
		if (nullCheck(listAll)) {
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
		if (!nullCheck(listAll))
			listAll = service.findAll();
		return listAll.stream().map(item -> new ItemSelect(new Long(item + ""), item.getLabel()))
				.collect(Collectors.toList());
	}

	@SuppressWarnings("hiding")
	protected <T> Boolean nullCheck(T obj) {
		Optional<T> opt = Optional.ofNullable(obj);
		return opt.isPresent();
	}

	@SuppressWarnings("hiding")
	protected <T> Boolean nullCheck(List<T> obj) {
		Optional<List<T>> opt = Optional.ofNullable(obj);
		return opt.isPresent();
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
