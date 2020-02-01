class UserTamplate {
  constructor(name, username, email, address, password, age) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.address = address;
    this.password = password;
    this.age = age;
    this.connected = false;
  }
  login() {
    this.connected = true;
    // console.log("your login status:", this.connected); 
    return this.connected;
  }
  logout() {
    this.connected = false;
    // console.log("your login status: ", this.connected); // your login status: false
    return this.connected;
  }
  checkStatus() {
    if (this.connected === true) {
      console.log(user1.login());
    } else if (this.connected === false) {
      console.log(user1.logout());
    } else {
      console.log("Please check your status :");
    }
  }
}

user1 = new UserTamplate(
  "Maya",
  "MAYAMAYA",
  "maya@gmail.com",
  "12345",
  "123456",
  "25"
);

console.log(
  `My name is ${user1.name}  
  username is ${user1.username} 
  my email is ${user1.email} 
  my address ${user1.address} 
  my password is ${user1.password} 
  and I am ${user1.age} years old
  `
);

console.log("You are on ", user1.login());
console.log(user1.checkStatus(user1.login()));
console.log("You are on ", user1.logout());
console.log(user1.checkStatus(user1.logout()));

// My name is Maya  
//   username is MAYAMAYA 
//   my email is maya@gmail.com 
//   my address 12345 
//   my password is 123456 
//   and I am 25 years old
  
// your login status: true
// You are on  true
// your login status: true
// true
// undefined
// your login status:  false
// You are on  false
// your login status:  false
// false
// undefined