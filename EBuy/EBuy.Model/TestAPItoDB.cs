using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EBuy.Model
{
    public class TestAPItoDB
    {
        private DBTestEntities _db;

        public TestAPItoDB()
        {
            _db = new DBTestEntities();
        }

        public DBTestEntities DB { get { return _db; }  }
    }
}
