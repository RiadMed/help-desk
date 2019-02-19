package dz.eadn.helpdesk.business.data.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonBackReference;
import dz.eadn.helpdesk.business.utils.DBSchemaConstants;

import dz.eadn.helpdesk.commun.Parents;

@Entity
@Table(name = "roles", schema = DBSchemaConstants.ADMIN_DB_SCHEMA)
public class Roles extends Parents<Integer> implements Serializable {

	private static final long serialVersionUID = 1L;

	@Column(name = "code", unique = true)
	@NotNull
	private String code;

	@Column(name = "label")
	private String label;

	private List<AppUser> appUsers = new ArrayList<>();

	public Roles() {
		super();
	}

	public Roles(String label) {
		super();
		this.label = label;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	@ManyToMany(fetch = FetchType.LAZY, mappedBy = "appRolesList", cascade = { CascadeType.MERGE })
	@JsonBackReference
	public List<AppUser> getAppUsers() {
		return appUsers;
	}

	public void setAppUsers(List<AppUser> appUsers) {
		this.appUsers = appUsers;
	}

}
