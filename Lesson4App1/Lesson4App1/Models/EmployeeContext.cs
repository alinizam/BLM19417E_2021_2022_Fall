using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lesson4App1.Models
{
    public class EmployeeContext : DbContext
    {
        public virtual DbSet<Employee> Employees {get;set;}
        public virtual DbSet<Department> Departments { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder builder) {
            
            builder.UseSqlServer("Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=C:\\Users\\alinizam\\AppData\\Local\\Microsoft\\Microsoft SQL Server Local DB\\Instances\\MSSQLLocalDB\\EmployeeDB.mdf;Integrated Security=True;Connect Timeout=30");
        }
    }
}
