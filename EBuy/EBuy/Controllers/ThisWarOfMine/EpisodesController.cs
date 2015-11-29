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

namespace EBuy.Controllers.ThisWarOfMine
{
    public class EpisodesController : Controller
    {
        private DBTestEntities db = new DBTestEntities();

        // GET: Episodes
        public async Task<ActionResult> Index()
        {
            return View(await db.Episodes.ToListAsync());
        }

        // GET: Episodes/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Episodes episodes = await db.Episodes.FindAsync(id);
            if (episodes == null)
            {
                return HttpNotFound();
            }
            return View(episodes);
        }

        // GET: Episodes/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Episodes/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "Id,Episode_Name,StarDate")] Episodes episodes)
        {
            if (ModelState.IsValid)
            {
                db.Episodes.Add(episodes);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            return View(episodes);
        }

        // GET: Episodes/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Episodes episodes = await db.Episodes.FindAsync(id);
            if (episodes == null)
            {
                return HttpNotFound();
            }
            return View(episodes);
        }

        // POST: Episodes/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "Id,Episode_Name,StarDate")] Episodes episodes)
        {
            if (ModelState.IsValid)
            {
                db.Entry(episodes).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            return View(episodes);
        }

        // GET: Episodes/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Episodes episodes = await db.Episodes.FindAsync(id);
            if (episodes == null)
            {
                return HttpNotFound();
            }
            return View(episodes);
        }

        // POST: Episodes/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            Episodes episodes = await db.Episodes.FindAsync(id);
            db.Episodes.Remove(episodes);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
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
