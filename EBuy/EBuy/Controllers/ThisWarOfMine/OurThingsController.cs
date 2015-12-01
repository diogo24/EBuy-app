using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using EBuy.Model;

namespace EBuy.Controllers.ThisWarOfMine
{
    public class OurThingsController : Controller
    {
        private DBTestEntities db = new DBTestEntities();

        // GET: OurThings
        public ActionResult Index()
        {
            var ourThings = db.OurThings.Include(o => o.Episodes);
            return View(ourThings.ToList());
        }

        // GET: OurThings/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            OurThings ourThings = db.OurThings.Find(id);
            if (ourThings == null)
            {
                return HttpNotFound();
            }
            return View(ourThings);
        }

        // GET: OurThings/Create
        public ActionResult Create()
        {
            ViewBag.EpisodeId = new SelectList(db.Episodes, "Id", "Episode_Name");
            return View();
        }

        // POST: OurThings/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,EpisodeId")] OurThings ourThings)
        {
            if (ModelState.IsValid)
            {
                db.OurThings.Add(ourThings);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.EpisodeId = new SelectList(db.Episodes, "Id", "Episode_Name", ourThings.EpisodeId);
            return View(ourThings);
        }

        // GET: OurThings/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            OurThings ourThings = db.OurThings.Find(id);
            if (ourThings == null)
            {
                return HttpNotFound();
            }
            ViewBag.EpisodeId = new SelectList(db.Episodes, "Id", "Episode_Name", ourThings.EpisodeId);
            return View(ourThings);
        }

        // POST: OurThings/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,EpisodeId")] OurThings ourThings)
        {
            if (ModelState.IsValid)
            {
                db.Entry(ourThings).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.EpisodeId = new SelectList(db.Episodes, "Id", "Episode_Name", ourThings.EpisodeId);
            return View(ourThings);
        }

        // GET: OurThings/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            OurThings ourThings = db.OurThings.Find(id);
            if (ourThings == null)
            {
                return HttpNotFound();
            }
            return View(ourThings);
        }

        // POST: OurThings/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            OurThings ourThings = db.OurThings.Find(id);
            db.OurThings.Remove(ourThings);
            db.SaveChanges();
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
