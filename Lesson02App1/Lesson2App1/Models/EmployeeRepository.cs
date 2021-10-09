using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lesson2App1.Models
{
    public class EmployeeRepository : IEmployeeRepository
    {
        List<Employee> employees = new List<Employee>{
                new Employee { personelId = 1, firstName = "Ahmet", lastName = "Ak" },
                new Employee { personelId = 2, firstName = "Mehmet", lastName = "Ak" },
                new Employee { personelId = 3, firstName = "Ayşe", lastName = "Ak" }
        };
        public Employee getEmployeeById(int empId)
        {
            var employee = employees.FirstOrDefault(e => e.personelId == empId);
            return employee;
        }

        public List<Employee> getEmployees()
        {

            return employees;
        }
    }
}
