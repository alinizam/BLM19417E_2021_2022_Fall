using Lesson6WebAppConsume.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Lesson6WebAppConsume.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public async Task<IActionResult> IndexAsync()
        {
            List<Department> departmentList = new List<Department>();
            using (var httpClient= new HttpClient())
            {
                var response = await httpClient.GetAsync("https://localhost:44373/api/Departments");
                string strValue = await response.Content.ReadAsStringAsync();
                departmentList = JsonConvert.DeserializeObject<List<Department>>(strValue);

            }

                return View(departmentList);
        }


        [HttpGet]
        public async Task<IActionResult> PostDepartment()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> PostDepartment(Department d)
        {
            using (var httpClient = new HttpClient())
            {
                string jsonInString = JsonConvert.SerializeObject(d);
                var response = await httpClient.PostAsync("https://localhost:44373/api/Departments"
                    , new StringContent(jsonInString, Encoding.UTF8, "application/json"));

            }

            return RedirectToAction("Index");
        }



        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
