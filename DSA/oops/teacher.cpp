#include <iostream>
#include <string>
using namespace std;

class Teacher
{
    // Properties / Attributes
private:
    double salary;

public:
    string name;
    string dept;
    string subject;
    // non-parameterized constructor
    Teacher()
    {
        dept = "Computer Science"; // Assign some values for properties. Say in bank all balance is 0 at start
    }

    // parameterized constructor
    Teacher(string name, string dept, string subject, double salary)
    {
        this->name = name;
        this->dept = dept;
        this->subject = subject;
        this->salary = salary;
    }

    // copy constructor
    Teacher(Teacher &orgObj) {
        cout << "I am custom copy constructor\n";
        this->name = orgObj.name;
        this->dept = orgObj.dept;
        this->subject = orgObj.subject;
        this->salary = orgObj.salary;
    }

    // Methods / Member functions
    void changeDept(string newDept)
    {
        dept = newDept;
    }

    void setSalary(double s)
    {
        salary = s;
    }

    double getSalary()
    {
        return salary;
    }

    void getInfo()
    {
        cout << "name: " << name << endl;
        cout << "subject: " << subject << endl;
    }
};



// Encapsulation
class Account
{
private:
    double balance;
    string password; // data hiding

public:
    string accountId;
    string username; // public data
};



class Student {
public:
    string name;
    double* cgpaPtr;

    Student(string name, double cgpa) {
        this->name = name;
        cgpaPtr = new double;
        *cgpaPtr = cgpa;
    }

    Student(Student &obj) {
        this->name = obj.name;
        cgpaPtr = new double;
        *cgpaPtr = *obj.cgpaPtr;
    }

    // Destructor
    ~Student() {
        cout << "HI, I delete everything\n";
        delete cgpaPtr;
    }

    void getInfo() {
        cout << "name : " << name << endl;
        cout << "cgpa : " << *cgpaPtr << endl;
    }
};

int main()
{
    Student s1("Rahul Kumar", 8.9);

    s1.getInfo();
    return 0;
}