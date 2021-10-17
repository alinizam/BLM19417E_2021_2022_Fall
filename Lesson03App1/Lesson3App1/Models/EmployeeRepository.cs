using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lesson3App1.Models
{
    public class EmployeeRepository : IEmployeeRepository
    {
        static List<Employee> employees = new List<Employee>{
                new Employee { empID  = 1, firstName = "Ahmet", lastName = "Ak" },
                new Employee { empID  = 2, firstName = "Mehmet", lastName = "Ak" },
                new Employee { empID  = 3, firstName = "Ayşe", lastName = "Ak" }
        };
        public Employee getEmployeeById(int empId)
        {
            var employee = employees.FirstOrDefault(e => e.empID == empId);
            return employee;
        }

        public List<Employee> getEmployees()
        {

            return employees;
        }
    }
}
