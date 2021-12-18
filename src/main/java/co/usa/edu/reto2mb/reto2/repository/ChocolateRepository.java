package co.usa.edu.reto2mb.reto2.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import co.usa.edu.reto2mb.reto2.model.Chocolate;
import co.usa.edu.reto2mb.reto2.repository.crud.ChocolateCrudRepository;

@Repository
public class ChocolateRepository {
    @Autowired
    private ChocolateCrudRepository chocolateCrudRepository;
    
    public List<Chocolate>getAll(){
        return chocolateCrudRepository.findAll();
    }

    public Optional<Chocolate>getChocolate(String reference){
        return chocolateCrudRepository.findById(reference);    
    }  

    public Chocolate save (Chocolate usuario){
        return chocolateCrudRepository.save(usuario);
    }

    public void update(Chocolate clothe) {
        chocolateCrudRepository.save(clothe);
    }
    
    public void delete(Chocolate clothe) {
        chocolateCrudRepository.delete(clothe);
    }

}
