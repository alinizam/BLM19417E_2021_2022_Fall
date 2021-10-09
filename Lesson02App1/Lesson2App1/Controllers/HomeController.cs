using Lesson2App1.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lesson2App1.Controllers
{
    public class HomeController : Controller
    {
        List<Employee> employees = new List<Employee>{
                new Employee { personelId = 1, firstName = "Ahmet", lastName = "Ak" },
                new Employee { personelId = 2, firstName = "Mehmet", lastName = "Ak" },
                new Employee { personelId = 3, firstName = "Ayşe", lastName = "Ak" }
        };
        public String Index()
        {
            return "Merhaba";
        }
        public IActionResult Index1()
        {
            return View();
        }
        public IActionResult Index2(int id)
        {
            var employee = employees.FirstOrDefault(e => e.personelId == id);
            return View(employee);
        }
    }
}
