package dz.eadn.helpdesk.business.data.dto;

import java.io.Serializable;

import javax.persistence.Lob;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import dz.eadn.helpdesk.commun.ParentDto;
import dz.eadn.helpdesk.web.utils.BytesDeserializer;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@ToString
public class AppSettingsDto extends ParentDto<Integer> implements Serializable {

	private static final long serialVersionUID = 1L;

	@Setter
	private String label;

	@Setter
	@Getter
	private String title;

	@Setter
	@Getter
	private String footer;

	@Setter
	@Getter
	private String version;

	@Lob
	@Setter
	@Getter
	private byte[] favicon;

	@Setter
	@Getter
	@JsonDeserialize(using = BytesDeserializer.class)
	private byte[] logo;

	@Lob
	@Setter
	@Getter
	@JsonDeserialize(using = BytesDeserializer.class)
	private byte[] loginImg;

	@Setter
	@Getter
	private String headerLogoWidth;

	@Setter
	@Getter
	private String headerLogoHeight;

	@Setter
	@Getter
	private String loginImgWidth;

	@Setter
	@Getter
	private String loginImgHeight;

	@Setter
	@Getter
	private String defaultLang;

	@Setter
	@Getter
	private String copyright;

	@Setter
	@Getter
	private Integer maxUser;

	@Setter
	@Getter
	private String description;

	@Override
	public String getLabel() {
		return label;
	}

}
