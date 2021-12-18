package co.usa.edu.reto2mb.reto2.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import co.usa.edu.reto2mb.reto2.model.User;
import co.usa.edu.reto2mb.reto2.repository.crud.UserCrudRepository;

@Repository
public class UserRepository {
    @Autowired
    private UserCrudRepository userCrudRepository;
    public List<User> listar(){
        return userCrudRepository.findAll();

    }
    public List<User>getAll(){
        return (List<User>)userCrudRepository.findAll();
    }

    public Optional<User>getUser(int id){
        return userCrudRepository.findById(id);
    }
    
  
    public Optional<User>getEmailExistence(String email){
        return userCrudRepository.findByEmail(email);

    }   

    public User save (User usuario){
        return userCrudRepository.save(usuario);
    }

    public User validacionEmailPassword(String email, String password){
        return userCrudRepository.findByEmailAndPassword(email, password);
}

    public User userNoEncontrado (String email, String password){
    User noDefinido= new User();
    return noDefinido;
}

    public void delete(User user) {
        userCrudRepository.delete(user);
    }

    public void update(User user) {
        userCrudRepository.save(user);
    }
    
}
