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

            return View(data);
        }
    }
}