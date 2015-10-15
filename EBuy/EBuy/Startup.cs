using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EBuy.Startup))]
namespace EBuy
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
