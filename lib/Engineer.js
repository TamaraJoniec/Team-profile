// TODO: Write code to define and export the Engineer class. HINT: This class should inherit from Employee.
import Employee from "./Employee.js";

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        super(name, id, email);
        this.githubUsername = githubUsername;
    }

    getGithub() {
        return this.githubUsername;
    }

    getRole() {
        return "Engineer";
    }
}

export default Engineer;
