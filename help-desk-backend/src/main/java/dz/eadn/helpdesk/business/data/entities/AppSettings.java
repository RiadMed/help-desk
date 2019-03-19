package dz.eadn.helpdesk.business.data.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;

import dz.eadn.helpdesk.business.utils.DBSchemaConstants;
import dz.eadn.helpdesk.commun.Parents;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "app_settings", schema = DBSchemaConstants.ADMIN_DB_SCHEMA)
public class AppSettings extends Parents<Integer> implements Serializable {

	private static final long serialVersionUID = 1L;

	@Setter
	@Column(name = "label", length = 100)
	private String label;

	@Setter
	@Getter
	@Column(name = "title", length = 100)
	private String title;

	@Setter
	@Getter
	@Column(name = "footer", length = 200)
	private String footer;

	@Setter
	@Getter
	@Column(name = "version", length = 100)
	private String version;

	@Lob
	@Setter
	@Getter
	@Column(name = "favicon")
	private byte[] favicon;

	@Lob
	@Setter
	@Getter
	@Column(name = "logo")
	private byte[] logo;

	@Lob
	@Setter
	@Getter
	@Column(name = "login_img")
	private byte[] loginImg;

	@Setter
	@Getter
	@Column(name = "header_logo_width", length = 10)
	private String headerLogoWidth;

	@Setter
	@Getter
	@Column(name = "header_logo_height", length = 10)
	private String headerLogoHeight;

	@Setter
	@Getter
	@Column(name = "login_img_width", length = 10)
	private String loginImgWidth;

	@Setter
	@Getter
	@Column(name = "login_img_height", length = 10)
	private String loginImgHeight;

	@Setter
	@Getter
	@Column(name = "default_lang", length = 2)
	private String defaultLang;

	@Setter
	@Getter
	@Column(name = "copyright", length = 512)
	private String copyright;

	@Setter
	@Getter
	@Column(name = "max_user")
	private Integer maxUser;

	@Setter
	@Getter
	@Column(name = "description", length = 255)
	private String description;

	@Override
	public String getLabel() {
		return label;
	}

}
