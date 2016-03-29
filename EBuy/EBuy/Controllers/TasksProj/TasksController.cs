using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Net;
using System.Web;
using System.Web.Mvc;
using EBuy.Model;

namespace EBuy.Controllers.TasksProj
{
    public class TasksController : Controller
    {
        private DBTestEntities db = new DBTestEntities();

        // GET: Tasks
        public async Task<ActionResult> Index()
        {
            var tasks = db.Tasks.Include(t => t.TaskStatuses);

            var dayOfWeek = (int)DateTime.Now.DayOfWeek;

            var dayAndAdditionalTasks             = new DayAndAdditionalTasks();
            dayAndAdditionalTasks.AdditionalTasks = tasks.Where(t => !t.DayOfWeek.HasValue).AsEnumerable();
            dayAndAdditionalTasks.DayTasks        = tasks.Where(t => t.DayOfWeek == dayOfWeek).AsEnumerable();

            return View(dayAndAdditionalTasks);
        }

        // GET: Tasks/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Tasks tasks = await db.Tasks.FindAsync(id);
            if (tasks == null)
            {
                return HttpNotFound();
            }
            return View(tasks);
        }

        // GET: Tasks/Create
        public ActionResult Create()
        {
            ViewBag.StatusCode = new SelectList(db.TaskStatuses, "Code", "Description");
            return View();
        }

        // POST: Tasks/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "Name,Description,StartDate,EndDate,StatusCode,Type,DayOfWeek")] Tasks tasks)
        {
            if (ModelState.IsValid)
            {
                tasks.CreateDate  = DateTime.UtcNow;
                tasks.UpdatedDate = DateTime.UtcNow;

                db.Tasks.Add(tasks);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.StatusCode = new SelectList(db.TaskStatuses, "Code", "Description", tasks.StatusCode);
            return View(tasks);
        }

        // GET: Tasks/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Tasks tasks = await db.Tasks.FindAsync(id);
            if (tasks == null)
            {
                return HttpNotFound();
            }
            ViewBag.StatusCode = new SelectList(db.TaskStatuses, "Code", "Description", tasks.StatusCode);
            return View(tasks);
        }

        // POST: Tasks/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "Id,Name,Description,StartDate,EndDate,CreateDate,UpdatedDate,DoneDate,StatusCode")] Tasks tasks)
        {
            if (ModelState.IsValid)
            {
                db.Entry(tasks).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.StatusCode = new SelectList(db.TaskStatuses, "Code", "Description", tasks.StatusCode);
            return View(tasks);
        }

        // GET: Tasks/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Tasks tasks = await db.Tasks.FindAsync(id);
            if (tasks == null)
            {
                return HttpNotFound();
            }
            return View(tasks);
        }

        // POST: Tasks/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            Tasks tasks = await db.Tasks.FindAsync(id);
            db.Tasks.Remove(tasks);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        public async Task<ActionResult> WeekSchedule()
        {
            var weekTasks = new WeekTasks();

            foreach (DayOfWeek item in Enum.GetValues(typeof(DayOfWeek)))
            {                
                weekTasks.Tasks.Add(item, db.Tasks.Where(t => t.DayOfWeek == (int)item));
            }

            return View(weekTasks);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
