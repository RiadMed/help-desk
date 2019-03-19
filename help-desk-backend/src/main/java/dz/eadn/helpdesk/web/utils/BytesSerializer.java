package dz.eadn.helpdesk.web.utils;

import java.io.IOException;

import org.springframework.util.Base64Utils;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

public class BytesSerializer extends StdSerializer<byte[]> {

	private static final long serialVersionUID = -5510353102817291511L;

	public BytesSerializer() {
		super(byte[].class);
	}

	@Override
	public void serialize(byte[] value, JsonGenerator gen, SerializerProvider provider) throws IOException {
		gen.writeString(Base64Utils.encodeToString(value));
	}
}