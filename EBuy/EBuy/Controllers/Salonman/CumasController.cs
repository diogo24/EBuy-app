using EBuy.Model;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EBuy.Controllers.Salonman
{
    public class CumasController : Controller
    {
        private DBFFileReader _dbfFileReader;

        public CumasController()
        {
            _dbfFileReader = new DBFFileReader();
        }

        #region Cumas
        // GET: Cumas
        public ActionResult Index()
        {            
            var data = _dbfFileReader.GetCumasFileData();

            return View(data);
        }

        public ActionResult GetCummasByPage(int? page)
        {
            if (!page.HasValue || page == 0)
            {
                return PartialView("CumasByPage", new DataTable());
            }

            var model = _dbfFileReader.GetCumasByPage(page.Value);
            return PartialView("CumasByPage", model);
        }

        public ActionResult CUSTNO(string custno)
        {
            var data       = _dbfFileReader.GetCUSTNO(custno);
            ViewBag.CUSTNO = custno;

            return View(data);
        }

        #endregion

        #region CUTRN

        public ActionResult CUTRN_All()
        {
            var data = _dbfFileReader.GetCUTRN_All();

            return View(data);
        }

        public ActionResult CUTRN(string custno)
        {
            var data       = _dbfFileReader.GetCUTRN(custno);
            ViewBag.CUSTNO = custno;

            return View(data);
        }

        #endregion

        #region ZTRAN 

        public ActionResult ZTRAN_All()
        {         
            var data = _dbfFileReader.GetZTRAN_All();

            return View(data);
        }

        public ActionResult ZTRAN(string custno)
        {
            var data          = _dbfFileReader.GetZTRAN(custno);
            ViewBag.CUSTNO    = custno;

            return View(data);
        }

        #endregion
    }
}