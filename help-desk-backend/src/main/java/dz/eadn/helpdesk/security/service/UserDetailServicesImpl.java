package dz.eadn.helpdesk.security.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import dz.eadn.helpdesk.business.dao.UserDao;
import dz.eadn.helpdesk.business.data.entities.AppUser;
import dz.eadn.helpdesk.security.data.UserPrinciple;

@Service
@Transactional
public class UserDetailServicesImpl implements UserDetailsService {

	@Autowired
	private UserDao userDao;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		AppUser user = userDao.findByUsername(username);
		if (user == null)
			new UsernameNotFoundException("User Not Found with -> username or email : " + username);
		return UserPrinciple.build(user);
	}

}
