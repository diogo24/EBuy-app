using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EBuy.Api.Helpers
{
    public static class ExceptionHelpers
    {
        /// <summary>
        /// Throws if null for types.
        /// </summary>
        /// <typeparam name="T"></typeparam>
        /// <param name="type">The type.</param>
        /// <param name="name">The name.</param>
        /// <exception cref="System.ArgumentNullException"></exception>
        public static void ThrowIfNull<T>(this T type, string name)
            where T : class
        {
            if (type == null)
                throw new ArgumentNullException(name);
        }
    }
}
