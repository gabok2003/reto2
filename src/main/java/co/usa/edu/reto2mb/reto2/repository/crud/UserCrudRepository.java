package co.usa.edu.reto2mb.reto2.repository.crud;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

import org.springframework.transaction.annotation.Transactional;

import co.usa.edu.reto2mb.reto2.model.User;

public interface UserCrudRepository extends MongoRepository <User, Integer>{
    
    @Transactional(readOnly = true)
    public Optional <User> findByEmail(String email); 

    public User findByEmailAndPassword(String email, String password);
}
