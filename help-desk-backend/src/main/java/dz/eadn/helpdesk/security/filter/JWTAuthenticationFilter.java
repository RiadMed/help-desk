package dz.eadn.helpdesk.security.filter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.fasterxml.jackson.databind.ObjectMapper;

import dz.eadn.helpdesk.business.data.entities.AppUser;
import dz.eadn.helpdesk.commun.utils.AppUtils;
import dz.eadn.helpdesk.security.SecurityConstants;
import dz.eadn.helpdesk.security.data.UserPrinciple;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

	private AuthenticationManager authenticationManager;

	private final ObjectMapper objectMapper = new ObjectMapper();

	public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
		super();
		this.authenticationManager = authenticationManager;
	}

	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		AppUser user = null;
		try {
			user = objectMapper.readValue(request.getInputStream(), AppUser.class);
			return authenticationManager
					.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
		} catch (IOException e) {
			throw new RuntimeException(e.getMessage());
		}

	}

	@Override
	protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
			Authentication authResult) throws IOException, ServletException {
		UserPrinciple currentUser = (UserPrinciple) authResult.getPrincipal();
		List<String> roles = new ArrayList<>();
		authResult.getAuthorities().forEach(role -> roles.add(role.getAuthority()));
		String jwt = JWT.create().withSubject(currentUser.getUsername())
				.withArrayClaim(SecurityConstants.ROLES, AppUtils.convertListToArray(roles))
				.withExpiresAt(new Date(System.currentTimeMillis() + SecurityConstants.EXPIRATION_TIME))
				.withIssuedAt(new Date())
				.withClaim(SecurityConstants.FIRST_NAME, currentUser.getFirstName())
				.withClaim(SecurityConstants.LAST_NAME, currentUser.getLastName())
				.sign(Algorithm.HMAC256(SecurityConstants.SIGNATURE));
		response.addHeader(SecurityConstants.HEADERS, SecurityConstants.TOKEN_PREFIX + jwt);
	}
	

}
