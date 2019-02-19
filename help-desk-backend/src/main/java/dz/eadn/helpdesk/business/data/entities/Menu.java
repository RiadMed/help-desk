package dz.eadn.helpdesk.business.data.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

import dz.eadn.helpdesk.business.utils.DBSchemaConstants;
import dz.eadn.helpdesk.commun.Parents;

@Entity
@Table(name = "menu", schema = DBSchemaConstants.ADMIN_DB_SCHEMA)
public class Menu extends Parents<Integer> implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "label")
	private String label;

	@Column(name = "routers")
	private String routers;

	@Column(name = "urls")
	private String urls;

	@Column(name = "icon")
	private String icon;

	@Column(name = "color")
	private String color;

	@Column(name = "parents")
	private boolean parents;

	private Menu menu;
	// private List<Menu> childs = new ArrayList<>();

	private List<AppUser> appUsers = new ArrayList<>();

	public Menu() {
		super();
	}

	public Menu(String label, String routers) {
		super();
		this.label = label;
		this.routers = routers;
	}

	public Menu(String label, String routers, String urls, String icon, String color) {
		super();
		this.label = label;
		this.routers = routers;
		this.urls = urls;
		this.icon = icon;
		this.color = color;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getRouters() {
		return routers;
	}

	public void setRouters(String routers) {
		this.routers = routers;
	}

	public String getUrls() {
		return urls;
	}

	public void setUrls(String urls) {
		this.urls = urls;
	}

	public String getIcon() {
		return icon;
	}

	public void setIcon(String icon) {
		this.icon = icon;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	@ManyToMany(fetch = FetchType.LAZY, mappedBy = "menusList", cascade = { CascadeType.MERGE })
	@JsonBackReference
	public List<AppUser> getAppUsers() {
		return appUsers;
	}

	public void setAppUsers(List<AppUser> appUsers) {
		this.appUsers = appUsers;
	}

	public boolean isParents() {
		return parents;
	}

	public void setParents(boolean parents) {
		this.parents = parents;
	}

	@ManyToOne
	@JoinColumn(name = "menu_id")
	public Menu getMenu() {
		return menu;
	}

	public void setMenu(Menu menu) {
		this.menu = menu;
	}

//	@OneToMany(fetch = FetchType.EAGER, mappedBy = "menu")
//	public List<Menu> getChilds() {
//		return childs;
//	}
//
//	public void setChilds(List<Menu> childs) {
//		this.childs = childs;
//	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = super.hashCode();
		result = prime * result + ((color == null) ? 0 : color.hashCode());
		result = prime * result + ((icon == null) ? 0 : icon.hashCode());
		result = prime * result + ((label == null) ? 0 : label.hashCode());
		result = prime * result + ((routers == null) ? 0 : routers.hashCode());
		result = prime * result + ((urls == null) ? 0 : urls.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (!super.equals(obj))
			return false;
		if (getClass() != obj.getClass())
			return false;
		Menu other = (Menu) obj;
		if (color == null) {
			if (other.color != null)
				return false;
		} else if (!color.equals(other.color))
			return false;
		if (icon == null) {
			if (other.icon != null)
				return false;
		} else if (!icon.equals(other.icon))
			return false;
		if (label == null) {
			if (other.label != null)
				return false;
		} else if (!label.equals(other.label))
			return false;
		if (routers == null) {
			if (other.routers != null)
				return false;
		} else if (!routers.equals(other.routers))
			return false;
		if (urls == null) {
			if (other.urls != null)
				return false;
		} else if (!urls.equals(other.urls))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Menu [label=" + label + ", routers=" + routers + ", urls=" + urls + ", icon=" + icon + ", color="
				+ color + "]";
	}

}
