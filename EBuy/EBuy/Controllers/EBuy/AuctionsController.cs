using EBuy.Model.Models;
using EBuy.Api.Models;
using EBuy.Api.Helpers;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EBuy.Api;

namespace EBuy.Controllers.EBuy
{
    public class AuctionsController : Controller
    {
        private AuctionApi _auctionApi;

        public AuctionsController(AuctionApi auctionApi)
        {
            auctionApi.ThrowIfNull("auctionApi");
            _auctionApi = auctionApi;
        }

        // GET: Auctions
        public ActionResult Index()
        {
            return View();
        }

        // GET: Auctions/Details/5
        public ActionResult Details(long id)
        {
            CultureInfo usCulture = new CultureInfo("en-US");

            var auction = new Auction
            {
                Id           = id,
                Title        = "Brand new Widget 2.0",
                Description  = "This is a brand new version 2.0 Widget!",
                StartPrice   = 1.00m,
                CurrentPrice = 13.40m,
                StartTime    = DateTime.Parse("6-15-2012 12:34 PM", usCulture.DateTimeFormat),
                EndTime      = DateTime.Parse("6-23-2012 12:34 PM", usCulture.DateTimeFormat),
            };

            return View(auction);
        }

        public ActionResult PartialDetails(long id)
        {
            CultureInfo usCulture = new CultureInfo("en-US");

            var auction = new Auction
            {
                Id           = id,
                Title        = "Partial",
                Description  = "PArtial brand new version 2.0 Widget!",
                StartPrice   = 1.00m,
                CurrentPrice = 13.40m,
                StartTime    = DateTime.Parse("6-15-2012 12:34 PM", usCulture.DateTimeFormat),
                EndTime      = DateTime.Parse("6-23-2012 12:34 PM", usCulture.DateTimeFormat),
            };

            return PartialView("Details", auction);
        }

        // GET: Auctions/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Auctions/Create
        [HttpPost]
        public ActionResult Create(AuctionEditVM auction)
        {
            // start time after end time
            if(auction.StartTime > auction.EndTime)
            {
                ModelState.AddModelError(
                "EndTime",
                "Should be after start time"
                );
            }

            if(ModelState.IsValid) { 
            // Create Auction in database
                auction = _auctionApi.SaveAuction(auction);
            }

            return View(auction);
        }

        // GET: Auctions/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: Auctions/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: Auctions/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: Auctions/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
