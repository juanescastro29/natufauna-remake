package natufauna.backend.service;

import natufauna.backend.model.User;

import java.util.List;

public interface UserService {

    public User save(User user);
    public List<User> getAll();
    public User get(Integer id);
    public User delete(Integer id);

}
