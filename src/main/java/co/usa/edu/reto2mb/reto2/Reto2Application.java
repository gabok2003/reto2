package co.usa.edu.reto2mb.reto2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import co.usa.edu.reto2mb.reto2.repository.crud.UserCrudRepository;

@SpringBootApplication
public class Reto2Application implements CommandLineRunner {

	@Autowired
	private UserCrudRepository userCrudRepository;
	public static void main(String[] args) {
		SpringApplication.run(Reto2Application.class, args);
	}

	@Override
	public void run(String... args) throws Exception{
		userCrudRepository.deleteAll();
	}

}
