package natufauna.backend.service;

import jakarta.transaction.Transactional;
import natufauna.backend.model.User;
import natufauna.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public User get(Integer id) {
        Optional<User> optionalUser = userRepository.findById(id);
        User user = optionalUser.orElse(null);
        return user;
    }

    @Override
    public User delete(Integer id) {
        Optional<User> optionalUser = userRepository.findById(id);
        User user = optionalUser.orElse(null);
        if( user != null ){
            userRepository.delete(user);
            return user;
        }
        return null;
    }
}
