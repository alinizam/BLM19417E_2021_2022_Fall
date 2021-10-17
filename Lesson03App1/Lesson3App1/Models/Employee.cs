using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Lesson3App1.Models
{
    public class Employee
    {
        public int empID { get; set; }

        [Required]
        public string firstName{ get; set; }

        public string lastName { get; set; }
    }
}
