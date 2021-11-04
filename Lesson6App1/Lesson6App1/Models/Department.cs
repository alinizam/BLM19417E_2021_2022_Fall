using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

#nullable disable

namespace Lesson6App1.Models
{
    public partial class Department
    {
        public int DepartmentId { get; set; }
        public string Name { get; set; }

        [NotMapped]
        public int EmpCount { get {
                var deptIdSql = new SqlParameter{
                    ParameterName = "deptId",
                    SqlDbType = System.Data.SqlDbType.Int,
                    Value = DepartmentId,
                    Direction = System.Data.ParameterDirection.Input
                };
                var empCountSql= new SqlParameter{
                    ParameterName = "@empCount",
                    SqlDbType = System.Data.SqlDbType.Int,
                    Size = 30,
                    Direction = System.Data.ParameterDirection.Output
                }; 
                EmployeeDBContext _context = new EmployeeDBContext();
                _context.Database.ExecuteSqlRaw("EXEC  [dbo].[getEmpCount]  @deptId, @empCount OUTPUT", deptIdSql, empCountSql);
                return (int)empCountSql.Value;
            } }
    }
}
