using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EBuy.Api.Helpers
{
    public static class DateFormats
    {
        // todo: 
        // Get DateTimeFormats based on culture info
        //CultureInfo.CurrentCulture.DateTimeFormat.

        public static string DateFormat { get { return "dd/MM/yyyy"; } }
        public static string DatetimeFormat { get { return "dd/MM/yyyy HH:mm"; } }
        public static string DatetimeFormatComplete { get { return "dd/MM/yyyy HH:mm:ss"; } }
                
        public const string DateDisplayFormat     = "{0:dd/MM/yyyy}";
        public const string DatetimeDisplayFormat = "{0:dd/MM/yyyy HH:mm}";
        public const string DatetimeDisplayFormatComplete = "{0:dd/MM/yyyy HH:mm:ss}";
    }
}
