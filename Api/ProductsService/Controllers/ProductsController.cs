using System.Collections.Generic;
using System.Linq;
using Api.ProductsService.DataContext;
using Api.ProductsService.Models;
using Microsoft.AspNetCore.Mvc;

namespace Api.ProductsService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly ProductsContext _productsContext;

        public ProductsController(ProductsContext productsContext) => _productsContext = productsContext;

        [HttpGet]
        public ActionResult<IEnumerable<Product>> Get() => Ok(_productsContext.Products.ToList());
    }
}