using Lesson3App1.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lesson3App1.Controllers
{
    public class EmployeeController : Controller
    {
        private IEmployeeRepository _repo;

        public EmployeeController(IEmployeeRepository repo)
        {
            _repo = repo;
        }

        public IActionResult Index()
        {
            return View(_repo.getEmployees());
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(Employee e)
        {
            _repo.getEmployees().Add(e);
            return RedirectToAction("Index");
        }
    }
}
