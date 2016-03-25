using EBuy.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EBuy.Controllers.TasksProj
{
    public class DayAndAdditionalTasks
    {
        public DayAndAdditionalTasks()
        {
            AdditionalTasks = new List<Tasks>();
            DayTasks        = new List<Tasks>();
        }

        public IEnumerable<Tasks> AdditionalTasks { get; set; }
        public IEnumerable<Tasks> DayTasks { get; set; }
    }
}