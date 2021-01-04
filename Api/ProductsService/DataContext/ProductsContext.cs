using Api.ProductsService.Models;
using Microsoft.EntityFrameworkCore;

namespace Api.ProductsService.DataContext
{
    public class ProductsContext:DbContext
    {
        public ProductsContext(DbContextOptions options):base(options) {}

        public DbSet<Product> Products {get;set;}
    }
}