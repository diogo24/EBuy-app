using EBuy.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EBuy.Controllers
{
    public class PartialViewController : Controller
    {
        // GET: PartialView
        public ActionResult Index()
        {
            var partialViewVmList = GetPartialViewVMList();
            return View(partialViewVmList);
        }

        // GET: PartialView using ViewData.Model property
        public ActionResult IndexViewDataModel()
        {
            var partialViewVmList = GetPartialViewVMList();
            ViewData.Model        = partialViewVmList;
            return View("Index");
        }

        #region Private Members 

        private IEnumerable<PartialViewVM> GetPartialViewVMList()
        {
            return new List<PartialViewVM> {
                new PartialViewVM { Name = "Name1", Value = 1},
                new PartialViewVM { Name = "Name2", Value = 2},
                new PartialViewVM { Name = "Name3", Value = 3}
            };
        }

        #endregion
    }
}