package dz.eadn.helpdesk.business.data.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import dz.eadn.helpdesk.business.utils.DBSchemaConstants;

@Entity
@Table(name = "user", schema = DBSchemaConstants.ADMIN_DB_SCHEMA)
public class AppUser implements Serializable {

	private static final long serialVersionUID = 1L;

	protected Long id;

	@Column(name = "username", unique = true)
	@NotNull
	private String username;

	@Column(name = "password")
	@JsonProperty(access = Access.WRITE_ONLY)
	private String password;

	@JsonProperty(access = Access.WRITE_ONLY)
	private String confirmPassword;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "first_name")
	private String firstName;

	@Column(name = "address")
	private String address;

	@Column(name = "ip_address")
	private String ipAddress;

	@Column(name = "admin")
	private Boolean admin;

	@Column(name = "valid")
	private Boolean valid;

	@Column(name = "email")
	private String email;

	@Lob
	@Column(name = "profil_image")
	private byte[] profilImage;

	private List<Roles> appRolesList = new ArrayList<>();

	private List<Menu> menusList = new ArrayList<>();

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false)
	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public AppUser() {
		super();
	}

	public AppUser(@NotNull String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Transient
	public String getConfirmPassword() {
		return confirmPassword;
	}

	@Transient
	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getIpAddress() {
		return ipAddress;
	}

	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}

	public Boolean getAdmin() {
		return admin;
	}

	public void setAdmin(Boolean admin) {
		this.admin = admin;
	}

	public Boolean getValid() {
		return valid;
	}

	public void setValid(Boolean valid) {
		this.valid = valid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public byte[] getProfilImage() {
		return profilImage;
	}

	public void setProfilImage(byte[] profilImage) {
		this.profilImage = profilImage;
	}

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "user_role", schema = DBSchemaConstants.ADMIN_DB_SCHEMA, joinColumns = {
			@JoinColumn(name = "user_id", nullable = false) }, inverseJoinColumns = {
					@JoinColumn(name = "role_id", nullable = false) })
	public List<Roles> getAppRolesList() {
		return appRolesList;
	}

	public void setAppRolesList(List<Roles> appRolesList) {
		this.appRolesList = appRolesList;
	}

	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name = "user_menu", schema = DBSchemaConstants.ADMIN_DB_SCHEMA, joinColumns = {
			@JoinColumn(name = "user_id", nullable = false) }, inverseJoinColumns = {
					@JoinColumn(name = "menu_id", nullable = false) })
	public List<Menu> getMenusList() {
		return menusList;
	}

	public void setMenusList(List<Menu> menusList) {
		this.menusList = menusList;
	}

	@Override
	public String toString() {
		return "AppUser [username=" + username + ", lastName=" + lastName + ", firstName=" + firstName + "]";
	}

}
