package dz.eadn.helpdesk.commun.utils;

import java.time.LocalDate;
import java.util.Date;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

@Converter(autoApply = true)
public class LocalDateAttributeConverter implements AttributeConverter<LocalDate, Date> {

	@Override
	public Date convertToDatabaseColumn(LocalDate locDate) {
		return (locDate == null ? null : DateUtils.asDate(locDate));
	}

	@Override
	public LocalDate convertToEntityAttribute(Date date) {
		return (date == null ? null : DateUtils.asLocalDate(date));
	}
}
