package co.usa.edu.reto2mb.reto2.repository.crud;

import org.springframework.data.mongodb.repository.MongoRepository;

import co.usa.edu.reto2mb.reto2.model.Chocolate;

public interface ChocolateCrudRepository extends MongoRepository <Chocolate, String> {
    
}
