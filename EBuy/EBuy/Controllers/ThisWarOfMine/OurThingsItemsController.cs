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
    public class OurThingsItemsController : Controller
    {
        private DBTestEntities db = new DBTestEntities();

        // GET: OurThingsItems
        public ActionResult Index()
        {
            var ourThingsItems = db.OurThingsItems.Include(o => o.Items).Include(o => o.OurThings);
            return View(ourThingsItems.ToList());
        }

        // GET: OurThingsItems/Details/5
        public ActionResult Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            OurThingsItems ourThingsItems = db.OurThingsItems.Find(id);
            if (ourThingsItems == null)
            {
                return HttpNotFound();
            }
            return View(ourThingsItems);
        }

        // GET: OurThingsItems/Create
        public ActionResult Create()
        {
            ViewBag.ItemId = new SelectList(db.Items, "Id", "Name");
            ViewBag.OurthingsId = new SelectList(db.OurThings, "Id", "Id");
            return View();
        }

        // POST: OurThingsItems/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "Id,OurthingsId,ItemId,Quantity")] OurThingsItems ourThingsItems)
        {
            if (ModelState.IsValid)
            {
                db.OurThingsItems.Add(ourThingsItems);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            ViewBag.ItemId = new SelectList(db.Items, "Id", "Name", ourThingsItems.ItemId);
            ViewBag.OurthingsId = new SelectList(db.OurThings, "Id", "Id", ourThingsItems.OurthingsId);
            return View(ourThingsItems);
        }

        // GET: OurThingsItems/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            OurThingsItems ourThingsItems = db.OurThingsItems.Find(id);
            if (ourThingsItems == null)
            {
                return HttpNotFound();
            }
            ViewBag.ItemId = new SelectList(db.Items, "Id", "Name", ourThingsItems.ItemId);
            ViewBag.OurthingsId = new SelectList(db.OurThings, "Id", "Id", ourThingsItems.OurthingsId);
            return View(ourThingsItems);
        }

        // POST: OurThingsItems/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "Id,OurthingsId,ItemId,Quantity")] OurThingsItems ourThingsItems)
        {
            if (ModelState.IsValid)
            {
                db.Entry(ourThingsItems).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.ItemId = new SelectList(db.Items, "Id", "Name", ourThingsItems.ItemId);
            ViewBag.OurthingsId = new SelectList(db.OurThings, "Id", "Id", ourThingsItems.OurthingsId);
            return View(ourThingsItems);
        }

        // GET: OurThingsItems/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            OurThingsItems ourThingsItems = db.OurThingsItems.Find(id);
            if (ourThingsItems == null)
            {
                return HttpNotFound();
            }
            return View(ourThingsItems);
        }

        // POST: OurThingsItems/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            OurThingsItems ourThingsItems = db.OurThingsItems.Find(id);
            db.OurThingsItems.Remove(ourThingsItems);
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
