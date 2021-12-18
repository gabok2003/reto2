package co.usa.edu.reto2mb.reto2.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.usa.edu.reto2mb.reto2.model.Chocolate;
import co.usa.edu.reto2mb.reto2.repository.ChocolateRepository;

@Service
public class ChocolateService {
    @Autowired
    private ChocolateRepository chocolateRepository;

    public List<Chocolate> getAll() {
        return chocolateRepository.getAll();
    }

   public Optional<Chocolate> getChocolate(String reference) {
        return chocolateRepository.getChocolate(reference);
    }

    public Chocolate save(Chocolate accesory) {
        if (accesory.getReference() == null) {
            return accesory;
        } else {
            return chocolateRepository.save(accesory);
        }
    }

    public Chocolate update(Chocolate accesory) {

        if (accesory.getReference() != null) {
            Optional<Chocolate> accesoryDb = chocolateRepository.getChocolate(accesory.getReference());
            if (!accesoryDb.isEmpty()) {
                

                if (accesory.getCategory() != null) {
                    accesoryDb.get().setCategory(accesory.getCategory());
                }
                
                if (accesory.getDescription() != null) {
                    accesoryDb.get().setDescription(accesory.getDescription());
                }
                if (accesory.getPrice() != 0.0) {
                    accesoryDb.get().setPrice(accesory.getPrice());
                }
                if (accesory.getQuantity() != 0) {
                    accesoryDb.get().setQuantity(accesory.getQuantity());
                }
                if (accesory.getPhotography() != null) {
                    accesoryDb.get().setPhotography(accesory.getPhotography());
                }
                accesoryDb.get().setAvailability(accesory.isAvailability());
                chocolateRepository.update(accesoryDb.get());
                return accesoryDb.get();
            } else {
                return accesory;
            }
        } else {
            return accesory;
        }
    }

    public boolean delete(String reference) {
        Boolean aBoolean = getChocolate(reference).map(accesory -> {
            chocolateRepository.delete(accesory);
            return true;
        }).orElse(false);
        return aBoolean;
    }
    
    
}
