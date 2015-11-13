using EBuy.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EBuy.Controllers.Salonman
{
    public class CumasController : Controller
    {
        #region Cumas
        // GET: Cumas
        public ActionResult Index()
        {
            var dbfFileReader = new DBFFileReader();
            var data          = dbfFileReader.GetCumasFileData();

            return View(data);
        }

        public ActionResult CUSTNO(string custno)
        {
            var dbfFileReader = new DBFFileReader();
            var data          = dbfFileReader.GetCUSTNO(custno);
            ViewBag.CUSTNO    = custno;

            return View(data);
        }

        #endregion

        #region CUTRN

        public ActionResult CUTRN_All()
        {
            var dbfFileReader = new DBFFileReader();
            var data          = dbfFileReader.GetCUTRN_All();

            return View(data);
        }

        public ActionResult CUTRN(string custno)
        {
            var dbfFileReader = new DBFFileReader();
            var data          = dbfFileReader.GetCUTRN(custno);
            ViewBag.CUSTNO    = custno;

            return View(data);
        }

        #endregion

        #region ZTRAN 

        public ActionResult ZTRAN_All()
        {
            var dbfFileReader = new DBFFileReader();
            var data          = dbfFileReader.GetZTRAN_All();

            return View(data);
        }

        public ActionResult ZTRAN(string custno)
        {
            var dbfFileReader = new DBFFileReader();
            var data          = dbfFileReader.GetZTRAN(custno);
            ViewBag.CUSTNO    = custno;

            return View(data);
        }

        #endregion
    }
}