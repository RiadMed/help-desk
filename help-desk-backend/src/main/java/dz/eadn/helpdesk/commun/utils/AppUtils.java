package dz.eadn.helpdesk.commun.utils;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;

public class AppUtils {
	public static String[] convertListToArray(List<String> list) {
		return list.stream().toArray(String[]::new);
	}

	public static List<String> convertAuthoritiesToList(Collection<? extends GrantedAuthority> list) {
		return list.stream().map(x -> x.getAuthority()).collect(Collectors.toList());
	}
	
	public static List<String> convertToList(Collection<String> list) {
		return list.stream().map(x -> x).collect(Collectors.toList());
	}
}
