using Api.ProductsService.Models;

namespace Api.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(User user);
    }
}