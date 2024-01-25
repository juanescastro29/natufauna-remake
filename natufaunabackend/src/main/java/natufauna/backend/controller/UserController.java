package natufauna.backend.controller;

import natufauna.backend.model.User;
import natufauna.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<Object> addUser(@RequestBody User user) {
        Map<String, Object> response = new HashMap<>();
        for (int i = 0; i < userService.getAll().size(); i++) {
            if (( (int) user.getUserId() == userService.getAll().get(i).getUserId()) || (user.getUserEmail().equals(userService.getAll().get(i).getUserEmail()))) {
                response.put("Route", null);
                response.put("Error", "User already exist");
                return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
            }
        }
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(10);
        user.setUserPassword(encoder.encode(user.getUserPassword()));
        user.setUserRole("USER");
        userService.save(user);
        response.put("Route", "/");
        response.put("Error", "");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<Map> login(@RequestBody Map<String, String> credentials) {
        String userEmail = credentials.get("userEmail");
        String userPassword = credentials.get("userPassword");
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(10);
        User user = null;
        Map<String, Object> response = new HashMap();
        for (int i = 0; i < userService.getAll().size(); i++) {
            if (userEmail.equals(userService.getAll().get(i).getUserEmail())) {
                user = userService.getAll().get(i);
            }
        }

        if (user != null) {
            if (!encoder.matches(userPassword, user.getUserPassword())){
                response.put("Route", null);
                response.put("User", null);
                response.put("Error", "Wrong password");
                return new ResponseEntity<>(response, HttpStatus.NOT_ACCEPTABLE);
            }
        }else {
            response.put("Route", "/register");
            response.put("User", null);
            response.put("Error", "");
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
        if(user.getUserRole().equals("USER")) {
            response.put("Route", "/menu");
        }else {
            response.put("Route", "/admin/products");
        }
        response.put("User", user);
        response.put("Error", null);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<Object> getUsers() {
        Map<String, Object> response = new HashMap<>();
        List<User> users = userService.getAll();
        if (!users.isEmpty()) {
            response.put("Message", "Fetch correct");
            response.put("Users", users);
            return new ResponseEntity<>(response, HttpStatus.OK);
        }else {
            response.put("Message", "There are no registered users");
            response.put("Users", null);
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Integer id) {
        User user = userService.delete(id);
        if(user != null) {
            return new ResponseEntity<>("User deleted successfully", HttpStatus.OK);
        }else {
            return new ResponseEntity<>("User not deleted", HttpStatus.CONFLICT);
        }
    }



}
