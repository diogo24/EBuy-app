//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace EBuy.Model
{
    using System;
    using System.Collections.Generic;
    
    public partial class EpisodeLocations
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public EpisodeLocations()
        {
            this.LocationItems = new HashSet<LocationItems>();
        }
    
        public int Id { get; set; }
        public int LocationID { get; set; }
        public string Description { get; set; }
        public int EpisodeId { get; set; }
        public Nullable<int> Percentage { get; set; }
        public string Items_Description { get; set; }
    
        public virtual Locations Locations { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<LocationItems> LocationItems { get; set; }
        public virtual Episodes Episodes { get; set; }
    }
}
