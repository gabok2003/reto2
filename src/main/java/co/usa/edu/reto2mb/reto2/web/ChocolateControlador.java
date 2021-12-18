package co.usa.edu.reto2mb.reto2.web;


import java.util.List;
import java.util.Optional;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;    

import co.usa.edu.reto2mb.reto2.model.Chocolate;
import co.usa.edu.reto2mb.reto2.service.ChocolateService;


@RestController
@RequestMapping("api/chocolate")
@CrossOrigin("*")
public class ChocolateControlador {
  
    @Autowired
    private ChocolateService chocolateService;

    @GetMapping("/all")
    public List<Chocolate> getAll() {
        return chocolateService.getAll();
    }

    @GetMapping("/{reference}")
    public Optional<Chocolate> getChocolate(@PathVariable("reference") String reference) {
        return chocolateService.getChocolate(reference);
    }


    @DeleteMapping("/{reference}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public boolean delete(@PathVariable("reference") String reference) {
        return chocolateService.delete(reference);
    }

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public Chocolate save(@RequestBody  Chocolate usuario) {
        return chocolateService.save(usuario);
    }
    
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Chocolate update(@RequestBody Chocolate user) {
        return chocolateService.update(user);
}
}
