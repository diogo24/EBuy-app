using EBuy.Api.Helpers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EBuy.Api.Models
{
    public class AuctionEditVM
    {
        public long Id { get; set; }
        [Required, 
            StringLength(50, ErrorMessage = "Title cannot be longer than 50 characters")]
        public string Title { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        [RegularExpression("((\\d+)((\\.\\d{1,3})?))$")]
        [Range(1, 10000, ErrorMessage = "The auction's starting price must be at least 1")]
        public decimal StartPrice { get; set; }
        [Required]
        [RegularExpression("((\\d+)((\\.\\d{1,3})?))$")]
        public decimal CurrentPrice { get; set; }
        [Required]
        [DataType(DataType.DateTime)]
        [DisplayFormat(DataFormatString = DateFormats.DatetimeDisplayFormat, ApplyFormatInEditMode = true)]
        public DateTime StartTime { get; set; }
        [Required]
        [DataType(DataType.DateTime)]
        [DisplayFormat(DataFormatString = DateFormats.DatetimeDisplayFormat, ApplyFormatInEditMode = true)]
        [Range(typeof(DateTime), "1/1/2012", "31/12/9999")]
        public DateTime EndTime { get; set; }
    }
}
