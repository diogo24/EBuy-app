using EBuy.Model;
using System.Threading.Tasks;
using System.Web.Mvc;
using System.Data.Entity;
using StackExchange.Profiling;


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
            var profiler = MiniProfiler.Current; // it's ok if this is null
            using (profiler.Step("ThisWarOfMineController.Index"))
            {
                return View(await _db.DB.Episodes.ToListAsync());
            }
        }
    }
}