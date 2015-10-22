using EBuy.Model.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EBuy.Model
{
    public class EbuyDataContext : DbContext
    {
        public DbSet<Auction> Auctions { get; set; }
    }
}
