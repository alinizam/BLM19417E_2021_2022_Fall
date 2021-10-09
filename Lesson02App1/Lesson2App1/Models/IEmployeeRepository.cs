using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lesson2App1.Models
{
    public interface IEmployeeRepository
    {
        List<Employee> getEmployees();
        Employee getEmployeeById(int empId);
    }
}
