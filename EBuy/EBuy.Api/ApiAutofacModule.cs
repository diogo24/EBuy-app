using Autofac;
using EBuy.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EBuy.Api
{
    public class ApiAutofacModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<EbuyDataContext>();

            //RegisterMappings(builder);
            RegisterApi(builder);
        }

        private static void RegisterApi(ContainerBuilder builder)
        {
            builder.RegisterType<AuctionApi>();
        }

    }
}
