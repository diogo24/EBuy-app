using EBuy.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EBuy.Controllers.TasksProj
{
    public class WeekTasks
    {
        public WeekTasks()
        {
            Tasks = new Dictionary<DayOfWeek, IEnumerable<Tasks>>();
        }

        public IDictionary<DayOfWeek, IEnumerable<Tasks>> Tasks { get; set; }
    }
}