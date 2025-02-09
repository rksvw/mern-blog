#include<iostream>
using namespace std;

void test(int num) {
    for (int i = 0; i < num; i++) {
        for(int j = 0; j < num - i; j++) {
            cout << " ";
            if (j == num - 1 - i) {
                cout << "*";
            }
        }
        for (int j = 0; j < i; j++) {

        }
        cout << endl;
    }
}

int main() {
    int num;
    cout << "Enter pattern size: ";
    cin >> num;

    test(num);
    return 0;
}