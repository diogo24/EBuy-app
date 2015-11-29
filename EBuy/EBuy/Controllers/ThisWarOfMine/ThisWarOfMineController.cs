using EBuy.Model;
using System.Threading.Tasks;
using System.Web.Mvc;
using System.Data.Entity;


namespace EBuy.Controllers.ThisWarOfMine
{
    public class ThisWarOfMineController : Controller
    {
        private TestAPItoDB _db;

        public ThisWarOfMineController()
        {
            _db = new TestAPItoDB();
        }

        // GET: Episodes
        public async Task<ActionResult> Index()
        {
            return View(await _db.DB.Episodes.ToListAsync());
        }
    }
}