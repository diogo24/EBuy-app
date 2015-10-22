using EBuy.Api.Models;
using EBuy.Api.Helpers;
using EBuy.Model;
using EBuy.Model.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EBuy.Api
{
    public class AuctionApi
    {
        private EbuyDataContext _db;

        public AuctionApi(EbuyDataContext db)
        {
            db.ThrowIfNull("db");
            _db = db;
        }

        public AuctionEditVM SaveAuction(AuctionEditVM auction)
        {
            var dbAuction = new Auction()
            {
                Id           = auction.Id,
                CurrentPrice = auction.CurrentPrice,
                Description  = auction.Description,
                EndTime      = auction.EndTime,
                StartPrice   = auction.StartPrice,
                StartTime    = auction.StartTime,
                Title        = auction.Title
            };

            _db.Auctions.Add(dbAuction);
            _db.SaveChanges();

            return auction;
        }
    }
}
