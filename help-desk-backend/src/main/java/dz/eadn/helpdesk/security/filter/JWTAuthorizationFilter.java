package dz.eadn.helpdesk.security.filter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;

import dz.eadn.helpdesk.security.SecurityConstants;

public class JWTAuthorizationFilter extends OncePerRequestFilter {

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {

		response.addHeader(SecurityConstants.ACCESS_CONTROL_ALLOW_ORIGIN, "*");
		response.addHeader(SecurityConstants.ACCESS_CONTROL_ALLOW_HEADERS, SecurityConstants.ORIGINE_ACCEPT);
		response.addHeader(SecurityConstants.ACCESS_CONTROL_EXPOSE_HEADERS,
				SecurityConstants.ACCESS_CONTROL_ALLOW_ORIGIN + ","
						+ SecurityConstants.ACCESS_CONTROL_ALLOW_CREDENTIALS);

		String jwt = request.getHeader(SecurityConstants.HEADERS);
		if (request.getMethod().equals(SecurityConstants.OPTIONS)) {
			response.setStatus(HttpServletResponse.SC_OK);
		} else {
			if (jwt == null || !jwt.startsWith(SecurityConstants.TOKEN_PREFIX)) {
				filterChain.doFilter(request, response);
				return;
			}

			JWTVerifier jwtVerifier = JWT.require(Algorithm.HMAC256(SecurityConstants.SIGNATURE)).build();
			DecodedJWT decodedJWT = jwtVerifier.verify(jwt.substring(SecurityConstants.TOKEN_PREFIX.length()));
			String username = decodedJWT.getSubject();
			List<String> roles = decodedJWT.getClaims().get(SecurityConstants.ROLES).asList(String.class);
			Collection<GrantedAuthority> authorities = new ArrayList<>();
			roles.forEach(role -> authorities.add(new SimpleGrantedAuthority(role)));
			UsernamePasswordAuthenticationToken authenticatedUser = new UsernamePasswordAuthenticationToken(username,
					null, authorities);
			SecurityContextHolder.getContext().setAuthentication(authenticatedUser);
			filterChain.doFilter(request, response);
		}
	}

}
