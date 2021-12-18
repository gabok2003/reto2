package co.usa.edu.reto2mb.reto2.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import co.usa.edu.reto2mb.reto2.model.User;
import co.usa.edu.reto2mb.reto2.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAll() {
        return userRepository.getAll();
    }

    public Optional<User> getUser(int id) {
        return userRepository.getUser(id);
    }

    public User save(User usuario) {
        if (usuario.getId() == null) {
            return userRepository.save(usuario);
        } else {
            Optional<User> consulta = userRepository.getUser(usuario.getId());
            if (consulta.isEmpty()) {
                return userRepository.save(usuario);
            } else {
                return usuario;

            }
        }
    }

    public Boolean get_Email(String email) {
        Optional<User> email_e = userRepository.getEmailExistence(email);
        
      if (email_e.isPresent()){
          return true;
      }
      else{ return false;}
  }

    public User validacion (String email, String password){

    User datos =  userRepository.validacionEmailPassword(email, password);
    if (datos!=null){
        return userRepository.validacionEmailPassword(email, password);
    }
    else{
        return userRepository.userNoEncontrado(email, password);
    }
}

    public boolean delete(int userId) {
        Boolean aBoolean = getUser(userId).map(user -> {
            userRepository.delete(user);
            return true;
        }).orElse(false);
        return aBoolean;
}

    public User update(User user) {
        
        if (user.getId() != null) {
            Optional<User> userDb = userRepository.getUser(user.getId());
            if (!userDb.isEmpty()) {
                if (user.getIdentification() != null) {
                    userDb.get().setIdentification(user.getIdentification());
                }
                if (user.getName() != null) {
                    userDb.get().setName(user.getName());
                }
                if (user.getAddress() != null) {
                    userDb.get().setAddress(user.getAddress());
                }
                if (user.getCellPhone() != null) {
                    userDb.get().setCellPhone(user.getCellPhone());
                }
                if (user.getEmail() != null) {
                    userDb.get().setEmail(user.getEmail());
                }
                if (user.getPassword() != null) {
                    userDb.get().setPassword(user.getPassword());
                }
                if (user.getZone() != null) {
                    userDb.get().setZone(user.getZone());
                }
                
                userRepository.update(userDb.get());
                return userDb.get();
            } else {
                return user;
            }
        } else {
            return user;
        }
    }
    
    

}
