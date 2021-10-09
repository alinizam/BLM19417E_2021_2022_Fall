using Lesson2App1.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

/* Repository usage*/
namespace Lesson2App1.Controllers
{
    public class EmployeeController : Controller
    {
        IEmployeeRepository _repo;

        public EmployeeController(IEmployeeRepository repo)
        {
            _repo = repo;
        }

        public IActionResult Index()
        {
            IEmployeeRepository repo = new EmployeeRepository();
            return View(repo.getEmployees());
        }
        public IActionResult IndexByAnnotation([FromServices] IEmployeeRepository repo)
        {
            return View("Index",repo.getEmployees());
        }

        public IActionResult IndexByDI()
        {
            return View("Index", _repo.getEmployees());
        }

    }
}
