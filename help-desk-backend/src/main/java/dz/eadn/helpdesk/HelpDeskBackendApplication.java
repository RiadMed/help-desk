package dz.eadn.helpdesk;

import org.modelmapper.ModelMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@SpringBootApplication
public class HelpDeskBackendApplication implements CommandLineRunner{

//	@Autowired
//	private UserService userService;
//	
//	@Autowired
//	private MarqueService marqueService;
	
	public static void main(String[] args) {
		SpringApplication.run(HelpDeskBackendApplication.class, args);
	}
	
	@Bean
	public BCryptPasswordEncoder getBCPE() {
		return new BCryptPasswordEncoder();
	}
	
	@Bean
	public ModelMapper modelMapper() {
	    return new ModelMapper();
	}

	@Override
	public void run(String... args) throws Exception {
//		marqueService.save(new Marque("HP"));
//		marqueService.save(new Marque("DELL"));
//		marqueService.save(new Marque("TOSHIBA"));
//		marqueService.save(new Marque("ACER"));
//		marqueService.save(new Marque("SAMSUNG"));
//		marqueService.save(new Marque("APPEL"));
//		marqueService.save(new Marque("CANON"));
//		marqueService.save(new Marque("KYOCERA"));
//		marqueService.save(new Marque("EPSON"));
//		userService.saveUser(new AppUser("user", "1234"));
//		userService.saveRoles(new Roles("ADMIN"));
//		userService.saveRoles(new Roles("USER"));
//		userService.addRoleToUser("admin", "ADMIN");
//		userService.addRoleToUser("admin", "USER");
//		userService.addRoleToUser("user", "USER");

//
//		userService.saveUser(new AppUser("admin", "1234"));
		//userService.saveUser(new AppUser("user", "1234"));
//		appUserService.saveRoles(new Roles("ADMIN"));
//		appUserService.saveRoles(new Roles("USER"));
//		userService.addRoleToUser("admin", "ADMIN");
//		userService.addRoleToUser("admin", "USER");
		//userService.addRoleToUser("user", "USER");
		
	}

}

