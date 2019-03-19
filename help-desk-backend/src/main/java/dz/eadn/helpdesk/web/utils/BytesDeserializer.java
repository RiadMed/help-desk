package dz.eadn.helpdesk.web.utils;

import java.io.IOException;

import org.springframework.util.Base64Utils;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

public class BytesDeserializer extends JsonDeserializer<byte[]> {

	@Override
	public byte[] deserialize(JsonParser jsonparser, DeserializationContext arg1)
			throws IOException, JsonProcessingException {
		try {
			String data = jsonparser.getText();
				return Base64Utils.decodeFromString(data);
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}
}
