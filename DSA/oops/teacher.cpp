#include <iostream>
#include <string>
using namespace std;

class Teacher
{
    // Properties / Attributes
private:
    double salary;

public:
    // non-parameterized constructor
    Teacher()
    {
        dept = "Computer Science"; // Assign some values for properties. Say in bank all balance is 0 at start
    }

    // parameterized constructor
    Teacher(string n, string d, string s, double sal)
    {
        name = n;
        dept = d;
        subject = s;
        salary = sal;
    }
    string name;
    string dept;
    string subject;

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

    void getInfo() {
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

int main()
{
    Teacher t1; // Internally call constructor when creating new object
    Teacher t2("Ram", "ComputerScience", "C++", 26000);

    t1.name = "Ritik";
    t1.dept = "Computer Science";
    t1.subject = "C++";
    t1.setSalary(25000);
    cout << t1.name << endl;
    cout << t1.getSalary() << endl;
    t2.getInfo();
    return 0;
}