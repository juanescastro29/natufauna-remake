package natufauna.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "users")
public class User {

    @Id
    @Column(name = "id", nullable = false)
    private int userId;

    @Column(name = "name", nullable = false)
    private String userName;

    @Column(name = "lastName", nullable = false)
    private String userLastName;

    @Column(name = "email", nullable = false)
    private String userEmail;

    @Column(name = "phone", nullable = false)
    private String userPhone;

    @Column(name = "city", nullable = false)
    private String userCity;

    @Column(name = "address", nullable = false)
    private String userAddress;

    @Column(name = "password", nullable = false)
    private String userPassword;

    @Column(name = "role", nullable = false)
    private String userRole;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Adoption> adoptions;

    @OneToMany(mappedBy = "user")
    @JsonIgnore
    private List<Sponsorship> sponsorships;

    @PreRemove
    public void nullable(){
        adoptions.forEach(adoption -> adoption.setUser(null));
        sponsorships.forEach(sponsorship -> sponsorship.setUser(null));
    }

    public User() {
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserLastName() {
        return userLastName;
    }

    public void setUserLastName(String userLastName) {
        this.userLastName = userLastName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    public String getUserCity() {
        return userCity;
    }

    public void setUserCity(String userCity) {
        this.userCity = userCity;
    }

    public String getUserAddress() {
        return userAddress;
    }

    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public String getUserRole() {
        return userRole;
    }

    public void setUserRole(String userRole) {
        this.userRole = userRole;
    }

    public List<Adoption> getAdoptions() {
        return adoptions;
    }

    public void setAdoptions(List<Adoption> adoptions) {
        this.adoptions = adoptions;
    }

    public List<Sponsorship> getSponsorships() {
        return sponsorships;
    }

    public void setSponsorships(List<Sponsorship> sponsorships) {
        this.sponsorships = sponsorships;
    }
}
