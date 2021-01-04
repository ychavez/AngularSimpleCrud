using System;
using System.ComponentModel.DataAnnotations;

namespace Api.ProductsService.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }

        public string Code { get; set; }

        public string Description { get; set; }
        public DateTime Expiration { get; set; }
    }
}