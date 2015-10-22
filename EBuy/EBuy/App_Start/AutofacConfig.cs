using Autofac;
using Autofac.Integration.Mvc;
using EBuy.Api;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EBuy.App_Start
{
    public class AutofacConfig
    {
        //http://autofac.org/
        public static void RegisterContainerBuilder()
        {
            var builder = new ContainerBuilder();

            // You can register controllers all at once using assembly scanning...
            //builder.RegisterControllers(typeof(MvcApplication).Assembly);

            // ...or you can register individual controllers manually.
            // The controllers are in the MvcModule
            builder.RegisterModule(new MVCAutofacModule());
            builder.RegisterModule(new ApiAutofacModule());

            // Set the dependency resolver to be Autofac.
            var container = builder.Build();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
        }
    }
}