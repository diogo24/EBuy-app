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
    public class ItemComponentsController : Controller
    {
        private DBTestEntities db = new DBTestEntities();

        // GET: ItemComponents
        public async Task<ActionResult> Index()
        {
            var itemComponents = db.ItemComponents.Include(i => i.Items);
            return View(await itemComponents.ToListAsync());
        }

        // GET: ItemComponents/Details/5
        public async Task<ActionResult> Details(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ItemComponents itemComponents = await db.ItemComponents.FindAsync(id);
            if (itemComponents == null)
            {
                return HttpNotFound();
            }
            return View(itemComponents);
        }

        // GET: ItemComponents/Create
        public ActionResult Create()
        {
            ViewBag.ItemId = new SelectList(db.Items, "Id", "Name");
            return View();
        }

        // POST: ItemComponents/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Create([Bind(Include = "Id,ItemId,Quantity")] ItemComponents itemComponents)
        {
            if (ModelState.IsValid)
            {
                db.ItemComponents.Add(itemComponents);
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }

            ViewBag.ItemId = new SelectList(db.Items, "Id", "Name", itemComponents.ItemId);
            return View(itemComponents);
        }

        // GET: ItemComponents/Edit/5
        public async Task<ActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ItemComponents itemComponents = await db.ItemComponents.FindAsync(id);
            if (itemComponents == null)
            {
                return HttpNotFound();
            }
            ViewBag.ItemId = new SelectList(db.Items, "Id", "Name", itemComponents.ItemId);
            return View(itemComponents);
        }

        // POST: ItemComponents/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> Edit([Bind(Include = "Id,ItemId,Quantity")] ItemComponents itemComponents)
        {
            if (ModelState.IsValid)
            {
                db.Entry(itemComponents).State = EntityState.Modified;
                await db.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            ViewBag.ItemId = new SelectList(db.Items, "Id", "Name", itemComponents.ItemId);
            return View(itemComponents);
        }

        // GET: ItemComponents/Delete/5
        public async Task<ActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ItemComponents itemComponents = await db.ItemComponents.FindAsync(id);
            if (itemComponents == null)
            {
                return HttpNotFound();
            }
            return View(itemComponents);
        }

        // POST: ItemComponents/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<ActionResult> DeleteConfirmed(int id)
        {
            ItemComponents itemComponents = await db.ItemComponents.FindAsync(id);
            db.ItemComponents.Remove(itemComponents);
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
