using Autofac;
using EBuy.Controllers.EBuy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EBuy.App_Start
{
    public class MVCAutofacModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<AuctionsController>().InstancePerRequest();
        }
    }
}