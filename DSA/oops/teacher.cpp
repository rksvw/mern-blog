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

    // Methods / Member functions
    void changeDept(string newDept)
    {
        dept = newDept;
    }

    void setSalary(double s) {
        salary = s;
    }

    double getSalary() {
        return salary;
    }
};

int main()
{
    Teacher t1;
    Teacher t2;

    t1.name = "Ritik";
    t1.dept = "Computer Science";
    t1.subject = "C++";
    t1.setSalary(25000);
    cout << t1.name << endl;
    cout << t1.getSalary() << endl;
    return 0;
}