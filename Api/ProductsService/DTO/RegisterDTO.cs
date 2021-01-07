using System.ComponentModel.DataAnnotations;

namespace Api.ProductsService.DTO
{
    public class RegisterDTO
    {
        [Required]
        [MinLength(2)]
        public string Username { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 4)]
        public string Password { get; set; }
    }
}