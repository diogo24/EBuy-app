using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EBuy.Utils
{
    public class SingleSignOnAttribute : ActionFilterAttribute, IActionFilter
    {
        void OnActionExecuted(ActionExecutedContext filterContext)
        {
            // Verify security token and authenticate user
        }
        void OnActionExecuting(ActionExecutingContext filterContext)
        {
        // Preprocessing code used to verify if security token exists
        }
    }
}