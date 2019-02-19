package dz.eadn.helpdesk.security;

public class SecurityConstants {

	// #Security Option Headers
	public static final String SIGNATURE = "riadh@gtsoft.com";
	public static final long EXPIRATION_TIME = 120 * 24 * 3600;
	public static final String TOKEN_PREFIX = "Bearer";
	public static final String HEADERS = "Authorization";
	public static final String ROLES = "roles";
	public static final String FIRST_NAME = "firstName";
	public static final String LAST_NAME = "lastName";
	public static final String MENUS = "menus";

	// #Angular Option Headers
	public static final String ACCESS_CONTROL_ALLOW_ORIGIN = "Access-Control-Allow-Origin";
	public static final String ACCESS_CONTROL_ALLOW_HEADERS = "Access-Control-Allow-Headers";
	public static final String ACCESS_CONTROL_ALLOW_CREDENTIALS = "Access-Control-Allow-Credentials, Authorization";
	public static final String ORIGINE_ACCEPT = "Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization";
	public static final String OPTIONS = "OPTIONS";

	public static final String ACCESS_CONTROL_EXPOSE_HEADERS = "Access-Control-Expose-Headers";

}
